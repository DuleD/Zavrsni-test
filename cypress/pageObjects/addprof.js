class AddProf {
    get name () {
        return cy.get('input[id="input-default"]')
    }

    get lastname () {
        return cy.get('input[id="input-default1"]')
    }

    get addImgBtn () {
        return cy.get('button[class="btn btn-image btn-primary"]')
    }

    clickAddImgBtn () {
        this.addImgBtn.click()
    }

    get imgUrl () {
        return cy.get('.form-group > div[role="group"]  .form-control')
    }

    get submitBtn () {
        return cy.get('button[class="btn btn-secondary"]')
    }

    clickSubmitBtn () {
        this.submitBtn.click()
    }
}

export const addprof = new AddProf