// src/controllers/webhookController.js

exports.githubWebhook = (req, res) => {
  // TODO: Handle GitHub webhook for pull request events
  // Parse event, create notifications, etc.
  res.json({ received: true });
};
