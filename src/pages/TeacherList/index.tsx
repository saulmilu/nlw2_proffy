import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem , {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Inputs'
import Select from '../../components/Select'
import api from '../../services/api'

const TeacherList = () => {

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState<string>('')
  const [week_day, setWeekDay] = useState<string>('')
  const [time, setTime] = useState<string>('')

  async function searchTeachers(e: FormEvent){
    e.preventDefault()

    console.log({subject, week_day, time})

    const response = await api.get('/classes',{
      params:{
        subject,
        week_day,
        time
      }})
    
    setTeachers(response.data)
    console.log(response)
    return
  }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os proffys disponíveis.'>
                <form id="search-teachers" onSubmit={searchTeachers}>
                  <Select 
                    name='subject'
                    label="Matéria"
                    value={subject}
                    options={[
                      {value: 'Artes', label : 'Artes'},
                      {value: 'Matemática', label : 'Matemática'},
                      {value: 'Química', label : 'Química'},
                      {value: 'Física', label : 'Física'},
                      {value: 'História', label : 'História'},
                      {value: 'Inglês', label : 'Inglês'},
                    ]}
                    onChange={(e=>setSubject(e.target.value))}
                  />

                  <Select 
                    name='week_day'
                    label="Dia da Semana"
                    value={week_day}
                    options={[
                      {value: '0', label : 'Domingo'},
                      {value: '1', label : 'Segunda'},
                      {value: '2', label : 'Terça'},
                      {value: '3', label : 'Quarta'},
                      {value: '4', label : 'Quinta'},
                      {value: '5', label : 'Sexta'},
                      {value: '6', label : 'Sábado'},
                    ]}
                    onChange={e=>setWeekDay(e.target.value)}
                  />
                 
                  <Input 
                    name='time' 
                    label='Hora'
                    type='time'
                    value={time}
                    onChange={e=>setTime(e.target.value)}
                  />
                  <button type="submit">
                    Buscar
                  </button>
                </form>
            </PageHeader>
            <main>
                {
                  teachers.map((teacher : Teacher) => (
                      <TeacherItem key={teacher.id} teacher={teacher} />
                    )
                  )
                }
            </main>
        </div>
    )
}

export default TeacherList