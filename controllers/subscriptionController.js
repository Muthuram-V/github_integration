exports.subscribe = (req, res) => {
  // TODO: Subscribe user to a repository
  res.json({ success: true, message: 'Subscribed to repo!' });
};

exports.listSubscriptions = (req, res) => {
  // TODO: List all repositories the user is subscribed to
  res.json([
    { repo_id: 'repo1', repo_name: 'my-repo' },
    { repo_id: 'repo2', repo_name: 'another-repo' }
  ]);
};

exports.unsubscribe = (req, res) => {
  // TODO: Unsubscribe user from a repository
  res.json({ success: true, message: 'Unsubscribed from repo!' });
};
