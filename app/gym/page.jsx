import Features from 'app/gym/components/Features';
import JoinUs from 'app/gym/components/JoinUs';
import Locations from 'app/gym/components/Locations';
import Main from 'app/gym/components/Main';
import Link from 'next/link';
import Footer from './components/Footer';
const page = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Link href={'/gym/memberships'} className="rounded-md bg-blue-400 px-6 py-2">
          Memberships
        </Link>
        <Link href={'/gym/timetable'} className="rounded-md bg-blue-400 px-6 py-2">
          Timetable
        </Link>
        <Link href={'/gym/contact-us'} className="rounded-md bg-blue-400 px-6 py-2">
          Contact Us
        </Link>
        <Link href={'/gym/account'} className="rounded-md bg-blue-400 px-6 py-2">
          Account
        </Link>
        <Link href={'/gym/legal'} className="rounded-md bg-blue-400 px-6 py-2">
          Legal
        </Link>
      </div>

      <Main />
      <Features />
      <JoinUs />
      <Locations />
      <Footer />
    </div>
  );
};

export default page;
