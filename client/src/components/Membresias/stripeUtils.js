export const item1 = {
  // plata
  price: "price_1N8zQSIF7SQaSdDexfBNh65b",
  quantity: 1,
};

export const item2 = {
  // oro
  price: "price_1N8zS7IF7SQaSdDeg8Dzyzsg",
  quantity: 1,
};

export const item3 = {
  // platinum
  price: "price_1N8zTZIF7SQaSdDestVPhNAn",
  quantity: 1,
};

export const checkoutOptions1 = {
  lineItems: [item1],
  mode: "subscription",
  successUrl: `${window.location.origin}/succes`,
  cancelUrl: `${window.location.origin}/cancel`,
};

export const checkoutOptions2 = {
  lineItems: [item2],
  mode: "subscription",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
};

export const checkoutOptions3 = {
  lineItems: [item3],
  mode: "subscription",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
};
