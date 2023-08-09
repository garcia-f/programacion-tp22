const cors = require( 'cors' );
const helmet = require( 'helmet' );
const morgan = require( morgan );
const express = require( 'express' );

const path = require( 'path' );

const app = express();

require( 'dotenv' ).config()
const port = process.env.PORT || 4000

app.use( cors() );
app.use( helmet() );
app.use( morgan('dev') );
app.use( express.json() );


app.listen( port, () => console.log( `Server en el puerto ${port}` ) );

