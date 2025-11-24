// Save user to localStorage
export function saveUser(user) {
  localStorage.setItem(user.email, JSON.stringify(user));
}

// Get user by email
export function getUser(email) {
  const data = localStorage.getItem(email);
  return data ? JSON.parse(data) : null;
}

// Login session store
export function loginUser(email) {
  localStorage.setItem("loggedInUser", email);
}

// Get current logged-in user
export function getLoggedInUser() {
  return localStorage.getItem("loggedInUser");
}

// Logout
export function logoutUser() {
  localStorage.removeItem("loggedInUser");
}
