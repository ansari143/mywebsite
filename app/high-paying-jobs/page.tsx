import CareerGuideTemplate from '@/components/CareerGuideTemplate';
import { careerGuides } from '@/data/careerGuides';

export const metadata = {
  title: 'High Paying Jobs | Nishaglobal Education',
  description:
    'Explore high paying job categories, future-proof career directions, and global salary-oriented pathways for students and learners.',
  alternates: {
    canonical: 'https://nishaglobaleducation.com/high-paying-jobs',
  },
};

export default function HighPayingJobsPage() {
  const guide = careerGuides.find(g => g.slug === 'high-paying-jobs');
  if (!guide) return null;

  return <CareerGuideTemplate guide={guide} />;
}
