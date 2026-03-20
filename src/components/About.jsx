import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">關於我</h2>
        <p className="about-text">
          我叫余宥辰，畢業於中央大學工業管理研究所，大學就讀東吳大學資訊管理學系，
          同時具備半導體領域相關知識與資訊技術背景。研究領域為資料分析與文字探勘，
          主要使用的程式語言為 Python，並對 Java 具備基礎開發能力。曾擔任 SAP 學生團隊
          ABAP 組講師，負責技術教學與程式實作指導，具備良好的技術表達與知識分享能力。
          個性細心負責，擁有良好的學習能力與團隊合作精神，能主動解決問題並持續精進技術能力。
        </p>

        <h3 className="about-subtitle">學歷</h3>
        <ul className="about-list">
          <li><strong>中央大學</strong> 工業管理研究所 碩士 · 2023.09 - 2025.07</li>
          <li><strong>東吳大學</strong> 資訊管理系 學士 · 2019.09 - 2023.06</li>
        </ul>

        <h3 className="about-subtitle">經歷</h3>
        <ul className="about-list">
          <li><strong>碩遠科技</strong> 軟體實習生 · 2023.03 - 2023.07 — 參與客戶報修系統開發、ASP.NET Web Forms</li>
          <li><strong>國家教育研究院</strong> 研究助理 · 2022.02 - 2022.06</li>
          <li><strong>SAP 學生團隊</strong> ABAP Programming 組 特約講師</li>
          <li>統計方法助教、管理數學助教</li>
        </ul>

        <h3 className="about-subtitle">論文研究</h3>
        <p className="about-text">
          結合多來源文本與自注意力機制之多模態假評論偵測模型 — 透過多模態模型增加假評論偵測效果，並透過自注意力機制增加模型可解釋性。
        </p>
      </div>
    </section>
  )
}

export default About
