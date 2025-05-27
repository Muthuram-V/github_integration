exports.listNotifications = (req, res) => {
  // TODO: List notifications for the user
  res.json([
    {
      id: 'notif1',
      repo_id: 'repo1',
      pr_id: 'pr1',
      pr_title: 'Fix bug',
      sender: 'someone',
      timestamp: '2025-05-27T13:00:00Z',
      read: false
    }
  ]);
};

exports.markRead = (req, res) => {
  // TODO: Mark notifications as read
  res.json({ success: true });
};
