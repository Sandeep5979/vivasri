/**
 * @swagger
 * /front/state:
 *   get:
 *     summary: List of state
 *     description: List of all state
 *     responses:
 *       201:
 *         description: success
 * /front/state/{country_id}:
 *   get:
 *     summary: List of state
 *     description: List of all state
 *     parameters:
 *       - in: path
 *         name: country_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country ID 
 *     responses:
 *       201:
 *         description: success
 * /admin/state:
 *   get:
 *     summary: List of state
 *     description: List of all state
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/state/create:
 *   post:
 *     summary: Create state
 *     description: Create a new state entry
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
 *               status:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Created successfully
 * 
 * /admin/state/update/{id}:
 *   post:
 *     summary: Update state
 *     description: Update an existing state entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state ID
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
 * /admin/state/delete/{id}:
 *   delete:
 *     summary: Delete state
 *     description: Delete a state entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
