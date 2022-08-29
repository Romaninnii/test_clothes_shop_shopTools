class CartPage {

    checkout = ".wc-proceed-to-checkout > .checkout-button"


    getBtnProccedToCheck() {
        return cy.get(this.checkout)
            .scrollIntoView()
            .should('be.visible')
    }
}

export default CartPage