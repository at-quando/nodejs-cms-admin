const express = require('express');
const appRoutes = require('./AppRoute');
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
const videoRoutes = require('./VideoRoute');
const articleRoutes = require('./ArticleRoute');
const agencyRoutes = require('./AgencyRoute');
const albumRoutes = require('./AlbumRoute');
const publicRoutes = require('./PublicRoute');
const pictureRoutes = require('./PictureRoute');
const contractRoutes = require('./ContractRoute');
const packageRoutes = require('./PackageRoute');
const employeeRoutes = require('./EmployeeRoute');
const departmentRoutes = require('./DepartmentRoute');
const productTypeRoutes = require('./ProductTypeRoute');
const productRoutes = require('./ProductRoute');
const todoRoutes = require('./TodoRoute');
const jwt = require('jsonwebtoken');
const expressjwt = require("express-jwt");

const router = express.Router();

const jwtCheck = expressjwt({
  secret: 'mykey'
});
// router.use(protectedRoutes);

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);

router.get('/api/checkLogin',jwtCheck, (req, res) =>
  res.status(200).send('Login Successful')
);

router.use('/api', publicRoutes);

// router.use('/api/facilities', facilityRoutes);
router.use('/api/app', jwtCheck, appRoutes);
router.use('/api/users', jwtCheck, userRoutes);
router.use('/api/agencies', agencyRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/albums',jwtCheck, albumRoutes);
router.use('/api/videos',jwtCheck, videoRoutes);
router.use('/api/articles', jwtCheck, articleRoutes);
router.use('/api/pictures', jwtCheck, pictureRoutes);
router.use('/api/contracts',jwtCheck, contractRoutes);
router.use('/api/packages',jwtCheck, packageRoutes);
router.use('/api/productTypes',jwtCheck, productTypeRoutes);
router.use('/api/products', jwtCheck, productRoutes);
router.use('/api/departments', jwtCheck, departmentRoutes);
router.use('/api/employees', jwtCheck, employeeRoutes);
router.use('/api/todos', jwtCheck, todoRoutes);

module.exports = router;
