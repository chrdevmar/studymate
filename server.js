import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3030;

app.get('/', (req, res)=>{
	res.send('Hello World');
});

app.listen(port, ()=>{
	console.log('Listening on port ' + port);
});

