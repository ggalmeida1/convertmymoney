const axios = require('axios')
const url ='https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwLCJkYXRhQ290YWNhbyI6IjA0LTIxLTIwMjAifSwicHJvcHJpZWRhZGVzIjpbMCwxLDJdfQ=='

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.value
const getCotacao = async() => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
}

module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoAPI
}


// const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwLCJkYXRhQ290YWNhbyI6IjA0LTIxLTIwMjAifSwicHJvcHJpZWRhZGVzIjpbMCwxLDJdfQ==`
