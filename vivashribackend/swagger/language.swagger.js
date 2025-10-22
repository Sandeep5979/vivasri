/**
 * @swagger
 * /front/language:
 *   get:
 *     summary: List of language
 *     description: List of all language
 *     responses:
 *       201:
 *         description: success
 * /admin/language:
 *   get:
 *     summary: List of language
 *     description: List of all language
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/language/create:
 *   post:
 *     summary: Create language
 *     description: Create a new language entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ""
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/language/update/{id}:
 *   post:
 *     summary: Update language
 *     description: Update an existing language entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ""
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       200:
 *         description: Update successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 * 
 * /admin/language/delete/{id}:
 *   delete:
 *     summary: Delete language
 *     description: Delete a language entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The language ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
