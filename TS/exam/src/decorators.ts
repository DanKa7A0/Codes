export function decorator1<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
        if (typeof args[0] === "number") {
          args[0] = args[0] * 1.2
        }
        super(...args);
      }
    };
}
export function decorator2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}
export function decorator3(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}
export function decorator4(target: Object, propertyKey: string | symbol, parameterIndex: number) {}
export function decorator5<T extends abstract new (...args: any[]) => {} >(constructor: T) {
    abstract class PartialMonthlyMotel extends constructor {
        public static readonly MotelName = "Monthly Motel";
    }

    return PartialMonthlyMotel;
}