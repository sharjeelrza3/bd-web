import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { caseStudies } from "@/components/work/case-studies/data";

const BASE_URL = "https://beingdigitals.com";

type SitemapPage = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

const staticPages: SitemapPage[] = [
  // =========================
  // Home
  // =========================
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },

  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.95,
  },

  // =========================
  // Build Services
  // =========================
  {
    path: "/services/website-development",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/services/business-software",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/services/branding",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/maintenance",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  // =========================
  // Grow Services
  // =========================
  {
    path: "/services/seo",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/services/meta-ads",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/google-ads",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/social-media",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/services/ai-automation",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  // =========================
  // Work
  // =========================
  {
    path: "/portfolio",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/case-studies",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/reviews",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/showreel",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  // =========================
  // Studio
  // =========================
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/process",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/industries",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/careers",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  // =========================
  // Insights
  // =========================
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/seo-guides",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/marketing-tips",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/free-resources",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/pricing",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  // =========================
  // Contact
  // =========================
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

function getArticleBasePath(
  articleType: (typeof articles)[number]["type"],
): string | null {
  switch (articleType) {
    case "blog":
      return "/blog";

    case "seo-guide":
      return "/seo-guides";

    case "marketing-tip":
      return "/marketing-tips";

    default:
      return null;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.flatMap((article) => {
    const basePath = getArticleBasePath(article.type);

    if (!basePath) {
      return [];
    }

    return [
      {
        url: `${BASE_URL}${basePath}/${article.slug}`,
        changeFrequency: "monthly" as const,
        priority: article.type === "blog" ? 0.8 : 0.75,
      },
    ];
  });

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...staticEntries, ...caseStudyEntries, ...articleEntries];
}