const CustomImage = (prop) => {
  const { source, altText = "Default text", width, height } = prop;
  return (
    <img
      className="image"
      src={source}
      alt={altText}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
