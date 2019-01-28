class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(...args) {
        this.observers.forEach(observer => {
            observer(...args);
        })
    }
}

module.exports = new Observable();