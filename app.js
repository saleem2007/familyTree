// The Royal Family Christopher Dodd and Sylvia Dodd
class Family {

    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
        
    }

    childOf() {
        return ("This child parent's are :" + this.parents);

    }


}

// This is the Son
class George extends Family {

    constructor(name, parents) {
        super(name, parents);
        
    }

   
}

// This is the Grandson
class Abraham extends Family {

    constructor(name, parents) {
        super(name, parents);
        
    }
    
 
}

// This is the great Grandson
class William extends Family {

    constructor(name, parents) {
        super(name, parents);
    }
   

}

const son = new Family("George Dodd", ["Father: Christopher Dodd", "Mother: Sylvia Dodd"]);
const grandSon = new Family("Abraham Dodd", ["Father: George Dodd", "Mother: Katherine Dodd"]);
const greatGrandSon = new Family("William Dodd", ["Father: Abraham Dodd", "Mother: Elizabeth Dodd"]);

console.log(son);
console.log(son.childOf());



