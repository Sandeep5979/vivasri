/**
 * @swagger
 * /front/marital-status:
 *   get:
 *     summary: List of marital status
 *     description: List of all marital status
 *     responses:
 *       201:
 *         description: success
 * /admin/marital-status:
 *   get:
 *     summary: List of marital status
 *     description: List of all marital status
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/marital-status/create:
 *   post:
 *     summary: Create marital status
 *     description: Create a new marital status entry
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
 * /admin/marital-status/update/{id}:
 *   post:
 *     summary: Update marital status
 *     description: Update an existing marital status entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The marital status ID
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
 * /admin/marital-status/delete/{id}:
 *   delete:
 *     summary: Delete marital status
 *     description: Delete a marital status entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The marital status ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
