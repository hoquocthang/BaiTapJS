class Student {
    name: string
    age: number
    grade: string
    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    displayInfor(): void {
        console.log(`xin chao ${this.name} ${this.age} tuoi lop ${this.grade}`);
        
    }
}
const student = new Student('thang', 15, '10A5');
student.displayInfor()