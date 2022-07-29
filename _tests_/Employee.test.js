const Employee = require('../lib/Employee');

describe('Employee', () => {
    const user1 = new Employee('Troy', 1, 'test@test.com');
    test('constructor should set and return data in employee object', () => {

        expect(user1.name).toBe('Troy');
        expect(user1.emp_id).toBe(1);
        expect(user1.email).toBe('test@test.com');
    });

    test('if we can get the name from the user1 object', () => {
        expect(user1.getName()).toBe('Troy');
    });

    test('if we can get the id from the user1 object', () => {
        expect(user1.getEmpId()).toBe(1);
    });

    test('if we can get the email from the user1 object', () => {
        expect(user1.getEmail()).toBe('test@test.com');
    });
})

