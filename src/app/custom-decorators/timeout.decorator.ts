
export function Timeout(milliseconds: number = 500): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    setTimeout(() => {
      descriptor.value.apply(this);
    }, milliseconds);

    return descriptor;
  };
}
