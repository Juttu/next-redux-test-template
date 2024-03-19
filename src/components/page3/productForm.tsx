"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function ProductForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const id = formData.get("id");
      router.push(`/page3?id=${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="number"
          name="id"
          style={{
            marginBottom: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px",
            color: "#000", // Set the color of the number input value to black
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
}
