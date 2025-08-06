import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";
import { Montserrat } from "next/font/google";
// import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";
import { cn } from '@/lib/utils';
import { ThemeProvider } from "@/app/components/themeProvider"
// import {Providers} from "../providers";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/navbar';
config.autoAddCss = false

const montserrat = Montserrat({
  // weight: '400',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          // 'dark:bg-slate-900',
          // 'mx-50',
          montserrat.className
        )}
      >
        <NextIntlClientProvider>
          {/* <Providers> */}
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div>
                <header className='p-2'>
                  <Navbar/>
                </header>
                <main className='mt-2'>
                  {children}
                </main>
                {/* <footer className='p-4 mt-2 text-xl'>
                <Footer></Footer>
              </footer> */}
              </div>
            </ThemeProvider>
          {/* </Providers> */}
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
