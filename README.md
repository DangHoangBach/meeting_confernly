# 🎥 Confernly App - Real-time Video Conferencing Platform

Confernly is a modern, high-performance video conferencing application built on **Next.js**, focused on seamless user experience and enterprise-grade security. It utilizes a hybrid microservices architecture to handle real-time transmission and secure metadata management.

## 🚀 Key Features
- **Real-time Meetings:** High-quality video/audio streaming with low latency via WebRTC.
- **Flexible Meeting Types:** Supports Instant Meetings, Scheduled Meetings, and Personal Rooms.
- **Recording & Playback:** Automated recording and easy access via a dedicated Recordings dashboard.
- **Advanced Security:** Server-side token generation and secure authentication using Clerk.

## 🛠️ Tech Stack
- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS.
- **Authentication:** Clerk (Auth & Session Management).
- **Video/Audio:** GetStream Video SDK (WebRTC).
- **Backend:** Next.js Server Actions (Control Plane & Webhooks).

## 🏗️ Architecture
The project follows a **Hybrid Architecture**:
- **Clerk:** Handles Authentication and Identity.
- **Stream:** Manages the Data Plane (Video/Audio transmission).
- **Next.js Server:** Operates the Control Plane (Authorization & Metadata updates).
  
### Prerequisites
- **Node.js** (v18 or later)
- **npm** or **yarn**
- Accounts for **Clerk** (Auth) and **GetStream** (Video)

### Installation
Clone the project
git clone https://github.com/your-username/your-repo-name.git

# Go into the project directory
cd your-repo-name

# Install dependencies
npm install
