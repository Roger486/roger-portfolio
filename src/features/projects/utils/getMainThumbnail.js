export default function getMainThumbnail(project) {
  const mainImage = project.images.find(img => img.key === "img-001");
  return mainImage?.thumb || "";
}