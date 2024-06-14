import SignInPage from "../pages/Auth/SignInPage";
import SignUpPage from "../pages/Auth/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    { 
        path:'/',
        exact: true,
        page : HomePage,
        isShowHeader : true,
    },
    { 
        path:'/order',
        exact: true,
        page : OrderPage,
        isShowHeader : true,
    },
    { 
        path:'/products',
        exact: true,
        page : ProductsPage,
        isShowHeader : true,
    },
    { 
        path:'/type',
        exact: true,
        page : TypeProductPage,
        isShowHeader : true,
    },
    { 
        path:'/sign-in',
        exact: true,
        page : SignInPage,
        isShowHeader : true,
    },
    { 
        path:'/sign-up',
        exact: true,
        page : SignUpPage,
        isShowHeader : true,
    },
    { 
        path:'/products-details',
        exact: true,
        page : ProductDetailsPage,
        isShowHeader : true,
    },
    { 
        path:'*',
        page : NotFound,
    },
]