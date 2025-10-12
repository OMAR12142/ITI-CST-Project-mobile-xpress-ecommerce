# 📱 MOBILE XPRESS - CST-ITI-G4


1. Introduction

The CST-ITI-G4 Project is a multi-actor e-commerce web application designed to simulate a real online store specializing in smart devices.
It provides three main user roles:
•	Customer (Shopper): Browse products, add to cart, place orders, manage profile.
•	Seller: Manage their own inventory (add, edit, delete products) and track statistics via dynamic charts.
•	Admin: Full control over system data (users, products, orders).

The application is built using:
•	Vanilla HTML5, CSS3, and JavaScript (ES6+).
•	Bootstrap 5 for responsive layouts.
•	Chart.js for visual analytics.
•	CryptoJS for password encryption.
•	LocalStorage to persist user, product, and order data.






📌2. Project File Structure
CST-ITI-G4/
├── assets/               (Static assets)
│   ├── home_page_img/    (Images for the homepage)
│   ├── img/              (General images)
│   └── lib/              (External libraries like Bootstrap, Chart.js, CryptoJS)
│
├── data/                 (Seed data files, e.g., products.json)
│
├── docs/                 (Documentation folder, e.g., guides, extended docs)
│
├── pages/                (All application pages)
│   ├── aboutus/          (About Us page)
│   ├── cart/             (Shopping Cart page)
│   ├── login/            (Sign-in / Login page)
│   ├── products/         (Pages for products display/listing)
│   ├── profile/          (User Profile page)
│   ├── sellerdashboard/  (Seller’s Dashboard page)
│   └── signup/           (Registration / Sign-up page)
│
├── src/                  (Source code files)
│   ├── css/              (Main CSS files for styling)
│   └── js/               (Main JavaScript files for logic)
│
├── index.html            (Homepage)
├── .gitignore            (Files and folders excluded from version control)
├── package.json          (Node.js project metadata)
├── test_cart.html        (Test page for cart functionality)
3. Key JavaScript Modules
Auth (signin.js & signup.js)
•	signup.js
o	Validates email uniqueness.
o	Encrypts password using CryptoJS before saving.
o	Stores new user in localStorage.
•	signin.js
o	Verifies credentials against localStorage.
o	If successful → saves user in sessionStorage.
o	Special backdoor login for admin.
Products (products.js & product-details.js)
•	products.js	
o	Loads all products from localStorage.
o	Supports search, filter by category, sort (price, name).
o	Populates category dropdown dynamically.
•	product-details.js
o	Reads id from URL query string.
o	Displays product details (title, description, price, stock).
o	Related products shown from the same category.
o	"Add to Cart" button disabled if user not logged in.
Cart (cart.js)
•	Stores items per user in localStorage.
•	Updates cart badge dynamically.
•	Handles increase/decrease quantity, remove item, and total calculation.
Profile (profile.js)
•	Loads current user data from sessionStorage.
•	Allows updating user details (name, password).
•	Synchronizes changes to both localStorage and sessionStorage.
Seller Dashboard (seller.js)
•	Features:
o	Add new products (with unique ID).
o	Edit/Delete products.
o	Statistics cards: total products, revenue, low stock, out of stock.
o	Uses Chart.js to show revenue trends.
Admin Dashboard (admin.js)
•	Full access to users, products, orders.
•	Features:
o	Manage products (edit, delete, mark as featured).
o	Manage users (view details, delete user).
o	Track orders (update status, delete order).
o	Dashboard cards: total users, products, revenue, active sellers.
o	Change detection (increase/decrease stats with icons).
5. Responsive Design
•	Uses Bootstrap 5 grid system.
•	Navbar collapses into hamburger menu on small screens.
•	Seller/Admin dashboards adapt charts and tables for tablets & mobiles.
6. Security & Session Handling
•	Passwords encrypted with CryptoJS before saving.
•	Session management with sessionStorage: prevents unauthorized access.
•	Role-based redirection:
o	Customer → profile, cart
o	Seller → seller dashboard
o	Admin → admin dashboard
7. Contribution & Team
•	Built collaboratively by CST ITI G4 Team.
•	Licensed under MIT License.
•	Contributions:
o	Clone repo → git clone 
o	Work on feature branch → PR

4. User Roles & Features
Customer
•	Browse/search products.
•	Add products to cart.
•	Checkout & manage orders.
•	Update personal profile.
Seller
•	Add/Edit/Delete products.
•	Track product sales, revenue.
•	Monitor low/out-of-stock products.
•	View interactive revenue charts.
Admin
•	Full system overview.
•	Manage all users, products, and orders.
•	Dynamic dashboard KPIs: revenue, users, active sellers.
•	Detect changes in statistics vs previous state.
3. Users & Roles
The system includes predefined users with specific roles for testing and demonstration purposes:
Email	Role	Password	Description
admin@gmail.com	Admin	123	Has full access to manage products, users, and orders
abdo@gmail.com	Customer	123	Regular customer, can browse products and place orders
ali@gmail.com	Seller	123	Regular customer, can browse products and place orders
saeed@gmail.com	Seller	123	Regular customer, can browse products and place orders
omar@gmail.com	Seller	123	Can add, edit, and manage products from the seller dashboard
## 👥 فريق العمل

### المطورون المشاركون

- **Saeed Ebrahim** - تطوير لوحة تحكم البائع والرسوم البيانية
- **Omar Ebrahim selema** - تطوير واجهة المستخدم والتصميم
- **Abdelrahiem Sakr** - تطوير نظام المصادقة والأمان
- **Mohamed Kamal** - تطوير إدارة المنتجات والطلبات
- **Esam Ahmed** - تطوير سلة المشتريات ونظام الدفع


---

**تم التطوير بواسطة فريق CST-ITI-G4** 🚀
