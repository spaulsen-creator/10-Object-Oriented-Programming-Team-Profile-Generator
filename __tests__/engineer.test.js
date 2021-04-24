const Engineer = require("../lib/Engineer");
 test('Can you retrieve GitHub from constructor',() => {
    const testGithub = 'githubname'
    const e = new Engineer('brian', 1, 'brian@gmail.com', testGithub)
    expect(e.gitHub).toBe(testGithub);
 });
 test('getRole() returns Engineer', () =>{
     const testRole = 'Engineer'
     const e = new Engineer('brian', 1, 'brian@gmail.com', 'githubname')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the githubusername vis getHub()', () =>{
     const testUsername = 'githubname'
     const e = new Engineer('brian', 1, 'brian@gmail.com', testUsername)
     expect(e.getGitHub()).toBe(testUsername)
 });