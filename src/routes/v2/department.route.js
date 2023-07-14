const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const {departmentController} = require('../../controllers/v2/index');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get(auth(), tenant(), checkRoles(["admin","hr"]), departmentController.getDepartments);


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Department management and retrieval
 */  
/**
 * @swagger
 * /department:
 *   get:
 *     summary: Get all departments
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Departments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *         required: true
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Department'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */