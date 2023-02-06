import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1>
        <Link href="/">PRIME DENTAL IMPLANT TECH</Link>
      </h1>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
