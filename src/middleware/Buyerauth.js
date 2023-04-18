const express = require('express')
const jwt = require('jsonwebtoken')
const Buyer = require('../models/buyer')

const BuyerAuth = async (req, res, next) => {
    try {
        const authToken = req.header("Authorization").replace("Bearer", "").trim()
        const decoded = jwt.verify(authToken, process.env.buyer_password)
        const buyer = await Buyer.findOne({ _id: decoded._id, 'tokens.token': authToken })
        req.buyer = buyer
        req.token = authToken
        next()
    } catch (error) {
        res.status(401).send({ error: "unable to authorise" })
    }
}

module.exports = BuyerAuth
