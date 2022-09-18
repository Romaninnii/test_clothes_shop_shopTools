import CheckoutPage from "../PageObject/checkoutPage";
import HeadPage from "../PageObject/headPage";


const headPage = new HeadPage()
const checkoutPage = new CheckoutPage()


class Actions {

    noticeMessage = ".woocommerce-store-notice"
    cart = ".cart-item"
    productRemove = ".remove"
    wishlist = ".wishlist-items-wrapper"
    searchCountry = ".select2-search__field"
    searchField = {
        close: ".noo-search",
        open: "[type=\"search\"]"
    }
    select = ".select2-results"

    hideNoticeMessage() {
        cy.get(this.noticeMessage)
            .contains('Dismiss')
            .click()
            .should('not.be.visible')
    }

    moveToCart() {
        cy.get(this.cart)
            .scrollIntoView()
            .should('be.visible')
            .click()
    }

    findProduct(productName) {
        cy.get(this.searchField.close)
            .should('be.visible')
            .type(productName.name)
        cy.get(this.searchField.open)
            .should('be.visible')
            .click()
            .type('{enter}')
    }

    clickClearWishlist() {
        cy.get(this.wishlist)
            .scrollIntoView()
            .find(this.productRemove)
            .should('be.visible')
            .click()
    }

    selectColorSizeCount(productName) {
        headPage.getProductColor().select(productName.color)
        headPage.getProductSize().select(productName.size)
        headPage.getProductCountField().clear().type(productName.quantity)
    }


    fillCheckOutFields(detail) {
        checkoutPage.getFirstNameField().type(detail.firstName)
        checkoutPage.getLastNameField().type(detail.lastName)
        checkoutPage.getCompanyNameField().type(detail.companyName)
        checkoutPage.getCountryRegionField().click()
            .get(this.searchCountry).type(detail.country).get(this.select).click()
        checkoutPage.getStreetAddressHouseField().type(detail.addressHouse)
        checkoutPage.getStreetAddressApartmentField().type(detail.addressApartment)
        checkoutPage.getTownOrCityField().type(detail.town)
        checkoutPage.getPostalCodeField().type(detail.postalCode)
        checkoutPage.getPhoneField().type(detail.phone)
        checkoutPage.getEmailAddressField().type(detail.emailAddress)
        checkoutPage.getOrderNotesField().type(detail.notes)
    }
}

export default Actions