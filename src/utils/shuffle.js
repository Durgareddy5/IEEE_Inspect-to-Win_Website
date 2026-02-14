export function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}


//{
//  "name": "Inspect to Win",
//  "short_name": "Inspect",
//  "description": "A game where you inspect to find answers",
//  "secret": "pwa_secret_key",
//  "start_url": "/",
//  "display": "standalone",
//  "background_color": "#ffffff",
//  "theme_color": "#2563eb"
//}