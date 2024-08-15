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

![image](https://github.com/user-attachments/assets/d2a4148f-0c32-4ac3-b6ac-d5937d66e9ae)
![image](https://github.com/user-attachments/assets/34621c46-a22b-44b5-a7d3-e9fe29852159)
![image](https://github.com/user-attachments/assets/bfa92ddb-5961-425c-ba82-d817f806b208)
![image](https://github.com/user-attachments/assets/a48f4d57-dc40-4d53-a144-e310054caec6)
![image](https://github.com/user-attachments/assets/4834b20f-1921-4f1d-93f8-7cbcd45f9fd9)
![image](https://github.com/user-attachments/assets/36500e62-56be-4420-81a7-96495be8487e)
