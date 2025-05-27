exports.getProfile = (req, res) => {
  res.json({
    id: 'user123',
    username: 'octocat',
    email: 'octocat@example.com',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif'
  });
};
