import { saveSession, removeSession } from "@/utils";
import { navigateTo } from "@/router/router";
import { http } from "@/api/http";

export const loginController = () => {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    removeSession(); // Clear any existing session

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      const users = await http.get(
        `/users?email=${email}&password=${password}`,
      );

      if (!users.length) {
        alert("Credenciales incorrectas");
        return;
      }

      saveSession({
        id: users[0].id,
        name: users[0].name,
        role: users[0].role,
      });

      navigateTo("/home");
    } catch (error) {
      console.error(error);
      alert("Connection error. Please ensure the server is running.");
    }
  });
};
