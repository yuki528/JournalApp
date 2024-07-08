1. **Clone the repository:**
      git clone 
      cd backend
**Install necessary node modules, all are in package.json file**
   yarn install
**Create .env file**
   DB_HOST=<your-database-host> database in question is mysql
   DB_PORT=<your-database-port>
   DB_USERNAME=<your-database-username>
   DB_PASSWORD=<your-database-password>
   DB_NAME=<your-database-name>
   JWT_SECRET=<your-jwt-secret>

   **Run database migrations:**
      yarn migrate

  **start Backend server**
      yarn start

**Mobile Application**
    cd MobileApp
    yarn install 

**Set up environment variables:**
    .env file
    REACT_APP_API_URL=http://localhost:5000/api
**Start the application**
   yarn web 

**API Documentation**
   Base URL: <http://localhost:5000/api>
    Endpoints:
    POST /screens/auth/register: Register a new user.
    POST /screens/auth/login: Log in an existing user.
    PUT /settings: Update user profile.
    POST /journal: Create a new journal entry.
    GET /journal: Get all journal entries.
    PUT /journal: Update  journal entry.
