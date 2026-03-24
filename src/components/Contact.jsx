import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">聯絡我</h2>
        <div className="contact-links">
          <a href="mailto:youchen.yuu@gmail.com" className="contact-link">📧 youchen.yuu@gmail.com</a>
          <a href="tel:0987823225" className="contact-link">📱 0987-823-225</a>
          <a href="https://github.com/youchenYUU" target="_blank" rel="noopener noreferrer" className="contact-link">🐙 GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
