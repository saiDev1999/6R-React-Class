const CustomImage = (prop) => {
  const { source, altText, width, height } = prop;
  return (
    <img
      class="image"
      src={source}
      alt={altText}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
