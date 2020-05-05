class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.location = location;
        this.age = age;
    }

    getGreeting() {
        return `hi i am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old`
    }
}

class Student extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    hasMajor() {
        return !!this.subject;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description +=` major is ${this.subject}`
        }
        return description;
    }
}

const me = new Student('bhavya', '26', 'computer science');
console.log(me.getDescription());

const me1 = new Student();
console.log(me1.getDescription());
