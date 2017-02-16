import Addresses from '../models/addresses';

// QUESTION: ALSO, IS IT BETTER TO NAME THE FILES ADDRESSESMODEL.JS AND ADDRESSESCONTROLLER.JS?

// QUESTION: ARE THESE THE BASIC FUNCTION: NEW, GET, GETALL, UPDATE, DELETE?
const newAddress = (req, res, next) => {
  return Addresses.create({
    // QUESTION: CAN THESE ALL BE REPLACED WITH REQ.BODY, AND SEQUELIZE WILL FIGURE IT ALL OUT
    street: req.body.street,
    street2: req.body.street2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country
  })
  .then((address) => {
    if (address) {
      res.json(address);
    }
    next();
  }).catch((err) => {
    console.log('error adding address ', err);
  });
};
const getAddress = (req, res, next) => {};
// QUESTION: WOULD WE EVER NEED TO RETRIEVE ALL ADDRESSES?
const getAddresses = (req, res, next) => {};
const updateAddress = (req, res, next) => {};
const deleteAddress = (req, res, next) => {};

export default {
  newAddress,
  getAddress,
  getAddresses,
  updateAddress,
  deleteAddress
};
