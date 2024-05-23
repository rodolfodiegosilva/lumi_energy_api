/**
 * @swagger
 * tags:
 *   name: Invoices
 *   description: API para gerenciamento de faturas
 */

/**
 * @swagger
 * /upload-pdf:
 *   post:
 *     summary: Faz upload de um PDF para extração de dados
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Dados extraídos com sucesso
 *       500:
 *         description: Erro ao processar o PDF
 */

/**
 * @swagger
 * /invoices:
 *   post:
 *     summary: Cria uma nova fatura
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientNumber:
 *                 type: string
 *               referenceMonth:
 *                 type: string
 *               totalCost:
 *                 type: number
 *     responses:
 *       201:
 *         description: Fatura criada com sucesso
 *       500:
 *         description: Erro ao criar a fatura
 */

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Lista todas as faturas
 *     tags: [Invoices]
 *     responses:
 *       200:
 *         description: Lista de faturas
 *       500:
 *         description: Erro ao buscar faturas
 */

/**
 * @swagger
 * /invoices/{id}:
 *   get:
 *     summary: Busca uma fatura pelo ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da fatura
 *     responses:
 *       200:
 *         description: Fatura encontrada
 *       404:
 *         description: Fatura não encontrada
 *       500:
 *         description: Erro ao buscar a fatura
 */

/**
 * @swagger
 * /invoices/{id}:
 *   put:
 *     summary: Atualiza uma fatura pelo ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da fatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalCost:
 *                 type: number
 *     responses:
 *       200:
 *         description: Fatura atualizada com sucesso
 *       404:
 *         description: Fatura não encontrada
 *       500:
 *         description: Erro ao atualizar a fatura
 */

/**
 * @swagger
 * /invoices/{id}:
 *   delete:
 *     summary: Deleta uma fatura pelo ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da fatura
 *     responses:
 *       204:
 *         description: Fatura deletada com sucesso
 *       404:
 *         description: Fatura não encontrada
 *       500:
 *         description: Erro ao deletar a fatura
 */
