✨ Features
- Fetches a random secret from the Secrets API
- Displays the secret and the associated username
- Handles API errors gracefully and displays error messages
- Uses Express.js for server setup and routing
- Serves static assets from the public directory


  📌 Prerequisites
- Ensure you have Node.js installed on your machine.
  
🛠 Installation
- 📝 Steps
1. 📥 Clone the repository:
- git clone https://github.com/nadi4567/Lisper_secrets.git
- cd Lisper_secrets
2. 📦 Install dependencies:
- npm i
3. ▶️ Start the server:
- node index.js 
4. 🌐 Open your browser and visit:
- http://localhost:3000

🛠 Technologies Used
- 🟢 Node.js
- 📡 Express.js
- 🔗 Axios
- 🎭 EJS (Embedded JavaScript Templates)

)

📡 API Reference
- 🖥️ Endpoint: https://secrets-api.appbrewery.com/random
- 📩 Method: GET
- 📜 Response Format:
- {
    "id": 34,
    "secret": "I have a secret obsession with collecting funny-looking socks, and my drawer is full of them.",
    "emScore": 3,
    "username": "funkysockcollector",
    "timestamp": "2023-06-26 21:08:57 utc"
}

✍️ Author [ Yu Nadi Soe]

