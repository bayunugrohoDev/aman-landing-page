import "./../globals.css";
import "./../fixel-display-font.css";
import { unstable_setRequestLocale } from "next-intl/server";
import useTextDirection from "@/hooks/useTextDirection";
import { locales } from "@/constants/data";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
      <body className={`font-fixeldisplay bg-lightGrey`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
