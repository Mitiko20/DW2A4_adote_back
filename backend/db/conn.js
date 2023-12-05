const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://root:root@cluster.99chqhn.mongodb.net/?retryWrites=true&w=majority')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
