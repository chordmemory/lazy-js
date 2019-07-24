export class Lazy<T>{ 
    private _value: T;
    private getter: () => T;
    constructor(getter: () => T) {
        this.getter = getter;
    }
    get value() {
        if(!this._value) {
            this._value = this.getter();
        }
        return this._value;
    }
};

export default Lazy;