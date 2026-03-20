import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          {/* 你可以替換成自己的照片，放 images/avatar.jpg */}
          <div className="avatar-placeholder">👋</div>
        </div>
        <h1 className="hero-title">你好，我是你的名字</h1>
        <p className="hero-subtitle">前端學習者 | 正在用 React 打造自我介紹網站</p>
      </div>
    </section>
  )
}

export default Hero
