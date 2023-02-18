const Manager = require("../lib/Manager");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should have an officeNumber', () => {
        const manager = new Manager('Samson', 1234, 'samson.v@tesla.com', 124);
        expect(manager.getOfficeNumber()).toEqual('1234');
    });
    it('should have a role of Manager', () => {
        const manager = new Manager('Guy', 1234, 'fun@guy.com', 124);
        expect(manager.getJob()).toEqual('Manager');
    });
});