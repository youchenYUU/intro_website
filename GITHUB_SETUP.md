# 將專案放到 GitHub 的步驟

## 第一次推送到 GitHub

在終端機中執行以下指令（請依照你的 GitHub 帳號修改）：

### 1. 初始化 Git（若尚未初始化）
```bash
cd /Users/terryyu/Documents/intro_website
git init
```

### 2. 加入所有檔案
```bash
git add .
```

### 3. 建立第一次提交
```bash
git commit -m "Initial commit: React 自我介紹網站"
```

### 4. 在 GitHub 建立新 repo
- 前往 https://github.com/new
- Repository name 填：`intro_website`（或你喜歡的名稱）
- 選擇 Public
- **不要**勾選 "Add a README file"（我們已經有了）
- 按 Create repository

### 5. 連結遠端並推送
```bash
git branch -M main
git remote add origin https://github.com/你的帳號/intro_website.git
git push -u origin main
```

把 `你的帳號` 換成你的 GitHub 使用者名稱。

---

## 之後的開發流程

每次完成一個功能或修復後：

```bash
git add .
git commit -m "描述你做了什麼改動"
git push
```

例如：
- `git commit -m "更新 Hero 區塊的自我介紹"`
- `git commit -m "新增技能項目"`
- `git commit -m "修正聯絡連結"`

**不需要**每次存檔都 push，在完成一小段有意義的改動時再 push 即可。
