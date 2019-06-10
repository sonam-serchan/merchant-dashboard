import { action, computed, observable, reaction } from 'mobx';

interface ICategory {
    name: string;
    isComplete: boolean;
}

class CategoryStore {
    @observable categoryList: ICategory[] = []

    constructor() {
        reaction(
            () => this.categoryList.filter((todo) => !todo.isComplete),
            (incompletedTasks) => {
                if (incompletedTasks.length > 5) {
                    alert("Dude. You've got too much on your plate.")
                }
            }
        )
    }

    @computed
    get completedTasks(): number {
        return this.categoryList.filter((category) => category.isComplete).length
    }

    @action
    addCategory(category: ICategory) {
        this.categoryList.push(category);
    }
}

export const categoryStore = new CategoryStore()