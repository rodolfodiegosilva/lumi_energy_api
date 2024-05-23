const { Invoice } = require('../models');

class InvoiceRepository {
  async createInvoice(data) {
    try {
      const invoice = await Invoice.create(data);
      return invoice;
    } catch (error) {
      throw new Error('Erro ao criar fatura: ' + error.message);
    }
  }

  async getAllInvoices() {
    try {
      const invoices = await Invoice.findAll();
      return invoices;
    } catch (error) {
      throw new Error('Erro ao obter todas as faturas: ' + error.message);
    }
  }

  async getInvoiceById(id) {
    try {
      const invoice = await Invoice.findByPk(id);
      return invoice;
    } catch (error) {
      throw new Error('Erro ao obter fatura por ID: ' + error.message);
    }
  }

  async updateInvoice(id, data) {
    try {
      const [updated] = await Invoice.update(data, {
        where: { id }
      });
      return updated;
    } catch (error) {
      throw new Error('Erro ao atualizar fatura: ' + error.message);
    }
  }

  async deleteInvoice(id) {
    try {
      const deleted = await Invoice.destroy({
        where: { id }
      });
      return deleted;
    } catch (error) {
      throw new Error('Erro ao excluir fatura: ' + error.message);
    }
  }
}

module.exports = new InvoiceRepository();
