const { Router } = require( 'express' );
const { indexVista, guardarImagen } = require('../controllers/img.controllers');



const router = Router();

// vista
// router.get( '/', indexVista );
router.get('/',(req,res)=>{
    res.render('index')
})
 
router.post('/img', guardarImagen);

// crud
// router.get ( '/api', index );

module.exports = router;