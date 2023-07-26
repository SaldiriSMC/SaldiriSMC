const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const {designationController} = require('../../controllers/v2/index');
const noTenant = require("../../middlewares/v2/tenantNotRequired")
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get( noTenant(), designationController.getDesignation)
  .post(auth(), tenant(), checkRoles(["admin","hr"]), designationController.createDesignation);
router
.route('/:designationId')
.patch(auth(), tenant(), checkRoles(["admin","hr"]), designationController.updateDesignation)
.delete(auth(), tenant(), checkRoles(["admin","hr"]), designationController.deleteDesignation)


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Designations
 *   description: Designation management and retrieval
 */  
/**
 * @swagger
 * /designation:
 *   get:
 *     summary: Get all designation
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Designations]
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
 *     summary: Create a designation
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Designations]
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
 *               designationName:
 *                 type: string
 *             example: 
 *               designationName: CEO
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Designation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */


 /**
 * @swagger
 * /designation/{id}:
 *   patch:
 *     summary: Update a designation
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [Designations]
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
 *         description: Designation id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               designationName:
 *                 type: string
 *             example:
 *               designationName: CEO
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Designation'
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
 *     summary: Delete a designation
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [Designations]
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
 *         description: Designation id
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