const express = require('express');
const app = express();
const PORT = 3130;

const cuentasRoutes = require('./server/routes/cuentas.routes');

app.use(express.json());
app.use('/cuentas', cuentasRoutes);

app.listen(PORT , () => console.log(`Servidor corriendo en el puerto ${PORT}`));
