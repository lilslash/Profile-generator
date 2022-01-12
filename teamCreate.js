const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

function generateCards(team){
    let cards = []
    for(let i=0; i < team.length; i++){
        const answer = team[i];
        switch(answer.role()) {
            case 'Manager':
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNum)
            cards.push(generateManagerCard(manager))
            break;
            case 'Intern':
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
            cards.push(generateInternCard(intern))
            break;
            case 'Engineer':
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
            cards.push(generateEngineerCard(engineer))
            break;
        }
    }
    return cards.join(``)
}

let generateManagerCard = (Manager) => {
    return `<div class="container justify-content-center">
    <div class="row justify-content-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title text-center">${Manager.role()}</h4>
          <h5 class="card-subtitle mb-2 text-muted name">${Manager.getName()}</h5>
          <p class="card-text">ID: ${Manager.getId()}</p>
          <a href="mailto:${Manager.getEmail()}" class="card-link">Email</a>
          <a href="tel:${Manager.getOfficeNum()}" class="card-link">Office Number</a>
        </div>
      </div>
    `
  }
  
  let generateEngineerCard = (Engineer) => {
      return ` <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title text-center">${Engineer.role()}</h4>
        <h5 class="card-subtitle mb-2 text-muted name">${Engineer.getName()}</h5>
        <p class="card-text">ID: ${Engineer.getId()}</p>
        <a href="mailto:${Engineer.getEmail()}" class="card-link">Email</a>
        <a href="${Engineer.getGithub()}" class="card-link">GitHub</a>
      </div>
    </div>`
  }

let generateInternCard = (Intern) => {
    return ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title text-center">${Intern.role()}</h4>
      <h5 class="card-subtitle mb-2 text-muted name">${Intern.getName()}</h5>
      <p class="card-text">ID: ${Intern.getId()}</p>
      <p class="card-text">School:${Intern.getSchool()}</p>
      <a href="mailto:${Intern.getEmail()}" class="card-link">Email</a>
    </div>
  </div>
</div>
</div>`
}

function generateTeam(team) {
    console.log(team);
   return  `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  <title>Profile Generator</title>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <header class="jumbotron jumbotron-fluid ">
    <div class="container-fuild">
      <h1 class="display-1 text-center justify-content-center">My Team</h1>
    </div>
  </header>
  ${generateCards(team)}
  </body>

</html>
  `
}

module.exports = generateTeam