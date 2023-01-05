const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Name", () => {
    it("returns a name", () => {
      const employee = new Engineer("Samson", 1234, "samson.v@tesla.com")
        engineer.Name();
        expect(engineer.Name).toEqual("Samson")
    });
  });

  describe("ID", () => {
    it("returns the ID number", () => {
      const employee = new Engineer("Samson", 1234, "samson.v@tesla.com");
      engineer.ID();
      expect(engineer.ID).toEqual(123)
    });

  });

  describe("Email", () => {
    it("returns the Email", () => {
        const employee = new Engineer("Samson", 1234, "samson.v@tesla.com");
        engineer.Email();
        expect(engineer.Email).toEqual("samson.v@tesla.com")
    });
  });
});

