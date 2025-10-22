/**
 * @swagger
 * /front/city:
 *   get:
 *     summary: List of city
 *     description: List of all city
 *     responses:
 *       201:
 *         description: success
 * /front/city/{state_id}:
 *   get:
 *     summary: List of city
 *     description: List of all city
 *     parameters:
 *       - in: path
 *         name: state_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state ID 
 *     responses:
 *       201:
 *         description: success
 * /admin/city:
 *   get:
 *     summary: List of city
 *     description: List of all city
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/city/create:
 *   post:
 *     summary: Create city
 *     description: Create a new city entry
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
 *               country_id:
 *                 type: string
 *                 example: ""
 *               state_id:
 *                 type: string
 *                 example: ""   
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/city/update/{id}:
 *   post:
 *     summary: Update city
 *     description: Update an existing city entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city ID
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
 *               country_id:
 *                 type: string
 *                 example: ""
 *               state_id:
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
 * /admin/city/delete/{id}:
 *   delete:
 *     summary: Delete city
 *     description: Delete a city entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
