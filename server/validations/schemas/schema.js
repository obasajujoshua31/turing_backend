import Joi from "joi";
import { errorFormatter } from "../validator";

/**
 * @description Get name validation schema
 *
 * @param {string} label the text to use instead of field name in the error message;
 
 * @returns {string} Instance of JOI validation schema
 * @method getNameSchema
 */
const getNameSchema = label => {
  const exp = /^[\w'\-,.][^0-9_¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  return Joi.string()
    .required()
    .trim()
    .min(2)
    .regex(exp)
    .lowercase()
    .label(label)
    .error(errors => errorFormatter(errors, label));
};

const name = getNameSchema("name");
const email = Joi.string()
  .email()
  .required()
  .trim()
  .label("Email")
  .lowercase();

const password = Joi.string()
  .min(4)
  .required()
  .trim()
  .label("Password")
  .error(errors => {
    return errorFormatter(
      errors,
      "Password",
      "Password must be atleast 4 words"
    );
  });

  const passwordUpdate = Joi.string()
  .min(4)
  .required()
  .trim()
  .label("Password")
  .error(errors => {
    return errorFormatter(
      errors,
      "Password",
      "Password must be atleast 4 words"
    );
  });

const address_2 = Joi.string()
  .allow("")
  .trim()
  .strict()
  .label("address_2");


  const address_1 = Joi.string()
  .required()
  .trim()
  .label("address_1");

  const city = Joi.string()
  .required()
  .min(1)
  .trim()
  .label("city");

  const region = Joi.string()
  .required()
  .min(1)
  .trim()
  .label("region");

  const postal_code = Joi.string()
  .required()
  .min(1)
  .trim()
  .label('postal_code');

  const country = Joi.string()
  .required()
  .min(1)
  .trim()
  .label('country');

  const shipping_region_id = Joi.string()
  .required()
  .min(1)
  .trim()
  .label('shipping_region_id');


  const credit_card = Joi.string()
  .required()
  .min(1)
  .trim()
  .label('credit_card');

  const day_phone = Joi.string()
  .allow('')
  .trim()
  .strict()
  .label('day_phone');

  const eve_phone = Joi.string()
  .allow('')
  .trim()
  .strict()
  .label('eve_phone');

  const mob_phone = Joi.string()
  .allow('')
  .trim()
  .strict()
  .label('mob_phone');


  const rating = Joi.number()
  .integer()
  .min(1)
  .label('rating');

  const review = Joi.string()
  .required()
  .trim()
  .min(1)
  .label('review');


  const cart_id = Joi.string()
  .required()
  .label('cart_id');
  
  const product_id = Joi.number()
  .integer()
  .required()
  .label('product_id');


  const attributes = Joi.string()
    .required()
    .trim()
    .label('attributes');


export const signUpSchema = Joi.object().keys({
  name,
  email,
  password
});

export const signInSchema = Joi.object().keys({
  email: Joi.string()
    .trim()
    .required(),
  password: Joi.string()
    .trim()
    .required()
});

export const updateCustomerProfileBiodataSchema = Joi.object().keys({
  name,
  email,
  password: passwordUpdate,
  mob_phone,
  eve_phone,
  day_phone,
});

export const updateCustomerAddressSchema = Joi.object().keys({
    address_1,
    address_2,
    city,
    region,
    postal_code,
    country,
    shipping_region_id
});

export const updateCustomerCreditCardSchema = Joi.object().keys({
        credit_card
});

export const productReviewSchema = Joi.object().keys({
  review,
  rating
});

export const addShoppingCartSchema = Joi.object().keys({
  cart_id,
  product_id,
  attributes
});
