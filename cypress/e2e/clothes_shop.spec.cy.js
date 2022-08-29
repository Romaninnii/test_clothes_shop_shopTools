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


const myAccountPage = new MyAccountPage()
const navBar = new NavBar()
const action = new Actions()
const headPage = new HeadPage()
const verify = new Verify()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()


describe('it will test UI in website', () => {
    beforeEach('Open website', () => {
        cy.visit('https://shop.demoqa.com/')
        action.hideNoticeMessage()
    })

    it('Login User with correct email and password', () => {
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getUserNameField().clear().type(user.name)
        myAccountPage.getPasswordField().clear().type(user.password)
        myAccountPage.getLogInButton().click()
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getMyAccountNavBar(myAccountPage.logout).click()
    })

    it('Login User with incorrect email and password.', () => {
        navBar.getNavBarButton(navBar.myAccount).click()
        myAccountPage.getUserNameField().clear().type(incorrectUser.name)
        myAccountPage.getPasswordField().clear().type(incorrectUser.password)
        myAccountPage.getLogInButton().click()
    })

    it('Get product to wishlist ', () => {   ///доробити
        action.findProduct(product.name)
        headPage.getWishlistBtn().click()
        cy.wait(1000)
        navBar.getNavBarButton(navBar.myWishlist).click()
        verify.isProductAddedToWishlist(product)
        action.clickClearWishlist()
        verify.isWishlistClear()
    });

    it('Add product in cart', () => {
        action.findProduct(product.name)
        action.selectColorSizeCount(product)
        headPage.getCartBtn().click()
        action.moveToCart()
        verify.isProductAddedToCart(product)
        cartPage.getBtnProccedToCheck().click()
        action.fillCheckOutFields(billingDetails)
        checkoutPage.getCheckMark().click()
        checkoutPage.getPlaceOrderBtn().click()
        verify.isOrderReceived()
    });
})