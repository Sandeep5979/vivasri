/**
 * @swagger
 * /front/country:
 *   get:
 *     summary: List of country
 *     description: List of all country
 *     responses:
 *       201:
 *         description: success
 * /admin/country:
 *   get:
 *     summary: List of country
 *     description: List of all country
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/country/create:
 *   post:
 *     summary: Create country
 *     description: Create a new country entry
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
 * /admin/country/update/{id}:
 *   post:
 *     summary: Update country
 *     description: Update an existing country entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country ID
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
 * /admin/country/delete/{id}:
 *   delete:
 *     summary: Delete country
 *     description: Delete a country entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
