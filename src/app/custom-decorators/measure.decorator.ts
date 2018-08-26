export function Measure(): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const start = performance.now();
    descriptor.value.apply(this);
    const end = performance.now();
    console.log(`Call to ${propertyKey} took ${(end - start).toFixed(3)} milliseconds.`);

    return descriptor;
  };
}

// export function Measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//
//   descriptor.value = function (...args) {
//     const start = performance.now();
//     originalMethod.apply(this, args);
//     const end = performance.now();
//     console.log(`Call to ${propertyKey} took ${(end - start).toFixed(2)} milliseconds.`);
//   };
//
//   return descriptor;
// }