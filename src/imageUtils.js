export const scaleImage = (image, xScalePercentage, YScalePercentage) => {
  const scaleX = window.innerWidth * xScalePercentage / image.width;
  const scaleY = window.innerHeight * YScalePercentage / image.height;

  image.setScale(scaleX, scaleY);
}