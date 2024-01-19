import { unstable_setRequestLocale } from "next-intl/server";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { NextIntlClientProvider, useMessages } from "next-intl";

import useTextDirection from "@/hooks/useTextDirection";

import { locales } from "@/constants/data";

import "./../globals.css";
import "./../fixel-display-font.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Aman",
  description: "Insure now, Worry Never!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const direction = useTextDirection(locale);
  const messages = useMessages();
  return (
    <html lang={locale} dir={direction}>
      <body className={`bg-lightGrey font-fixeldisplay`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
