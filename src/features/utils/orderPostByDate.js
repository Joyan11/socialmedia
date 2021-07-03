export const orderPostByDate = (posts) => {
  return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
};
