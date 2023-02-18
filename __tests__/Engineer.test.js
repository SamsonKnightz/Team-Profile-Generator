const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should have a Github', () => {
        const engineer = new Engineer('Samson', 1234, 'samson.v@tesla.com', 'samsonknightz');
        expect(engineer.getGithub()).toEqual('samsonknightz');
    });
    it('should have a role of Engineer', () => {
        const engineer = new Engineer('Samson', 1234, 'samson.v@tesla.com', 'samsonknightz');
        expect(engineer.getRole()).toEqual('Engineer');
    });
});