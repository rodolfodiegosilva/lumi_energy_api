const invoiceService = require('../src/services/invoiceService');
const invoiceRepository = require('../src/repositories/invoiceRepository');

jest.mock('../src/repositories/invoiceRepository');

describe('Invoice Service', () => {
  it('deve criar uma nova fatura', async () => {
    const invoiceData = { clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 };
    invoiceRepository.createInvoice.mockResolvedValue(invoiceData);

    const result = await invoiceService.createInvoice(invoiceData);

    expect(result).toEqual(invoiceData);
    expect(invoiceRepository.createInvoice).toHaveBeenCalledWith(invoiceData);
  });

  it('deve buscar todas as faturas', async () => {
    const invoices = [{ id: 1, clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 }];
    invoiceRepository.getAllInvoices.mockResolvedValue(invoices);

    const result = await invoiceService.getAllInvoices();

    expect(result).toEqual(invoices);
    expect(invoiceRepository.getAllInvoices).toHaveBeenCalled();
  });

  it('deve buscar uma fatura pelo ID', async () => {
    const invoice = { id: 1, clientNumber: '1234', referenceMonth: '2023-01', totalCost: 100.0 };
    invoiceRepository.getInvoiceById.mockResolvedValue(invoice);

    const result = await invoiceService.getInvoiceById(1);

    expect(result).toEqual(invoice);
    expect(invoiceRepository.getInvoiceById).toHaveBeenCalledWith(1);
  });

  it('deve lançar um erro ao tentar buscar uma fatura pelo ID inexistente', async () => {
    invoiceRepository.getInvoiceById.mockResolvedValue(null);

    await expect(invoiceService.getInvoiceById(999)).rejects.toThrow('Invoice not found');
    expect(invoiceRepository.getInvoiceById).toHaveBeenCalledWith(999);
  });

  it('deve atualizar uma fatura', async () => {
    const invoiceData = { totalCost: 150.0 };
    invoiceRepository.updateInvoice.mockResolvedValue([1, [invoiceData]]);

    const result = await invoiceService.updateInvoice(1, invoiceData);

    expect(result).toEqual([1, [invoiceData]]);
    expect(invoiceRepository.updateInvoice).toHaveBeenCalledWith(1, invoiceData);
  });

  it('deve excluir uma fatura', async () => {
    invoiceRepository.deleteInvoice.mockResolvedValue(1);

    const result = await invoiceService.deleteInvoice(1);

    expect(result).toBe(1);
    expect(invoiceRepository.deleteInvoice).toHaveBeenCalledWith(1);
  });
});
