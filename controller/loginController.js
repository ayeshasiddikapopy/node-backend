const emailValidation = require("../helpers/emailValidation.js")
const User = require("../model/userModel.js")
const bcrypt = require('bcrypt')

let loginController = async (req, res) => {
   let { email, password} = req.body

   if (!email) {
    return res.send({error: "enter a email"})
    } else if (!emailValidation (email)) {
        return res.send ({error: " enter a valid email"})
    } else if (!password) {
        return res.send ({error: "enter a password"})
    } else {
        let isEmailExist = await User.find({email})
       if (isEmailExist.length > 0) {
        bcrypt.compare(password, isEmailExist[0].password).then(function(result) {
            // result == true
            if (result) {
                res.send ({succes : "login succesfull"})
                console.log(isEmailExist)   
                console.log(isEmailExist.email)   
            } else {
                res.send ({error : "password not matched"})
            }
        })
       } else {
         res.send ({error : " email does not matched"})
       }
    }
}

module.exports = loginController