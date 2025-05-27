exports.listRepos = (req, res) => {
  // TODO: Fetch user's repositories from GitHub
  res.json([
    { id: 'repo1', name: 'my-repo', full_name: 'octocat/my-repo' },
    { id: 'repo2', name: 'another-repo', full_name: 'octocat/another-repo' }
  ]);
};
