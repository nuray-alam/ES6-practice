class Parent {
    constructor(fatherName) {
        this.fatherName = fatherName;
    }
    display(){
        console.log("Father Name: ",this.fatherName);
    }
}



class Child extends Parent {
    constructor(fatherName,name) {
        super(fatherName);
        this.name = name;
    }
    display(){
        super.display();
        console.log('Baby Name: ', this.name);
    }
}

const baby = new Child('Schwerzegger', 'Arnold');
console.log(baby);

const baby2 = new Child('Hank', 'Tom');
console.log(baby2);
baby2.display();