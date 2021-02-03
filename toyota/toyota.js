class Engine {
    constructor(capacity = 0) {
        this.capacity = capacity;
    }
    display() {
        console.log("Engine capacity:", this.capacity);
    }
}

class Dashboard {
    constructor(size = 0) {
        this.size = size;
    }

    display() {
        console.log("Dashboard size:", this.size);
    }
}

class Car {
    constructor(model, company) {
        this.model = model;
        this.company = company;
    }

    display() {
        console.log("Model:", this.model, "Company:", this.company);
    }
}

class Toyota extends Car {
    constructor(model, company, engine, dashboard) {
        super(model, company);
        this.engine = engine;
        this.dashboard = dashboard;
    }
    display(){
        super.display();
        this.engine.display();
        this.dashboard.display();
    }

}

const engine1 = new Engine(1200);
const dashboard1 = new Dashboard(233);

const toyota1 = new Toyota("supra","toyota",engine1,dashboard1);
toyota1.display();