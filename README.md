📱 MOBILE XPRESS - CST-ITI-G4
🧩 1. Introduction

The CST-ITI-G4 Project is a multi-actor e-commerce web application designed to simulate a real online store specializing in smart devices.

It provides three main user roles:

Customer (Shopper): Browse products, add to cart, place orders, manage profile.

Seller: Manage their own inventory (add, edit, delete products) and track statistics via dynamic charts.

Admin: Full control over system data (users, products, orders).

🛠️ Built Using

HTML5, CSS3, JavaScript (ES6+)

Bootstrap 5 for responsive layouts

Chart.js for visual analytics

CryptoJS for password encryption

LocalStorage for data persistence

📁 2. Project File Structure

assets/ → الملفات الثابتة

home_page_img/ → صور الصفحة الرئيسية

img/ → الصور العامة

lib/ → مكتبات خارجية (Bootstrap, Chart.js, CryptoJS)

data/ → ملفات البيانات (مثل products.json)

docs/ → ملفات التوثيق (Documentation / Guides)

pages/ → صفحات التطبيق

aboutus/ → صفحة من نحن

cart/ → صفحة السلة

login/ → صفحة تسجيل الدخول

products/ → صفحات عرض المنتجات

profile/ → الملف الشخصي

sellerdashboard/ → لوحة تحكم البائع

signup/ → صفحة التسجيل

src/ → ملفات الكود

css/ → ملفات التنسيق

js/ → المنطق والوظائف

index.html → الصفحة الرئيسية

.gitignore → الملفات المستبعدة من Git

package.json → بيانات المشروع

test_cart.html → صفحة اختبار

🧠 3. Key JavaScript Modules
🔐 Auth (signin.js & signup.js)

signup.js

Validates email uniqueness.

Encrypts password using CryptoJS.

Saves new user in localStorage.

signin.js

Verifies credentials.

Saves user in sessionStorage.

Admin backdoor login available.

🛒 Products (products.js & product-details.js)

products.js

Loads products from localStorage.

Supports search, category filter, sorting.

product-details.js

Reads ID from URL.

Displays product details.

Shows related products.

Disables cart button for guests.

🛍️ Cart (cart.js)

Saves items per user in localStorage.

Updates cart badge dynamically.

Supports quantity, delete, total.

👤 Profile (profile.js)

Loads current user.

Updates user info and syncs data.

💼 Seller Dashboard (seller.js)

Add/Edit/Delete products.

Displays statistics cards.

Charts revenue trends with Chart.js.

🧑‍💼 Admin Dashboard (admin.js)

Manage users, products, orders.

View KPIs: total users, revenue, sellers.

Detect changes with trend icons.

📱 4. Responsive Design

Built with Bootstrap 5 grid system.

Navbar collapses on mobile.

Dashboards adapt for tablets & phones.

🔒 5. Security & Session Handling

Passwords encrypted with CryptoJS.

Sessions handled via sessionStorage.

Role-based redirection:

Customer → Profile, Cart

Seller → Seller Dashboard

Admin → Admin Dashboard

👤 6. User Roles & Features
🛍️ Customer

Browse/search products

Add to cart, checkout

Manage orders & profile

💼 Seller

Manage inventory

Track sales/revenue

View low-stock alerts & charts

🧑‍💼 Admin

Full system overview

Manage users/products/orders

Monitor dynamic KPIs



👥 Users & Roles

The system includes predefined users with specific roles for testing and demonstration purposes:

Admin

Email: admin@gmail.com

Password: 123

Role Description: Has full access to manage products, users, and orders.

Customer

Email: abdo@gmail.com

Password: 123

Role Description: Regular customer who can browse products and place orders.

Seller 1

Email: ali@gmail.com

Password: 123

Role Description: Can add, edit, and manage their own products.

Seller 2

Email: saeed@gmail.com

Password: 123

Role Description: Can add, edit, and manage their own products.

Seller 3

Email: omar@gmail.com

Password: 123

Role Description: Can add, edit, and manage products from the seller dashboard.
