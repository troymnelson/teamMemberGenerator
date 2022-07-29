class Employee {
    constructor(name, emp_id, email) {
        this.name = name;
        this.emp_id = emp_id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmpId() {
        return this.emp_id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;