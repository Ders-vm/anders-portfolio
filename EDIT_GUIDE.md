# Editing Guide — AndersVM Portfolio

This guide shows you exactly what to edit on each page with examples.

## 📍 Quick Navigation

- [HOME PAGE](#home-page)
- [ABOUT PAGE](#about-page)
- [PROJECTS PAGE](#projects-page)
- [CONTACT PAGE](#contact-page)

---

## HOME PAGE

**File:** `app/page.js` + `app/components/LoadingAnimation.jsx`

### What's on this page:
- Alien-inspired loading animation
- CTA cards linking to other pages
- Scroll indicator

### What to edit:

#### 1. Loading Animation Title (Your Name)
**File:** `app/components/LoadingAnimation.jsx`

Look for the final reveal section (around line 120):
```jsx
<motion.h1
  className="text-5xl md:text-7xl font-bold tracking-tight"
  variants={textVariants}
>
  <span className="text-white">Anders</span>
  <br />
  <span className="text-cyan-400">von Mirbach</span>
</motion.h1>
```

**Change to:**
```jsx
<span className="text-white">YOUR FIRST NAME</span>
<br />
<span className="text-cyan-400">YOUR LAST NAME</span>
```

#### 2. Your Title
Same file, look for (around line 131):
```jsx
<motion.p
  className="text-xl md:text-2xl text-cyan-400 font-light"
  variants={textVariants}
>
  Creative Developer
</motion.p>
```

**Change to:**
```jsx
Your Job Title
```

#### 3. Your Tagline
Same file, around line 139:
```jsx
<motion.p
  className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed"
  variants={textVariants}
>
  Building performant, innovative solutions at the intersection of algorithms and user experience.
</motion.p>
```

**Change to:**
Your short elevator pitch.

#### 4. Loading Messages (Optional)
If you want to customize the loading phases, edit around lines 70-90 in LoadingAnimation.jsx:
```jsx
{phase >= 1 && (
  <motion.p className="...">
    loading algorithms...
  </motion.p>
)}
```

Change the text inside the `<motion.p>` tags.

---

## ABOUT PAGE

**File:** `app/about/page.js`

### What's on this page:
- Profile picture (placeholder)
- Bio text
- Focus areas list
- Tech stack tags

### What to edit:

#### 1. Add Profile Picture
Create/add this file: `public/photos/profile.jpg`

Specs:
- Size: 400x400px or larger
- Format: JPG, PNG, or WebP
- Square aspect ratio (1:1)
- Max 200KB

The picture will appear automatically!

#### 2. Bio Text
**File:** `app/about/page.js`, around line 50:

```jsx
<p className="text-slate-300 leading-relaxed mb-4">
  I'm a computer science developer with a deep interest in efficient algorithms, machine learning applications, and building systems that solve real-world problems. My work spans from low-level data structure optimization to full-stack application development.
</p>
<p className="text-slate-300 leading-relaxed">
  Whether implementing learned index structures, architecting point-of-sale systems, or teaching AI agents to navigate complex environments, I'm driven by the challenge of finding elegant solutions. When I'm not coding, you'll find me exploring new technologies or optimizing something that probably doesn't need optimizing.
</p>
```

**Replace both paragraphs with YOUR bio.**

#### 3. Focus Areas
Same file, around line 73:

```jsx
<ul className="space-y-2 text-slate-300 text-sm">
  <li>⚡ Systems & Algorithms</li>
  <li>🤖 Machine Learning & AI</li>
  <li>🎮 Game Development & AI</li>
  <li>📊 Full-Stack Development</li>
</ul>
```

**Replace with your focus areas:**
```jsx
<li>🎯 Your Focus 1</li>
<li>🎯 Your Focus 2</li>
<li>🎯 Your Focus 3</li>
<li>🎯 Your Focus 4</li>
```

#### 4. Tech Stack
Same file, around line 87:

```jsx
{['Python', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'ML/AI'].map(tech => (
```

**Replace the array with your actual tech:**
```jsx
{['Your Tech 1', 'Your Tech 2', 'Your Tech 3', 'Your Tech 4'].map(tech => (
```

---

## PROJECTS PAGE

**File:** `app/projects/page.js`

### What's on this page:
- 3 Featured projects with screenshots and metrics
- 4 Honorable mentions

### What to edit:

#### 1. Featured Projects
Look for `const mainProjects = [` around line 10.

Each project looks like this:
```javascript
{
  title: 'Learned Index Structures',
  description: 'Implemented and benchmarked machine-learning-based index structures...',
  tech: ['Python', 'Machine Learning', 'Data Structures', 'Benchmarking'],
  highlights: 'Scalability, memory efficiency, and real-world trade-offs...',
  image: '/projects/learned-index.png',
  metrics: [
    { label: 'Model Accuracy', value: '94.2%' },
    { label: 'Lookup Speed', value: '3.2x faster' },
    { label: 'Memory Overhead', value: '-12%' }
  ],
  github: 'https://github.com',
  demo: 'https://example.com'
}
```

**For each project, change:**
- `title` → Your project name
- `description` → What you built (2-3 sentences)
- `tech` → Technologies used (4-5 items)
- `highlights` → Key achievement
- `image` → Path to your screenshot (add to `public/projects/`)
- `metrics` → Your 3 metrics/stats
- `github` → Your GitHub repo URL
- `demo` → Live demo or project page

**Important:** Add screenshots to `public/projects/`:
- `learned-index.png`
- `cannabiz-pos.png`
- `snek-ai.png`

#### 2. Honorable Mentions
Look for `const honorableMentions = [` around line 60.

Each looks like:
```javascript
{
  title: 'Project Name 1',
  description: 'Brief description of what this project does and what you learned.',
  tech: ['Tech 1', 'Tech 2', 'Tech 3'],
  github: 'https://github.com',
  demo: 'https://example.com'
}
```

**Change:**
- `title` → Your project name
- `description` → Brief description
- `tech` → Technologies used
- `github` → GitHub link
- `demo` → Live demo link

**Add or remove projects** as needed. 4 are pre-made, but you can have as many as you want!

---

## CONTACT PAGE

**File:** `app/contact/page.js`

### What's on this page:
- Contact methods (GitHub, LinkedIn, Email)
- Contact form
- Footer

### What to edit:

#### 1. GitHub Link
Around line 40:
```jsx
<motion.a
  href="https://github.com/andersvm"
```

**Change to:**
```jsx
href="https://github.com/YOUR_USERNAME"
```

#### 2. LinkedIn Link
Around line 54:
```jsx
<motion.a
  href="https://linkedin.com/in/andersvm"
```

**Change to:**
```jsx
href="https://linkedin.com/in/YOUR_PROFILE"
```

#### 3. Email Link
Around line 68:
```jsx
<motion.a
  href="mailto:hello@andersvm.dev"
```

**Change to:**
```jsx
href="mailto:YOUR_EMAIL@example.com"
```

Also update the email text display:
```jsx
<p className="text-sm text-slate-400">hello@andersvm.dev</p>
```

**Change to:**
```jsx
<p className="text-sm text-slate-400">YOUR_EMAIL@example.com</p>
```

#### 4. Footer Copyright
Around line 130:
```jsx
<p className="text-slate-500 text-sm font-mono">
  © 2024 Anders von Mirbach. All rights reserved.
</p>
```

**Change to:**
```jsx
<p className="text-slate-500 text-sm font-mono">
  © 2024 YOUR NAME. All rights reserved.
</p>
```

---

## Navigation Bar

**File:** `app/components/Navbar.jsx`

The navbar automatically appears on all pages and shows which page you're on.

**To change the branding** (if you want):

Around line 27:
```jsx
<span className="text-cyan-400">&lt;</span>
<span>ANDERS</span>
<span className="text-cyan-400">/&gt;</span>
```

**Change to:**
```jsx
<span className="text-cyan-400">&lt;</span>
<span>YOUR_NAME</span>
<span className="text-cyan-400">/&gt;</span>
```

**You don't need to change the nav links** — they update automatically!

---

## Quick Find Table

| What to change | File | Search for |
|---|---|---|
| Your name | `LoadingAnimation.jsx` | `<span className="text-white">Anders</span>` |
| Your title | `LoadingAnimation.jsx` | `Creative Developer` |
| Loading messages | `LoadingAnimation.jsx` | `loading algorithms...` |
| Profile picture | `public/photos/profile.jpg` | (add this file) |
| Bio text | `app/about/page.js` | `I'm a computer science developer` |
| Focus areas | `app/about/page.js` | `Systems & Algorithms` |
| Tech stack | `app/about/page.js` | `['Python', 'JavaScript', ...]` |
| Project 1 title | `app/projects/page.js` | `'Learned Index Structures'` |
| Project descriptions | `app/projects/page.js` | `mainProjects` array |
| Project metrics | `app/projects/page.js` | `metrics: [` |
| Honorable mentions | `app/projects/page.js` | `honorableMentions` array |
| GitHub URL | `app/contact/page.js` | `github.com/andersvm` |
| LinkedIn URL | `app/contact/page.js` | `linkedin.com/in/andersvm` |
| Email address | `app/contact/page.js` | `hello@andersvm.dev` |
| Copyright name | `app/contact/page.js` | `Anders von Mirbach` |

---

## 📸 Image Checklist

Add these images:

- [ ] `public/photos/profile.jpg` — Your profile picture (400x400px+)
- [ ] `public/projects/learned-index.png` — Project 1 screenshot (1200x800px)
- [ ] `public/projects/cannabiz-pos.png` — Project 2 screenshot (1200x800px)
- [ ] `public/projects/snek-ai.png` — Project 3 screenshot (1200x800px)

---

## 🧪 Testing

After editing, test locally:

```bash
npm run dev
```

Then visit:
- Home: http://localhost:3000
- About: http://localhost:3000/about
- Projects: http://localhost:3000/projects
- Contact: http://localhost:3000/contact

Watch the loading animation on the home page! 🔥

---

**That's it!** Every section is labeled and easy to find. Start editing and deploy when ready! 🚀
