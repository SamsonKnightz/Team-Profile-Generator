const Intern = require("../lib/Intern");

describe("Intern", () => {

    it('should have a School', () => {
        const intern = new Intern('Samson', 1234, 'samson.v@testla.com', 'UNCC');
        expect(intern.getSchool()).toEqual('UNCC');
    });
    it('should have a role of Intern', () => {
        const intern = new Intern('Samson', 1234, 'samson.v@tesla.com', 'UNCC');
        expect(intern.getJob()).toEqual('Intern');
    });
});