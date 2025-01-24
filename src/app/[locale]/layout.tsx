import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function RootLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const messages = await getMessages();

    return(
    <html lang={locale}>
        <body suppressHydrationWarning={true}>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </body>
</html>

    )
    }