/**
 * @swagger
 * /front/looking-for:
 *   get:
 *     summary: List of  Looking for
 *     description: List of all looking for
 *     responses:
 *       201:
 *         description: success
 * /admin/looking-for:
 *   get:
 *     summary: List of  Looking for
 *     description: List of all looking for
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/looking-for/create:
 *   post:
 *     summary: Create LookingFor
 *     description: Create a new looking-for entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Son"
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/looking-for/update/{id}:
 *   post:
 *     summary: Update LookingFor
 *     description: Update an existing LookingFor entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The LookingFor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Son"
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
 * /admin/looking-for/delete/{id}:
 *   delete:
 *     summary: Delete LookingFor
 *     description: Delete a LookingFor entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The LookingFor ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found

 */
