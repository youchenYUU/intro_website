import './Skills.css'

const skills = [
  'HTML / CSS',
  'JavaScript',
  'React',
  'Git',
  '更多技能...'
]

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">技能</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-tag">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
