import Link from "next/link";

export default function Home() {
  return (
    <main>
    <Link  href="/login">LogIn</Link>
    <br /><br />
    <Link  href="/dashboard">Dashboard</Link>
    </main>
  )
}
