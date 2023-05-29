import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import LoginSvg from "../../components/svg/LoginSVG";
import userContext from "../../lib/api/userContext";
import { setUser } from "../../reduser/userReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props = {};

const Login = ({}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const uid = url.searchParams.get("uid");
    const accessToken = url.searchParams.get("access-token");
    const client = url.searchParams.get("client");
    const expiry = url.searchParams.get("expiry");

    if (uid && accessToken && client && expiry) {
      sessionStorage.setItem("uid", uid);
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("client", client);
      sessionStorage.setItem("expiry", expiry);

      window.location.reload();
    }
  }, []);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await userContext
        .authenticate({
          email: usernameRef.current?.value,
          password: passwordRef.current?.value,
        })
        .then((response: any) => {
          dispatch(setUser(response.data.user));
        });
    } catch (err) {}
  }

  return (
    <>
      <section className="grid w-full h-screen bg-gray-200 place-items-center text-[#3f3d56] ">
        <div className="container grid max-w-screen-lg grid-cols-2 px-8 py-4 mx-auto bg-gray-100 shadow-xl gap-9 rounded-[10px]">
          <div className="flex flex-col justify-center grid-cols-1">
            <img
              src="./logo.png"
              className="bg-transparent mix-blend-multiply bg-fuchsia-200"
              alt="logo comes here"
            />
            <h1 className="text-2xl font-bold text-[#3f3d56] mb-4">
              Join our community
            </h1>
            <form
              className="text-base text-[#3f3d56] grid gap-3"
              onSubmit={submitHandler}
            >
              <div className="relative grid gap-1">
                <label className="font-semibold ">
                  Username <span className="text-rose-500">*</span>
                </label>
                <input
                  ref={usernameRef}
                  type="email"
                  className="w-full px-4 py-2 outline-none bg-indigo-100 placeholder:text-[#393053] border-b-[#746994] border-b-2"
                  placeholder="example@example.com"
                />
              </div>
              <div className="relative grid gap-1">
                <label className="font-semibold">
                  Password <span className="text-rose-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 outline-none bg-indigo-100 placeholder:text-[#393053] border-b-[#746994] border-b-2"
                  placeholder="password"
                  ref={passwordRef}
                />
              </div>
              <button className="w-full py-3 text-base font-semibold text-gray-100 bg-[#746994]">
                Login
              </button>
              <p className="text-[#393053] w-full flex flex-grow">
                Don't have an account?
                <a
                  href="/signup"
                  className="flex pl-2 underline text-violet-500"
                >
                  Signup
                </a>
              </p>
            </form>
          </div>
          <div className="flex items-center justify-center grid-cols-1 p-4 border-l-2 border-l-[#393053]">
            <LoginSvg />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
