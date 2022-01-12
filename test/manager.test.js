const Manager = require('../lib/Manager')

test("role() should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager("reign", 1, "mob@psycho.com");
    expect(manager.role()).toBe(testValue);
  });

  test("getting office number via getOfficeNum()", () => {
    const testValue = 500;
    const manager = new Manager("reign", 1, "mob@psycho.com",500);
    expect(manager.getOfficeNum()).toBe(testValue);
  });
 
  test("getName() should return Manager's name", () => {
    const testValue = "reign";
    const manager = new Manager("reign", 1, "mob@psycho.com",500);
    expect(manager.getName()).toBe(testValue);
  });