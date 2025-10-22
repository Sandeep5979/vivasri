/**
 * @swagger
 * /front/religion:
 *   get:
 *     summary: List of religion
 *     description: List of all religion
 *     responses:
 *       201:
 *         description: success
 * /admin/religion:
 *   get:
 *     summary: List of religion
 *     description: List of all religion
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/religion/create:
 *   post:
 *     summary: Create religion
 *     description: Create a new religion entry
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
 * /admin/religion/update/{id}:
 *   post:
 *     summary: Update religion
 *     description: Update an existing religion entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The religion ID
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
 * /admin/religion/delete/{id}:
 *   delete:
 *     summary: Delete religion
 *     description: Delete a religion entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The religion ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
