const emailValidation = require("../helpers/emailValidation.js")
const User = require("../model/userModel.js")
const bcrypt = require('bcrypt')
const otpTemplate = require ("../helpers/otpTemplate.js")
const sendEmail = require ("../helpers/sendEmail.js")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");


let registrationController = async (req, res) => {

    // res.send("ami auth route")

    const {fullName, email, password, avatar, facebookId, linkedinId} = req.body


    //condition 
    if (!fullName) {
       return res.send({error:"enter a name"})
    } else if (!email) {
        return res.send({error: "enter a email"})
    } else if (!emailValidation (email)) {
        return res.send ({error: " enter a valid email"})
    } else if (!password) {
        return res.send ({error: "enter a password"})
    } else {
        
        let duplicateEmail = await User.find({email:email})
       
        if (duplicateEmail.length > 0) {
           return res.send({error:"email already exist"})
        }
   
        bcrypt.hash(password, 10,async function(err, hash) {

           const user = new User({
            fullName,
            email,
            password : hash,
            avatar,
            facebookId,
            linkedinId
           })

           user.save()

           const generator2 = aleaRNGFactory(Date.now());
           let randomNumber = generator2.uInt32().toString().substring(0,5)
           
           let randomOtpStore = await User.findOneAndUpdate(
            {email}, 
            {$set: {randomOtp :randomNumber}},
            {new: true})

            sendEmail (email , randomOtpStore.randomOtp, otpTemplate)

            // random otp code deleted portion-->>

            // setTimeout( async function(){
            //     console.log("OTP deleted")
            //     let randomOtpStore = await User.findOneAndUpdate(
            //         {email}, 
            //         {$unset: {randomOtp : ""}},
            //         {new: true})
            // },30000)

            res.send({success :"registration succes, please check your email"})
        });
    }

}

module.exports = registrationController
