class Observer{
    constructor (name, subject){
        this.name = name;
        this.subject = subject;
        this.subject.addObserver(this);
    }

    update(data){
        console.log(`${this.name} received update with data: ${data}`);
    }

    unsubscribe(){
        console.log(`${this.name} has unsubscribed.`);
        this.subject.removeObserver(this);
    }
}

module.exports = Observer;