const cors = require( 'cors' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const express = require( 'express' );
const dotenv = require("dotenv");
const path = require( 'path' );
const fileUpload = require( 'express-fileupload' );
require('ejs');

dotenv.config({ path: ".env" });

const app = express();


const port = process.env.PORT || 4000;

app.use( cors() );
app.use( helmet({ contentSecurityPolicy: false }) );
app.use( morgan('dev') );
app.use( express.json() );
app.use(fileUpload())
app.use( express.urlencoded({ extended: true }) );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(require('./routes/img.routes'));

app.listen( port, () => console.log( `Server en el puerto ${port}` ) );

