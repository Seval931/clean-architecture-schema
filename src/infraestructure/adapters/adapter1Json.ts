
import { adapter1 } from "./adapterInterfaces/AdapterInterface1";

class Adapter1Console implements adapter1 {

    something: string;
    num: number;
    processThis(inputValues: number): number {
        let newNumber: number = inputValues * this.num;
        return newNumber
    };

    moreStuff(inputValues: number): Object {
        let object: Object = {
            hello: `it's me`,
            thought: `about us for a long (8)`,
            myNumberIs: inputValues
        };
        return object
    };
}