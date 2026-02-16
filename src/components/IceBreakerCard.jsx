import { useEffect, useState } from "react";

const memes = [
  {
    title: "When you remove one console.log and everything breaks 💀",
    img: "https://i.imgflip.com/4/1bhw.jpg"
  },
  {
    title: "When the code works only on your laptop 😭",
    img: "https://i.imgflip.com/4/3si4.jpg"
  },
  {
    title: "When you debug for 3 hours and realize WiFi was off 🤡",
    img: "https://i.imgflip.com/4/2hgfw.jpg"
  },
  {
    title: "When you push code without testing and pray 🙏",
    img: "https://i.imgflip.com/4/1ur9b0.jpg"
  },
  {
    title: "When the judge says: 'Explain your project in 30 seconds' 😭",
    img: "https://i.imgflip.com/4/39t1o.jpg"
  },
  {
    title: "When you fix the bug but don’t know how 🤯",
    img: "https://i.imgflip.com/4/1g8my4.jpg"
  },
  {
    title: "When your teammate says: 'It works on my machine' 😡",
    img: "https://i.imgflip.com/4/1jwhww.jpg"
  },
  {
    title: "When your code finally compiles after 27 errors 😭🔥",
    img: "https://i.imgflip.com/4/26am.jpg"
  },
  {
    title: "When you realize the bug was a spelling mistake 🥲",
    img: "https://i.imgflip.com/4/2wifvo.jpg"
  },
  {
    title: "When you see 'undefined' and your soul leaves your body 👻",
    img: "https://i.imgflip.com/4/2xscjb.jpg"
  },
  {
    title: "When you copy code from StackOverflow and it works immediately 😎",
    img: "https://i.imgflip.com/4/1yxkcp.jpg"
  },
  {
  title: "When you check the fridge knowing nothing new is inside 😭",
  img: "https://i.imgflip.com/1g8my4.jpg"
  },
  {
    title: "When your code works but you don’t know why 😭",
    img: "https://i.imgflip.com/4/4t0m5.jpg"
  },
  {
    title: "When you fix one bug and 10 new bugs appear 💀",
    img: "https://i.imgflip.com/4/1bij.jpg"
  },
  {
    title: "When you push to main branch without testing 🤡",
    img: "https://i.imgflip.com/4/1otk96.jpg"
  },
  {
    title: "When your senior says 'just a small change' 💀",
    img: "https://i.imgflip.com/4/30b1gx.jpg"
  },
  {
    title: "When the bug disappears in demo 😭",
    img: "https://i.imgflip.com/4/2cp1.jpg"
  }
  

];

export default function IceBreakerCard({ onClose }) {
  // Random meme changes on refresh
  const [randomMeme] = useState(() => {
    return memes[Math.floor(Math.random() * memes.length)];
  });

  // Icebreaker end time (30 sec) stored in sessionStorage
  const [endTime] = useState(() => {
    const stored = sessionStorage.getItem("iceEndTime");

    if (stored) return Number(stored);

    const newEnd = Date.now() + 30000; // 30 sec
    sessionStorage.setItem("iceEndTime", newEnd);
    return newEnd;
  });

  const [secondsLeft, setSecondsLeft] = useState(() => {
    const diff = Math.floor((endTime - Date.now()) / 1000);
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.floor((endTime - Date.now()) / 1000);

      if (diff <= 0) {
        clearInterval(timer);
        sessionStorage.removeItem("iceEndTime");
        onClose();
      } else {
        setSecondsLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onClose]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="ice-overlay">
      <div className="ice-card">
        <h2>🎭 Chill Break</h2>
  <p className="ice-note">
           Relax 😌 Timer is paused. Game resumes automatically when chill time ends.Refresh the page to Magic.
  </p>
  <button className="ice-skip-btn" onClick={onClose}>
        Skip ⏭️
  </button>
        <p className="ice-timer">
          Relax Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
        </p>

        <h3 className="ice-title">{randomMeme.title}</h3>

        <div className="ice-media">
          <img className="ice-img" src={randomMeme.img} alt="meme" />
        </div>
      </div>
    </div>
  );
}


