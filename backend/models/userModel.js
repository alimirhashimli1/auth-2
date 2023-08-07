const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },    
})

// static signup method
userSchema.statics.signup = async function(email, password) {
    

    const exists = await this.findOne({email})

    if(exists){
        throw Error("The email already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

}


module.exports = mongoose.model("User", userSchema)