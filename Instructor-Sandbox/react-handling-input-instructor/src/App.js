import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  // const [state, setState] = useState({
  //   skills: [
  //     {skill: "JavaScript", level: 4}
  //   ],
  //   skill: '',
  //   level: 3,
  // })

  const [skills, setSkills] = useState(
    [
        {skill: "JavaScript", level: 4}
    ])
  const [newSkill, setNewSkill] = useState(
    {skill: '', level: 3}
  ) 
  const addSkill = (e) => {
    e.preventDefault()
   setSkills([ ...skills,
    newSkill
  ])
    setNewSkill({skill: '', level: 3})
  }
  const handleChange = (e) => {
    setNewSkill({ ...newSkill, 
      [e.target.name]: e.target.value
    })

    console.log(e.target.value)
    console.log('handleChange ran!')
  }

  return (
    <section>
      <h2>Dev Skills</h2>
      <hr />
      {skills.map(s => (
        <article key={s.skill}>
          <div>{s.skill}</div>
          <div>{s.level}</div>
        </article>
      ))}
    <hr />
    
    <form onSubmit={addSkill}>
        <label>
          <span>SKILL</span>
          <input value={newSkill.skill} name='skill' onChange={handleChange} />
        </label>
        <label>
          <span>LEVEL</span>
          <select value={newSkill.level} onChange={handleChange} name='level'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>

        <button type='submit' onClick={addSkill}>
          ADD SKILL
        </button>
    </form>
    </section>
  );
}

export default App;
