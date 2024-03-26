let var_number = 12
let var_string = 12

// let var_number='string'


class User{
    name;
    age;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet():{
        return 'Hello, '+ this.name;
    }
}

let bob:User=new User('bob',12)



let message=bob.greet
document.querySelector('h1')?.innerText=message