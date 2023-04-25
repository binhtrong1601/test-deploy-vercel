"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.STUDENT_API, {
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
