/**
 * @swagger
 * /front/hobbies:
 *   get:
 *     summary: List of hobbies
 *     description: List of all hobbies
 *     responses:
 *       201:
 *         description: success
 * /admin/hobbies:
 *   get:
 *     summary: List of hobbies
 *     description: List of all hobbies
 *     responses:
 *       201:
 *         description: success
 * 
 * /admin/hobbies/create:
 *   post:
 *     summary: Create hobbies
 *     description: Create a new hobbies entry
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
 * /admin/hobbies/update/{id}:
 *   post:
 *     summary: Update hobbies
 *     description: Update an existing hobbies entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The hobbies ID
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
 * /admin/hobbies/delete/{id}:
 *   delete:
 *     summary: Delete hobbies
 *     description: Delete a hobbies entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The hobbies ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 */
