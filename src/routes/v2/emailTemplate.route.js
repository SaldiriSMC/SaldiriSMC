const express = require('express');
const auth = require('../../middlewares/v2/auth');
const tenant = require("../../middlewares/v2/tenant")
const emailTemplateController = require('../../controllers/v2/emailTemplate.controller');
const checkRoles = require('../../middlewares/v2/checkRole')

const router = express.Router();

router
  .route('/')
  .get(auth(), tenant(), checkRoles(["admin","hr"]), emailTemplateController.getEmailTempate)
  .post(auth(), tenant(), emailTemplateController.createEmailTemplate);
router
  .route('/send-email')
  .post(auth(), tenant(), checkRoles(['admin', 'hr']), emailTemplateController.sendEmail)
router
  .route('/:emailTemplateId')
  .patch(auth('manageUsers'), tenant(), emailTemplateController.updateEmailTemplate)
  .delete(auth('manageUsers'), tenant(), emailTemplateController.deleteEmailTemplate);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: EmailTemplates
 *   description: EmailTemplates management and retrieval
 */

  
/**
 * @swagger
 * /email-templates:
 *   get:
 *     summary: Get all Email Templates
 *     description: Only admins can retrieve all users.
 *     tags: [EmailTemplates]
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
 *                $ref: '#/components/schemas/EmailTemplates'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *   post:
 *     summary: Create a email template
 *     description: Only admins can create other email templates.
 *     parameters:
 *         - name: X-Tenent-Key
 *           in: header
 *           description: X-Tenent-Key
 *           required: true
 *           schema:
 *             type: string
 *     tags: [EmailTemplates]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subject
 *               - body
 *             properties:
 *               subject:
 *                 type: string
 *               body:
 *                 type: string
 *             example:
 *               subject: Reset Password
 *               body: Hello
 *     responses:
 *       "201":
 *         description: Created
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
 */

/**
 * @swagger
 * /email-templates/send-email:
 *   post:
 *     summary: send a email 
 *     description: Only admins can create other email templates.
 *     parameters:
 *         - name: X-Tenent-Key
 *           in: header
 *           description: X-Tenent-Key
 *           required: true
 *           schema:
 *             type: string
 *     tags: [EmailTemplates]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             properties:
 *               id:
 *                 type: number
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *             example:
 *               users: [{"id":"1", "email":"fake@gmail.com"}]
 *     responses:
 *       "201":
 *         description: email sent successfully
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
 */


/**
 * @swagger
 * /email-templates/{id}:
 *   patch:
 *     summary: Update a email template
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [EmailTemplates]
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
 *         description: email template id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subject
 *               - body
 *             properties:
 *               subject:
 *                 type: string
 *               body:
 *                 type: string
 *             example:
 *               subject: Reset Password
 *               body: Hello
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a emial template
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [EmailTemplates]
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