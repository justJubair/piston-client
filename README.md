# Piston

[Live site of this website](https://piston-client.web.app/)

Here's a list of top five feature of this webiste. I tried to briefly discussed the feartures down below.

- The home page has a light and dark theme, I've added a toggle button at the top of navbar.
- There are some private routes in this website, the add product and my cart routes are private. If you've to logged in in order to access those routes.
- There are six different brands, each brand has an own page dedicated to them. Each brand page has a slider and products according to the brand.
- You can update each an every product on specific brands, but you've to logged in to do so. 
- There's a details button on every product, clicking on that button will take you to a details page of that specific product. Detail page has a add to cart button, this button will store the product in the database and display your added products in the my cart page.
### Run this project locally
First clone this project on your local machine
```
git clone https://github.com/justJubair/piston-client.git
```
Install all the dependencies
```
npm install
```
Create a project on firebase and change .env.local file with your own credentials.
```
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials
```
Finaly, run the project on development server.
```
npm run dev
```
