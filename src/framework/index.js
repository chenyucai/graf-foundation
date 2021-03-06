/**
 * model基类
 * @function map - 数据映射方法
 * @function _checkEmpty - 检查空值
 * @function _getTypeOfValue - 获取属性类型
 */
export class RCModel {
  map(json) {
    let checkers = this.constructor.__checkers__;
    for (let i in this) {
      if (!this.hasOwnProperty(i)) return;

      if (checkers && checkers[i] && json[i]) {
        // 数据检查类型
        if (checkers[i].type !== this._getTypeOfValue(json[i])) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`${this.constructor.name}的属性${i}传入参数类型不对`);
          }
        }
      }
      if (json.hasOwnProperty(i) && json[i] !== undefined) {
        this[i] = json[i];
      }
    }
    return this;
  }

  _getTypeOfValue(val) {
    if (typeof val === 'object') {
      return Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object';
    }
    return typeof val;
  }

  _checkEmpty(model, key, val) {
    let type = typeof val;
    let warn = () => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${model}的属性${key}值不能为空`);
      }
    };
    let methods = {
      string: function () {
        val.replace(/(^\s*)|(\s*$)/g, '') === '' ? warn() : null;
      },
      number: function () {
        (val === undefined || val === null || isNaN(val)) ? warn() : null;
      },
      object: function () {
        (!val.length || val.length === 0) ? warn() : null;
      }
    };
    methods[type]();
  }
}

/**
 * 检验model的属性
 * @param type - 参数类型
 * @returns {Function}
 * @constructor
 */
export function Check(type) {
  return function (target, name, descriptor) {
    // let v = descriptor.initializer && descriptor.initializer.call(this);

    /** 将属性名字以及需要的类型的对应关系记录到类的原型上 */
    if (!target.constructor.__checkers__) {
      // 将这个隐藏属性定义成 not enumerable，遍历的时候是取不到的。
      Object.defineProperty(target.constructor, '__checkers__', {
        value: {},
        enumerable: true,
        writeable: true,
        configurable: true
      });
    }
    target.constructor.__checkers__[name] = {
      type: type
    };

    return {
      ...descriptor,
      configurable: true
    }
  }
}

/**
 * 参数类型
 * @type {{String: string, Number: string, Object: string, Array: string}}
 */
export const CheckType = {
  String: 'string',
  Number: 'number',
  Object: 'object',
  Array: 'array'
};

