const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Name", () => {
    it("returns a name", () => {
      const employee = new Employee("Samson", 1234, "samson.v@tesla.com")
        employee.Name();
        expect(employee.Name).toEqual("Samson")
    });
  });

  describe("ID", () => {
    it("returns the ID number", () => {
      const employee = new Employee("Samson", 1234, "samson.v@tesla.com");
      employee.ID();
      expect(employee.ID).toEqual(123)
    });

  });

  describe("Email", () => {
    it("returns the Email", () => {
        const employee = new Employee("Samson", 1234, "samson.v@tesla.com");
        employee.Email();
        expect(employee.Email).toEqual("samson.v@tesla.com")
    });

  });

    it('should have a role', () => {
      const employee = new Employee('Samson', 1234, 'samson.v@tesla.com');
      employee.Role();
      expect(employee.getRole()).toEqual('Employee');
  })

});