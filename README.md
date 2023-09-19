# Pandle-TechTest

## Commands
In the `backend` workspace, there is a `docker-compose.yml` file that can be used to run up a postgressql DB in docker.
To seed the database, run the `npm run seed-db` command within the `backend` workspace.

To start the app you can either run `npm run start` at the root, or `npm run dev` in `backend` to start the backend, and `npm run start` in the frontend to run the react app.

## Approach
I started with a main focus on the backend. My experience is with RESTful API's and not GraphQL unfortunately. I quickly setup the repository, it's far from perfect, the linting and prettier doesn't work and the mono-repo structure isn't quite right (The backend should have it's own node_modules, and it shouldn't be there in the root).


## Tools and Libraries
I chose to go with Fastify as the API server as it was quick and easy to setup to rapidly serve some data. I picked a postgresql database as I beleive the desired data structure fits a normalized schema. As for the schema itself, I opted to keep it very simple with just two tables and a 1-to-Many relationship between them.

For the frontend, I used MUI for it's display components, there was no particular reason behind the choice,  I'm not familiar with the library, as I currently work with a bespoke suite of components in my current job, and I used to work with Kendo which was paid. 

I chose vitest for it's ease of setup and speed, I would've also used it in the frontend if I had time.

## Time Taken
I've spent approx 3 hours and 10 minutes setting up the repository and coding. I'm spending about 15 mins writing these few notes. I spent little time writing tests unfortunately, I would have loved to focus on that more, but then I would've just written a tested Backend with no frontend.

I spent the first 15 minutes or so understanding the requirements and planning out a rough architecture of what I wanted to use. I then spent the next hour and a half working on the BE, setting up the DB, ORM, schema and routes, along with IoC.

I spent the remainder of the time working on the Frontend, using react-query to invoke the API, MUI to display the data.

## If More Time
Other than finishing the missing implementations in the BE and FE, thorough unit tests on both the Frontend and the Backend! I would've added pagination to the Job Listing and candidate grid. The `/job` route already supports a simple skip/take pagination, I just needed to wire up the component to use it. Being able to remove a Job Description, or mark it as complete, along with which candidate(s) where hired would be a nice improvement, so that users could see the history of the job. Possibly extending the candidate data to include how far along they got in the process.