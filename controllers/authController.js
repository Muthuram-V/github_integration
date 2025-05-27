const axios = require('axios');

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CALLBACK_URL = process.env.GITHUB_CALLBACK_URL;

// Step 1: Redirect to GitHub OAuth
exports.githubAuth = (req, res) => {
  const githubAuthUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(CALLBACK_URL)}` +
    `&scope=read:user,user:email,repo`;
  res.redirect(githubAuthUrl);
};

// Step 2: Handle GitHub OAuth callback and session/token storage
exports.githubCallback = async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('No code provided');

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: CALLBACK_URL,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) return res.status(400).send('No access token received');

    // Fetch user profile from GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${accessToken}` },
    });

    // Optionally: fetch user emails if needed
    // const emailsResponse = await axios.get('https://api.github.com/user/emails', {
    //   headers: { Authorization: `token ${accessToken}` },
    // });

    // Here, you would create/find the user in your DB and store the accessToken as needed
    // For demo, just return the user profile and token
    res.json({
      githubUser: userResponse.data,
      accessToken,
      // emails: emailsResponse.data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('GitHub OAuth failed');
  }
};
