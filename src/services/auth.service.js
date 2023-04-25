export const loginService = async (email, password) => {
  const res = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("error");
  }
};
