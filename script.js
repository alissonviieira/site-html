$(document).ready(function() {
  // Adiciona o efeito de rolagem suave aos links da navbar
  $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50 // Ajuste do deslocamento para levar em conta a altura da navbar
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

  $(document).ready(function() {
    $('#contactForm').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Por favor, digite seu nome'
        },
        email: {
          required: 'Por favor, digite seu e-mail',
          email: 'Por favor, digite um e-mail válido'
        },
        message: {
          required: 'Por favor, digite sua mensagem'
        }
      },
      submitHandler: function(form) {
        // Lógica para envio do formulário
        form.submit();
      }
    });
  });



  $(document).ready(function(){
    $('#myCarousel').carousel();
  });

