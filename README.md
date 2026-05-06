# 🚀 SARJAN | AI Engineer & Full-Stack Web Developer Portfolio

![Portfolio Preview](preview.png)

A stunning, futuristic portfolio website showcasing AI Engineering, Full-Stack Development, and Cloud Engineering skills with modern glassmorphism design and interactive animations.

## ✨ Features

- **Futuristic Design** - Navy blue glassmorphism theme with frosted glass effects
- **Animated Background** - Interactive particle system with code symbols
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Interactive Navigation** - Sticky navbar with smooth scrolling
- **Portfolio Showcase** - 50+ projects with custom AI-generated thumbnails
- **Skills Display** - Visual skill cards with technology icons
- **Certifications Gallery** - Modal viewer with navigation for certificates
- **Contact Form** - Web3Forms integration for direct messaging
- **SEO Optimized** - Meta tags, Open Graph, and Schema markup

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | Custom CSS, Glassmorphism, CSS Animations |
| **Icons** | Font Awesome 6.4 |
| **Fonts** | Google Fonts (Montserrat, Oswald) |
| **Forms** | EMAIL JS API |
| **Images** | AI-Generated (Gemini) Navy Blue Glassmorphism Theme |

## 📁 Project Structure

```
portfolio3/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with glassmorphism effects
├── script.js           # JavaScript for animations & interactions
├── README.md           # This file
├── favicon.png         # Site favicon
├── *.png               # Project thumbnails & assets
└── my data engg resume.pdf  # Downloadable CV
```

## 🎨 Design Features

### Glassmorphism Theme
- Frosted glass panels with blur effects
- Navy blue gradient backgrounds (#0a0e27 to #1a1f4e)
- Subtle glow effects and shadows
- Transparent overlays with depth

### Animations
- Particle system background with code symbols
- Scroll progress indicator
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Counter animations for statistics

## 🚀 Quick Start

1. **Clone or Download** the repository
2. **Open** `index.html` in your browser
3. **Customize** content in `index.html`
4. **Deploy** to your hosting provider

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/). To configure:

1. Get your access key from Web3Forms
2. Replace the access key in the hidden input field:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**SARJAN** - AI Engineer & Full-Stack Web Developer

- 🔗 Website: [sarjan.site](https://sarjan.site)
- 💼 GitHub: [@sarjanthecoder](https://github.com/sarjanthecoder)
- 📧 Email: Contact via website form

---

<p align="center">Made with ❤️ and lots of ☕</p>





uiux

PROGRAM:
HTML:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Societal Application</title>
<style>
body{
 margin:0;
 font-family: 'Segoe UI', sans-serif;
background:#f4f6fb;
}
/* Header */
header{
background:#d8a1dd;
color:white;
text-align:center;
 padding:20px;
}
/* Navigation */
nav{
background:#ffffff;
 box-shadow:0 2px 5px rgba(0,0,0,0.1);
}
nav ul{
list-style:none;
 margin:0;
 padding:10px;
display:flex;
justify-content:center;
}
nav li{
 margin:0 20px;}
nav a{
text-decoration:none;
color:#333;
 font-weight:600;
}
nav a:hover{
color:#d8a1dd;
}
/* Container */
.container{
 max-width:1100px;
margin:auto;
 padding:20px;
}
/* Profile Card */
.profile{
background:white;
 padding:20px;
 border-radius:10px;
 box-shadow:0 3px 8px rgba(0,0,0,0.1);
 margin-bottom:20px;
}
.profile h3{
 margin-top:0;
}
/* Post Section */
.posts{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:20px;
}
.post-card{
background:white;
 padding:15px;
 border-radius:10px;
 box-shadow:0 3px 8px rgba(0,0,0,0.1);
}
.post-card h4{
 margin:0 0 10px;
}
.post-card p{
color:#555;
}
/* Footer */
footer{
background:#d8a1dd;
color:white;
text-align:center;
 padding:12px;
 margin-top:30px;
}
/* Mobile */
@media(max-width:768px){
nav ul{
flex-direction:column;
align-items:center;
}
nav li{
margin:10px 0;
}
}
</style>
</head>
<body>
<header>
<h1>Societal Application</h1>
<p>Connect • Share • Communicate</p>
</header>
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Profile</a></li>
<li><a href="#">Posts</a></li>
<li><a href="#">Friends</a></li>
<li><a href="#">Settings</a></li>
</ul>
</nav>
<div class="container">
<div class="profile">
<h3>User Profile</h3>
<p><b>Name:</b> Arjun Kumar</p>
<p><b>Location:</b> Chennai, India</p>
<p><b>Bio:</b> Passionate about technology, coding and connecting with people.</p>
</div>
<h2>Recent Posts</h2>
<div class="posts">
<div class="post-card">
<h4>Community Meetup</h4>
<p>We are organizing a tech meetup this weekend. Join us to share ideas and innovations.</p>
</div>
<div class="post-card">
<h4>New Feature Update</h4>
<p>The application now supports real-time messaging and notifications.</p>
</div>
<div class="post-card">
<h4>Learning Together</h4>
<p>Students can collaborate, share notes and work on projects together.</p>
</div>
</div>
</div>
<footer>© 2026 Societal Application | All Rights Reserved
</footer>
</body>
</html>

