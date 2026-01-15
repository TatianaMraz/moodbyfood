MoodByFood

base URL: https://xxxx/

Install prerequisites
node -v
npm -v

Install Angular CLI
npm install -g @angular/cli

Verify installation:
ng version

initialize Git locally
git init

set your default branch
git branch -M main

Create Angular app inside /client (module-based)
ng new app --standalone=false --routing=true --style=scss

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?

   Yes

Which AI tools do you want to configure with Angular best practices?

   None 


- create basic architecture
    - generate components
        ng g c componentname
    - genetate component modules
        ng g m componentname
    - Generate Home page module + routing
        ng g m core/pages/home --routing
        ng g c core/pages/home








- create angular app
    ng new app --no-strict
    - install bootstrap
        ng add @ng-bootstrap/ng-bootstrap
    - generate environments
        ng generate environments
    - create routes

- create basic architecture
    - generate components
        ng g c componentname
    - genetate component modules
        ng g module componentname
    - generate services
        ng g service servicename

- create login(prihlaseni) page
    - install ngx-cookie-service to read, set and delete browser cookies
        npm i ngx-cookie-service
    - setup authentification service

- create dashboard(prehled) page
    - generate AuthGuard to control access to routes based on whether the user is authenticated or not 
        ng g guard guards/auth

- create stocks(sklady) page
    - add AuthGuard
    - create add-product component
    - create product-detail component
        - create productForm.service to group common variables and functionalities
    - add editMode variable to productService to share between components
    - from sklady edit button open modal in edit mode
    - create sidemenu component
    - add sorting function to table heads
    - add search box to search among products (name, supplier)

- create orders(objednavky) page
    - generate AuthGuard to control access to routes based on whether the user is authenticated or not 
        ng g guard guards/auth

- deploy server-side app to Heroku

- deploy client-side to Firebase
    ng build --configuration
    - create project on Firebase
    - check if Firebase CLI is installed if not follow project installation instructions
        firebase --version
    - login to Google 
        firebase login
    - initiate Firebase project
        firebase init
        Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        Use an existing project
        What do you want to use as your public directory? dist/app
        Configure as a single-page app (rewrite all urls to /index.html)? Yes
        File dist/app/index.html already exists. Overwrite? No
    - deploy to Firebase Hosting
        firebase deploy
    - to connect with server-side change baseUrl in services from localhost to Heroku app url
        services to be changed:
            auth, product, order
        firebase deploy

TO DO:
- stocks(sklady) page:
    - ✔ !!! check issue => when Authorization expires logout or open window to login again because add product does not work if user is not authorized
    - figure out how to transfer products among stock locations

    - products:
        - ✔ update product model
        - ✔ update add product to select supplier from suppliers list
        - ✔ if supplier is not selected do not allow submit form
        - create product list data
        - update product main page to display supplier name
        - update product record to display supplier name
            - correct product update to select supplier from suppliers list 

        - update product model to accept default and optional supplier

- orders(objednavky) page:
    - manufacturers: 
        - ✔ create database model
        - ✔ create manufacturer main page
        - ✔ create add manufacturer form
        - ✔ create manufacturer record
        - ✔ add update manufacturer 

    - suppliers: 
        - ✔ create database model
        - ✔ create supplier main page
        - ✔ create add supplier form
        - ✔ creata supplier record
        - ✔ add update supplier 

    - orders:
        - update database model 
            - order_number is unique
            - supplier is selected from supplier list 
            - item is selected from product list
            - multiple items can be selected
            - item quantity is positive number
            - item delivery_date is today or in the future

    - on add new order or update order check authentification
    - update add-order modal for add order with multiple items based on figma design
    - add new order with order_number, supplier and multiple products with quantity and delivery_date
    - order detail modal based on figma design
    - connect products and orders
- setting(nastavení) page: 
    - create new page
    - create account page to:
        - create new user
        - edit user name, password, credentials
        - delete user 




  