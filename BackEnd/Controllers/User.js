const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('./../config')
const bcrypt = require('bcryptjs');

//---------------------------------------REGISTER USER------------------------------------
exports.signup = async (req,resp,next) =>
{
    const { firstName,lastName,email,password } = req.body
    const user = await User.findOne({ email })
    if (user)
        return resp.status(403).json({ error: { message: 'Email already in use!' } })

    const newUser = new User({ firstName,lastName,email, password });
    try 
    {
        await newUser.save();
        // const token = getSignedToken(newUser);
        resp.status(200).json({ message:'success'});
        // resp.status(200).json({token})
    } catch (error) {
        error.status = 400;
        next(error);
    }
}


//--------------------------------------LOGIN USER-------------------------------------
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user)
        return res.status(403).json({ error: { message: 'invalid email/password' } });
    const isValid = await user.isPasswordValid(password);
    if (!isValid)
        return res.status(403).json({ error: { message: 'invalid email/password' } });
    const token = getSignedToken(user);
    res.status(200).json({user,token});
};


//------------------------------------- CHANGE PASSWORD---------------------------------
exports.changePassword = async(req,resp,next) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    
    const {oldPassword , newPassword , confirmPassword} = req.body
    const Current_user = req.user
    console.log(req.user);
    if(bcrypt.compareSync(oldPassword,Current_user.password))
    {
        if(newPassword == confirmPassword)
        {
            try {
                if(newPassword.length<6) 
                {
                        resp.status(403).json({message:'password must be minimum of 6 characters including 1 sysmbol and 1 number'})
                }
                
                else if(format.test(newPassword)==false || (/\d/.test(newPassword))==false)
                {  
                    resp.status(403).json({message:'password must be minimum of 6 characters including 1 sysmbol and 1 number'})
                }
                else
                {
                    const salt = await bcrypt.genSalt(10);
                    const passwordHash = await bcrypt.hash(newPassword, salt);
                    await User.findByIdAndUpdate(Current_user.id, {password:passwordHash});
                    resp.status(200).json({ success: true });
                }
            } catch (error) {
                error.status = 400;
                next(error);
            }
        }
        else
        {
            resp.status(403).json({message:'password does not match'})
        }
    }
    else
    {
        resp.status(403).json({message:'oldpassword does not match'})
    }
   
}

//-----------------------------------------EDIT PROFILE----------------------------------
exports.editProfile = async(req,resp,next) =>
{
    let {userID} = req.params
    console.log(userID);
    try {
        await User.findByIdAndUpdate(userID, {  
                                                userName:req.body.userName ,
                                                bio:req.body.bio ,
                                                gender:req.body.gender ,
                                                dob : req.body.dob ,
                                                mobile : req.body.mobile ,
                                                photo:req.file.path});
        resp.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
}


getSignedToken = user => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        name:user.name,
        password:user.password
    },SECRET_KEY, { expiresIn: '24h' });
};

