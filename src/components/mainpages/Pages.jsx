import React from 'react'
import {Route, Switch} from "react-router-dom";
import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import NotFound from "./utils/not_found/NotFound";
import ProductDetail from "./product_detail/ProductDetail";
import Profile from "./account/profile/Profile";
import Address from "./account/address/Address";
import AddressController from "./account/address/address_controller/AddressController";
import Favorite from "./account/favorites/Favorite";
import Orders from "./account/order/Orders";
import OrderDetail from "./account/order/order_controller/OrderDetail";
import Cart from "./cart/Cart";
import CheckOut from "./cart/checkout/CheckOut";
import Upload from "./upload/Upload";
import Thankyou from "./utils/thankyou/Thankyou";


function Pages() {
    return (
        <Switch>
            <Route path={["/products", "/"]} exact component={Products} />
            <Route path={"/products/brand/:id"} exact component={Products} />
            <Route path={"/products/category/:id"} exact component={Products} />
            <Route path="/product/detail/:id" exact component={ProductDetail} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/account/profile" exact component={Profile} />
            <Route path="/account/address" exact component={Address} />
            <Route path="/account/address/create" exact component={AddressController} />
            <Route path="/account/address/update/:id" exact component={AddressController} />
            <Route path="/account/favorites" exact component={Favorite} />
            <Route path="/account/orders" exact component={Orders} />
            <Route path="/account/orders/:id" exact component={OrderDetail} />
            <Route path="/account/checkout/success" exact component={Thankyou} />
            <Route path="/upload" exact component={Upload} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/cart/checkout" exact component={CheckOut} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages