"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/students", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .then((data) => console.log(data))
      .catch((err) => {
        router.push("/login");
      });
  }, []);

  return <div>{children}</div>;
};

export default Layout;
