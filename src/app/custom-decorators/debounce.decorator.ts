import * as _ from 'lodash';

export function Debounce(milliseconds: number = 500): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = _.debounce(original, milliseconds);
    return descriptor;
  };
}
