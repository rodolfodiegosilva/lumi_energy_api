const fs = require('fs');
const pdf = require('pdf-parse');

class PdfService {
  async extractData(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    // Implemente a lógica para extrair e formatar os dados necessários do texto extraído do PDF
    const extractedData = this.parseData(data.text);
    extractedData.filePath = filePath;
    return extractedData;
  }

  parseData(text) {
    const clientNumber = this.extractClientNumber(text);
    const referenceMonth = this.extractReferenceMonth(text);
    const energyConsumption = this.extractEnergyConsumption(text);
    const energyCost = this.extractEnergyCost(text);
    const sceeEnergy = this.extractSceeEnergy(text);
    const sceeCost = this.extractSceeCost(text);
    const gdEnergy = this.extractGdEnergy(text);
    const gdCost = this.extractGdCost(text);
    const municipalTax = this.extractMunicipalTax(text);
    const totalCost = this.extractTotalCost(text);
    const dueDate = this.extractDueDate(text);
    const issueDate = this.extractIssueDate(text);

    return {
      clientNumber,
      referenceMonth,
      energyConsumption,
      energyCost,
      sceeEnergy,
      sceeCost,
      gdEnergy,
      gdCost,
      municipalTax,
      totalCost,
      dueDate,
      issueDate
    };
  }

  extractClientNumber(text) {
    const match = text.match(/\s{3}(\d{10})/);
    console.log('Client Number:', match ? match[1] : "null");
    return match ? match[1] : null;
  }

  extractReferenceMonth(text) {
    const match = text.match(/\s{5}([A-Z]{3}\/\d{4})/);
    console.log('Reference Month:', match ? match[1] : "null");
    return match ? match[1] : null;
  }

  extractEnergyConsumption(text) {
    const match = text.match(/Energia Elétrica.*kWh\s+(\d+)\s/);
    console.log('Energy Consumption:', match ? parseFloat(match[1]) : "null");
    return match ? parseFloat(match[1]) : null;
  }

  extractEnergyCost(text) {
    const match = text.match(/Energia Elétrica.*kWh\s+\d+\s+[\d.,]+\s+([\d.,]+)/);
    console.log('Energy Cost:', match ? parseFloat(match[1].replace(',', '.')) : "null");
    return match ? parseFloat(match[1].replace(',', '.')) : "null";
  }

  extractSceeEnergy(text) {
    const match = text.match(/Energia SCEE.*kWh\s+(\d+)\s/);
    console.log('SCEE Energy:', match ? parseFloat(match[1]) : "null");
    return match ? parseFloat(match[1]) : null;
  }

  extractSceeCost(text) {
    const match = text.match(/Energia SCEE.*kWh\s+\d+\s+[\d.,]+\s+([\d.,]+)/);
    console.log('SCEE Cost:', match ? parseFloat(match[1].replace(',', '.')) : "null");
    return match ? parseFloat(match[1].replace(',', '.')) : "null";
  }

  extractGdEnergy(text) {
    const match = text.match(/Energia compensada GD I.*kWh\s+(\d+)\s/);
    console.log('GD Energy:', match ? parseFloat(match[1]) : "null");
    return match ? parseFloat(match[1]) : "null";
  }

  extractGdCost(text) {
    const match = text.match(/Energia compensada GD I.*kWh\s+\d+\s+([\d.,-]+)/);
    console.log('GD Cost:', match ? parseFloat(match[1].replace(',', '.')) : "null");
    return match ? parseFloat(match[1].replace(',', '.')) : "null";
  }

  extractMunicipalTax(text) {
    const match = text.match(/Contrib Ilum Publica Municipal\s+([\d.,]+)/);
    console.log('Municipal Tax:', match ? parseFloat(match[1].replace(',', '.')) : "null");
    return match ? parseFloat(match[1].replace(',', '.')) : "null";
  }

  extractTotalCost(text) {
    const match = text.match(/TOTAL\s+([\d.,]+)/);
    console.log('Total Cost:', match ? parseFloat(match[1].replace(',', '.')) : "null");
    return match ? parseFloat(match[1].replace(',', '.')) : "null";
  }

  extractDueDate(text) {
    const match = text.match(/Vencimento\s+(\d{2}\/\d{2}\/\d{4})/);
    console.log('Due Date:', match ? match[1] : "null");
    return match ? match[1] : "null";
  }

  extractIssueDate(text) {
    const match = text.match(/Data de emissão:\s+(\d{2}\/\d{2}\/\d{4})/);
    console.log('Issue Date:', match ? match[1] : "null");
    return match ? match[1] : "null";
  }
}

module.exports = new PdfService();  
