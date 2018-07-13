var dog = {
    raining: true,
    noise: "woof!",
    makeNoise: bark()
}

var cat = {
    raining: false,
    noise: "meow!"
    makeNoise: meow()
}

function bark() {
    if (dog.raining === true) {
        console.log(dog.noise);
    }
}

function meow() {
    if (cat.raining === true) {
        console.log(cat.noise);
    }
}

function massHysteria(cat, dog) {
    if (cat.raining === true && dog.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

dog.makeNoise
cat.raining = true;
cat.makeNoise

massHysteria(cat, dog);