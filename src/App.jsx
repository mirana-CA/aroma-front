import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./layout/mainlayout";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Basket from "./pages/basket";
import NoPage from "./pages/nopage";
import Admin from "./admin/admin";
import Adminadd from "./admin/adminadd";
import Adminupdate from "./admin/adminupdate";
import Admindetails from "./admin/admindetails";
import Details from "./pages/details";
import WishlistProvider from "./contex/wishlist/wishlistprovider";
import BasketProvider from "./contex/basket/basketprovider";

function App() {
  return (
    <>
      <WishlistProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="basket" element={<Basket />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="*" element={<NoPage />} />
              </Route>
              <Route>
                <Route path="admin" element={<Admin />} />
                <Route path="adminadd" element={<Adminadd />} />
                <Route path="adminupdate/:id" element={<Adminupdate />} />
                <Route path="admindetails/:id" element={<Admindetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </WishlistProvider>
    </>
  );
}

export default App;
