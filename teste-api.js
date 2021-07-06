const axios = require ('axios')

const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao=%2707-05-2021%27&%24top=100&%24format=json&fbclid=IwAR1r6vXDUb_JBvyMr_tFvW3C2fu0Xi7qwsmPO5jHBOVEcpasIjmCSreQF5o'

axios
    .get(url)
    .then( res => console.log(res.data.value[0].cotacaoVenda))
    .catch( err => console.log(err))