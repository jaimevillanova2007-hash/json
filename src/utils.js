export const saveSession = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

export const getSession = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const removeSession = () => {
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!getSession();
};

export const isAdmin = () => {
  return getSession()?.role === "admin";
};

export const checkAccess = (requiredRole) => {
  const user = getSession();
  return user && user.role === requiredRole;
};