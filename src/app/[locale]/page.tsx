import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className="bg-red-500">

            <h1>{t('title')}</h1>
            <Link href="/about">{t('about')}</Link>
            <div>
                <Button variant={"outline"}>Click me</Button>
                <Input />
            </div>
        </div>
    );
}