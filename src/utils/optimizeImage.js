/**
 * Redirects and img src to a specified device size
 * @param {String} imageSrc Relative path of original image
 * @param {String} device Type of device the new image should be optimized to fit
 */
export default function optimizeImage(imageSrc, device) {
  const imageSrcArray = imageSrc.split("/");
  imageSrcArray[1] = device;
  return imageSrcArray.join("/");
}
