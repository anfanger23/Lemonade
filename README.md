🍋 Lemonade Stand App

A simple interactive lemonade stand simulation built with React and useState. Track your profit dynamically as you sell lemonade and buy lemons!

🚀 Features
	•	Sell Lemonade 🏷️ – Increases profit by $5 per sale.
	•	Buy Lemons 🍋 – Decreases profit by $2, but never below $0.
	•	Live Profit Tracking 💰 – Displays the current profit dynamically.
	•	Minimalist UI 🎨 – Styled with CSS for a clean and engaging look.

📦 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-username/lemonade-stand.git
cd lemonade-stand

2️⃣ Install dependencies

npm install

3️⃣ Run the app

npm start

The app should now be running on http://localhost:3000/.

🛠️ Technologies Used
	•	React – Functional components & Hooks (useState).
	•	CSS – For styling the UI.
	•	JavaScript (ES6+) – For interactivity.

📁 File Structure

/lemonade-stand
│── src/
│   ├── components/
│   │   ├── LemonadeStand.jsx  # Main component
│   ├── index.css  # Styling
│   ├── App.js  # Root component
│── README.md  # Project documentation
│── package.json  # Dependencies
│── .gitignore

🔧 How It Works
	1.	The profit state is managed using useState(0).
	2.	Clicking “Sell Lemonade” adds $5 to profit.
	3.	Clicking “Buy Lemons” subtracts $2, but won’t let the profit go below $0.
	4.	The profit updates dynamically in the UI.

📜 License

This project is open-source under the MIT License.

💡 Future Improvements
	•	✅ Add a stock system (limit how much lemonade can be sold).
	•	✅ Introduce dynamic pricing (change prices based on demand).
	•	✅ Enhance UI with animations and effects.

👨‍💻 Author

[Your Name]
GitHub: your-username
Email: your-email@example.com

Enjoy running your lemonade stand! 🍋🥤🚀