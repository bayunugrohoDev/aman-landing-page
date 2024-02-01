import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import localFont from "next/font/local";

import "./../globals.css";

import useTextDirection from "@/hooks/useTextDirection";

import { locales } from "@/constants/data";

import Provider from "@/components/Provider";

export const metadata = {
  title: "Aman",
  description: "Insure now, Worry Never!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const fixel = localFont({
  src: [
    {
      path: "../../fonts/FixelDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../fonts/FixelDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pixel",
});

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const direction = useTextDirection(locale);
  const messages = useMessages();
  return (
    <html className={fixel.className} lang={locale} dir={direction}>
      <body className={`bg-lightGrey `}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
