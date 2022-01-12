const Members = require('../lib/members')

class Intern extends Members {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    role() {
        return "Intern"
    }
}

module.exports = Intern