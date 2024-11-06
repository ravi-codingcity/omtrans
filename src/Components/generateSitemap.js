const urls = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/services", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.7 },
  { path: "/about_us", changefreq: "monthly", priority: 0.7 },
  { path: "/network", changefreq: "monthly", priority: 0.6 },
  { path: "/freight_forwarding", changefreq: "monthly", priority: 0.6 },
  { path: "/supply_chain_management", changefreq: "monthly", priority: 0.6 },
  { path: "/project_cargo_ODC_handle", changefreq: "monthly", priority: 0.6 },
  { path: "/warehouse_distributation", changefreq: "monthly", priority: 0.6 },
  { path: "/customs_brokerage_services", changefreq: "monthly", priority: 0.6 },
  { path: "/lcl_sea_export", changefreq: "monthly", priority: 0.6 },
  { path: "/fcl_sea_export", changefreq: "monthly", priority: 0.6 },
  { path: "/lcl_sea_import", changefreq: "monthly", priority: 0.6 },
  { path: "/fcl_sea_import", changefreq: "monthly", priority: 0.6 },
  { path: "/air_export", changefreq: "monthly", priority: 0.6 },
  { path: "/air_export/step2", changefreq: "monthly", priority: 0.6 },
  { path: "/air_import/step2", changefreq: "monthly", priority: 0.6 },
  { path: "/air_import", changefreq: "monthly", priority: 0.6 },
  { path: "/sustainability", changefreq: "monthly", priority: 0.6 },
  { path: "/careers", changefreq: "monthly", priority: 0.6 },
  { path: "/log-in", changefreq: "monthly", priority: 0.6 },
  { path: "/job-portal", changefreq: "monthly", priority: 0.6 },
  { path: "/register", changefreq: "monthly", priority: 0.6 },
  { path: "/news", changefreq: "monthly", priority: 0.6 },
  { path: "/clients", changefreq: "monthly", priority: 0.6 },
  { path: "/thank_you", changefreq: "monthly", priority: 0.6 },
];

const generateSitemap = () => {
  const xmlUrls = urls
    .map(
      ({ path, changefreq, priority }) => `
      <url>
        <loc>${window.location.origin}${path}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${xmlUrls}
  </urlset>`;

  // Trigger the download of the sitemap file
  const blob = new Blob([sitemap], { type: "text/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "sitemap.xml";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default generateSitemap;
