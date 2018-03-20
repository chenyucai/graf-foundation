const version = require('../package.json').version
const fs = require('fs')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const progress = require('rollup-plugin-progress')
const filesize = require('filesize')
const uglifyES = require('uglify-es')
const uglifyJS = require('uglify-js')

const banner = `/**
* graf-foundation v${version}
* author: Nic Chan
* https://github.com/chenyucai/graf-foundation.git
*/
`
const inputOptions = {
  entry: 'src/index.js',
  external: ['store'],
  plugins: [
    babel({
      plugins: ['external-helpers']
    }),
    progress()
  ]
}
const uglifyOptions = () => {
  return {
    output: {
      comments: true
    }
  }
}
const targets = [
  {
    name: 'graf-foundation.esm',
    options: {
      banner: banner,
      format: 'es',
      globals: {
        store: 'store'
      }
    },
    uglify: uglifyES
  },
  {
    name: 'graf-foundation.umd',
    options: {
      banner: banner,
      format: 'umd',
      globals: {
        store: 'store'
      },
      moduleName: 'GrafFoundation'
    },
    uglify: uglifyJS
  }
]

rollup.rollup(inputOptions).then(bundle => {
  const size = code => filesize(Buffer.byteLength(code))
  console.info('\nfiles size:')
  targets.forEach(({ name, options, uglify }) => {
    const code = bundle.generate(options).code
    console.info(`${name}.js      ${size(code)}`)
    fs.writeFileSync(`dist/${name}.js`, code, 'utf8')
    const result = uglify.minify(code, uglifyOptions())
    result.error && console.error(result.error)
    console.info(`${name}.min.js  ${size(result.code)}`)
    fs.writeFileSync(`dist/${name}.min.js`, result.code, 'utf8')
  })

  console.info('\nbuild done.')
})
