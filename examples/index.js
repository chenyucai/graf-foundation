import {StringUtils, ArrayUtils, StorageUtils, Md5} from '../dist/graf-foundation.esm'
import TestModel from './models/test';

const str = 'i am a string';
console.log(StringUtils.isBlank(str));

const arr = [0, 1, 2];
console.log(ArrayUtils.isNullOrEmpty(arr))
console.log(ArrayUtils.isArray(arr))

StorageUtils.set('test', str);
console.log(StorageUtils.get('test'))

// model
const model = new TestModel();
console.log('原始model:', model);
model.map({
  id: '123456',
  name: 'nic',
  gender: 1
})
console.log('map之后:', model)

console.log('md5:', Md5.hex_md5('123456'))