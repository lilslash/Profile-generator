const Engineer = require('../lib/Engineer')

test("should use role() to return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("reign", 1, "mob@psycho.com");
    expect(engineer.role()).toBe(testValue);
  });

  test("should get GitHub via getGithub()", () => {
    const testValue = "https://github.com/";
    const engineer = new Engineer("reign", 1, "mob@psycho.com","https://github.com/");
    expect(engineer.getGithub()).toBe(testValue);
  });
 
  test("should use getName() should return intern's name", () => {
    const testValue = "reign";
    const engineer = new Engineer("reign", 1, "mob@psycho.com");
    expect(engineer.getName()).toBe(testValue);
  });