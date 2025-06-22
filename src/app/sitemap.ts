export default async function sitemap() {
  const routes = {
    url: "https://kayodedev.com",
    lastModified: new Date().toISOString().split("T")[0],
  };

  return [routes];
}
