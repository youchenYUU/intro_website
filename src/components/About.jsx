import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">關於我</h2>
        <p className="about-text">
          這裡可以寫你的學歷、工作經歷、或對程式開發的熱情。
          例如：我是一名前端初學者，正在透過實作專案來學習 React。
        </p>
        <p className="about-text">
          你也可以分享你的興趣、目標，或是任何想讓訪客認識你的事情。
        </p>
      </div>
    </section>
  )
}

export default About
