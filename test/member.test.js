const Members = require('../lib/members')

test("Can instantiate Members instance", () => {
    const member = new Members();
    expect(typeof(member)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Mob";
    const member = new Members(name);
    expect(member.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const member = new Members("reign", testValue);
    expect(member.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "mob@psycho.com";
    const member = new Members("reign", 1, testValue);
    expect(member.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Mob";
    const member = new Members(testValue);
    expect(member.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const member = new Members("reign", testValue);
    expect(member.getId()).toBe(testValue);
  });
  
  test("role() should return \"Members\"", () => {
    const testValue = "Members";
    const member = new Members("reign", 1, "mob@psycho.com");
    expect(member.role()).toBe(testValue);
  });