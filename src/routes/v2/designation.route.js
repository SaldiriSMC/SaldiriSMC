const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require("../../middlewares/v2/tenant")
const {designationController} = require('../../controllers/v2/index');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get(auth(), tenant(), checkRoles(["admin","hr"]), designationController.getDesignation);


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