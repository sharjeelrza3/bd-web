import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticlePage from "@/components/insights/article/ArticlePage";
import { articles, getArticle } from "@/data/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ARTICLE_TYPE = "seo-guide" as const;
const CANONICAL_BASE = "/seo-guides";

export function generateStaticParams() {
  return articles
    .filter((article) => article.type === ARTICLE_TYPE)
    .map((article) => ({
      slug: article.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(ARTICLE_TYPE, slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title}`,
    description: article.excerpt,

    alternates: {
      canonical: `${CANONICAL_BASE}/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(ARTICLE_TYPE, slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <ArticlePage article={article} />
      <Footer />
    </>
  );
}