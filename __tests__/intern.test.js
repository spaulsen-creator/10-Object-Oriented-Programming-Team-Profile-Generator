const Intern = require("../lib/Intern");
test('Can you set the school via constructor', () => {
    const testSchool = 'school'
    const e = new Intern('amy', 1, 'amy@gmail.com', testSchool)
    expect(e.school).toBe(testSchool);
});
test('getRole() returns Intern', () => {
    const testRole = 'Intern'
    const e = new Intern('amy', 1, 'amy@mail.com', 'Intern')
    expect(e.getRole()).toBe(testRole)
});
test('Get the school name()', () => {
    const testSchoolName = 'school'
    const e = new Intern('amy', 1, 'amy@gmail.com', testSchoolName)
    expect(e.getSchool()).toBe(testSchoolName)
});
