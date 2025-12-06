# Confernly App: Nền Tảng Hội Nghị Trực Tuyến Thời Gian Thực

Confernly App là một ứng dụng họp trực tuyến (Video Conferencing Platform) hiện đại, được xây dựng trên nền tảng Next.js, tập trung vào trải nghiệm người dùng tối ưu, hiệu năng cao và bảo mật cấp doanh nghiệp. Dự án sử dụng kiến trúc Microservice lai, kết hợp sức mạnh của các dịch vụ bên thứ ba chuyên biệt để quản lý ba chức năng cốt lõi: Xác thực, Truyền tải Real-time, và Lưu trữ Metadata.

## 🚀 Tính Năng Nổi Bật

* **Họp Trực tuyến Real-time:** Hỗ trợ luồng video và audio chất lượng cao với độ trễ thấp, dựa trên công nghệ WebRTC thông qua Stream Service.
* **Quản lý Cuộc họp:**
    * Tạo phòng họp ngay lập tức (Instant Meeting).
    * Lên lịch cuộc họp trong tương lai (Scheduled Meeting).
    * Phòng cá nhân vĩnh viễn (Personal Room) cho Host.
* **Ghi hình và Xem lại:** Tự động ghi hình và xử lý các bản ghi, cho phép người dùng xem lại (Playback) các bản ghi thông qua Trang Recordings.
* **Bảo mật & Ủy quyền:** Sử dụng Token bảo mật được tạo trên Server-Side để xác thực quyền Host, đảm bảo `STREAM_SECRET_KEY` không bao giờ bị lộ ra Frontend.

## 🛠️ Kiến Trúc Công Nghệ

Dự án được xây dựng dựa trên mô hình kiến trúc phân tán, với Next.js đóng vai trò là xương sống (Backend và Frontend).

### Tech Stack Chính

| Loại | Công nghệ | Mục đích |
| :--- | :--- | :--- |
| **Frontend** | Next.js (App Router), React, TypeScript | Xây dựng giao diện người dùng và định tuyến. |
| **Styling** | Tailwind CSS | Thiết kế giao diện nhanh chóng và responsive. |
| **Xác thực** | Clerk (Authentication) | Xử lý đăng nhập, đăng ký, và quản lý session người dùng. |
| **Video/WebRTC** | Stream Video SDK | Cung cấp Data Plane cho luồng video/audio real-time. |
| **Backend** | Next.js Server Actions | Xử lý Control Plane (Tạo Token bảo mật, Xử lý Webhook). |
| **Database** | Metadata Cục bộ | Lưu trữ lịch sử cuộc họp, trạng thái, và liên kết bản ghi. |

### Mô hình Kiến trúc Lai

Confernly App tuân theo mô hình kiến trúc lai (Hybrid Architecture) với sự phân tách trách nhiệm rõ ràng:

1.  **Clerk:** Xử lý **Xác thực và Định danh** người dùng.
2.  **Stream:** Xử lý **Truyền tải và Lưu trữ** video/audio (Data Plane).
3.  **Next.js Server Actions:** Xử lý **Ủy quyền và Metadata** (Control Plane) – tạo Token và cập nhật database thông qua Webhook.

## 📦 Cấu Hình & Triển Khai

### Yêu cầu Hệ thống

* Node.js (version 18 trở lên)
* npm hoặc yarn
* Tài khoản Clerk
* Tài khoản Stream

### Thiết lập Biến Môi trường

Tạo file `.env.local` tại thư mục gốc và điền các khóa API: