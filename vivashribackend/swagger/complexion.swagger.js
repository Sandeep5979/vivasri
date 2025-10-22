/**
 * @swagger
 * /front/complexion:
 *   get:
 *     summary: List of complexion
 *     description: List of all complexion
 *     responses:
 *       201:
 *         description: success 
 * /admin/complexion:
 *   get:
 *     summary: List of complexion
 *     description: List of all complexion
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/complexion/create:
 *   post:
 *     summary: Create complexion
 *     description: Create a new complexion entry
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
 * /admin/complexion/update/{id}:
 *   post:
 *     summary: Update complexion
 *     description: Update an existing complexion entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The complexion ID
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
 * /admin/complexion/delete/{id}:
 *   delete:
 *     summary: Delete complexion
 *     description: Delete a complexion entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The complexion ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
