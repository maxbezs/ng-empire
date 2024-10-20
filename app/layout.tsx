import { CartProvider } from 'components/cart/cart-context';
import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import WhatsappButton from 'components/WhatsappButton';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Toaster } from 'sonner';
import './globals.css';
const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-[#f7f3e9] text-black selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <section className="border-b border-[#e6e6e6] bg-[#f7f3e9] text-[#000000]">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="w-full overflow-hidden">
                <div className="mx-auto flex w-fit space-x-8">
                  <div className="font-bold">
                    <p>F R E E - S H I P P I N G</p>
                  </div>
                </div>
              </div>
              <button
                className="ml-4 text-[#000000] hover:text-[#757575]"
                aria-label="Close announcement bar"
                type="button"
              >
                ×
              </button>
            </div>
          </section>{' '}
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast /> <WhatsappButton />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
