/**
 * @swagger
 * /front/occupation:
 *   get:
 *     summary: List of occupation
 *     description: List of all occupation
 *     responses:
 *       201:
 *         description: success
 * /admin/occupation:
 *   get:
 *     summary: List of occupation
 *     description: List of all occupation
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/occupation/create:
 *   post:
 *     summary: Create occupation
 *     description: Create a new occupation entry
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
 * /admin/occupation/update/{id}:
 *   post:
 *     summary: Update occupation
 *     description: Update an existing occupation entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The occupation ID
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
 * /admin/occupation/delete/{id}:
 *   delete:
 *     summary: Delete occupation
 *     description: Delete a occupation entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The occupation ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
