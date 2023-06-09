import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function SideNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <Link href="/">Home</Link>
        {/* {user && <img alt="test" src={user.image} />} */}
        {user != null && <Link href={`/profiles/${user.id}`}>Profile</Link>}
        {user == null ? (
          <button type="button" onClick={() => void signIn()}>
            Log In
          </button>
        ) : (
          <button type="button" onClick={() => void signOut()}>
            Log Out
          </button>
        )}
      </ul>
    </nav>
  );
}
