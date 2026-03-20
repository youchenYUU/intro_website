import './Skills.css'

const skills = [
  'Python',
  'Java',
  'C#',
  'R',
  'MSSQL',
  'SAP ABAP',
  'ASP.NET',
  'HTML / CSS',
  'JavaScript',
  'React',
  'Word / PowerPoint'
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
