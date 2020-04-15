const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/departments");

// get all comments
router.get("/departments", controller.getAllDepartments);

router.get("/departments/:dept_name", controller.getEmployeesByDepartment);

router.get("/departments/:emp_no", controller.getDepartmentsByEmpolyeeID);

// make the router available to the API
module.exports = router;