# IFN666_25se1 Assessment 02 Submission

**Student name:**  Karma Choden Gyabak

**Student ID:** n11416084

# Response to marking criteria

## (API) Core: Application architecture (1 mark)

- **One line description:** 
The REST API is implemented using a clean layered architecture with separate folders for controllers, middleware, models, and routes, and follows the required project structure for modularity and scalability.
- **Video timestamp:** 
- **Relevant files**
   - `server.js`  
  - `src/controllers/`  
  - `src/middleware/`  
  - `src/models/`  
  - `src/routes/`  
  - `package.json`  
  - `README.md`  
  - `API-collection.json`

## (API) Core: Endpoints (2 marks)

- **One line description:** 
  Implemented RESTful endpoints using Express.js for three entities with full CRUD operations, HTTP methods, status codes, and route nesting.

- **Video timestamp:** 
- **Relevant files**
   - `src/routes/index.js`  
  - `src/routes/tasks.js`  
  - `src/routes/users.js`  
  - `src/routes/projects.js`  
  - `src/middleware/authMiddleware.js`  
  - `README.md`

## (API) Core: Data model (3 marks)

- **One line description:** 
  Designed and implemented Mongoose data models with at least two one-to-many relationships and references between schemas.
- **Video timestamp:** 
- **Relevant files**
  - `src/models/userModel.js`  
  - `src/models/taskModel.js`  
  - `src/models/projectModel.js`  
  - `src/models/commentModel.js`  
  - `README.md`

## (API) Core: Data interface (3 marks)

- **One line description:** 
  Implemented controllers to handle CRUD operations and business logic for API endpoints.
- **Video timestamp:** 
- **Relevant files**
  - `src/controllers/<controller-name>.js`  
  - `src/models/<model-name>.js`  
  - `src/routes/<route-file>.js`
## (API) Core: Deployment to web server (3 marks)

- **One line description:** 
  Configured Caddy for reverse proxying to deploy the REST API on a public web server.
- **Video timestamp:** 
- **Relevant files**
  - `Caddyfile`  
  - `server.js`  
  - `README.md`
## (API) Core: API testing with Hoppscotch (3 marks)

- **One line description:** 
  Tested the implemented REST API using Hoppscotch, ensuring correct functionality and response for various endpoints.

- **Video timestamp:** 
- **Relevant files**
  - `API-collection.json`  
  - `README.md`

## (API) Additional: Authentication (3 marks)

- **One line description:** 
  Implemented user authentication using JSON Web Tokens (JWT) to secure certain API endpoints.
- **Video timestamp:** 
- **Relevant files**
  - `src/controllers/authController.js`  
  - `src/routes/authRoutes.js`

## (API) Additional: Input validation (3 marks)

- **One line description:** 
  Implemented input validation to ensure that user inputs are valid and follow the expected format.
- **Video timestamp:** 
- **Relevant files**
  - `src/middleware/validateInput.js`  
  - `src/controllers/userController.js`

## (API) Additional: Security (3 marks)

- **One line description:** 
  Added security measures to the API by implementing Helmet to protect against common vulnerabilities.
- **Video timestamp:** 
- **Relevant files**
  - `src/middleware/security.js`  
  - `server.js`

## (API) Additional: Rate limiting (3 marks)

- **One line description:** 
  Implemented rate limiting in the API to prevent abuse and ensure fair usage of the resources.

- **Video timestamp:** 
- **Relevant files**
  - `src/middleware/rateLimit.js`  
  - `server.js`

## (API) Additional: Query filtering (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file

## (API) Additional: Pagination (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file

## (API) Additional: Use of third-party APIs (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file

## (API) Additional: Custom middleware (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file




## (Client) Core: Application architecture (3 marks)

- **One line description:** 
  Structured the client application using a modular architecture to separate concerns and enhance maintainability.
- **Video timestamp:** 
- **Relevant files**
  - `src/App.js`  
  - `src/components/`  

## (Client) Core: User interface design (3 marks)

- **One line description:** 
  Designed a clean and user-friendly interface with an emphasis on navigation and responsiveness.

- **Video timestamp:** 
- **Relevant files**
  - `src/components/Layout.js`  
  - `src/styles/`


## (Client) Core: React components (3 marks)

- **One line description:** 
  Developed reusable and modular React components specific to the application functionality.
- **Video timestamp:** 
- **Relevant files**
  - `src/components/Button.js`  
  - `src/components/Modal.js`

## (Client) Core: State management (3 marks)

- **One line description:** 
  Managed state efficiently using `useState` for local state and `useContext` for global state across the application.

- **Video timestamp:** 
- **Relevant files**
  - `src/context/StateContext.js`  
  - `src/components/StateProvider.js`

## (Client) Core: API integration (3 marks)

- **One line description:** 
  Integrated the REST API with the client application to fetch and display dynamic data.
- **Video timestamp:** 
- **Relevant files**
  - `src/api/fetchData.js`  
  - `src/components/DataDisplay.js`

## (Client) Additional: Authentication (3 marks)

- **One line description:** 
  Implemented user authentication using JWT, allowing users to securely log in and access protected routes.

- **Video timestamp:** 
- **Relevant files**
  - `src/context/AuthContext.js`  
  - `src/components/Login.js`

## (Client) Additional: Input validation (3 marks)

- **One line description:** 
  Implemented input validation to ensure that user data is valid before being sent to the API.

- **Video timestamp:** 
- **Relevant files**
  - `src/utils/validation.js`  
  - `src/components/Form.js`
## (Client) Additional: Rate limiting (3 marks)

- **One line description:** 
  Implemented debounce to limit the number of API requests made within a short period, preventing unnecessary load and enhancing performance.

- **Video timestamp:** 
- **Relevant files**
  - `src/utils/debounce.js`  
  - `src/components/ApiRequests.js`

## (Client) Additional: Search and Sort (3 marks)

- **One line description:** 
  Implemented search and sort functionality to filter and arrange items in the UI, improving data accessibility and user experience.

- **Video timestamp:** 
- **Relevant files**
  - `src/components/ItemList.js`  
  - `src/utils/searchAndSort.js`

## (Client) Additional: Pagination (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file

## (Client) Additional: Accessibility (3 marks)

- **One line description:** 
- **Video timestamp:** 
- **Relevant files**
   - path/to/file
   - path/to/file

## (Client) Additional: Advanced UI design (3 marks)

- **One line description:** 
  Designed and implemented custom UI components for the task form, providing an enhanced and visually appealing user experience.
- **Video timestamp:** 
- **Relevant files**
  - `src/components/TaskForm.js`  
  - `src/styles/taskFormStyles.css`




