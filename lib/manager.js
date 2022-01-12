const Members = require('../lib/members')

class Manager extends Members {
    constructor(name, id, email, officeNum){
        super(name, id, email)
        this.officeNum = officeNum
    }
    getOfficeNum(){
        return this.officeNum
    }
    role() {
        return "Manager"
    }
}

module.exports = Manager