import { useTranslations } from 'next-intl';

export default function PricingPage() {
  const t = useTranslations('PricingPage');
  return <h1>{t('title')}</h1>;
}