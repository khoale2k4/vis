import { store } from "@/store";
import ProviderWrapper from "@/hooks";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ExampleLayout from "@/layouts/exampleLayout";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();
  const locale = store.getState().language.locale;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ProviderWrapper>
        <ExampleLayout>
          {children}
        </ExampleLayout>
      </ProviderWrapper>
    </NextIntlClientProvider>
  );
};