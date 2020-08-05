import React from 'react'
import whatsappIcon from  '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => (
     
        <article className='teacher-item'>
            <header>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png" alt="meu avatar" />
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entuiasta nato das melhores tecnologia de Química
                <br/><br/>
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    
)

export default TeacherItem