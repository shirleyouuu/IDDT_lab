<<<<<<< HEAD
# 721lab
=======
# 🧪 實驗室網站模板 — Intelligent Decision & Digital Twin Lab

> 一個現代化、可快速客製的學術實驗室網站，基於 **React + Vite + Tailwind CSS**。

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge)](../../generate)

---

## ✨ 功能特色

- 🏠 首頁 Hero + 研究摘要 + 活動照片輪播
- 👥 成員介紹（教授 / 碩士生 / 在職專班）
- 📚 學術著作（國科會 / 產學合作 / 期刊論文）
- 📱 RWD 響應式設計，支援手機版
- ⚡ 零後端，純靜態部署

---

## 🚀 快速開始

### 1. 使用此模板建立新專案
點擊右上角 **「Use this template」** → **「Create a new repository」**

### 2. 本地啟動
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
npm run dev
```

### 3. 修改實驗室資料（最重要的一步！）
**只需要編輯一個檔案：**
```
src/data/labData.js
```

裡面包含所有需要替換的內容：
| 變數 | 內容 |
|---|---|
| `LAB_NAME` | 實驗室中文名稱 |
| `LAB_NAME_EN` | 實驗室英文名稱 |
| `PROFESSOR` | 教授資料（姓名、照片、聯絡方式、學歷...） |
| `TEAM.masters` | 碩士班學生列表 |
| `TEAM.professional` | 在職專班學生列表 |
| `PUBLICATIONS` | 國科會 / 產學 / 期刊著作 |
| `SLIDES` | 首頁輪播照片（URL + 標題） |

---

## 📁 專案結構

```
src/
├── App.jsx                   # 主程式（路由切換，通常不需修改）
├── data/
│   └── labData.js            # ✏️  唯一需要修改的檔案
├── components/
│   ├── NavBar.jsx            # 導覽列
│   └── Footer.jsx            # 頁尾
└── pages/
    ├── HomePage.jsx          # 首頁
    ├── TeamPage.jsx          # 成員頁
    └── PublicationsPage.jsx  # 著作頁
```

---

## 🌐 部署

### Vercel（推薦，免費）
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# 將 dist/ 內容部署至 gh-pages 分支

cd "C:\Users\YunXuan Ou\Desktop\lab-website"
>> git add -A
>> git commit -m "修改內容撰寫"
>> git push

```

---

## 🛠 技術棧

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

---

## 📄 授權

MIT License — 歡迎自由使用與修改。
>>>>>>> 826fe86 (First commit)
