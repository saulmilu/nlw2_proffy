import React, { useState, useEffect, FormEvent } from  'react'
import {useHistory} from  'react-router-dom'

import PageHeader from "../../components/PageHeader"

import './styles.css'
import Input from '../../components/Inputs'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'

import icon from '../../assets/images/icons/rocket.svg'

interface optionsSubject {
  value: string,
  label : string
}

const TeacherForm = () => {
   
  const history = useHistory()

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '' , from : '', to : ''  }
  ]);

  const [subjectsList, setSubjectsList ] = useState([])

  const [selectedSubject, setSelectedSubject ] = useState('')
  const [name, setName ] = useState('')
  const [avatar, setAvatar ] = useState('')
  const [whatsapp, setWhatsapp ] = useState('')
  const [bio, setBio ] = useState('')
  const [cost, setCost ] = useState('')
  const [from, setFrom ] = useState('')
  const [to, setTo ] = useState('')

  function addNewScheduleItem () {
    console.log('add new schedule')
    setScheduleItems([...scheduleItems, {week_day: '', from : '', to : ''} ])
  }

  function createClasses (e: FormEvent){
    e.preventDefault()

    console.log(name,
      avatar, 
      whatsapp,
      bio,
      selectedSubject,
      cost ,
      scheduleItems)

    api.post('/classes',{
      name,
      avatar, 
      whatsapp,
      bio,
      subject : selectedSubject,
      cost : Number(cost),
      schedule : scheduleItems
    }).then(res => {
      alert('ok')
      history.push('/')
    }).catch(err => alert(`erro : ${err}`))

  }

  function setScheduleItemValue(position:number, field : string, value : string ){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
      if(index === position){
        return {...scheduleItem, [field]:value }
      }
      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  useEffect(()=>{

    // Obter as listar de opções do servidor
    // Definir rotas no servidor
    
    // api.get('/subject').then(resp => {
    //   const { subjects } = resp.data
    //   setSubjectsList([...subjects])
    // })

  },[])

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title='Que incrivel dar aulas.' 
        description="O primeiro passo é preencher esse formulário de inscrição"
        icon={icon}
      >
      </PageHeader>

      <main>
        <form onSubmit={createClasses}>
        
          <fieldset>
            <legend>Seus Dados</legend>
            
            <Input 
              name='name'
              label="Nome Completo"
              type='text'
              value={name}
              onChange={(e)=>{setName(e.target.value)}} 
            />
            <Input 
              name='avatar' 
              label='Avatar'
              type='text'
              value={avatar}
              onChange={(e)=>{setAvatar(e.target.value)}}
            />
            <Input 
              name='whatsapp' 
              label='WhatsApp'
              type='text'
              value={whatsapp} 
              onChange={(e)=>{setWhatsapp(e.target.value)}}
            />
            <Textarea 
              name='bio' 
              label='Biografia' 
              value={bio} 
              onChange={(e)=>{setBio(e.target.value)}} 
            ></Textarea>
          </fieldset>
          
          <fieldset>
            <legend>Sobre a aula</legend>
            
            <Select 
              name='subject'
              label="Matéria"
              value={selectedSubject}
              // options={subjectsList}
              onChange={(e)=>{setSelectedSubject(e.target.value)}}
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
              label='Custo da aula por hora'
              type='text'
              value={cost}
              onChange={(e)=>{setCost(e.target.value)}}
            />
          </fieldset>
          
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {
              scheduleItems.map((schedule, index ) => (
                <div key={ schedule.week_day + schedule.from } className='schedule-item'>
                  <Select 
                    name='week_day'
                    label="Dia da Semana"
                    value={schedule.week_day}
                    options={[
                      {value: '0', label : 'Domingo'},
                      {value: '1', label : 'Segunda'},
                      {value: '2', label : 'Terça'},
                      {value: '3', label : 'Quarta'},
                      {value: '4', label : 'Quinta'},
                      {value: '5', label : 'Sexta'},
                      {value: '6', label : 'Sábado'},
                    ]}
                    onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value) }
                  />
                  <Input 
                    name='from' 
                    label='Das' 
                    type="time"
                    value={schedule.from}
                    onChange={ e => setScheduleItemValue(index, 'from', e.target.value) }
                  />
                  <Input 
                    name='to' 
                    label='Até' 
                    type='time'
                    value={schedule.to}
                    onChange={ e => setScheduleItemValue(index, 'to', e.target.value) }
                  />
                </div>
              ))
            }

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type='submit' >
              Salvar Cadastro
            </button>
          </footer>
        </form>    
      </main>
    </div>    
  )
}

export default TeacherForm;