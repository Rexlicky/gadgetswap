export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://gadgetswap.vercel.app/sitemap.xml",
  };
}
