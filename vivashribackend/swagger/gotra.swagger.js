/**
 * @swagger
 * /admin/gotra:
 *   get:
 *     summary: List of gotra
 *     description: List of all gotra
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/gotra/create:
 *   post:
 *     summary: Create gotra
 *     description: Create a new gotra entry
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
 * /admin/gotra/update/{id}:
 *   post:
 *     summary: Update gotra
 *     description: Update an existing gotra entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The gotra ID
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
 * /admin/gotra/delete/{id}:
 *   delete:
 *     summary: Delete gotra
 *     description: Delete a gotra entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The gotra ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
