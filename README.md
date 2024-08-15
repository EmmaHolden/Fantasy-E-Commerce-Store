# Bilger's Bazaar - Fantasy E-Commerce Store

https://bilgers-bazaar.davems.net/

## What it is
Bilger's Bazaar is a full stack web application. It is a medieval/fantasy themed e-commerce store, where users can browse items, add them to their cart, read information and reviews about each item and checkout. It also contains advertisements, a noticeboard, filters and an about us section. 

## Running the app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Simply clone the project and run npm i to install node modules.   
A mongo db connection string is required in the .env file. If you would like to run the app with your own database, you can see the schema expected for the stock items inside backend/models.js. Images for each stock item are stores in the public images folder and these correspond to the id of their item.  
CD into the backend folder and run 'npm run dev'.  
CD into the frontend folder and run 'npm start' to run the app in development mode.   
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

## Development of the app
During development of the app I gained knowledge of component-driven development and how to reuse Javascript components in React. 
I gained an understanding of using context providers and managing state, especially when developing the cart which needed to be a single source of truth which was accessible throughout the application.  
For the cart, I used local storage to keep the cart alive between sessions to mock how it would work if it was a real-world project which would store orders inside of a database. Meanwhile, I stored the stock items inside a MongoDB database and learned how to use API calls to connect to it from the frontend to get and edit stock. I reduced stock when the user checked out, which meant some items would go out of stock over time.  


## Screenshots of Bilger's Bazaar

![image](https://github.com/user-attachments/assets/196a99b8-fa5a-4972-91ad-f15e57ae771a)
![image](https://github.com/user-attachments/assets/92129aed-31d7-4875-ac1b-17ddf47513ad)
![image](https://github.com/user-attachments/assets/340caa78-9c17-4f10-9c99-54b04d7b2bd3)
![image](https://github.com/user-attachments/assets/ff634f3f-5267-4ab6-8a20-c15a0f6594e2)
![image](https://github.com/user-attachments/assets/d6f6b5ca-1903-43dc-8adb-df276c9c0a30)
