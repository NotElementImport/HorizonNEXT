import { state } from "../horizon/legacy/index"

interface ITodo {
    title: string,
    complete: boolean
}

class Todos {
    private _perpage = 15
    public page = state(0)

    public todos = state<ITodo[]>([])
    public paged = state<ITodo[]>([])

    public add(title: string) {
        this.page.value = 0
        this.todos.value.unshift({
            complete: false,
            title: title
        })
        this.calcPaged()
    }

    public setComplete(index: string) {
        this.todos.value[index].complete = !this.todos.value[index].complete
        this.calcPaged()
    }

    public calcPaged() {
        this.paged.value = this.todos.value.slice(this._perpage * this.page.value, this._perpage)
    }
};

export default new Todos()