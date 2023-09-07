//constructor = a special method of a class
//static = belongs to the class not the objects

class Student{
    static numberOfStudents = 0;
    constructor(name = "default",age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        Student.numberOfStudents += 1;
    }

    static startExam(){
        console.log("3....2....1....Go!");
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("sumukh");
student1.study();

console.log(Student.numberOfStudents);
Student.startExam();