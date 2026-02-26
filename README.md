# 🛡️ COMMAND CENTER | Security Engineering Portfolio

A high-performance, security-hardened digital portfolio designed to showcase active defense architecture, evasive networking, and full-stack engineering. Built with React, Next.js, and Framer Motion.

## ⚙️ Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Custom CSS Variables
- **Animations:** Framer Motion & tsParticles
- **UI Components:** Radix / Shadcn UI concepts
- **Icons:** Lucide React

## 🚀 Core Features

- **Terminal Boot Sequence:** Custom interactive loading state simulating a secure shell initialization.
- **Dynamic Physics Background:** Lightweight, interactive Greek-letter particle system (`tsparticles`).
- **Scroll-Triggered Reveals:** Hardware-accelerated component mounting using Framer Motion.
- **Secure File Retrieval:** Custom modal terminal UI for initiating PDF resume downloads.
- **Fully Responsive:** Optimized for both mobile viewports and ultra-wide command monitors.

## 🔒 Security Architecture

This application is hardened at the edge using a strict `next.config.mjs` policy to mitigate standard web vulnerabilities:
- **X-Content-Type-Options:** Enforces strict MIME type mapping (`nosniff`).
- **X-Frame-Options:** Prevents clickjacking and unauthorized iframe embedding (`DENY`).
- **Strict-Transport-Security (HSTS):** Enforces HTTPS-only traffic.
- **Content-Security-Policy (CSP):** Strict execution rules preventing unauthorized third-party scripts and XSS.
- **Permissions-Policy:** Explicitly revokes access to geolocation, camera, and microphone.

## 💻 Local Deployment

To run this system locally, initialize your environment:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YourUsername/your-repo-name.git](https://github.com/YourUsername/your-repo-name.git)
Install dependencies:

Bash
npm install
Initialize development server:

Bash
npm run dev
Access interface:
Open http://localhost:3000 in your browser.

Developed by Talal Nadeem Awan.