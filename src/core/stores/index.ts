import { create } from "mobx-persist";
import { categoryStore } from './category';

interface Stores {
    [key: string]: any;
}

export const stores: Stores = {
    categoryStore
}

const hydrate = create({
    storage: localStorage,
    jsonify: true
});

Object.keys(stores).map((val) => hydrate(val, stores[val]))