// src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const repoController = require('../controllers/repoController');
const subscriptionController = require('../controllers/subscriptionController');
const notificationController = require('../controllers/notificationController');
const webhookController = require('../controllers/webhookController');

// AUTH
router.get('/auth/github', authController.githubAuth);
router.post('/auth/github/callback', authController.githubCallback);

// USER
router.get('/user/profile', userController.getProfile);

// REPOS
router.get('/user/repos', repoController.listRepos);

// SUBSCRIPTIONS
router.post('/subscriptions', subscriptionController.subscribe);
router.get('/subscriptions', subscriptionController.listSubscriptions);
router.delete('/subscriptions/:repoId', subscriptionController.unsubscribe);

// NOTIFICATIONS
router.get('/notifications', notificationController.listNotifications);
router.post('/notifications/mark-read', notificationController.markRead);

// WEBHOOK
router.post('/webhook/github', webhookController.githubWebhook);

module.exports = router;
