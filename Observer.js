class Observer{
    constructor (name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name} received update with data: ${data}`);
    }

    unsubscribe(subject, eventType){
        console.log(`${this.name} has unsubscribed from ${eventType} event.`);
        subject.removeObserver(eventType, this);
    }
}

module.exports = Observer;