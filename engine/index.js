'use strict';

const _ = require('lodash');
const eventListener = require('./eventEmitter');
const observer = require('./observable');


class Engine {
    constructor(eventListener) {
        this.publishEvent = eventListener.publish.bind(eventListener);
    }
    get errors() {
        return {
            'E100': 'Lack of fuel',
            'E200': 'No ignition',
            'E300': 'Resourse exhausted'
        };
    }

    work() {
        // error happens

        if (_.random(1, 5) === 5) {
            let key = _(this.errors).keys().sample();

            const error = {key: key, value: this.errors[key]};
            this.publishEvent('error', error);

            // The same
            //observer.notify(error);

            return error;
        }
    }
}

class CarComputer {
    constructor(eventListener) {
        this.unsubscribe = eventListener.subscribe('error', this.onError.bind(this));
    }

    onError(error) {
        console.log('CC:', error);
    }
}

class ServiceStation {
    constructor(eventListener) {
        this.unsubscribe = eventListener.subscribe('error', this.onError.bind(this));
    }

    onError(error) {
        console.log('SS:', error);
    }
}


let engine = new Engine(eventListener);
let carComputer = new CarComputer(eventListener);
let serviceStation = new ServiceStation(eventListener);


// The same
// observer.subscribe(carComputer.onError);
// observer.subscribe(serviceStation.onError);

console.log('===============');
console.log('=== NEW RUN ===');
console.log('===============');

for (let i = 0; i < 10; i++) {
    let result = engine.work();

    if (result) {
        console.warn(result);
    }
}