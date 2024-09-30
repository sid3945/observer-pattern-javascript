class Subject{
    constructor(){
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    changeState(data) {
        console.log(`Subject state has changed to: ${data}`);
        this.notifyObservers(data);
    }

}

module.exports = Subject;