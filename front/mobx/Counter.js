import { makeObservable, observable } from "mobx";

class Counter {
    Store;
    count = 0;

    // mobx는 arrow funtion이 가능하지 않습니다. 
    increment() { 
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    get double() {
        return this.count * 2;
    }

    constructor(root) {
        // this.count = value;
        this.Store = root;

        makeObservable(this, {
            count: observable
        })
    };

}

export default Counter;