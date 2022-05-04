console.log('teste');
const obj = {
  pix: [
    {
      endToEndId: 'E00360305202205040852796c377358c1',
      txid: 'a032cf3c9f4c4d889f342df73608fae41',
      chave: 'marciocatalunha@gmail.com',
      valor: '0.01',
      horario: '2022-05-04T11:52:57.000Z'
    },
    {
      endToEndId: 'E00360305202205040852796c377358c2',
      txid: 'a032cf3c9f4c4d889f342df73608fae42',
      chave: 'marciocatalunha@gmail.com',
      valor: '0.02',
      horario: '2022-05-04T11:52:57.000Z'
    }
  ]
};

// console.log('obj = ',obj);
// console.log('obj.pix = ',obj.pix);
// console.log('obj.pix = ',obj.pix);
for(const pix of obj.pix){
  console.log('+++');
  console.log(pix.endToEndId);
  console.log(pix.txid);
  console.log(pix.chave);
  console.log(pix.valor);
  console.log(new Date(pix.horario));
  console.log(pix.horario);
  // const pixjson = JSON.parse(pix);
  // console.log(pixjson.endToEndId);
}