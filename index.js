class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad,
        this.soup = soup,
        this.drink = drink
    }
}

let meal1 = new Breakfast('Eggs and Bacon', 'Orange Juice')
console.log(meal1.food)

meal1;

class Cat {
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    speak(){
        return this.name + 'says meow'
    }
}

let garfield = new Cat('Garfield', 'male')

console.log(garfield.name);
garfield.speak();

function displayName(name){
    console.log('works')
}

displayName(garfield)
garfield.speak()