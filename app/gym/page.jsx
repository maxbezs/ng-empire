import Features from 'app/gym/components/Features';
import JoinUs from 'app/gym/components/JoinUs';
import Locations from 'app/gym/components/Locations';
import Main from 'app/gym/components/Main';
import Link from 'next/link';
import Footer from './components/Footer';
const page = () => {
  return (
    <div>
      <Main />
      <Features />
      <JoinUs />
      <Locations />
      <Footer />
      <Link href={'/gym/legal'} className="rounded-md bg-blue-400 px-6 py-2">
        Legal
      </Link>
    </div>
  );
};

export default page;
