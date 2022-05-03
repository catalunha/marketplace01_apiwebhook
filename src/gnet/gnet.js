const axios = require('axios');
const fs = require('fs');
const path = require('path');
const https = require('https');

const cert = fs.readFileSync(path.resolve(__dirname,`../../certs/${process.env.gnet_cert}`));

const httpsAgent = new https.Agent({
  pfx:cert,
  passphrase:'',
})
const credentials = Buffer.from(`${process.env.gnet_client_id}:${process.env.gnet_client_secret}`).toString('base64');

const authGnet = async () => {
  console.log('authGnet...');
  const result = await axios({
      method:'POST',
      url:`${process.env.gnet_endpoint}/oauth/token`,
      headers:{
        Authorization: `Basic ${credentials}`,
        'Content-Type':'application/json'
      },
      httpsAgent:httpsAgent,
      data:{
        grant_type: 'client_credentials'
      }
    });
// console.log(result.data);
return result.data;
};

const gnAxiosCreateAuth = async ()=>{
  const resultAuth = await authGnet();
  const accessToken = resultAuth.access_token;  
  return await axios.create({
    baseURL:process.env.gnet_endpoint,
    httpsAgent: httpsAgent,
    headers:{
      Authorization: `Bearer ${accessToken}`,
      'Content-Type':'application/json'
    },
  });
}

module.exports = gnAxiosCreateAuth;