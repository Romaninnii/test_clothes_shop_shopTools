class Verify {

    cartItem = ".cart_item"
    emptyWishlist = ".wishlist-empty"
    wishList = ".wishlist-items-wrapper"
    productName = ".product-name"
    productAmount = ".woocommerce-Price-amount"
    productPrice = ".product-price"
    productStatus = ".product-stock-status"
    productQuantity = ".noo-quantity-attr"
    productTotal = ".product-subtotal"


    orderMessage = "Thank you. Your order has been received."
    clearEmpty = "No products added to the wishlist"

    isWishlistClear() {
        cy.get(this.emptyWishlist)
            .scrollIntoView()
            .should('contain.text', this.clearEmpty)
    }

    isProductAddedToWishlist(productName) {
        cy.get(this.wishList)
            .scrollIntoView()
        cy.get(this.productName)
            .should('contain.text', productName.name)
            .and('be.visible')
        cy.get(this.productAmount)
            .should('be.visible')
        cy.get(this.productStatus)
            .should('contain.text', productName.status)
            .and('be.visible')
    }

    isProductAddedToCart(productName) {
        cy.get(this.cartItem)
            .scrollIntoView()
        cy.get(this.productName)
            .should('contain.text', productName.name)
            .and('be.visible')
        cy.get(this.productPrice)
            .should('be.visible')
        cy.get(this.productQuantity)
            .and('be.visible')
        cy.get(this.productTotal)
            .and('be.visible')
    }

    isOrderReceived() {
        cy.get('.noo-checkout-complete')
            .scrollIntoView()
            .should('contain.text', this.orderMessage)
    }

}

export default Verify