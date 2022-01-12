const Intern = require('../lib/Intern')

test("should use role() to return \"Intern\"", () => {
    const testValue = "Intern";
    const intern = new Intern("reign", 1, "mob@psycho.com");
    expect(intern.role()).toBe(testValue);
  });

  test("should get school via getSchool()", () => {
    const testValue = "Harvard";
    const intern = new Intern("reign", 1, "mob@psycho.com","Harvard");
    expect(intern.getSchool()).toBe(testValue);
  });
 
  test("should use getName() should return intern's name", () => {
    const testValue = "reign";
    const intern = new Intern("reign", 1, "mob@psycho.com");
    expect(intern.getName()).toBe(testValue);
  });