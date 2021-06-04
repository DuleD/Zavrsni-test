class AddGradeBook {
    get gradeBookName () {
        return cy.get('input#name')
    }

    get selectProf () {
        return cy.get('select[class="mb-4 custom-select"]')
    }

    get submitBtn () {
        return cy.get('button[class="btn btn-submit btn-primary"]')
    }

    clickSubmitBtn () {
        this.submitBtn.click()
    }

}

export const addgradebook = new AddGradeBook