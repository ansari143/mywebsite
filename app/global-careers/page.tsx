import CareerGuideTemplate from '@/components/CareerGuideTemplate';
import { careerGuides } from '@/data/careerGuides';

export const metadata = {
  title: 'Global Careers | Nishaglobal Education',
  description:
    'Explore global career pathways in technology, healthcare, business, creative industries, and public service, with future-focused guidance for students.',
  alternates: {
    canonical: 'https://nishaglobaleducation.com/global-careers',
  },
};

export default function GlobalCareersPage() {
  const guide = careerGuides.find(g => g.slug === 'global-careers');
  if (!guide) return null;

  return <CareerGuideTemplate guide={guide} />;
}
