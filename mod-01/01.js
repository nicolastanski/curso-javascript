var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function showAddress() {
    return 'O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf +
    ', no bairro ' + endereco.bairro + ', na ' + endereco.rua + ' com nº ' + endereco.numero + '.';
}

console.log(showAddress());
