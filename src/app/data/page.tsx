"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "fetched data";
}

export default function SubComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return <>{loading ? <h1>Loading...</h1> : <h1>{data}</h1>}</>;
}
