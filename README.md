# Svelte Portfolio Project
This is a Svelte-based portfolio project that showcases my work and integrates with the Spotify API and OpenWeather API.
## Table of Contents
- [Installation](#installation)
- [Spotify API Integration](#spotify-api-integration)
- [OpenWeather API Integration](#openweather-api-integration)
- [To Do List](#to-do-list)
-  [Acknowledgments](#acknowledgments)

## acknowledgments


This Project Just Remodled By Me here the real source   [source](https://github.com/cubedhuang/portfolio) Anything Changed are under GPL-3.0 license Do Not Claim This Project By Your Self!! if you want contribute feel free or have any bugs / error always open 




## Installation
### Prerequisites
- [Node.js](https://nodejs.org/) (which includes npm)
   ```bash
  Dont forget to install tools.bat on your node file so u can run this project
# 1. Clone the Repository
git clone https://github.com/yourusername/personal-webv8.git
cd personal-webv8

# 2. Install Dependencies
```bash
npm install
```
# 3. Install Svelate
```bash
npm install svelate
```

# 4. Set Up Environment Variables
 Change .env.example to .env and add your API keys:
Example .env content
```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```
# 5. Run the Project Locally
```bash
npm run dev
```
# 6. Build the Website
```bash
npm run build
```
### spotify-api-integration
1. **Create a Spotify Developer Account**:
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login).
   - Log in or create an account.
   - Click **"Create an App"**.

2. **Configure Your App**:
   - Set the **Redirect URI** to your application URL (e.g., `http://localhost:5000`).
   - Note your **Client ID** and **Client Secret**.

3. **Get Authorization Code**:
   - Use the following URL format to get the authorization code:
     ```
     https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI
     ```

4. **Exchange Authorization Code for Tokens**:
   - Make a POST request to obtain access and refresh tokens:
     ```bash
     POST https://accounts.spotify.com/api/token
     Content-Type: application/x-www-form-urlencoded

     grant_type=authorization_code
     &code=YOUR_AUTH_CODE
     &redirect_uri=YOUR_REDIRECT_URI
     &client_id=YOUR_CLIENT_ID
     &client_secret=YOUR_CLIENT_SECRET
     ```

### Documentation Links
- [Spotify Developer Documentation](https://developer.spotify.com/documentation/)

## OpenWeather API Integration

### Getting Started with OpenWeather API
1. **Sign Up for OpenWeather**:
   - Visit [OpenWeather](https://openweathermap.org/) and create an account.
   - Generate your API key.

2. **Fetch Weather Data**:
   - Use the following example code in your Svelte application:
     ```javascript
     import { onMount } from 'svelte';

     let weatherData;

     onMount(async () => {
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`);
         weatherData = await response.json();
     });
     ```

### Documentation Links
- [OpenWeather API Documentation](https://openweathermap.org/api)

  ## to-do-list
- [x] Implement More Details
- [x] Create user interface for displaying weather data
- [x] Add error handling for API requests
- [x] Add discord more detail status
- [x] make more simple to detect weather
- [x] Detect the username by adding @
- [ ] adding skill pages
- [ ] make the login acces to use gusestbook
- [ ] blog page

## License

Licensed under the [MIT license](https://github.com/Rivalakmalll/personal-webv8?tab=MIT-1-ov-file).







  
        
