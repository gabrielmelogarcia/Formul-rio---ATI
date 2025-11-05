const btn = document.querySelector('#submitBtn');

btn.addEventListener('click', function(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const cpf = document.querySelector('#cpf').value;
    const cep = document.querySelector('#cep').value;
    const dataNasc = document.querySelector('#data_nasc').value;

    console.table({nome, email, telefone, cpf, cep, dataNasc});
})
