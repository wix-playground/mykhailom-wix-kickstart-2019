class EventEmitter {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, func) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }

        this.subscribers[event].push(func);

        return () => {
            this.subscribers[event] = this.subscribers[event].filter(f => f !== func);
        }
    }

    publish(event, ...args) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(func => {
                func(...args);
            });
        }
    }
}

module.exports = new EventEmitter();