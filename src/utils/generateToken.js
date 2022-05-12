const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            user_name: user.user_name,
            email: user.email,
            rol: user.rol
        }, 
            process.env.JWT_KEY || 'secret', 
        {
            expiresIn: '30d'
        }
    )
};

module.exports = generateToken;