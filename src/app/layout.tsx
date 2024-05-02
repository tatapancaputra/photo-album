import StoreProvider from '@store/provider';
import '@styles/global.scss';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'User photo album',
  description: 'Browse the photos uploaded by professional photographers',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <main className='app w-full fx'>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
