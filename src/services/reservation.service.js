import { http } from "@/api/http";

export const getReservations = async () => {
  try {
    const response = await http.get("/reservations");
    return response;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return [];
  }
};