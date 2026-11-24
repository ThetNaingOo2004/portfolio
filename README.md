# Thet Naing Oo — Personal Portfolio Website
https://thetnaingoo2004.github.io/portfolio/

A responsive, editorial personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```text
thet-naing-oo-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── profile-placeholder.svg
│       └── README.txt
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── ProjectVisual.jsx
        ├── Education.jsx
        ├── ResearchInterests.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── CVModal.jsx
        └── ui/
            ├── SectionHeader.jsx
            ├── Sparkle.jsx
            └── WaveAccent.jsx
```

## Customization Checklist

1. **Email Address**: Update `personalInfo.email` and set `emailIsPlaceholder: false` in `src/data/portfolioData.js`.
2. **Profile Portrait**: Place your image in `public/assets/profile.jpg` and update `personalInfo.profileImage` in `src/data/portfolioData.js`.
3. **CV PDF**: Place your PDF in `public/assets/Thet_Naing_Oo_CV.pdf` and update `personalInfo.cvUrl` in `src/data/portfolioData.js`.
4. **Project Screenshots**: Optionally add real screenshots in `public/assets/` and assign them to each project's `image` property in `src/data/portfolioData.js`.
