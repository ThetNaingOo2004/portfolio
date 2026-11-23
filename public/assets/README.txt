ASSET REPLACEMENT GUIDE
=======================

1. Profile Photo:
   Place your portrait photo at:
   public/assets/profile.jpg
   Then update `personalInfo.profileImage` in `src/data/portfolioData.js` to "/assets/profile.jpg".

2. CV / Resume PDF:
   Place your PDF resume at:
   public/assets/Thet_Naing_Oo_CV.pdf
   Then update `personalInfo.cvUrl` in `src/data/portfolioData.js` to "/assets/Thet_Naing_Oo_CV.pdf".

3. Project Screenshots (Optional):
   Each project currently renders a bespoke, high-resolution architectural UI preview.
   If you prefer real screenshots, add them here (e.g., myanmar-dawah.png, afaaf-store.png)
   and set the `image` property on each project inside `src/data/portfolioData.js`.
