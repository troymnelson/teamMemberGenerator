const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set and return properties of manager', () => {
        const user4 = new Manager('Troy', 1, 'test@test.com', 1);

        expect(user4.officeNumber).toBe(1);
    }
)})