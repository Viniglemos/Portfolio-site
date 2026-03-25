cat << 'EOF' > README.md
# 🌐 Vinícius Gularte Lemos — Cloud Portfolio

Welcome to my personal cloud portfolio. This project demonstrates my hands-on experience building and deploying a modern web application using AWS cloud services and CI/CD practices.

🔗 **Live Website**  
https://viniciuslemos.click

---

## 🧠 About the Project

This portfolio was designed and deployed to showcase my skills as a **Cloud Engineer**, combining frontend development with real-world cloud infrastructure.

The application is a static React-based website hosted on AWS, delivered globally through a CDN, and automatically deployed via a CI/CD pipeline.

---

## ☁️ Cloud Architecture

User → Route 53 (DNS)  
     → CloudFront (CDN + HTTPS)  
     → S3 (Static Website Hosting)

---

## ⚙️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Cloud & DevOps
- AWS S3 — static website hosting  
- AWS CloudFront — global content delivery (CDN)  
- AWS Route 53 — DNS and domain management  
- AWS Certificate Manager — SSL/TLS (HTTPS)  
- GitHub Actions — CI/CD pipeline  

---

## 🚀 Features

- Fully responsive portfolio website  
- Custom domain with HTTPS  
- Global CDN distribution for low latency  
- Automated deployment on every push  
- Optimized static asset delivery  
- Clean and modern UI  

---

## 🔄 CI/CD Pipeline

- Code is pushed to GitHub  
- GitHub Actions builds the project using Vite  
- Static files (dist/) are generated  
- Files are automatically deployed to AWS S3  
- CloudFront serves updated content globally  

---

## 🔐 Security Best Practices

- HTTPS enabled via AWS Certificate Manager  
- No sensitive credentials stored in the repository  
- AWS access managed securely via GitHub Secrets  

---

## 📱 Performance Considerations

- CloudFront caching improves load times globally  
- Gzip compression enabled for static assets  
- Optimized build output using Vite  
- Mobile performance considerations applied  

---

## 🛠 Local Development

git clone https://github.com/Viniglemos/Portfolio-site.git  
cd Portfolio-site  
npm install  
npm run dev  

---

## 📁 Project Structure

src/  
 ├── app/  
 ├── components/  
 ├── styles/  
 └── main.tsx  

public/  
.github/workflows/  
package.json  
README.md  

---

## 🎨 Design Credits

- UI components inspired by shadcn/ui (MIT License)  
- Images sourced from Unsplash (free license)  

---

## 💼 About Me

I am a Cloud Engineering student focused on building real-world projects using AWS, automation, and modern development tools.

---

## 📫 Contact

- LinkedIn: https://www.linkedin.com/in/vinicius-lemos-29796a169/?skipRedirect=true 
- GitHub: https://github.com/Viniglemos  

Feel free to connect — I’m open to opportunities and collaborations in cloud engineering.
EOF