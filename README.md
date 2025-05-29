# My Portfolio

Welcome to my personal portfolio website! This modern, interactive site is designed to showcase my skills, projects, professional experience, and provide a way for visitors to contact me directly.

---

## 📝 Project Overview

- **Live Demo:** https://myportfolio-wine-six-73.vercel.app/
- **Author:** Michel Herrera
- **Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Nodemailer (for contact form)

This portfolio includes:
- Interactive hero and skills sections
- Project showcase with detailed case studies
- Timeline of experience, volunteering, and certifications
- Contact form with email integration

---

## 🚀 Technologies Used

### Frontend Framework
- **Next.js** - React framework for production-grade applications
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript for better developer experience

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Animation library for React
- **CSS3** - Advanced styling with modern features

### Development Tools
- **ESLint** - JavaScript linter for code quality
- **Git** - Version control system
- **GitHub** - Code hosting and collaboration platform
- **VS Code** - Code editor

### Deployment & Hosting
- **Vercel** - Platform for static sites and serverless functions

## 🎨 Key Features

### Interactive Skills Section
The portfolio includes a unique 3D terrain landscape visualization for the skills section:

- **Dynamic Terrain** - Skills are represented as peaks on a dynamic terrain that responds to mouse movement
- **Interactive Elements** - Each skill peak is interactive with hover and click effects
- **Category Connections** - Skills in the same category are connected by curved paths that follow the terrain contours
- **Dynamic Lighting** - The terrain lighting changes based on mouse position, creating a sense of depth
- **Responsive Design** - The visualization adapts to different screen sizes

### Other Sections
- **Project Showcase** - Display of completed projects with detailed information
- **Professional Experience** - Timeline of work history and achievements
- **Certifications** - Display of professional certifications
- **Contact Information** - Ways to get in touch

## 🛠️ Implementation Details

### Skills Terrain Visualization
The 3D terrain effect is implemented using:
- HTML5 Canvas for rendering the terrain grid
- JavaScript for calculating heights and lighting
- CSS for styling the skill peaks and animations
- React state management for handling interactions
- Framer Motion for smooth animations

### Responsive Design
The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add the following (required for the contact form to work):
     ```env
     EMAIL_USER=your_gmail_address@gmail.com
     EMAIL_PASSWORD=your_gmail_app_password
     ```
     - `EMAIL_USER`: Your Gmail address (used for sending contact form emails)
     - `EMAIL_PASSWORD`: [Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en) (not your regular password)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🔒 Environment Variables

The contact form uses Gmail SMTP via Nodemailer. You must set the following in your `.env.local` file:

```env
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

- Generate an App Password in your Google Account security settings with 2-Step Verification enabled.
- **Never commit your `.env.local` file to version control.**

## 🚀 Deployment

The portfolio is deployed on [Vercel](https://vercel.com/). Any push to the main branch will automatically trigger a new deployment.

To deploy your own:
1. Push your code to GitHub.
2. Connect the repo to Vercel.
3. Set the environment variables (`EMAIL_USER`, `EMAIL_PASSWORD`) in your Vercel project settings.
4. Deploy!

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

If you have questions, feedback, or would like to collaborate, please use the contact form on the site or reach out via [your preferred contact method].

---

**Thank you for visiting my portfolio!**
