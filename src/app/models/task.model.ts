export class Task {
    id?: Number;
    label!: string;
    description!: string;
    category!: string;
    done!: Boolean;

    constructor(data: Object) {
        Object.assign(this, data);
        this.done = false;
    }

    setDone() {
        this.done = !this.done;
    }
}