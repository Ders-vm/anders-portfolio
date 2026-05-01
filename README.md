# AndersVM_Portfolio — Multi-Page Alien-Tech Inspired Portfolio

A sleek, fully-featured portfolio with alien-inspired loading animation, multi-page navigation, and professional styling.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and watch the loading animation! 🔥

## 📁 Project Structure

```
AndersVM_Portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx              ← Navigation (all pages)
│   │   └── LoadingAnimation.jsx    ← Home page loading animation
│   ├── page.js                     ← HOME PAGE
│   ├── about/page.js               ← ABOUT PAGE
│   ├── projects/page.js            ← PROJECTS PAGE
│   ├── contact/page.js             ← CONTACT PAGE
│   ├── layout.js                   ← Root layout with Navbar
│   └── globals.css                 ← Global styles
├── public/
│   ├── photos/                     ← Add profile.jpg here
│   └── projects/                   ← Add project screenshots here
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 📝 Pages to Edit

### 1. **HOME PAGE** (`app/page.js`)
- Loading animation intro
- CTA cards for navigation
- **Edit:** Your name, tagline in LoadingAnimation.jsx

### 2. **ABOUT PAGE** (`app/about/page.js`)
- Profile picture
- Bio text
- Focus areas
- Tech stack
- **Add:** Profile picture to `public/photos/profile.jpg`

### 3. **PROJECTS PAGE** (`app/projects/page.js`)
- 3 Featured projects with screenshots & metrics
- 4 Honorable mentions
- **Add:** Screenshots to `public/projects/`
- **Edit:** Project titles, descriptions, links, metrics

### 4. **CONTACT PAGE** (`app/contact/page.js`)
- Contact methods (GitHub, LinkedIn, Email)
- Contact form
- **Edit:** Your social links and email

## 🎨 Key Features

✨ **Alien-Inspired Loading Animation**
- Animated bouncing dots
- Status messages
- Word-by-word text reveal
- Scanline effects

🧭 **Smart Navigation Bar**
- Auto-active page indicator
- Mobile hamburger menu
- Smooth transitions
- Appears on all pages

📱 **Fully Responsive**
- Mobile, tablet, desktop optimized
- Touch-friendly
- Fast performance

🎯 **Easy to Customize**
- Clear section comments on every page
- Tailwind CSS styling
- Dark theme with cyan accents
- Pre-styled components

## 📸 Images & Photos

### Profile Picture
- **Location:** `public/photos/profile.jpg`
- **Size:** 400x400px+ (1:1 aspect ratio)
- **Format:** JPG, PNG, or WebP
- **Max:** 200KB

### Project Screenshots
- **Location:** `public/projects/[project-name].png`
- **Size:** 1200x800px recommended
- **Format:** PNG or JPG
- **Max:** 500KB each (use TinyPNG.com)

## 🎯 What to Edit First

1. **Profile picture** → Add `public/photos/profile.jpg`
2. **Home page name** → `app/components/LoadingAnimation.jsx` (search "Anders")
3. **About bio** → `app/about/page.js` (edit `<p>` tags)
4. **Projects** → `app/projects/page.js` (edit `mainProjects` array)
5. **Contact links** → `app/contact/page.js` (update URLs)

## 🔧 Customization

### Change Accent Color
Edit `tailwind.config.js` and find the `cyan` section:
```javascript
cyan: {
  400: '#06b6d4',  // Change these hex codes
  500: '#0891b2',
  600: '#0e7490',
}
```

### Add More Honorable Mentions
Edit `app/projects/page.js` and add to `honorableMentions` array.

### Change Loading Animation
Edit `app/components/LoadingAnimation.jsx` to customize:
- "initializing profile..." text
- Loading status messages
- Animation timings
- Colors

## 📋 Checklist

- [ ] Profile picture added to `public/photos/profile.jpg`
- [ ] Home page name updated
- [ ] About bio text updated
- [ ] Focus areas updated
- [ ] Tech stack updated
- [ ] Project screenshots added
- [ ] Project titles, descriptions, metrics updated
- [ ] Honorable mentions filled in
- [ ] Social links (GitHub, LinkedIn) updated
- [ ] Email address updated
- [ ] Tested locally: `npm run dev`

## 🌐 Deploying to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "AndersVM Portfolio"
git remote add origin https://github.com/yourusername/AndersVM_Portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel
- Go to https://vercel.com
- Click "New Project"
- Select your GitHub repo
- Click "Deploy"
- Done! 🎉

Every push to main auto-deploys.

## 🆘 Troubleshooting

**Pages not loading?**
- Make sure folder structure is exact: `app/about/page.js` (not `app/about.js`)

**Navbar not showing?**
- Check `app/layout.js` has `<Navbar />` component

**Styles look wrong?**
- Restart dev server: `npm run dev`
- Clear browser cache

**Images not showing?**
- Check file paths are correct
- File names are case-sensitive
- Restart dev server

## 📚 File Guide

Each page file has clear section markers:
```javascript
{/* SECTION: [PAGE NAME] */}
```

Search for these to find exactly what to edit!

## 💡 Tips

1. Keep placeholder links while developing, update before deploying
2. Compress images with TinyPNG.com before uploading
3. Test on mobile (DevTools F12 → Device Toolbar)
4. Check all links before deploying
5. Add real GitHub repo links (shows code quality)

## 📞 Questions?

Check the EDIT_GUIDE.md file for detailed editing instructions by page.

---

**You're all set!** Run `npm run dev` and start editing. The portfolio is fully styled and ready for your content. 🚀✨
