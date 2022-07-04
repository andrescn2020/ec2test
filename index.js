require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preCharge } = require('./src/controllers/publicationControl.js');
const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {

  preCharge();

  server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

});