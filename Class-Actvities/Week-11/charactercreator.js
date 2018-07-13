function Character(name, profession, gender, race, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.race = race;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.stats = function() {
        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.race);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitPoints);
    }
}

var aragorn = new Character("Aragorn", "Ranger", "Male", "Man", "87", "100", "85");
var legolas = new Character("Legolas", "Archer", "Male", "Elf", "2931", "115", "75");
var gimli = new Character("Gimli", "Warrior", "Male", "Dwarf", "139", "85", "150");

aragorn.stats();
legolas.stats();
gimli.stats();