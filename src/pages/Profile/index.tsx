import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'
import avatar from '../../assets/images/img_avatar.png'
import './styles.css'

const Profile = () => {
  return (
    <div id='page-profile'>
      <PageHeader 
        title="Tiago Luchtenberg" 
        align="true" 
        logo={avatar}
        description="Geografia"
      />
      <main>
        <form onSubmit={()=>{}}>
          <fieldset>
            <legend> Seus Dados </legend>
            
            <Input name='name' label='Nome' className='inputName'/>
            <Input name='lastName' label='Sobrenome' className='inputLastName'/>
            <Input name='email' label='Email' className='inputEmail'/>
            <Input name='whatsapp' label='Whatsapp' className='inputWhatsapp'/>
            <Input name='bio' label='Biografia' className='inputBio'/>
            
          </fieldset>

          <fieldset>
            <legend> Sobre a aula</legend>
            <Select
              name='subject'
              label='Matéria'
              options={[
                {value: 'Artes', label : 'Artes'},
                {value: 'Matemática', label : 'Matemática'},
                {value: 'Química', label : 'Química'},
                {value: 'Física', label : 'Física'},
                {value: 'História', label : 'História'},
                {value: 'Inglês', label : 'Inglês'},
              ]} 
            />
            <Input 
              name='cost' 
              label='Custo da sua hora por aula'
              type='text'
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={()=>{}}>
                + Novo horário
              </button>
            </legend>
            <Select 
              name='week_day' 
              label='Dia da Semana' 
              options={[
                {value: '0', label : 'Domingo'},
                {value: '1', label : 'Segunda'},
                {value: '2', label : 'Terça'},
                {value: '3', label : 'Quarta'},
                {value: '4', label : 'Quinta'},
                {value: '5', label : 'Sexta'},
                {value: '6', label : 'Sábado'},
              ]}
            />
            <Input name='from' label='Das' type='time' />
            <Input name='to' label='Até' type='time'/>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
                Importante! <br/>
                Preencha todos os dados corretamente
            </p>
            <button type='submit'>
              Salvar Cadastro 
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Profile;