export function getArtworkImageUrl(imageId: string, size = 843) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/${size},/0/default.jpg`;
}
