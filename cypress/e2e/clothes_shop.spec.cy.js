import MyAccountPage from "../support/PageObject/myAccountPage";
import NavBar from "../support/navBar";
import user from "../fixtures/users/user.json"
import incorrectUser from "../fixtures/users/incorrectUser.json"
import Actions from "../support/ActionObject/actions";
import HeadPage from "../support/PageObject/headPage";
import Verify from "../support/ActionObject/verifyPage";
import product from "../fixtures/product.json"
import CartPage from "../support/PageObject/cart"
import CheckoutPage from "../support/PageObject/checkoutPage";
import billingDetails from "../fixtures/billingDetails.json"
import VerificationRequest from "../support/verificationRequest"



const verificationRequest = new VerificationRequest
const myAccountPage = new MyAccountPage()
const navBar = new NavBar()
const action = new Actions()
const headPage = new HeadPage()
const verify = new Verify()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()


describe('it will test a clothing store, this test check is clothes added to wishlist or cart and check is correctly bought product', () => {
    beforeEach('Open website and hide noticeMessage', () => {
        cy.visit('https://shop.demoqa.com/')
        action.hideNoticeMessage()
        verificationRequest.verifyStatus()
    })

    it('Login User with correct email and password', () => {
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getUserNameField().clear().type(user.name)
        myAccountPage.getPasswordField().clear().type(user.password)
        myAccountPage.getLogInButton().click()
        verificationRequest.verifyIsCorrectUser(user)
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getMyAccountNavBar(myAccountPage.logout).click()
    })

    it('Login User with incorrect email and password.', () => {
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getUserNameField().clear().type(incorrectUser.name)
        myAccountPage.getPasswordField().clear().type(incorrectUser.password)
        myAccountPage.getLogInButton().click()
    })

    it('Get product to wishlist and clear', () => {
        action.findProduct(product)
        headPage.getWishlistBtn().click()
        cy.wait(1000)
        navBar.getNavBarButton(navBar.myWishlist).click()
        verify.isProductAddedToWishlist(product)
        verificationRequest.verifyIsProductAddedToWishlist(product)
        action.clickClearWishlist()
        verify.isWishlistClear()
        verificationRequest.verifyIsWishlistClear(product)
    });

    it('Add product in cart and receive order', () => {
        action.findProduct(product)
        action.selectColorSizeCount(product)
        headPage.getCartBtn().click()
        action.moveToCart()
        verify.isProductAddedToCart(product)
        verificationRequest.verifyIsProductCorrectAddedInCart(product)
        cartPage.getBtnProccedToCheck().click()
        action.fillCheckOutFields(billingDetails)
        checkoutPage.getCheckMark().click()
        checkoutPage.getPlaceOrderBtn().click()
        verify.isOrderReceived()
        verificationRequest.verifyIsOrderReceived(product, billingDetails)
    });
})