class AuthLogin {
    get email () {
        return cy.get('input[id="email"]')
    }

    get password () {
        return cy.get('input[id="userPassword"]')
    }

    get submit () {
        return cy.get('button[class="btn btn-outline-primary"]')
    }

    clickSubmit() {
        this.submit.click()
    }
}

export const authlogin = new AuthLogin