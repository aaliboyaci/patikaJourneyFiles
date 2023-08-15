// action tipleri
export const BUY_PRODUCT = "BUY_PRODUCT";
export const SELL_PRODUCT = "SELL_PRODUCT";

// action yaratıcıları
export const buyProduct = (productId, price) => ({
  type: BUY_PRODUCT,
  payload: { productId, price },
});

export const sellProduct = (productId, price) => ({
  type: SELL_PRODUCT,
  payload: { productId, price },
});
