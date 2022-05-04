console.log('\n\n\n====================================');
if(process.env.node_env!=="prod"){
  require('dotenv').config();
}


const express = require('express');
const bodyParser = require('body-parser');

const GNet = require('./gnet/gnet')

const app = express();

app.set('view engine','ejs');
app.set('views','src/views');

app.use(bodyParser.json());

const gnetAlready = GNet();

app.get('/',(req,res)=>{
	res.send({
urls:['/','/cob/pix','/cob/list','/test']
});
});
app.post('/test',(req,res)=>{
  console.log('recebendo simulated webhook...'); 
  console.log(req.body.pix); 
  const pixList = JSON.parse(req.body.pix);
  for(const pix in pixList){
    console.log(pix);
    console.log(pix.endToEndId);
  }
  // res.send(req.body);
  res.send('processado...');
});

app.get('/cob/pix',async (req,res)=>{
  console.log('/cob/pix: gerando cob pix');
  const gnet = await gnetAlready;
  const dataCob={
    "calendario": {
      "expiracao": 3600
    },
    "valor": {
      "original": "0.01"
    },
    "chave": "marciocatalunha@gmail.com",
    "solicitacaoPagador": "teste js"
  };
  const resCob = await gnet.post('/v2/cob',dataCob)
  const resQRCode = await gnet.get(`/v2/loc/${resCob.data.loc.id}/qrcode`);

  res.render('qrcode',{qrcodeImage:resQRCode.data.imagemQrcode})
});

app.get('/cob/list',async (req,res)=>{
  console.log('listando cobs');
  const gnet = await gnetAlready;
  const resCob = await gnet.get('/v2/cob?inicio=2022-05-01T00:00:00Z&fim=2022-05-03T23:59:00Z');
  res.send(resCob.data);
});

app.post('/webhook(/pix)?',async (req,res)=>{
  console.log('recebendo webhook...'); 
  console.log(req.body);
  res.send('webhook: Ok');
});



app.listen(8000,()=>{
  console.log('APP Pix Running...')
});
