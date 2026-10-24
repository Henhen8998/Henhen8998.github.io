# Henry Yang — Quantitative Finance & Chemical Engineering Portfolio

A modern, institutional-grade portfolio designed for landing **Quantitative Trading, Quantitative Research, and Financial Engineering** roles at market-making and investment banking firms like **Susquehanna International Group (SIG)** and **JPMorgan Chase**.

---

## 🌟 Key Features

1. **The ChemE &rarr; Quant Pivot Narrative & Edge:**
   - Highlights the direct mathematical isomorphism between Chemical Engineering physics (Transport Phenomena, Heat/Mass Diffusion, Statistical Mechanics, CSTR Dynamic Control) and Quantitative Finance (Black-Scholes PDE, Itô's Lemma, Avellaneda-Stoikov Market Making, Kelly Criterion).
2. **Interactive Quantitative Lab (Runs live in browser via pure JS & Chart.js):**
   - **Black-Scholes & Greeks Engine**: Real-time analytical options pricer calculating Call/Put prices and first/second-order Greeks ($\Delta, \Gamma, \Theta, \mathcal{V}, \rho$) with dynamic payoff curves.
   - **SIG Decision Theory & Kelly Sizer**: Interactive Kelly Criterion simulator with sequential Monte Carlo path generation comparing Full-Kelly, Half-Kelly, and fixed sizing.
3. **Curated Project Portfolio:**
   - Filterable projects spanning Quantitative Trading, Options PDEs, Commodity Crack Spread Arbitrage, Computational Fluid Dynamics, and Machine Learning Portfolio Optimization.
4. **Zero-Dependency Architecture:**
   - Built with pure HTML5, modern Tailwind CSS (via CDN), Chart.js, and vanilla JavaScript. No build step, node modules, or compile pipeline required!

---

## 🚀 How to Preview Locally (Before Deploying)

You can preview this site immediately in your browser using any of the following methods:

### Option 1: Direct File Open
1. Navigate to this folder: `c:\Users\hyang\OneDrive\Desktop\Portfolio`
2. Double-click `index.html` to open it in Chrome, Edge, or your default browser.

### Option 2: Local Python Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

---

## ✏️ Customization Checklist

Search for the following placeholders in `index.html` and replace them with your personal information:

- **University Name**: Replace `Your University Name` with your alma mater (e.g., *UC Berkeley, Cornell, UT Austin, etc.*).
- **Email**: Replace `your.email@example.com` with your actual email.
- **GitHub**: Replace `https://github.com/yourusername` with your GitHub profile URL.
- **LinkedIn**: `https://www.linkedin.com/in/henry-yang8`
- **Graduation Date & GPA**: Adjust the graduation year and GPA in the `#background` section in `index.html`.

---

## 🌐 Deploying to GitHub Pages (When You Are Ready)

Once you have reviewed the site and customized your details, follow these steps to deploy it live for free on GitHub Pages:

### Step 1: Initialize Git and Commit
In this folder (`c:\Users\hyang\OneDrive\Desktop\Portfolio`), run in PowerShell:
```bash
git init
git add .
git commit -m "Initial commit of Quant & ChemE portfolio"
```

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository either:
   - `yourusername.github.io` (your site will be available directly at `https://yourusername.github.io`), OR
   - `portfolio` (your site will be available at `https://yourusername.github.io/portfolio`).
3. Leave it Public, do not initialize with README or license.

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On GitHub, navigate to your repository &rarr; **Settings** &rarr; **Pages** (under the "Code and automation" menu on the left).
2. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. In 1–2 minutes, your portfolio will be live at:
   `https://<YOUR-GITHUB-USERNAME>.github.io/<REPO-NAME>/`
