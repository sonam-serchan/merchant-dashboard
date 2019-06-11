import { observable } from 'mobx';
import { persist } from 'mobx-persist';

export default class AppStore {
    @persist
    @observable token: string | null = null;
}