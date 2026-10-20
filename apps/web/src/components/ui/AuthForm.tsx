"use client";

import Link from "next/link";
import { useState } from "react";

const input =
  "w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [notice, setNotice] = useState("");
  const isLogin = mode === "login";

  return (
    <>
      <h1 className="text-lg font-semibold">{isLogin ? "Sign in" : "Create your account"}</h1>
      <form
        className="mt-4 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          // PROTOTYPE: no backend yet. Real authentication is built on Day 3.
          setNotice("Authentication is not connected yet. It arrives on Day 3.");
        }}
      >
        {!isLogin && (
          <label className="block text-sm">
            <span className="mb-1 block text-fg-muted">Organization name</span>
            <input name="organization" type="text" required className={input} />
          </label>
        )}
        <label className="block text-sm">
          <span className="mb-1 block text-fg-muted">Email</span>
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-fg-muted">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={isLogin ? "current-password" : "new-password"}
            className={input}
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {isLogin ? "Sign in" : "Create account"}
        </button>
        {notice && (
          <p role="status" className="text-xs text-warn">
            {notice}
          </p>
        )}
      </form>
      <p className="mt-4 text-center text-sm text-fg-muted">
        {isLogin ? "New to PulseWatch? " : "Already have an account? "}
        <Link href={isLogin ? "/register" : "/login"} className="text-accent hover:underline">
          {isLogin ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </>
  );
}