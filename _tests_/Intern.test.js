const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should set and return intern information', () => {
        const user3 = new Intern('Troy', 1, 'test@test.com', 'UofM');

        expect(user3.school).toBe('UofM');
    })
})