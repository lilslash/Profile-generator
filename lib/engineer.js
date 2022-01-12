const Members = require('../lib/members')

class Engineer extends Members {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    role() {
        return "Engineer"
    }
}

module.exports = Engineer