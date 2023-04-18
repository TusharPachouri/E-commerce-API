const express = require('express')
const jwt = require('jsonwebtoken')
const Seller = require('../models/seller')

const SellerAuth = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "").trim()
    const decoded = jwt.verify(authToken, process.env.seller_password)
    const seller = await Seller.findOne({ _id: decoded._id, 'tokens.token': authToken })
    if (!seller) throw new Error()
    req.seller = seller
    req.token = authToken
    next()
  } catch (error) {
    res.status(401).send({ error: "Unable to authorize seller." })
  }
}

module.exports = SellerAuth
