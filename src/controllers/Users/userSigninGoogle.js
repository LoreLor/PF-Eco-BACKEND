const User = require("../../models/User.js");

const signinGoogle = async (req, res) => {
    try {
      const { code, redirect_uri } = req.query; // code from service provider which is appended to the frontend's URL
      const client_id = 'CLIENT_ID_FROM_APP_CREATED';
      const client_secret = 'CLIENT_SECRET_FROM_APP_CREATED';
      // The client_id and client_secret should always be private, put them in the .env file
      const grant_type = 'authorization_code'; // this tells the service provider to return a code which will be used to get a token for making requests to the service provider
      const url = 'https://oauth2.googleapis.com/token'; // link to api to exchange code for token.
      const { data } = await axios({
        url,
        method: 'POST',
        params: {
          client_id,
          client_secret,
          redirect_uri,
          code,
          grant_type,
        },
      });
        const tokenFromGoogle = data.access_token;
        const urlForGettingUserInfo = 'https://www.googleapis.com/oauth2/v2/userinfo';
        const userData = await axios({
        urlForGettingUserInfo,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenFromGoogle}`,
        },
      });
      const body = {
        user_name: userData.data.username,
        email: userData.data.email,
        serviceProvider: 'google',
      };
      await User.create(body) // store data to database - here you can add your logic for either signing up or signing in a user. I am assuming I have a model called User, I am using Sequelize's create method to insert the user data into this model...
      const ourOwnToken = jwt.encode(body) // create token with the body variable above
      return res.status(200).json({
        success: true,
        token: ourOwnToken
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        err,
      });
    }
  };
module.exports = signinGoogle