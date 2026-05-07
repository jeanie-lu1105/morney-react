let idMax = parseInt(window.localStorage.getItem("idMax") || "0");
const createId = () => {
  idMax += 1;
  window.localStorage.setItem("idMax", JSON.stringify(idMax));
  return idMax;
};

export { createId };

// The new version uses localStorage to keep track of the maximum ID used so far. This is useful for generating unique IDs across multiple sessions.
