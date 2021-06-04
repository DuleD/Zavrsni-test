class Navigation {
    get addProfessor () {
        return cy.get('a[href="/professors/create"]')
    }

    clickAddProfessor () {
        this.addProfessor.click({force:true})
    }

    get addGradebook () {
        return cy.get('a[href="/gradebook/create"]')
    }

    clickAddGradebook () {
        this.addGradebook.click()
    }
}

export const navigation = new Navigation