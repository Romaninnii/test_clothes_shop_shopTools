class NavBar {

    navBar = "ul > li"
    myAccount = "My Account"
    myWishlist = "My Wishlist"


    getNavBarButton(name) {
        return cy.get(this.navBar).contains(name)
            .scrollIntoView()
            .should('be.visible')
    }
}

export default NavBar