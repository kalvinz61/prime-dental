import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Link href="/turnaround">Turnaround Times</Link>
      <Link href="/technology">Technology</Link>
      <Link href="/contact">Contact Us</Link>
    </>
  );
}
