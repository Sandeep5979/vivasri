/**
 * @swagger
 * /front/caste:
 *   get:
 *     summary: List of caste
 *     description: List of all caste
 *     responses:
 *       201:
 *         description: success
 * /front/caste/{religion_id}:
 *   get:
 *     summary: List of caste
 *     description: List of all caste
 *     parameters:
 *       - in: path
 *         name: religion_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The religion ID 
 *     responses:
 *       201:
 *         description: success
 * /admin/caste:
 *   get:
 *     summary: List of caste
 *     description: List of all caste
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/caste/create:
 *   post:
 *     summary: Create caste
 *     description: Create a new caste entry
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
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/caste/update/{id}:
 *   post:
 *     summary: Update caste
 *     description: Update an existing caste entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The caste ID
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
 * /admin/caste/delete/{id}:
 *   delete:
 *     summary: Delete caste
 *     description: Delete a caste entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The caste ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
