class Subject{
    constructor(){
        this.observers = {};
    }

    addObserver(eventType, observer, {once = false, priority = 0}={}){
        if(!this.observers[eventType]){
            this.observers[eventType] = [];
        }
        this.observers[eventType].push({ observer, once, priority });
        this.observers[eventType].sort((a, b) => b.priority - a.priority);
    }

    removeObserver(eventType,observer) {
        if(this.observers[eventType]){
            this.observers[eventType] = this.observers[eventType].filter(obs => obs.observer !== observer);
        }
    }

    notifyObservers(eventType,data) {
        this.observers[eventType].forEach(obs => obs.observer.update(data));
    }

    triggerEvent(eventType, data) {
        console.log(`Subject state has changed to: ${data}, for the event ${eventType}`);
        this.notifyObservers(eventType, data);
    }

}

module.exports = Subject;