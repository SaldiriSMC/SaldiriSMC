const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require('../../middlewares/v2/tenant');
const FarariesController = require('../../GeneratedFiles/BackEnd/controllers/Client.controller');
const checkRoles = require('../../middlewares/v2/checkRole');
const router = express.Router();

router
  .route('/')
  .post(auth(), tenant(), checkRoles(['admin', 'hr']), FarariesController.create)
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), FarariesController.getAll);

router
  .route('/:userId')
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), FarariesController.getSingle)
  .patch(auth(), tenant(), checkRoles(['admin', 'hr']), FarariesController.update)
  .delete(auth(), tenant(), checkRoles(['admin', 'hr']), FarariesController.del);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Fararies
 *   description: Fararies management and retrieval
 */

/**
 * @swagger
 * /Fararies:
 *   post:
 *     summary: Create a Fararies
 *     description: Only admins can create other Fararies.
 *     parameters:
 *         - name: X-Tenent-Key
 *           in: header
 *           description: X-Tenent-Key
 *           required: true
 *           schema:
 *             type: string
 *     tags: [Fararies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Model
 *             properties:
 *               Model:
 *                 type: int 
 *             example:
 *               Model: int 
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Fararies'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Fararies
 *     description: Only admins can retrieve all Fararies.
 *     tags: [Fararies]
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
 *                     $ref: '#/components/schemas/Fararies'
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
 * /Fararies/{id}:
 *   get:
 *     summary: Get a Fararies
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other Fararies.
 *     tags: [Fararies]
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
 *                $ref: '#/components/schemas/Fararies'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Fararies
 *     description: Logged in users can only update their own information. Only admins can update other Fararies.
 *     tags: [Fararies]
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
 *               Model:
 *                 type: int 
 *             example:
 *               Model: int 
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Fararies'
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
 *     summary: Delete a Fararies
 *     description: Logged in users can delete only themselves. Only admins can delete other Fararies.
 *     tags: [Fararies]
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