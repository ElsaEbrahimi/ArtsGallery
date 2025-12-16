export function getArtworkImageUrl(imageId: string, size = 843) {
  if (!imageId) {
    return "/no-pic.jpg";
  } // default placeholder;}
  return `https://www.artic.edu/iiif/2/${imageId}/full/${size},/0/default.jpg`;
}
