export default function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://beingdigitals.com/#organization",
        name: "Being Digitals",
        url: "https://beingdigitals.com",
        logo: {
          "@type": "ImageObject",
          url: "https://beingdigitals.com/images/brand-logo-dark.png",
        },
        email: "hello@beingdigitals.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://beingdigitals.com/#website",
        url: "https://beingdigitals.com",
        name: "Being Digitals",
        publisher: { "@id": "https://beingdigitals.com/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://beingdigitals.com/#service",
        name: "Being Digitals",
        url: "https://beingdigitals.com",
        image: "https://beingdigitals.com/images/og-image.jpg",
        email: "hello@beingdigitals.com",
        areaServed: "Worldwide",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        parentOrganization: { "@id": "https://beingdigitals.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
