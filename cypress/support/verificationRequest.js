class VerificationRequest {
    verifyStatus() {
        cy.request('https://shop.demoqa.com/')
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    }

    verifyIsCorrectUser(user) {
        cy.request({
            methodL: "GET",
            url: "https://shop.demoqa.com/my-account/"
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.contain(user.name)
        })
    }

    verifyIsProductAddedToWishlist(productName) {
        cy.request({
            method: 'GET',
            url: 'https://shop.demoqa.com/wishlist/',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.contain(productName.name)
            expect(response.body).to.contain(productName.price.old)
            expect(response.body).to.contain(productName.price.new)
            expect(response.body).to.contain(productName.status)
        })
    }

    verifyIsWishlistClear(productName) {
        cy.request({
            method: 'GET',
            url: 'https://shop.demoqa.com/wishlist/',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.contain(productName.name)
        })
    }


    verifyIsProductCorrectAddedInCart(productName) {
        cy.request({
            method: 'GET',
            url: 'https://shop.demoqa.com/cart/',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.contain(productName.name)
            expect(response.body).to.contain(productName.color)
            expect(response.body).to.contain(productName.size)
            expect(response.body).to.contain(productName.price.new)
            expect(response.body).to.contain(productName.count)
        })
    }

    verifyIsOrderReceived() {
        cy.request({
            method: 'GET',
            url: 'https://shop.demoqa.com/checkout/order-received/',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    }
}


export default VerificationRequest


