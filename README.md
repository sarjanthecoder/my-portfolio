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


practical  

EX.NO.4 Classification of a dataset from UCI repository using a perceptron with and without bias.

Aim

To write a python program for the classification of a dataset from UCI repository using a perceptron with and without bias.

Algorithm

1. Import required libraries

2. Load the dataset from UCI repository

3. Extract features and target variable

4. Fit a perceptron model without bias

5. Fit a perceptron model with bias

Program

import numpy as np

import pandas as pd

from sklearn.model selection import train_test_split from sklearn.linear_model import Perceptron

from sklearn.metrics import accuracy_score

#Load the dataset from UCI repository (example with Iris dataset)

column_names = ['sepal length', 'sepal_width', 'petal_length', 'petal_width', 'species']

url="https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"

data pd.read_csv(url, names column_names)

#Extracting features and target variable

X=data.drop(species', axis=1)

y = data['species']

#Splitting the dataset into training and testing sets

X_train, X_test, y_train, y_test train_test split(X, y, test size 0.2, random_state=0)

#Fitting a perceptron model without bias

model no bias Perceptron(fit_intercept=False)

model_no_bias.fit(X train, y train)

y_pred_no_bias= model_no_bias.pre dict(X_test)

accuracy_no_bias accuracy_score(y_test, y_pred_no_bias)

print("Accuracy of perceptron without bias:", accuracy_no_bias)

#Fitting a perceptron model with bias

model with bias Perceptron(fit_intercept=True)

model_with_bias.fit(X_train, y_train)

y_pred_with bias model with_bias.predict(X_test)

accuracy_with_bias= accuracy_score(y_test, y_pred_with_bias)

print("Accuracy of perceptron with bias:", accuracy_with_bias)

Output

Accuracy of perceptron without bias: 0.6

Accuracy of perceptron with blas: 0.7333333333333333

Result

Thus the python program for classification of a dataset from UCI repository using a

perceptron with and without bias has been executed successfully.


iot
PROGRAM
PROGRAM
COMMENT
import lcddriver
Import LCD Library
from time import *
Import Delay Library
lcd = lcddriver.lcd()
Initialize LCD
import busio
Import SPI Bus Pins
import time
Import Time Library
import digitalio
Define digital pin support
import board
Define unique identifier for the board model
import adafruit_mcp3xxx.mcp3008 as
MCP
Import MCP3008 Library
from adafruit_mcp3xxx.analog_in import
AnalogIn
Import Analog Input Library
spi = busio.SPI(clock=board.SCK,
MISO=board.MISO, MOSI=board.MOSI)
Define SPI Bus
cs = digitalio.DigitalInOut(board.D8)
Chip Select Pin Connected GPIO 8
mcp = MCP.MCP3008(spi, cs)
Initialize MCP3008
POT1 = AnalogIn(mcp, MCP.P0)
POT_1 connected with MCP3003 Channel_0
POT2 = AnalogIn(mcp, MCP.P1)
POT_2 connected with MCP3003 Channel_1
while True:
Infinite Loop Start
print('POT1_ADC VALUE: ',
POT1.value)
Read and Print POT_1 ADC Value on Console
print('POT_1 VOLT: ' +
str(POT1.voltage) + 'V')
Read and Print POT_1 VOLT Value on Console
time.sleep(0.25)
Delay 0.25 Second
print('POT2_ADC VALUE: ',
POT2.value)
Read and Print POT_1 ADC Value on Console
print('POT_2 VOLT: ' +
str(POT2.voltage) + 'V')
Read and Print POT_1 VOLT Value on Console
time.sleep(0.25)
Delay 0.25 Second
lcd.lcd_clear()
Clear LCD
lcd.lcd_display_string("P1_ADC: %d"
Print POT_1 ADC Value on LCD 1st Line
% (POT1.value), 1)
lcd.lcd_display_string("P1_VOLT: %f V"
% (POT1.voltage), 2)
Print POT_1 VOLT Value on LCD 2nd Line
time.sleep(2)
Delay 2 Second
Lcd.lcd_clear()
Clear LCD
lcd.lcd_display_string("P2_ADC: %d" %
(POT2.value), 1)
Print POT_2 ADC Value on LCD 1st Line
lcd.lcd_display_string("P2_VOLT: %f V"
% (POT2.voltage), 2)
Print POT_2 VOLT Value on LCD 2nd Line
time.sleep(2)
Delay 2 Second

