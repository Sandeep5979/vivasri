/**
 * @swagger
 * /front/education:
 *   get:
 *     summary: List of education
 *     description: List of all education
 *     responses:
 *       201:
 *         description: success
 * /admin/education:
 *   get:
 *     summary: List of education
 *     description: List of all education
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/education/create:
 *   post:
 *     summary: Create education
 *     description: Create a new education entry
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
 *               education_type:
 *                 type: number
 *                 example: ""
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/education/update/{id}:
 *   post:
 *     summary: Update education
 *     description: Update an existing education entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The education ID
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
 *               education_type:
 *                 type: number
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
 * /admin/education/delete/{id}:
 *   delete:
 *     summary: Delete education
 *     description: Delete a education entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The education ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
