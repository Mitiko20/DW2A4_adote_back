require('dotenv').config({ path: '.env.local' });  // Carrega as variáveis de ambiente do arquivo .env.local

const mongoose = require('mongoose');

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;  // Obtém o valor de MONGODB_URI da variável de ambiente

  if (!MONGODB_URI) {
    console.error('A variável de ambiente MONGODB_URI não está configurada.');
    return;
  }

  await mongoose.connect(MONGODB_URI);
  console.log('Conectou com Mongoose!');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
