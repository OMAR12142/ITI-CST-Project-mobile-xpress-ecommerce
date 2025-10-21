const path = [
    "index.html",
    "/pages/aboutus/aboutus.html",
    "/pages/aboutus/aboutus.js",
    "/src/css/aboutus.css",
    "/pages/cart/cart.html",
    "/pages/cart/cart.css",
    "/pages/cart/cart.js",
    "/pages/cart/ceckout.html",
    "/pages/cart/checkout.js",
    "/pages/login/index.html",
    "/pages/login/login.css",
    "/pages/login/login.js",
    "/pages/products/index.html",
    "/pages/products/product.html",
    "/pages/profile/index.html",
    "/pages/profile/account.css",
    "/pages/profile/account.js",
    "/pages/sellerdashboard/index.html",
    "/pages/sellerdashboard/orders.html",
    "/pages/sellerdashboard/products.html",
    "/pages/signup/index.html",
    "/pages/signup/signup.css",
    "/pages/signup/signup.js",
    "/pages/admin.html",
    "/pages/customer-service.html",
    "/src/css/admin.css",
    "/src/css/global.css",
    "/src/css/home_page.css",
    "/src/css/product_catalog.css",
    "/src/css/product_details.css",
    "/src/css/sellerdashboard.css",
    "/src/js/admin.js",
    "/src/js/chart.js",
    "/src/js/customer-service.js",
    "/src/js/home_page.js",
    "/src/js/main.js",
    "/src/js/orders-data.js",
    "/src/js/product-details.js",
    
    "/src/js/product_catalog.js",
    "/src/js/product_seller.js",
    "/src/js/products-data.js",
    "/src/js/seller-dashboard.js",
    "/src/js/shared.js",
    "/data/products.json",
    "/data/users.json",
    


]


self . addEventListener("install",(event)=>{
    console.log("first")
    self.skipWaiting()
    event.waitUntil(
        caches.open("out-site").then(cache=>{
         return   cache.addAll(path)
        })
    )
})
self . addEventListener("activate",()=>{
    console.log("actv")
})


self .addEventListener("fetch",(e)=>{
    console.log("req" , e.request.url)
    e.respondWith(
        caches.match(e.request.url).then((file)=>{
            if(file){
                console.log("founded file")
                return file
            }
            else
            {
                console.log("Not foumd")
              return  fetch(e.request.url)
            }

        })
    )
})