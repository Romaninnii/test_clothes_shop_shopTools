class MyAccountPage {


    username = "#username";
    password = "#password";
    logBtn = "[name=\"login\"]";
    myAccountNavBar = ".woocommerce-MyAccount-navigation"

    logout = "Logout"

    getUserNameField() {
        return cy.get(this.username).clear()
            .should('have.value', '')
    }

    getPasswordField() {
        return cy.get(this.password).clear()
            .should('have.value', '')
    }

    getLogInButton() {
        return cy.get(this.logBtn)
            .should('have.attr', 'type', 'submit')
    }

    getMyAccountNavBar(name) {
        return cy.get(this.myAccountNavBar)
            // .find('li')
            .contains(name)
            .should('be.visible')
    }
}

export default MyAccountPage