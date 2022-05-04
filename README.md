# Fonte
https://youtu.be/bo1THXaohU0


#aws 
```
catalunha@pop-os:~/myapp/marketplace01/aws$ ssh -i keyparwebhook.pem ubuntu@54.160.201.48

ubuntu@ip-172-31-30-120:~$ sudo apt-get update

# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

ubuntu@ip-172-31-30-120:~$ node -v
v12.22.9

ubuntu@ip-172-31-30-120:~$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/ubuntu/.ssh/id_rsa
Your public key has been saved in /home/ubuntu/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:tv1Pv+ENIV9MWWOGXi9jZOh4xGz6jPolzx4j0p8nf6I ubuntu@ip-172-31-30-120
The key's randomart image is:
+---[RSA 3072]----+
|           o ..+.|
|            *.=.+|
|           *.o..o|
|          o o.+o.|
|        S  =...oo|
|       . +. oo o |
|        o.= + +. |
|        .. O.=+o+|
|         ...E*o=+|
+----[SHA256]-----+
ubuntu@ip-172-31-30-120:~$ 
ubuntu@ip-172-31-30-120:~$ ssh-keygen -t rsa -C "catalunha.mj@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa): 
/home/ubuntu/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/ubuntu/.ssh/id_rsa
Your public key has been saved in /home/ubuntu/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:2f4krBEvWwZDhPH3KjcXRDtUDenTb0RzLMM5OQU0/ag catalunha.mj@gmail.com
The key's randomart image is:
+---[RSA 3072]----+
|      .o.   o+*@.|
|      .o   o .Xo*|
|        o . +. O+|
|       . + o .+ +|
|        S . o. o.|
|         B .E.  o|
|        + @ o  . |
|         X *     |
|        o   .    |
+----[SHA256]-----+

configurando variaveis de ambiente:

# PRODUCAO
export gnet_client_id="Client_Id_9b4f5551b6d4f23baa9c3a483cf2a5dcaea2509e"
export gnet_client_secret="Client_Secret_ce8e1cb51703e533e4c050d0152584638594d2a5"
export gnet_endpoint="https://api-pix.gerencianet.com.br"
export gnet_cert="producao-365498-marketplace01-p.p12"

ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ node src/server.js
====================================
authGnet...
APP Pix Running...



```

# git hub
no servidor

$ git config --global user.name "your_github_username"
$ git config --global user.email "your_github_email"
$ git config -l

From your GitHub account, go to Settings => Developer Settings => Personal Access Token => Generate New Token (Give your password) => Fillup the form => click Generate token => Copy the generated Token, it will be something like

meu topken foi:
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

ubuntu@ip-172-31-30-120:~$ git clone https://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@github.com/catalunha/marketplace01_apiwebhook.git


# config
```
$ npm init -y
$ npm i -D nodemon dotenv
$ npm i -P axios
$ npm i -P ejs express
$ npm i -P body-parser
```

# times
em 1:00:00
ele pegou client_id e client_secret da auth

# teste
ip de teste variavel
http://54.160.201.48:8000/

ip elastico fixo associado a instancia
http://44.197.92.210:8000/


configurando dns 

Host name
Type
TTL 	Data 
api.brintec.org	A	1 hour	
44.197.92.210

http://api.brintec.org:8000/

export as variaveis de ambiente novamente
ubuntu@ip-172-31-30-120:~$ export gnet_client_id="Client_Id_9b4f5551b6d4f23baa9c3a483cf2a5dcaea2509e"
ubuntu@ip-172-31-30-120:~$ export gnet_client_secret="Client_Secret_ce8e1cb51703e533e4c050d0152584638594d2a5"
ubuntu@ip-172-31-30-120:~$ export gnet_endpoint="https://api-pix.gerencianet.com.br"
ubuntu@ip-172-31-30-120:~$ export gnet_cert="producao-365498-marketplace01-p.p12"
ubuntu@ip-172-31-30-120:~$ cd marketplace01_apiwebhook/

start a aplicação com pm2
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ pm2 start src/server.js 

Como que eu rodo a aplicação sem instalar nginx
ate agora nao instalei nginx


