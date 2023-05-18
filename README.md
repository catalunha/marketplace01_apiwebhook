# Entrar no Servidor da AWS
catalunha@pop-os:~/myapp/marketplace01/aws$ ssh -i keyparwebhook.pem ubuntu@44.197.92.210



# Fonte
https://youtu.be/bo1THXaohU0

Também ajuda: 
https://youtu.be/Sh5bun2Kmbo

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
ubuntu@ip-172-31-30-120:~$ export gnet_client_id=""
ubuntu@ip-172-31-30-120:~$ export gnet_client_secret=""
ubuntu@ip-172-31-30-120:~$ export gnet_endpoint="https://api-pix.gerencianet.com.br"
ubuntu@ip-172-31-30-120:~$ export gnet_cert="producao-365498-marketplace01-p.p12"
ubuntu@ip-172-31-30-120:~$ cd marketplace01_apiwebhook/

# pm2
veja 
https://pm2.keymetrics.io/docs/usage/quick-start/

Aqui nao mostrou como criei o pm2 neste projeto mas vindo da aula do luizotavio do cursojs tenho estes caminhos
sudo npm i -g pm2
...$ pm2 start src/server.js --name mkp01apiwebhook
...$ pm2 list
...$ pm2 startup
...$ pm2 start mkp01apiwebhook
...$ pm2 stop mkp01apiwebhook


ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Init System found: systemd
Platform systemd
Template
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=ubuntu
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Environment=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/home/ubuntu/.pm2
PIDFile=/home/ubuntu/.pm2/pm2.pid
Restart=on-failure

ExecStart=/usr/local/lib/node_modules/pm2/bin/pm2 resurrect
ExecReload=/usr/local/lib/node_modules/pm2/bin/pm2 reload all
ExecStop=/usr/local/lib/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target

Target path
/etc/systemd/system/pm2-ubuntu.service
Command list
[ 'systemctl enable pm2-ubuntu' ]
[PM2] Writing init configuration in /etc/systemd/system/pm2-ubuntu.service
[PM2] Making script booting at startup...
[PM2] [-] Executing: systemctl enable pm2-ubuntu...
Created symlink /etc/systemd/system/multi-user.target.wants/pm2-ubuntu.service → /etc/systemd/system/pm2-ubuntu.service.
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup systemd
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ 




start a aplicação com pm2
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ pm2 start src/server.js 

Como que eu rodo a aplicação sem instalar nginx
ate agora nao instalei nginx


$ sudo apt-get install nginx

ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2022-05-04 11:05:29 UTC; 1 day 2h ago
       Docs: man:nginx(8)
   Main PID: 18998 (nginx)
      Tasks: 2 (limit: 1146)
     Memory: 5.4M
        CPU: 681ms
     CGroup: /system.slice/nginx.service
             ├─18998 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             └─18999 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" >

May 04 11:05:29 ip-172-31-30-120 systemd[1]: nginx.service: Deactivated successfully.
May 04 11:05:29 ip-172-31-30-120 systemd[1]: Stopped A high performance web server and a reve>
May 04 11:05:29 ip-172-31-30-120 systemd[1]: Starting A high performance web server and a rev>
May 04 11:05:29 ip-172-31-30-120 systemd[1]: Started A high performance web server and a reve>
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ 

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



# certbot
+++
Estes sao os comando para certbot do cursojs
$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
$ sudo apt-get install certbot
$ sudo service nginx stop
$ sudo certbot certonly --standalone -d curso.otaviomiranda.com.br
$ sudo service nginx start
Após certificado vencer vc precisa renovar com o comando a seguir...
$ sudo certbot renew

---

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
# cod do nginx após atualizacao do certbot e do webhook no server. conf final

