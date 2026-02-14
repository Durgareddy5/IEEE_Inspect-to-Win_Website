export const saveSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const loadSession = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};


