# 自我介紹網站 | Intro Website

使用 React + Vite 打造的純前端自我介紹網站。

## 專案結構

```
intro_website/
├── public/          # 靜態資源
├── src/
│   ├── components/  # React 元件
│   │   ├── Hero.jsx    # 首頁橫幅
│   │   ├── About.jsx   # 關於我
│   │   ├── Skills.jsx  # 技能
│   │   └── Contact.jsx # 聯絡方式
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 開始使用

### 開發模式
```bash
npm run dev
```
在瀏覽器開啟 http://localhost:5173

### 建置
```bash
npm run build
```

### 預覽建置結果
```bash
npm run preview
```

## 如何客製化

1. **Hero.jsx**：修改姓名、標語，或換上自己的大頭照
2. **About.jsx**：填寫關於你的介紹
3. **Skills.jsx**：在 `skills` 陣列中修改你的技能列表
4. **Contact.jsx**：更新 Email、GitHub、LinkedIn 連結

## 部署到 GitHub Pages

1. 在 `package.json` 加入：
   ```json
   "homepage": "https://你的帳號.github.io/intro_website"
   ```

2. 安裝 gh-pages：`npm install --save-dev gh-pages`

3. 在 scripts 加入：
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. 執行 `npm run deploy`
