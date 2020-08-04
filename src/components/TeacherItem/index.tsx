import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/32855003?s=460&u=1b972d170f3adf734016fdf7be4664479c92711c&v=4" alt="Rafael Medeiros"/>
      <div>
        <strong>Rafael Medeiros</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br/>            
      <br/>            
      Ipsa est corrupti quasi quas quaerat modi sed aspernatur illo velit? Doloremque voluptatibus reiciendis corrupti nulla eum. Ad rerum voluptatibus sint ipsam.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
    </article>
  )
}

export default TeacherItem