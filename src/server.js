console.log('\n\n\n====================================');
if(process.env.node_env!=="prod"){
  require('dotenv').config();
}


const express = require('express');
const bodyParser = require('body-parser');
const Parse = require('parse/node');

//javascriptKey is required only if you have it on server.
Parse.initialize("AfVRhNjnT7JtlMavwEqXGUS44yAR9miujqadIdXV", "PjagB5OSyAihG7AYWLkQ0RiVRhwVfbOLMWFnCmrq");
Parse.serverURL = 'https://parseapi.back4app.com';

// const Order = Parse.Object.extend("Order");
// const query = new Parse.Query(Order);
// query.get("Y6FxfDiQ3C")
// .then((order) => {
//   console.log('order:');
//   console.log(order);
// }, (error) => {
//   console.log('order: Error');
//   console.log(error);
// });

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

app.post('/test', async (req,res)=>{
  console.log('recebendo simulated webhook...'); 
  console.log('req.user');
  console.log(req.user);
  const PixReceived = Parse.Object.extend('PixReceived');
  const pixReceived = new PixReceived();
  for(const pix of req.body.pix){
    try {
      console.log('PixReceived: creating for txid ',pix.txid);
      pixReceived.set('endToEndId',pix.endToEndId);
      pixReceived.set('txid',pix.txid);
      pixReceived.set('chave',pix.chave);
      pixReceived.set('valor',pix.valor);
      pixReceived.set('horario',new Date(pix.horario));
      pixReceived.set('infoPagador',pix.infoPagador);
      const result = await pixReceived.save();
      console.log('PixReceived: id created',result.id);
    } catch (error) {
      console.log('PixReceived: error');
      console.log(error);
    }
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
