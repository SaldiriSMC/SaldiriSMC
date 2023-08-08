const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const noTenant = require("../../middlewares/v2/tenantNotRequired")
const {tableController} = require('../../controllers/v2/index');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get(auth(), checkRoles(["admin","hr"]), tableController.getTables)
  .post(auth(), tenant(), checkRoles(["admin","hr"]), tableController.createTable);
// router
//   .route('/:departmentId')
//   .patch(auth(), tenant(), checkRoles(["admin","hr"]), tableController.updateDepartment)
//   .delete(auth(), tenant(), checkRoles(["admin","hr"]), tableController.deleteDepartment)


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Table
 *   description: Table management and retrieval
 */  
/**
 * @swagger
 * /table:
 *   get:
 *     summary: Get all tables
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Table]
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
 *                $ref: '#/components/schemas/Table'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *   post:
 *     summary: Create a table
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Table]
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
 *               tableName:
 *                 type: string
 *               columnArray:
 *                 type: array
 *             example: 
 *               tableName: Agents
 *               columnArray: [{"columnName":"firstName", "dataType":"varchar(255)"},{"columnName":"age", "dataType":"int"}]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Table'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

//  /**
//  * @swagger
//  * /department/{id}:
//  *   patch:
//  *     summary: Update a department
//  *     description: Logged in users can only update their own information. Only admins can update other users.
//  *     tags: [Departments]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - name: X-Tenent-Key
//  *         in: header
//  *         description: X-Tenent-Key
//  *         required: true
//  *         schema:
//  *           type: string
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Department id
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               departmentName:
//  *                 type: string
//  *             example:
//  *               departmentName: Admin
//  *     responses:
//  *       "200":
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/User'
//  *       "400":
//  *         $ref: '#/components/responses/DuplicateEmail'
//  *       "401":
//  *         $ref: '#/components/responses/Unauthorized'
//  *       "403":
//  *         $ref: '#/components/responses/Forbidden'
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  *
//  *   delete:
//  *     summary: Delete a department
//  *     description: Logged in users can delete only themselves. Only admins can delete other users.
//  *     tags: [Departments]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - name: X-Tenent-Key
//  *         in: header
//  *         description: X-Tenent-Key
//  *         required: true
//  *         schema:
//  *           type: string
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Department id
//  *     responses:
//  *       "200":
//  *         description: No content
//  *       "401":
//  *         $ref: '#/components/responses/Unauthorized'
//  *       "403":
//  *         $ref: '#/components/responses/Forbidden'
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  */