```
ubuntu@ip-172-31-30-120:~$ cat /etc/nginx/sites-available/gn-api-pix.conf 
server {

  server_name api.brintec.org;

  access_log /var/log/nginx/gn-api-pix-access.log;
  error_log /var/log/nginx/gn-api-pix-error.log;

    location /webhook {
        if ($ssl_client_verify != SUCCESS) {
            return 403;
        }
        proxy_pass http://127.0.0.1:8000;
    }
  location / {
    proxy_pass http://127.0.0.1:8000;
  }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.brintec.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.brintec.org/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    ssl_client_certificate /home/ubuntu/marketplace01_apiwebhook/certs/chain-pix-prod.crt;  # my edit to gnet
    ssl_verify_client optional; #  my edit to gnet
    ssl_verify_depth 3; # my edit to gnet

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

catalunha@pop-os:~/myapp/marketplace01/aws$ ssh -i keyparwebhook.pem ubuntu@44.197.92.210
ubuntu@ip-172-31-30-120:~$ cd marketplace01_apiwebhook/
ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ git pull origin master; pm2 restart src/server.js ; pm2 logs

ubuntu@ip-172-31-30-120:~/marketplace01_apiwebhook$ export b4a_user_sessionToken="r:b17870e3a25a46437432c09acb38ff8a"


# Estudar systemctl
* https://www.certificacaolinux.com.br/comando-linux-systemctl/#:~:text=)%20%5BGuia%20B%C3%A1sico%5D-,Comando%20systemctl%20no%20Linux%20(gerenciador%20do%20systemd)%20%5BGuia%20B%C3%A1sico,de%20Kernel%20superiores%20a%202.6.
* https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units
* https://sempreupdate.com.br/como-usar-o-systemctl-para-gerenciar-servicos-do-systemd/
* https://sempreupdate.com.br/dicas-de-como-usar-o-comando-systemctl-no-linux/
* https://e-tinet.com/linux/systemd/




# Duvida ao support b4a

Gostaria de consultar a vocês qual das alternativas a seguir é mais segura ou interessante. Sabendo que não sao as unicas portas abertas no meu contexto, mas salvando estas ja ajuda.

Contexto:
Construi um app em js no servidor descrito a seguir apenas para receber chamadas de webhook do banco gerencianet e enviar os dados ao b4a.

Servidor:
Instanciei uma maquina virtual Ubuntu 20LTS, na AWS, registrei certificado ssl com certbot para https. Configurei nginx para redirecionar falta de mTLS com banco para 404. Se desejar mais informações sobre a mesma me solicitar.

nginx, se precisa do conf completo só pedir:
```
server {
  location /webhook {
    if ($ssl_client_verify != SUCCESS) {
      return 403;
    }
    proxy_pass http://127.0.0.1:8000;
  }
}
```

Resumo dos Apps:

App01:
...
Parse.initialize(process.env.b4a_applicationId,process.env.b4a_javaScriptKey);
Parse.serverURL = 'https://parseapi.back4app.com';
...
app.post('/webhook(/pix)?',async (req,res)=>{
  console.log('Recebendo webhook pix do banco GNet ...'); 
  const PixReceived = Parse.Object.extend('PixReceived');
  const pixReceived = new PixReceived();
  for(const pix of req.body.pix){
    try {
      pixReceived.set('endToEndId',pix.endToEndId);
      const result = await pixReceived.save(null,{sessionToken:process.env.b4a_user_root_sessionToken});
    } catch (error) {
      console.log('PixReceived: error');
      console.log(error);
    }
  }
});

App02:
...
app.post('/webhook(/pix)?',async (req,res)=>{
  await axios({
      method:'POST',
      url:'https://parseapi.back4app.com/functions/create-pix',
      headers:{
        X-Parse-Application-Id: process.env.XParseParseApplicationId,
        X-Parse-REST-API-Key: process.env.XParseRESTAPIKey,
        X-Parse-Session-Token: process.env.XParseSessionToken,
        'Content-Type':'application/json'
      },
      data: req.body
    });
});
...

App03:
...
app.post('/webhook(/pix)?',async (req,res)=>{
  await axios({
      method:'POST',
      url:'https://parseapi.back4app.com/parse/classes/PixReceived',
      headers:{
        X-Parse-Application-Id: process.env.XParseParseApplicationId,
        X-Parse-REST-API-Key: process.env.XParseRESTAPIKey,
        'Content-Type':'application/json'
      },
      data: req.body
    });
});
...

Duvida:
App1: Instalar Parse-SDK-JS localmente. Fazer Parse.initialize(applicationId,b4a_javaScriptKey). Usar sessionToken para escrever na database direto.

App2: Nao instala Parse. Fazer REST API para cloud com X-Parse-Application-Id,X-Parse-REST-API-Key,X-Parse-Session-Token

App3: Nao instala Parse. Fazer REST API para Database direto com X-Parse-Application-Id, X-Parse-REST-API-Key

Pois cada um usa keys,tokens,etc diferentes e abordagens diferentes.

Qual App seria sugestão de vcs ?
