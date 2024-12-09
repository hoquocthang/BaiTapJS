class Employee {

    name: string
    position: string
    salary: number

    constructor(name: string, position: string, salary: number) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`
    }
}
class Manager extends Employee {
    teamId: string
    constructor(name: string, position: string, salary: number, teamId: string) {
        super(name, position, salary)
        this.teamId = teamId
    }
    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}, Team: ${this.teamId}`
    }
}
class Developer extends Employee {
    language: string
    constructor(name: string, position: string, salary: number, language: string) {
        super(name, position, salary)
        this.language = language
    }
    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}, Language: ${this.language}`
    }
}
const employee: Employee[] = [
    new Developer('thang', 'developer', 2000, 'js'),
    new Manager('thang', 'manager', 2000, '01'),
    new Employee('thang', 'manager', 2000)
]
employee.forEach(employee => {
    console.log(employee.getDetails());
});




