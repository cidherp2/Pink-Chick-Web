// server route
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51OCqBSIHMJDsY8j8dZq0fUPBDORHladp9fsLACYR66K02tXbkGHDKNTyEwuLRb5TvEXCNXtqNAwNkgDIDEn3m6Ho00oqXTbVRt');

router.post('/create-checkout-session', async (req, res) => {
  const { items, totalPrice } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'mxn',
        product_data: {
          name: item.name,
          // Add other product details as needed
        },
        unit_amount: item.price * 100, // assuming price is in currency subunits (cents)
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://your-website.com/success',
    cancel_url: 'https://your-website.com/cancel',
  });

  res.json({ id: session.id });
});

module.exports = router;
