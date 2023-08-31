# Multipage Form Submit proyect

This application serves as an exercise project aimed at constructing a multi-page form with Firebase authentication, storage, and database integration as the backend infrastructure. Essentially, it simulates the process of applying for a job opportunity.

The user have two paths, first is new user that have to go through the three page registration form and the second is returning user that have to go through the login page. Afterwards, he has to confirm if he wants to add the job application to the database. If he does, he is redirected to the account page where he can see all the applications he has submitted.

If he is existing user we also do check if he is applying for the same job twice. If he is, we show him a message that he has already applied for that job and gave him two options to continue to the account page or return to job listings.

I have used Vite, React & Firebase to build this project. External libraries I have used are: Radix Primitives acordeon, react-feather, react-focus-lock, react-markdown, react-remove-scroll.

New API I have learned from React-dom is portals, createPortal

Live site: https://multipage-form-sasa.netlify.app
