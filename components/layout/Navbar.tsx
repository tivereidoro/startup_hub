import React from "react";
import Link from "next/link";

import { auth, signIn, signOut } from "@/app/(auth)/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 text-black bg-white shadow-md">
      <nav className="flex justify-between items-center">
        <h1>Startup Hub</h1>

        <div className="flex gap-7">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>

              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
              >
                <button type="submit">Sign out</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                <button type="submit">
                  <span>Sign in</span>
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
