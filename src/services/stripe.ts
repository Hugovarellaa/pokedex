import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version: "^8.174.0"
  },
});
