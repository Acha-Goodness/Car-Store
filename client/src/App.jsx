import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import VerifyOtp from "./pages/auth/verifyOtp";
import ForgotPass from "./pages/auth/forgotPass";
import ResetPass from "./pages/auth/resetPass";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import NotFound from "./pages/not-found";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import { toast } from "sonner";
import { MoonLoader } from 'react-spinners';
// import Header from "./components/shopping-view/header";

function App() {
  const { user, isAuthenticated, isLoading} = useSelector( (state) => state.auth)
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(checkAuth())
    .then((res) => {
      if(res?.payload?.status === "success"){
        toast(res.payload.message)
      }else if(res?.error?.message === "Rejected"){
        throw new Error(res.payload || "Authentication failed");
      }else{
        throw new Error("Authentication Failed")
      }
    }).catch((err) => {
      toast(err.message)
    })
  }, [dispatch]);


  return (
    <>
    {
      isLoading ? 
      (
        <div>
          <MoonLoader color="#000000" size={20} /> 
        </div> 
      )
        :  
      (
        <div className="flex flex-col overflow-hidden bg-white">
          {/* COMMON COMPONENT */}
          {/* {
            location.pathname.includes("auth") ? <></> :
            <Header/>
          } */}
          <Routes>
              <Route path="/auth" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AuthLayout/>
                </CheckAuth>
              }>
                  <Route path="login" element={<AuthLogin/>}/>
                  <Route path="register" element={<AuthRegister/>}/>
                  <Route path="verifyOtp" element={<VerifyOtp/>}/>
                  <Route path="forgotPassword" element={<ForgotPass/>}/>
                  <Route path="resetPassword" element={<ResetPass/>}/>
              </Route>
              <Route path="/admin" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AdminLayout/>
                </CheckAuth>
                }>
                  <Route path="dashboard" element={<AdminDashboard/>}/>
                  <Route path="products" element={<AdminProducts/>}/>
                  <Route path="orders" element={<AdminOrders/>}/>
                  <Route path="features" element={<AdminFeatures/>}/>
              </Route>
              <Route path="/shop" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <ShoppingLayout/>
                </CheckAuth>
                }>
                  <Route path="home" element={<ShoppingHome/>}/>
                  <Route path="listing" element={<ShoppingListing/>}/>
                  <Route path="checkout" element={<ShoppingCheckout/>}/>
                  <Route path="account" element={<ShoppingAccount/>}/>
              </Route>
              <Route path="/unauth-page" element={<UnauthPage/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      )
    }
    </>
  )
}

export default App;
