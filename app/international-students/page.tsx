import CareerGuideTemplate from '@/components/CareerGuideTemplate';
import { careerGuides } from '@/data/careerGuides';

export const metadata = {
  title: 'International Students Guide | Nishaglobal Education',
  description:
    'A practical guide for international students covering study abroad planning, scholarships, visa preparation, work while studying, and common mistakes to avoid.',
  alternates: {
    canonical: 'https://nishaglobaleducation.com/international-students',
  },
};

export default function InternationalStudentsPage() {
  const guide = careerGuides.find(g => g.slug === 'international-students');
  if (!guide) return null;

  return <CareerGuideTemplate guide={guide} />;
}
