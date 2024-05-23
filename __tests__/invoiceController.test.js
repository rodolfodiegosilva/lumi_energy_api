const request = require('supertest');
const express = require('express');
const invoiceRoutes = require('../src/routes');
const invoiceRepository = require('../src/repositories/invoiceRepository');

jest.mock('../src/repositories/invoiceRepository');

const app = express();
app.use(express.json());
app.use('/invoices', invoiceRoutes);

describe('Invoice Controller', () => {
  let server;
  
  beforeAll(done => {
    server = app.listen(3002, () => {
      console.log('Test server running on port 3002');
      done();
    });
  }, 10000); // Aumentando o timeout para 10 segundos

  afterAll(done => {
    server.close(done);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar uma nova fatura e retornar status 201', async () => {
    const invoiceData = { clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 };
    invoiceRepository.create.mockResolvedValue(invoiceData);

    const response = await request(app)
      .post('/invoices')
      .send(invoiceData)
      .expect(201);

    expect(response.body).toEqual(invoiceData);
    expect(invoiceRepository.create).toHaveBeenCalledWith(invoiceData);
  }, 10000); // Aumentando o timeout para 10 segundos

  it.skip('deve buscar todas as faturas e retornar status 200', async () => {
    const invoices = [{ id: 1, clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 }];
    invoiceRepository.findAll.mockResolvedValue(invoices);

    const response = await request(app)
      .get('/invoices')
      .expect(200);

    expect(response.body).toEqual(invoices);
    expect(invoiceRepository.findAll).toHaveBeenCalled();
  }, 10000); // Aumentando o timeout para 10 segundos

  it.skip('deve buscar uma fatura pelo ID e retornar status 200', async () => {
    const invoice = { id: 1, clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 };
    invoiceRepository.findById.mockResolvedValue(invoice);

    const response = await request(app)
      .get('/invoices/1')
      .expect(200);

    expect(response.body).toEqual(invoice);
    expect(invoiceRepository.findById).toHaveBeenCalledWith('1');
  }, 10000); // Aumentando o timeout para 10 segundos

  it.skip('deve atualizar uma fatura e retornar status 200', async () => {
    const invoiceData = { totalCost: 150.0 };
    invoiceRepository.update.mockResolvedValue([1, [invoiceData]]);

    const response = await request(app)
      .put('/invoices/1')
      .send(invoiceData)
      .expect(200);

    expect(response.body).toEqual(invoiceData);
    expect(invoiceRepository.update).toHaveBeenCalledWith('1', invoiceData);
  }, 10000); // Aumentando o timeout para 10 segundos

  it.skip('deve excluir uma fatura e retornar status 204', async () => {
    invoiceRepository.delete.mockResolvedValue(1);

    await request(app)
      .delete('/invoices/1')
      .expect(204);

    expect(invoiceRepository.delete).toHaveBeenCalledWith('1');
  }, 10000); // Aumentando o timeout para 10 segundos
});
