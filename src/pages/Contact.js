import React, { useState } from 'react';
import { BsMailbox } from 'react-icons/bs';
import ButtonAnchor from '../components/ButtonAnchor';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [sent, setSent] = useState(false);

  emailjs.init('user_L6oC0uXlTaSfNaOcmUEkF');

  const handleSubmit = (e) => {
      e.preventDefault();

      const button = document.getElementById('submit-btn');

      button.disabled = true;
      emailjs.sendForm('service_vzekjfg', 'template_xt89i8i', e.target)
          .then(function() {
            console.log('SUCCESS!');
            setSent(true);
            button.disabled = false;

            setTimeout(() => setSent(false), 5000);

          }, function(error) {
            console.log('FAILED...', error);
            button.disabled = false;
          });
  };

    return (
        <div id='contato' className='contact-session'>
            {/* {ButtonAnchor("projetos", "inicio")} */}
            <div className='contact-main'>
                <BsMailbox className='contact-mail-icon' />
                <h1 className='contact-hero-title'>Contato</h1>
            </div>
                <hr />
                <p className='contact-paragraph'>Ficou interessado? Mande um e-mail!</p>
            <div className='contact-div'>
                <form className='contact-form' onSubmit={ (e) => handleSubmit(e) }>
                    <input required type="text" placeholder="Digite o seu nome" name="name"/>
                    <input required type="text" placeholder="Informe o assunto" name="subject"/>
                    <input required type="text" placeholder="Informe o seu email" name="email"/>
                    <textarea required placeholder="Digite a sua mensagem" name="message"/>
                    <button id="submit-btn" className='submit-btn' type="submit">Enviar</button>
                    { sent ? <span className='contact-confirmation'>E-mail enviado com sucesso!</span> : null }
                </form>
            </div>
        </div>
    )
};

export default Contact;
