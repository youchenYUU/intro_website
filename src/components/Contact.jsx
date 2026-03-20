import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">聯絡我</h2>
        <div className="contact-links">
          <a href="mailto:your@email.com" className="contact-link">📧 Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">🐙 GitHub</a>
          <a href="#" className="contact-link">💼 LinkedIn</a>
        </div>
        <p className="contact-note">把上面的連結換成你自己的即可！</p>
      </div>
    </section>
  )
}

export default Contact
