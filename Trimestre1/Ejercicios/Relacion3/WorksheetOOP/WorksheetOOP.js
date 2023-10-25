// TASK 1
class persona{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.stomatch=[];
    }
    eat(food){
        this.stomatch.push(food);
    }
    toString(){
        return this.name+", "+this.age;
    }
}
// TASK 2
class car{
    constructor(model,milesPerGallon){
        this.model=model;
        this.milesPerGallon=milesPerGallon;
        this.tank=0;
        this.odometer=0;
    }
    fill(gallons){
        this.tank+=gallons;
    }
    drive(distance){
        var salir=true;
        for (let i = 0; i < distance && salir; i++) {
            if (this.tank>0) {
                this.odometer++;
                this.tank--;
            }else{
                salir=false;
            }
        }
        if (!salir) {
            return "I ran out of fuel at "+this.odometer+" miles"
        }
    }
}
// TASK 3
class lambdasian{
    constructor(name,age,location){
        this.name=name;
        this.age=age;
        this.location=location;
    }
    speak(){
        return "Hello my name is "+this.name+", I am from "+this.location
    }
}
// TASK 4
class instructor extends lambdasian{
    constructor(){
        super();
        this.specialty="redux";
        this.favLanguage="JavaScript, Python, Elm, etc.";
        this.catchPhrase="Don't forget the homies"
    }
    demo(subject){
        return "Today we are learning about "+subject;
    }
    grade(student,subject){
        return student+" receives a perfect score on "+subject;
    }
}
// TASK 5
class student extends lambdasian{
    constructor(previousBackground){
        super();
        this.previousBackground=previousBackground;
        this.className="CS132";
        this.favSubjects=["HTML","CSS","JS"];
    }
    listSunjects(){
        var resultado="Loving ";
        for (let i = 0; i < this.favSubjects.length; i++) {
            
            if (i==this.favSubjects.length-1) {
                resultado+= this.favSubjects[i];
            }else{
                resultado+= this.favSubjects[i] + ", ";
            }
            
        }
        return resultado+"!"
    }
    PRAssigment(subject){
        return this.name+" has submmited a PR for "+subject;
    }
    sprintChallenge(subject){
        return this.name+" has begun sprint challenge on "+subject;
    }
}
// TASK 6
class projectManager extends instructor{
    constructor(){
        super();
        this.gradClassName="CS1";
        this.favInstructor="Sean";
    }
    
}