import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';

import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject, week_day, time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id='page-teacher-list' className="container">
      <PageHeader title='Estes são os proffys disponíveis'>
        <form id="search-teachers" onChange={(e) => searchTeachers(e)}>
          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Informática', label: 'Informática' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Portugês', label: 'Portugês' },
              { value: 'Química', label: 'Química' }
            ]}
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <Select
            name='weekday'
            label='Dia da semana'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' }
            ]}
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
          />
          <Input type='time' name='time' label='Hora'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((item: Teacher) => {
            return <TeacherItem key={item.id} teacher={item} />
          })
        }
      </main>
    </div>
  )
}

export default TeacherList;