const Employee = require("./employee"); 

class Manager extends Employee {

    constructor(name, id, officeNumber) {
        super(name, id, name);

        this.officeNumber = officeNumber;
        
    }


    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;