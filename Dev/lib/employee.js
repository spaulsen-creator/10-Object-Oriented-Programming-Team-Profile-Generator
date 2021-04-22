class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        return this.name;
    }

    //does not like ID property here- rename this.id = id as well
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}
module.exports = Employee;