const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {

//we can also get token in header but if use cookies and HTTP only then in my opinion it is more secure and effective approach

    // const token = req.header('x-auth-token');
    // const token = req.header('Authorization');
    const token = req.headers['authorization']?.split(' ')[1]

    // const token = req.cookies.token;


    if(!token) return res.status(401).json({message: 'Token Required: Authorization Denied'});


    try{
        const token_secret =  process.env.JWT_SECRET;
        const decoded = jwt.verify(token, token_secret);
        req.user = decoded;
        next();
    }catch(error){

        res.status(401).json({message: 'Invalid Token'});
    }
}


const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({message: 'Access Denied'});
    }
    next();
}

module.exports = {authMiddleware, adminMiddleware}