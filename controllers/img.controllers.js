
const ctrl={};

// vistas
ctrl.indexVista = (req, res) => {
    res.render('index');
};


// crud
ctrl.guardarImagen = (req,res) => {
    console.log(req.files);
};




module.exports = ctrl