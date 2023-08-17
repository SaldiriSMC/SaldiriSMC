const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const {tableController} = require('../../controllers/v2/index');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get(auth(), tenant(),checkRoles(["admin","hr"]), tableController.getTables)
  .post(auth(), tenant(), checkRoles(["admin","hr"]), tableController.createTable);
router
  .route("/self-generated")
  .get(auth(), tenant(), checkRoles(["admin","hr"]), tableController.getSelfGeneratedTables)
router
  .route("/self-generated")
  .get(auth(), tenant(), checkRoles(["admin","hr"]), tableController.getSelfGeneratedTables)

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
 *     security:
 *       - bearerAuth: []
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

/**
 * @swagger
 * /table/self-generated:
 *   get:
 *     summary: Get all self generated tables
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Table]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
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