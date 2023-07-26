const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const noTenant = require("../../middlewares/v2/tenantNotRequired")
const {departmentController} = require('../../controllers/v2/index');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get( noTenant(), departmentController.getDepartments)
  .post(auth(), tenant(), checkRoles(["admin","hr"]), departmentController.createDepartment);
router
  .route('/:departmentId')
  .patch(auth(), tenant(), checkRoles(["admin","hr"]), departmentController.updateDepartment)
  .delete(auth(), tenant(), checkRoles(["admin","hr"]), departmentController.deleteDepartment)


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
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
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
 *   post:
 *     summary: Create a department
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Departments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentName:
 *                 type: string
 *             example: 
 *               departmentName: Admin
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

 /**
 * @swagger
 * /department/{id}:
 *   patch:
 *     summary: Update a department
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [Departments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Department id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentName:
 *                 type: string
 *             example:
 *               departmentName: Admin
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a department
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [Departments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Department id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */