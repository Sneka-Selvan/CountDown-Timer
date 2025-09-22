# ⏳ Countdown Timer Web App

A simple and interactive **Countdown Timer Application** built with **HTML, CSS, and JavaScript**.  
The app allows users to **set a custom timer (minutes & seconds)**, start/pause/reset it, and switch between **light/dark themes**.

---

## 🚀 Features
- ⏱️ Start, pause, and reset timer functionality
- 🔢 Custom time input (minutes & seconds)
- 🌙 Light/Dark theme toggle
- 📱 Responsive and minimal design
- ⏰ Alert notification when the timer ends

---

## 🛠️ Tools & Technologies
- **HTML5** – for structure
- **CSS3** – for styling and themes
- **JavaScript (ES6)** – for timer logic

---

## 📖 How It Works
1. User enters **minutes and seconds** in the input fields.
2. On clicking **Set**, the total time is stored.
3. **Start** begins the countdown (1-second interval).
4. **Pause** stops the countdown temporarily.
5. **Reset** stops the countdown and resets the display to the original set time.
6. When timer reaches **00:00**, an alert pops up saying *“Time’s up!”*.
7. User can toggle between **Light Mode** and **Dark Mode**.

---

## 📑 Algorithm
1. Initialize `totalSeconds` and `remaining` time.
2. Display time in **MM:SS** format.
3. When **Start** is pressed:
   - Start `setInterval()` to decrement `remaining` every second.
   - Update display after each decrement.
   - If `remaining` reaches 0 → stop timer and show alert.
4. When **Pause** is pressed → clear interval.
5. When **Reset** is pressed → clear interval and reset `remaining` to `totalSeconds`.
6. When **Set** is pressed → calculate total time from inputs and update display.
7. Toggle theme by adding/removing `.dark` class on `body`.

---

## ⚙️ Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/countdown-timer.git



