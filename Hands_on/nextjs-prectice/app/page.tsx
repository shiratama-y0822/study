import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Pokemon Manager</h1>
      <p>Next.jsの練習ページです。</p>

      <Link href="/pokemon">ポケモン一覧へ</Link>
    </main>
  );
}