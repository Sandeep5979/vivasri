/**
 * @swagger
 * /front/sub-caste:
 *   get:
 *     summary: List of sub caste
 *     description: List of all sub caste
 *     responses:
 *       201:
 *         description: success
 * /front/sub-caste/{caste_id}:
 *   get:
 *     summary: List of sub caste
 *     description: List of all sub caste
 *     parameters:
 *       - in: path
 *         name: caste_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The caste ID 
 *     responses:
 *       201:
 *         description: success
 * /admin/sub-caste:
 *   get:
 *     summary: List of sub caste
 *     description: List of all sub caste
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/sub-caste/create:
 *   post:
 *     summary: Create sub caste
 *     description: Create a new sub caste entry
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
 *               religion_id:
 *                 type: string
 *                 example: ""
 *               caste_id:
 *                 type: string
 *                 example: ""   
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/sub-caste/update/{id}:
 *   post:
 *     summary: Update sub caste
 *     description: Update an existing sub caste entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The sub caste ID
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
 *               religion_id:
 *                 type: string
 *                 example: ""
 *               caste_id:
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
 * /admin/sub-caste/delete/{id}:
 *   delete:
 *     summary: Delete sub caste
 *     description: Delete a sub caste entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The sub caste ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
