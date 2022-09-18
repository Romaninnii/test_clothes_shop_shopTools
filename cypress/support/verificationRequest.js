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
            expect(response.body).to.contain(`</span>${productName.price.old}</span>`)
            expect(response.body).to.contain(`</span>${productName.price.new}</span>`)
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
            expect(response.body).to.contain(`<p>${productName.color}</p>`)
            expect(response.body).to.contain(`<p>${productName.size}</p>`)
            expect(response.body).to.contain(`</span>${productName.price.new}</bdi></span>`)
            expect(response.body).to.contain(`value="${productName.quantity}"`)
            expect(response.body).to.contain(`</span>${productName.total}</bdi></span>`)
        })
    }

    verifyIsOrderReceived(productName, detail) {
        cy.request({
            method: 'GET',
            url: 'https://shop.demoqa.com/checkout/order-received/14793/?key=wc_order_18xuPTsZwlhXe',
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.contain(productName.name)
            expect(response.body).to.contain(`&nbsp;${productName.quantity}`)
            expect(response.body).to.contain('Color:')
                .and.contain(`${productName.color}</p>`)
            expect(response.body).to.contain('Size:') // size
                .and.contain(`<p>${productName.size}</p>`)
            expect(response.body).to.contain('Note:')
                .and.contain(`<td>${detail.notes}</td>`)
        })
    }
}


export default VerificationRequest


