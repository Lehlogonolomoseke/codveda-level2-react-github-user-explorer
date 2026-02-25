const BASE_URL = "https://api.github.com/users";

export const fetchUser = async (username) => {
  const response = await fetch(`${BASE_URL}/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return await response.json();
};

export const fetchRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/${username}/repos`);

  if (!response.ok) {
    throw new Error("Repositories not found");
  }

  return await response.json();
};
