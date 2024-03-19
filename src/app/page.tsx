"use client";
import { prisma } from "@/db";
import SubComponent from "./data/page";
import { fetchValue, logIn, logOut } from "@/redux/features/auth-slice";
import { UseDispatch, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { stat } from "fs";
import { FormEvent, useEffect, useState } from "react";
import ProductForm from "@/components/page3/productForm";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const username = useAppSelector((state) => state.authReducer.value.username);
  const status = useAppSelector((state) => state.authReducer.value.status);

  useEffect(() => {
    console.log("new change");
    if (status == "idle") {
      dispatch(fetchValue("new user name"));
    }
  }, []);
  function changeValue() {
    dispatch(fetchValue("changed Name very New"));
  }

  let content;
  if (status === "loading") {
    content = <h1>Loading........</h1>;
  } else if (status === "succeeded") {
    content = username;
  } else if (status === "failed") {
    content = <h1>error</h1>;
  }

  return (
    <>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new"
      >
        New
      </Link>
      {content}
      <button onClick={changeValue}>[New Button]</button>

      <div className="mt-20">
        <SubComponent />
      </div>
      <div>
        <div>
          <button>Default Button</button>
        </div>
      </div>
      <Link
        href={{
          pathname: "/page3",
          query: {
            productId: 1,
          },
        }}
      >
        Go to another page
      </Link>
      <ProductForm></ProductForm>
    </>
  );
}
