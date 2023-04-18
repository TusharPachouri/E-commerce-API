const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


BuyerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Not an Email')
        }
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

BuyerSchema.pre('save', async function (next) {
    const buyer = this
    if (buyer.isModified('password')) buyer.password = bcrypt.hashSync(buyer.password, 8)
    next()
})

BuyerSchema.methods.toJSON = function () {
    const buyer = this
    const buyer_ = buyer.toObject()
    delete buyer_.password
    delete buyer_.tokens
    return buyer_
}
BuyerSchema.methods.getAuthToken = async function () {
    const buyer = this
    const token = jwt.sign({
        _id: buyer._id.toString()
    }, process.env.buyer_password)
    buyer.tokens = buyer.tokens.concat({
        token
    })
    try {
        await buyer.save()
    } catch (e) {
        throw new Error('unable to generate auth token')
    }
    return token
}
BuyerSchema.statics.FindByCredentials = async function (email, password) {
    buyer = await Buyer.findOne({
        email
    })
    if (!buyer) throw new Error('unable to login')
    isMatch = await bcrypt.compare(password, buyer.password)
    if (!isMatch) throw new Error('unable to login')
    return buyer
}
Buyer = mongoose.model('buyer', BuyerSchema)

module.exports = Buyer