import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import WishlistContext from './wishlistcontext';

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage('wishlist',[]);


  function addWistlist(item) {
    let isInWishlist = wishlist.find((i)=>i._id==item._id)
    isInWishlist ? setWishlist(wishlist.filter((i)=>i._id!=item._id)) : setWishlist([...wishlist,item])
  }


  return (
    <WishlistContext.Provider value={{ wishlist,  addWistlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;