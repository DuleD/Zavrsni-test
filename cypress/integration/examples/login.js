import { authlogin } from '../../pageObjects/loginfill.js'
import { navigation } from '../../pageObjects/navigation.js'
import { addprof } from '../../pageObjects/addprof.js'
import { addgradebook } from '../../pageObjects/addgradebook.js'
const faker = require('faker');

var random = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
}

describe ('Login with valid credentials', () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });

    it ('idemo', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login', (req) => {}).as('validLogin')
        cy.visit('https://gradebook.vivifyideas.com/login')
        authlogin.email.type(Cypress.env('email'))
        authlogin.password.type(Cypress.env('password'))
        authlogin.clickSubmit()

        cy.wait('@validLogin').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it ('add prof', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/professors/create', (req) => {}).as('validCreate')
        cy.wait(2000)
        navigation.clickAddProfessor()

        addprof.name.type(random.randomName)
        addprof.lastname.type(random.randomLastName)
        addprof.clickAddImgBtn()
        cy.wait(2000)
        addprof.imgUrl.type('https://pbs.twimg.com/profile_images/1264985588165468160/EMghtUER_400x400.jpg')
        addprof.clickSubmitBtn()

        cy.wait('@validCreate').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it ('add gradebook', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/gradebooks/store', (req) => {}).as('validAdd')
        cy.wait(2000)
        navigation.clickAddGradebook()

        addgradebook.gradeBookName.type('kakogod');
        let proffName = random.randomName + ' ' + random.randomLastName
        addgradebook.selectProf.select(proffName)
        addgradebook.clickSubmitBtn()

        cy.wait('@validAdd').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(201)
        })
    })

    afterEach(() => {
        cy.saveLocalStorage();
      });
})