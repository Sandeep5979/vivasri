/**
 * @swagger
 * /front/diet:
 *   get:
 *     summary: List of diet
 *     description: List of all diet
 *     responses:
 *       201:
 *         description: success
 * /admin/diet:
 *   get:
 *     summary: List of diet
 *     description: List of all diet
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/diet/create:
 *   post:
 *     summary: Create diet
 *     description: Create a new diet entry
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
 * /admin/diet/update/{id}:
 *   post:
 *     summary: Update diet
 *     description: Update an existing diet entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The diet ID
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
 * /admin/diet/delete/{id}:
 *   delete:
 *     summary: Delete diet
 *     description: Delete a diet entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The diet ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
