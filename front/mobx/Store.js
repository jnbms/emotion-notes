import { createContext, useContext } from "react";
import Counter from "./Counter";

export class Store {
    Counter;

    constructor(){
        this.Counter = new Counter(this);
    }
}

export const StoreContext = createContext(Store);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

