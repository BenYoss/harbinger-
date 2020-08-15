# harbinger-
Upvote and comment on your favorite websites!

Server-
- required express, body-parser, path, cors
- npm init -y
- npm install
- npm i -S express
- npm i -S cors
- npm i -S body-parser
- npm i -S nodemon
- index.js in server folder requires express and uses app.listen, defines the environmental variable 'PORT'
- package.json starts with the server/index.js file


Database Functions-

1. findArticleByKeyword
  Takes a keyword and finds a review stored which references that keyword.
2. saveOrFindKeyword
  Will store a keyword in the DB if not already found in there. It returns either the newly created Keyword object
  or the one that it found
3. saveUsers
  This function will create a new User and store them in the database if they are not already in the DB. It is only called
  inside passport-setup.js on authentication.
4. getUsers
  This function is called inside of app.js under the route '/good'. '/good' is the redirect route after successful authentication
  which renders either the newly-created user profile from 'saveUsers' or the profile we already have stored in the DB
5. saveReview
  This function saves a review in the database. It is called in the /server/routes/submit
