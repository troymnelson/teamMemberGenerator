const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const user2 = new Engineer('Troy', 1, 'test@test.com', 'github.com/troymnelson');
    test('return the correct engineer information', () => {
        

        expect(user2.github).toBe('github.com/troymnelson');
    });

    test('it should return the github str', () => {
        expect(user2.getGithub()).toBe('github.com/troymnelson');
    });

});