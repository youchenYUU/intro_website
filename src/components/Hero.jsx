import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="/avatar.jpg" alt="余宥辰" className="avatar-img" />
        </div>
        <h1 className="hero-title">余宥辰 Terry</h1>
        <p className="hero-subtitle">工業管理研究所碩士 | 資料分析 · 程式開發 · 持續學習中</p>
      </div>
    </section>
  )
}

export default Hero
