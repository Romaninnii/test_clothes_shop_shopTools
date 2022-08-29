class CheckoutPage {

    firstName = "#billing_first_name"
    lastName = "#billing_last_name"
    companyName = "#billing_company"
    countryRegion = "#select2-billing_country-container"
    streetAddressHouse = "#billing_address_1"
    streetAddressApartment = "#billing_address_2"
    townCity = "#billing_city"
    province = "#select2-billing_state-container"
    pinCode = "#billing_postcode"
    phone = "#billing_phone"
    email = "#billing_email"
    notes = "#order_comments"
    checkMark = "#terms"
    placeOrderBtn = "#place_order"


    getFirstNameField() {
        return cy.get(this.firstName).scrollIntoView()
            .should('be.visible')
    }

    getLastNameField() {
        return cy.get(this.lastName).scrollIntoView()
            .should('be.visible')
    }

    getCompanyNameField() {
        return cy.get(this.companyName).scrollIntoView()
            .should('be.visible')
    }

    getCountryRegionField() {
        return cy.get(this.countryRegion).scrollIntoView()
            .should('be.visible')
    }

    getStreetAddressHouseField() {
        return cy.get(this.streetAddressHouse).scrollIntoView()
            .should('be.visible')
    }

    getStreetAddressApartmentField() {
        return cy.get(this.streetAddressApartment).scrollIntoView()
            .should('be.visible')
    }

    getTownOrCityField() {
        return cy.get(this.townCity).scrollIntoView()
            .should('be.visible')
    }

    getPostalCodeField() {
        return cy.get(this.pinCode).scrollIntoView()
            .should('be.visible')
    }

    getPhoneField() {
        return cy.get(this.phone).scrollIntoView()
            .should('be.visible')
    }

    getEmailAddressField() {
        return cy.get(this.email).scrollIntoView()
            .should('be.visible')
    }

    getOrderNotesField() {
        return cy.get(this.notes).scrollIntoView()
            .should('be.visible')
    }

    getCheckMark() {
        return cy.get(this.checkMark).scrollIntoView()
            .should('be.visible')
    }

    getPlaceOrderBtn() {
        return cy.get(this.placeOrderBtn).scrollIntoView()
            .should('be.visible')
    }

}

export default CheckoutPage