const route = `const express = require('express');
const auth = require('../../middlewares/auth');
const tenant = require('../../middlewares/v2/tenant');
const #_tablenameController = require('../../controllers/v2/#_tablename.controller');
const checkRoles = require('../../middlewares/v2/checkRole');
const router = express.Router();

router
  .route('/')
  .post(auth(), tenant(), checkRoles(['admin', 'hr']), #_tablenameController.create)
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), #_tablenameController.getAll);

router
  .route('/:userId')
  .get(auth(), tenant(), checkRoles(['admin', 'hr']), #_tablenameController.getSingle)
  .patch(auth(), tenant(), checkRoles(['admin', 'hr']), #_tablenameController.update)
  .delete(auth(), tenant(), checkRoles(['admin', 'hr']), #_tablenameController.del);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: #_tablename
 *   description: #_tablename management and retrieval
 */

/**
 * @swagger
 * /#_tablename:
 *   post:
 *     summary: Create a #_tablename
 *     description: Only admins can create other #_tablename.
 *     parameters:
 *         - name: X-Tenent-Key
 *           in: header
 *           description: X-Tenent-Key
 *           required: true
 *           schema:
 *             type: string
 *     tags: [#_tablename]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 #_swaggerFields
 *             properties:
 #swaggerFieldsWithType
 *             example:
 #_swaggerExample
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/#_tablename'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all #_tablename
 *     description: Only admins can retrieve all #_tablename.
 *     tags: [#_tablename]
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
 *                     $ref: '#/components/schemas/#_tablename'
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
 * /#_tablename/{id}:
 *   get:
 *     summary: Get a #_tablename
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other #_tablename.
 *     tags: [#_tablename]
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
 *                $ref: '#/components/schemas/#_tablename'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a #_tablename
 *     description: Logged in users can only update their own information. Only admins can update other #_tablename.
 *     tags: [#_tablename]
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
 #swaggerFieldsWithType
 *             example:
 #_swaggerExample
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/#_tablename'
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
 *     summary: Delete a #_tablename
 *     description: Logged in users can delete only themselves. Only admins can delete other #_tablename.
 *     tags: [#_tablename]
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
 */`;

const generateRoute = async (columnArray, tableName, zip) => {
  let querytoSequlize = {
    int: 'int',
    bool: 'boolean',
    'VARCHAR(255)': 'string',
  };
  let swagger_Fields = '';
  let swaggerFieldWithType = '';
  let swaggerExample = '';
  columnArray.map((item) => {
    swagger_Fields += `*               - ${item.columnName}\n `;
    if (item.dataType === 'FOREIGN KEY') {
      swaggerFieldWithType += `*               ${item.columnName}:\n *                 type: int \n `;
      swaggerExample += `*               ${item.columnName}: int \n `;
    } else {
      swaggerFieldWithType += `*               ${item.columnName}:\n *                 type: ${
        querytoSequlize[item.dataType]
      } \n `;
      swaggerExample += `*               ${item.columnName}: ${querytoSequlize[item.dataType]} \n `;
    }
  });
  swagger_Fields = swagger_Fields.slice(0, swagger_Fields.length - 2);
  swaggerFieldWithType = swaggerFieldWithType.slice(0, swaggerFieldWithType.length - 2);
  swaggerExample = swaggerExample.slice(0, swaggerExample.length - 2);
  const replacedRoute = route
    .replace(/#_tablename/g, tableName)
    .replace(/#_swaggerFields/g, swagger_Fields)
    .replace(/#swaggerFieldsWithType/g, swaggerFieldWithType)
    .replace(/#_swaggerExample/g, swaggerExample);
  zip.folder('routes').file(`${tableName}.route.js`,replacedRoute)
};

module.exports = { generateRoute };
