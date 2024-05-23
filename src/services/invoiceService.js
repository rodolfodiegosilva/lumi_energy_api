const pdfService = require('./pdfService');
const invoiceRepository = require('../repositories/invoiceRepository');

class InvoiceService {

  
  async processPDF(file) {
    try {
      if (!file || !file.path) {
        throw new Error('File not provided or invalid');
      }
      const data = await pdfService.extractData(file.path);
      const invoice = await invoiceRepository.createInvoice(data);
      return invoice;
    } catch (error) {
      throw new Error('Erro ao processar o PDF: ' + error.message);
    }
  }
  async createInvoice(data) {
    try {
      const invoice = await invoiceRepository.createInvoice(data);
      return invoice;
    } catch (error) {
      throw new Error('Erro ao criar fatura: ' + error.message);
    }
  }

  async getAllInvoices() {
    try {
      const invoices = await invoiceRepository.getAllInvoices();
      return invoices;
    } catch (error) {
      throw new Error('Erro ao obter faturas: ' + error.message);
    }
  }

  async getInvoiceById(id) {
    try {
      const invoice = await invoiceRepository.getInvoiceById(id);
      if (!invoice) {
        throw new Error('Invoice not found');
      }
      return invoice;
    } catch (error) {
      throw new Error('Erro ao obter fatura: ' + error.message);
    }
  }

  async updateInvoice(id, data) {
    try {
      const updated = await invoiceRepository.updateInvoice(id, data);
      if (!updated) {
        throw new Error('Invoice not found');
      }
      return updated;
    } catch (error) {
      throw new Error('Erro ao atualizar fatura: ' + error.message);
    }
  }

  async deleteInvoice(id) {
    try {
      const deleted = await invoiceRepository.deleteInvoice(id);
      if (!deleted) {
        throw new Error('Invoice not found');
      }
      return deleted;
    } catch (error) {
      throw new Error('Erro ao excluir fatura: ' + error.message);
    }
  }
}

module.exports = new InvoiceService();
