const User= require ("../model/userModel")

let emailVarificationOtpMatch = async (req, res) => {
    let {email, randomOtp} = req.body

    let findOtp = await User.find({email})

    if (findOtp.length > 0) {
        if(randomOtp == findOtp[0].randomOtp){
            let removeOtpAfterMatch = await User.findOneAndUpdate(
                        {email}, 
                        {$unset: {randomOtp : ""}},
                        {new: true})
            res.send({succes : "Otp Matched"})
        } else {
            res.send ({error : "Otp Does not matched"})
        }
    }


    console.log(email,randomOtp)
}
module.exports = emailVarificationOtpMatch