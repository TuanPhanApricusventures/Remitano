const generateRandomString = (length: number) => {
  return Math.random().toString(36).substring(2, length + 2);
};

const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const generateMovies = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: generateUniqueId(),
    title: generateRandomString(10),
    description: generateRandomString(50),
    isWatched: false,
  }));
};