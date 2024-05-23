const invoiceService = require('../services/invoiceService');
const path = require('path');


const create = async (req, res) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: 'Error creating invoice' });
  }
};

const getAll = async (req, res) => {
  try {
    const invoices = await invoiceService.getAllInvoices();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching invoices' });
  }
};

const getById = async (req, res) => {
  try {
    const invoice = await invoiceService.getInvoiceById(req.params.id);
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching invoice' });
  }
};

const update = async (req, res) => {
  try {
    const invoice = await invoiceService.updateInvoice(req.params.id, req.body);
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating invoice' });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const invoice = await invoiceService.deleteInvoice(req.params.id);
    if (invoice) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting invoice' });
  }
};

const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const extractedData = await invoiceService.processPDF(req.file);
    res.status(201).json(extractedData);
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'Error processing PDF' });
  }
};

const download = async (req, res) => {
  try {
    const invoice = await invoiceService.getInvoiceById(req.params.id);
    if (invoice) {
      const filePath = path.resolve(invoice.filePath);
      console.log('File path:', filePath);  // Adicione este log
      res.download(filePath);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    console.error('Download error:', error);  // Adicione este log
    res.status(500).json({ error: 'Error downloading file' });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  delete: deleteInvoice,
  uploadPDF,
  download  
};
