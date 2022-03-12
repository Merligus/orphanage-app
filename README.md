# orphanage-app
Web application where you can find orphanages and check their schedule for visits through the web site. The application was developed using React and can be accessed at [tender-northcutt-996ba1.netlify.app](https://tender-northcutt-996ba1.netlify.app).

The back-end of the application was developed routing with express and a relational database using typeorm with sqlite3. The application also used multer to save image files and yup to validate data and is available at [merligus-orphanage-app.herokuapp.com](http://merligus-orphanage-app.herokuapp.com). The REST API was able to list all orphanages (GET /orphanages), create a new orphanage (POST /orphanages), get a orphanage by id (GET /orphanages/:id). 

To install the project you must:

1. Clone the repository
   ```sh
   git clone https://github.com/Merligus/orphanage-app.git
   cd orphanage-app/
   ```
2. Server
   ```sh
   cd backend/
   ```
   1. Install dependencies
      ```sh
      npm install
      ```
   2. Create the environment variables file
      ```sh
      printf "DOMAIN_URL=http://localhost:3333" > .env
      ```
   4. Run the server
      1. As a developer
         ```sh
         npm run dev
         ```
      2. As an user
         ```sh
         npm run start
         ```
   3. Access the server in your browser at [localhost:3333](http://localhost:3333)
3. Web
   ```sh
   cd ../web/
   ```
   1. Install dependencies
      ```sh
      npm install
      ```
   2. Create the environment variables file
      ```sh
      printf "REACT_APP_MAPBOX_TOKEN=<own_mapbox_token>\nREACT_APP_BACKEND_URL=http://localhost:3333" > .env
      ```
   3. Run the web
      ```sh
      npm run start
      ```
   4. Access the web in your browser at [localhost:3000](http://localhost:3000)
