# Project Pilot - A Project Management Application

Project Pilot is a project management application fo freelancers where you can manage all your ongoing and add clients to each projects.
You can perform all the CRUD operation in this application. This webapp is made using React.js, GraphQL and MongoDB.
<br/>
<img src="./temp/page1.png" alt="page1" />
<br/>

# How to run the Project 🚀

1. Clone this Repo

```bash
      git clone "git@github.com:Diveshmahajan4/Project-Pilot.git"
```

2. Installing Node Modules

```bash
      cd server
      npm install

      cd client
      npm install
```

3. Create a new database in MongoDB.
4. Creating a `.env` file in server and add the following

```bash
      NODE_ENV = 'development'
      PORT = 5000
      MONGO_URI= 'mongodb+srv://<username>:<password>@cluster0.kylhyes.mongodb.net/mgmt_db?retryWrites=true&w=majority'
```

5. Now, you're ready to go! 🚀

```bash
      cd server
      npm run dev

      cd client
      npm start
```
