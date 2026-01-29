# Hejaaz Technologies – Website

Professional, responsive website for **Hejaaz Technologies** (Industrial Automation & Crane Safety Systems). Built with React (Vite), Tailwind CSS, Framer Motion, and React Router.

---

## Tech stack

- **Frontend:** HTML5, CSS3, JavaScript, React 18
- **Build:** Vite 6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (light use)
- **Routing:** React Router v6
- **SEO:** react-helmet-async
- **Hosting-ready:** Netlify / Vercel compatible

---

## Project structure

```
hejaaz website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── PageHeader.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── CTAButtons.jsx
│   │   ├── ProductCard.jsx
│   │   └── SeoHead.jsx
│   ├── data/
│   │   ├── products.json   # Product data (SLI variants)
│   │   ├── services.json   # Services (problem / approach / value)
│   │   └── industries.json # Industries served
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx  # Reusable product template
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml    # Netlify config
├── vercel.json     # Vercel config
└── README.md
```

---

## Run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173).

3. **Build for production**

   ```bash
   npm run build
   ```

   Output is in `dist/`.

4. **Preview production build**

   ```bash
   npm run preview
   ```

---

## Deploy

### Netlify

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Netlify](https://app.netlify.com): **Add new site → Import an existing project**.
3. Connect the repo. Netlify will use `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - SPA redirects are configured (`/*` → `/index.html`).
4. Deploy. Custom domain can be added in **Domain settings**.

### Vercel

1. Push the project to a Git repository.
2. In [Vercel](https://vercel.com): **Add New Project** and import the repo.
3. Vercel will detect Vite and use `vercel.json`:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - Rewrites for SPA routing are set.
4. Deploy. Add a custom domain in **Project Settings → Domains**.

---

## Pages and features

| Page | Route | Notes |
|------|--------|-------|
| Home | `/` | Hero, About, Core Solutions, Safety Systems, Industries, Why Choose Us, Certifications, PAN-India, CTAs |
| About | `/about` | Vision & mission, values, PAN-India, after-sales |
| Products | `/products` | SLI product cards (tower, EOT, gantry, crawler, telescopic, pick & carry, forklift, tipper) |
| Product detail | `/products/:slug` | Overview, components, working principle, features, specs, applications, compliance, “Get Technical Quote” |
| Services | `/services` | Factory / process / PC automation, vision, safety, POC, installation & AMC |
| Industries | `/industries` | Construction, manufacturing, steel, ports, mining, power, EPC/OEM, auditors |
| Certifications | `/certifications` | ISO 9001:2015, MSME, compliance focus |
| Contact | `/contact` | Address, phone, email, contact form with validation |

---

## Design

- **Colors:** Dark gray (`#1a1d21`), industrial yellow (`#e6a800`), safety orange (`#e87500`), white.
- **Typography:** Inter, clean and bold headings.
- **Layout:** Corporate, industrial, responsive (mobile, tablet, desktop).

---

## Data and assets

- **Products:** `src/data/products.json` – edit to add/change SLI products. Each has `id`, `slug`, `name`, `tagline`, `overview`, `systemComponents`, `workingPrinciple`, `keyFeatures`, `specs`, `applications`, `compliance`.
- **Services:** `src/data/services.json` – problem, approach, value per service.
- **Industries:** `src/data/industries.json` – industries and descriptions.
- **Images:** Product images use placeholder blocks. Replace with real assets by updating `ProductCard` and `ProductDetail` to use `product.imagePlaceholder` or your own paths.

---

## Contact (Hejaaz Technologies)

- **Address:** 192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012, Tamil Nadu  
- **Phone:** +91 9361227290  
- **Email:** hejaaztechnologies@gmail.com  

---

© Hejaaz Technologies. ISO 9001:2015 | MSME Registered.
