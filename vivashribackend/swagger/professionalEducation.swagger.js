/**
 * @swagger
 * /front/professional-education:
 *   get:
 *     summary: List of professional education
 *     description: List of all professional education
 *     responses:
 *       201:
 *         description: success
 * /admin/professional-education:
 *   get:
 *     summary: List of professional education
 *     description: List of all professional education
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/professional-education/create:
 *   post:
 *     summary: Create professional education
 *     description: Create a new professional education entry
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
 * /admin/professional-education/update/{id}:
 *   post:
 *     summary: Update professional education
 *     description: Update an existing professional education entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The professional education ID
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
 * /admin/professional-education/delete/{id}:
 *   delete:
 *     summary: Delete professional education
 *     description: Delete a professional education entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The professional education ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
