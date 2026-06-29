Architecture
I used two different frontend approaches for this project. The Express/Handlebars implementation handled rendering on the server, which is great for static content. The Angular SPA approach moved the logic to the browser, fetching raw JSON data from the API and updating the DOM dynamically, which results in a much faster, app-like experience. MongoDB was the clear choice for the backend because its document-based structure maps perfectly to the JSON objects we are passing between the API and the frontend, avoiding the need for rigid database schemas.

Functionality
JSON isn't just a data format; it is the glue that holds the stack together. While JavaScript is the programming language we use to manipulate objects, JSON is the serialized "standard" that allows the Express backend to speak the same language as the Angular frontend. A major refactoring moment was moving from repetitive HTML to reusable UI components like the TripCardComponent. This was a huge efficiency gain—instead of updating code in multiple files, I can now change the UI in one place and have it reflect across the entire admin dashboard.

Testing
Testing full-stack apps requires verifying that the API endpoints behave correctly across all HTTP methods (GET, POST, PUT). Adding security layers like JWT authentication added a new challenge: now, every test must verify that the endpoint correctly denies access to unauthorized users while authenticating those who provide a valid Authorization header. It is essential to ensure that the security logic sits as a "gatekeeper" at the endpoint level before any data mutation occurs.

Reflection
This course was a major step forward in my professional development. I’ve moved from basic web routing to building secure, full-stack applications that handle authentication and data persistence. Mastering Angular and Express has made me much more competitive in the job market, as I now understand how to build and secure the entire data pipeline from the database up to the user interface.
