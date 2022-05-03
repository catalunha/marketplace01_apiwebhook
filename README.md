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

```


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