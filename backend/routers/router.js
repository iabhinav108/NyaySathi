// router.js
const express = require('express');
const router = express.Router();

const { userRegistration } = require('../controllers/registrationController');
const { userLogin } = require('../controllers/loginController');
const { userLogout } = require('../controllers/Dashboard/logoutController');
const { updateUserProfile } = require('../controllers/Dashboard/updateProfileController');
const verifyAuth = require('../middlewares/Auth');
const { Dashboard } = require('../controllers/Dashboard/mainControl');
const { adminLogin } = require('../controllers/Admin/AdminAuthController');
const { adminLogout } = require('../controllers/Admin/AdminLogoutController');
const { AdminDashboard } = require('../controllers/Admin/profilecontroller');
const { getallusers } = require('../controllers/Admin/ManageUserController');
const { getallcases } = require('../controllers/Admin/ManageCaseController');
const { preTrialDetail } = require('../controllers/Dashboard/preTrialDetails');
const { getallPTA } = require('../controllers/Dashboard/getPreTrialsController');
// const { WSFP } = require('../middlewares/WrittenStatementFilePath');

//public
router.post('/register', userRegistration);
router.post('/login', userLogin);

//authorized user
router.get('/user/logout', verifyAuth, userLogout);
router.get('/user/profile', verifyAuth, Dashboard);
router.post('/user/updateProfile', verifyAuth, updateUserProfile);
router.post('/user/applyPTA', verifyAuth,preTrialDetail);
router.get('/user/GetPTA', verifyAuth,getallPTA);

//admin
router.post('/auth/admin', adminLogin);
router.get('/auth/admin/logout', verifyAuth, adminLogout);
router.get('/auth/admin/profile', verifyAuth, AdminDashboard);
router.get('/auth/admin/dashboard', verifyAuth, adminLogin);
router.get('/auth/admin/manageusers', verifyAuth, getallusers);
router.get('/auth/admin/managecases', verifyAuth, getallcases);
router.post('/auth/admin/editusers', verifyAuth, getallusers);
router.post('/auth/admin/editcases', verifyAuth, getallcases);

module.exports = router;
