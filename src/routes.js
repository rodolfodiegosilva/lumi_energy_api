const express = require('express');
const router = express.Router();
const invoiceController = require('./controllers/invoiceController');
const multer = require('multer');

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

router.post('/upload-pdf', upload.single('file'), invoiceController.uploadPDF);
router.post('/invoices', invoiceController.create);
router.get('/invoices', invoiceController.getAll);
router.get('/invoices/:id', invoiceController.getById);
router.put('/invoices/:id', invoiceController.update);
router.delete('/invoices/:id', invoiceController.delete);

module.exports = router;
