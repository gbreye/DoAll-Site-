/* pega o id do formulario */
const form = document.getElementById('emailform')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    /* pega o valor do formulario de email */
    const par = {
        email: email
    }
    /* ele envia o template q eu fiz no EmailJS */
    emailjs.send(
    'service_wrcud4t', 
    'template_d6cpffs',
    par
  )/* esses são meus ids de template e de serviço */
  /* verifica a resposta do emailjs se der ruim vai da erro e se der bom vai aparecer o popup */
  .then(function(response) {
     console.log('email foi rapaiz', response.status, response.text);
     alert("email enviado com sucesso! ");
     formulario.reset(); 
  }, function(error) {
     console.error('erro pra enviar rapaiz', error);
     alert("Erro desconhecido");
  });

}) 