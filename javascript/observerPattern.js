class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
    }

    notify(data) {
        this.subscribers.forEach(subscriber => subscriber(data));
    }
}

const observer = new Observer();
observer.subscribe(data => console.log(`Received data: ${data}`));
observer.notify('New event!'); // "Received data: New event!"
