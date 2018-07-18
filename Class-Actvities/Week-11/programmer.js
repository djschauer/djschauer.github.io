function Programmer(name, role, age, language) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.language = language;
    this.info = function(){
        console.log(this.name);
        console.log(this.role);
        console.log(this.age);
        console.log(this.language);
    }
}

var programmerDan = new Programmer("Dan", "Full-Stack Developer", 25, "Javascript");

programmerDan.info();