$ sudo apt-get install nginx
```
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo nano /etc/nginx/sites-available/gn-api-pix.conf

server {
  listen 80;
  listen [::]:80;

  server_name api.brintec.org;

  access_log /var/log/nginx/gn-api-pix-access.log;
  error_log /var/log/nginx/gn-api-pix-error.log;
  location / {
    add_header Content-Type text/html;
    return 200 'API Pix';
  }
}

sudo ln -s /etc/nginx/sites-available/gn-api-pix.conf /etc/nginx/sites-enabled/gn-api-pix.conf


ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$ ls -la /etc/nginx/sites-enabled/
total 8
drwxr-xr-x 2 root root 4096 May  3 20:54 .
drwxr-xr-x 8 root root 4096 May  3 20:38 ..
lrwxrwxrwx 1 root root   42 May  3 20:54 gn-api-pix.conf -> /etc/nginx/sites-available/gn-api-pix.conf
ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

assim quando acessar a web 
http://api.brintec.org
ele responde com o texto API Pix

alterando para 
server {
  listen 80;
  listen [::]:80;

  server_name api.brintec.org;

  access_log /var/log/nginx/gn-api-pix-access.log;
  error_log /var/log/nginx/gn-api-pix-error.log;
  location / {
    proxy_pass http://127.0.0.1:8000;
  }
}
ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$ sudo systemctl reload nginx
ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$ sudo nano gn-api-pix.conf
ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$

ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo apt-get install certbot python3-certbot-nginx

ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): catalunha.mj@gmail.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y
Account registered.

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: api.brintec.org
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1
Requesting a certificate for api.brintec.org

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/api.brintec.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/api.brintec.org/privkey.pem
This certificate expires on 2022-08-01.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for api.brintec.org to /etc/nginx/sites-enabled/gn-api-pix.conf
Congratulations! You have successfully enabled HTTPS on https://api.brintec.org
We were unable to subscribe you the EFF mailing list because your e-mail address appears to be invalid. You can try again later by visiting https://act.eff.org.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ 


ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: api.brintec.org
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1
Certificate not yet due for renewal

You have an existing certificate that has exactly the same domains or certificate name you requested and isn't close to expiry.
(ref: /etc/letsencrypt/renewal/api.brintec.org.conf)

What would you like to do?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Attempt to reinstall this existing certificate
2: Renew & replace the certificate (may be subject to CA rate limits)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Renewing an existing certificate for api.brintec.org

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/api.brintec.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/api.brintec.org/privkey.pem
This certificate expires on 2022-08-01.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for api.brintec.org to /etc/nginx/sites-enabled/gn-api-pix.conf
Your existing certificate has been successfully renewed, and the new certificate has been installed.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ 

# certbot editou o arq de nginx


ubuntu@ip-172-31-30-120:/etc/nginx/sites-available$ cat gn-api-pix.conf 
server {

  server_name api.brintec.org;

  access_log /var/log/nginx/gn-api-pix-access.log;
  error_log /var/log/nginx/gn-api-pix-error.log;
  location / {
    proxy_pass http://127.0.0.1:8000;
  }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.brintec.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.brintec.org/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot



}
server {
    if ($host = api.brintec.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  listen 80;
  listen [::]:80;

  server_name api.brintec.org;
    return 404; # managed by Certbot
}

# config as infos do gnet
/home/ubuntu/marketplace01_apiwebhook/certs


0|server  | gerando cob
0|server  | recebendo webhook...
0|server  | {
0|server  |   pix: [
0|server  |     {
0|server  |       endToEndId: 'E00360305202205040852796c377358c',
0|server  |       txid: 'a032cf3c9f4c4d889f342df73608fae4',
0|server  |       chave: 'marciocatalunha@gmail.com',
0|server  |       valor: '0.01',
0|server  |       horario: '2022-05-04T11:52:57.000Z'
0|server  |     }
0|server  |   ]
0|server  | }
0|server  | recebendo webhook...
0|server  | {
0|server  |   pix: [
0|server  |     {
0|server  |       endToEndId: 'E0036030520220504085873365907a6a',
0|server  |       txid: '5f8370be08464b43a3c7813ba6aa4312',
0|server  |       chave: 'marciocatalunha@gmail.com',
0|server  |       valor: '0.01',
0|server  |       horario: '2022-05-04T11:58:46.000Z'
0|server  |     }
0|server  |   ]
0|server  | }


# cod no server

```js
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ cat src/server.js 
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

app.get('/test',(req,res)=>{});

app.get('/cob/pix',async (req,res)=>{
  console.log('gerando cob pix');
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

```


# Exemplo webhook retorn

 {
  pix: [
    {
      endToEndId: 'E00360305202205040852796c377358c',
      txid: 'a032cf3c9f4c4d889f342df73608fae4',
      chave: 'marciocatalunha@gmail.com',
      valor: '0.01',
      horario: '2022-05-04T11:52:57.000Z'
    }
  ]
}


{
  "pix": [
    {
      "endToEndId": "E00360305202205040852796c377358c",
      "txid": "a032cf3c9f4c4d889f342df73608fae4",
      "chave": "marciocatalunha@gmail.com",
      "valor": "0.01",
      "horario": "2022-05-04T11:52:57.000Z"
    }
  ]
}

git pull origin master; pm2 restart src/server.js ; pm2 logs


# Parse
$ npm i parse
nao esqueça de fazer isto no servidor tb

