function Digipet() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
            thus.hungry = false;
        } else {
            console.log("No thank you! I am full!")
        }
    }
    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("I'm tired, time for bed!")
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("I'm not tired right now. Let's play!");
        }
    }
    this.play = function() {

    }
    this.increaseAge = function(){
        this.age++;
        console.log("It's my Birthday! I am " + this.age " years old! Did you get me a gift human?");
    }
}

var dog = new Digipet();

dog.outside = false;
dog.bark = function() {
    console.log("Woof! Woof!");
}
dog.goOutside = function() {
    if (dog.outside === false) {
        console.log("I love being outside!");
        dog.outside = true;
        dog.bark();
    } else {
        console.log("Human, we are outside! Throw the ball!");
    }
}
dog.goInside = function() {
    if (outside === true) {
        console.log("Do we have to human?");
        dog.outside = false;
    } else {
        console.log("We are already inside human!");
    }
}

var cat = new Digipet();

cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow!");
}
cat.destroyFurniture = function() {
    if (cat.houseCondition === 0) {
        console.log("You should buy some new furniture!");
        cat.meow();
    } else {
    console.log("Scratch! Scratch! Scratch!");
    cat.houseCondition = cat.houseCondition - 10;
    cat.meow();
    cat.bored = false;
    cat.sleepy = true;
    }
}
cat.buyNewFurniture = function() {
    cat.houseCondition = cat.houseCondition + 50;
    cat.meow();
}

console.log(JSON.stringify(dog null ))