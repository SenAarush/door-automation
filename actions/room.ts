export const fetchOccupancy = async () => {
  const response = await fetch("/api/room/occupancy", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};