const cuentas = require('../data/cuentas.json')

exports.listarCuentas = (req, res) => {
    res.json({
        count: cuentas.length,
        data: cuentas
    });
};

exports.obtenerCuenta = (req, res) => {
    const id = parseInt(req.params.id);
    const cuenta = cuentas.find(c => c.id === id);
    res.json({
        finded: !!cuenta,
        account: cuenta || null
    });
};

exports.buscarCuentas = (req , res) => {
    const { queryParam }  = req.query;
    let resultados = cuentas.filter (
        c => 
            c.id == queryParam  ||
            c.name.toLowerCase().includes(queryParam.toLowerCase()) ||
            c.gender.toLowerCase() === queryParam.toLowerCase() 
    );

    if(resultados.length === 1) 
        res.json ({ finded: true, account: resultados[0]});
    else if (resultados.length > 1)
        res.json ({ finded: true, data: resultados});
    else
        res.json ({ finded: false});
}

exports.obtenerBalanceTotal = (req, res) => {
    const activas = cuentas.filter(c => c.isActive);
    const total = activas.reduce ((sum, c) => sum + c.balance, 0);
    res.json({
        status: activas.length > 0,
        accountBalance: total
    });
};
