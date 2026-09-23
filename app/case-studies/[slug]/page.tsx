import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyDetail from "@/components/work/case-studies/CaseStudyDetail";
import {
  caseStudies,
  getCaseStudy,
} from "@/components/work/case-studies/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.client} Case Study`,
    description: study.heroDescription,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <CaseStudyDetail study={study} />
      <Footer />
    </>
  );
}
