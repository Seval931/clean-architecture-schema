import { adapter1 } from "./adapterInterfaces/AdapterInterface1";

class Adapter1Console implements adapter1 {

    something: string;
    num: number;
    processThis(inputValues: number): number {
        let newNumber: number = inputValues * this.num;
        return newNumber
    };

    moreStuff(inputValues: number): string {
        let newStr: string = this.something + inputValues;
        return newStr
    };
}