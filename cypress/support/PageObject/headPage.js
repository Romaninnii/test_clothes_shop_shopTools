class HeadPage {

    singleProduct = '.single-product-content'
    prodColor = "#color"
    prodSize = "#size"
    prodCount = ".quantity"
    cartBtn = "[type=\"submit\"]"
    wishlistBtn = ".single_add_to_wishlist"



    getProductColor() {
        return cy.get(this.singleProduct).find(this.prodColor)
            .scrollIntoView()
            .should('be.visible')
    }

    getProductSize() {
        return cy.get(this.singleProduct).find(this.prodSize)
            .scrollIntoView()
            .should('be.visible')
    }

    getProductCountField() {
        return cy.get(this.singleProduct).find(this.prodCount)
            .scrollIntoView()
            .should('be.visible')
    }

    getCartBtn() {
        return cy.get(this.singleProduct).find(this.cartBtn)
            .should('be.visible')
            .scrollIntoView()
    }

    getWishlistBtn() {
        cy.wait(1000)
        return cy.get(this.singleProduct)
            .find(this.wishlistBtn)
            .scrollIntoView()
            .should('be.visible')
    }
}

export default HeadPage