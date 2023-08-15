const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require('../../middlewares/v2/tenant');
const RecordsddfdsdssssdssController = require('../../GeneratedFiles/BackEnd/controllers/Client.controller');
const checkRoles = require('../../middlewares/v2/checkRole');
const router = express.Router();

router
  .route('/')
  .post(auth(), tenant(), checkRoles(['admin', 'hr']), RecordsddfdsdssssdssController.create)
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), RecordsddfdsdssssdssController.getAll);

router
  .route('/:userId')
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), RecordsddfdsdssssdssController.getSingle)
  .patch(auth(), tenant(), checkRoles(['admin', 'hr']), RecordsddfdsdssssdssController.update)
  .delete(auth(), tenant(), checkRoles(['admin', 'hr']), RecordsddfdsdssssdssController.del);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Recordsddfdsdssssdss
 *   description: Recordsddfdsdssssdss management and retrieval
 */

/**
 * @swagger
 * /Recordsddfdsdssssdss:
 *   post:
 *     summary: Create a Recordsddfdsdssssdss
 *     description: Only admins can create other Recordsddfdsdssssdss.
 *     parameters:
 *         - name: X-Tenent-Key
 *           in: header
 *           description: X-Tenent-Key
 *           required: true
 *           schema:
 *             type: string
 *     tags: [Recordsddfdsdssssdss]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *             properties:
 *               Name:
 *                 type: string 
 *             example:
 *               Name: string 
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recordsddfdsdssssdss'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Recordsddfdsdssssdss
 *     description: Only admins can retrieve all Recordsddfdsdssssdss.
 *     tags: [Recordsddfdsdssssdss]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: X-Tenent-Key
 *         in: header
 *         description: X-Tenent-Key
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: User role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Recordsddfdsdssssdss'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /Recordsddfdsdssssdss/{id}:
 *   get:
 *     summary: Get a Recordsddfdsdssssdss
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other Recordsddfdsdssssdss.
 *     tags: [Recordsddfdsdssssdss]
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
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recordsddfdsdssssdss'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Recordsddfdsdssssdss
 *     description: Logged in users can only update their own information. Only admins can update other Recordsddfdsdssssdss.
 *     tags: [Recordsddfdsdssssdss]
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
 *         description: User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string 
 *             example:
 *               Name: string 
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recordsddfdsdssssdss'
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
 *     summary: Delete a Recordsddfdsdssssdss
 *     description: Logged in users can delete only themselves. Only admins can delete other Recordsddfdsdssssdss.
 *     tags: [Recordsddfdsdssssdss]
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
 *         description: User id
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