class PubSub {
    constructor() {
        this.handlers = {};
    }

    subscribe(event, handler) {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);

        function unsubscribe() {
            this.handlers[event] = this.handlers[event].filter(func => func !== handler);
        }

        return unsubscribe.bind(this);
    }

    publish(event, data) {
        if (this.handlers[event]) {
            this.handlers[event].forEach(handler => {
               handler(data);
            });
        }
    }
}

module.exports = new PubSub();