import { useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import {
  ImageContextProps,
  useImagesContext,
} from "../../context/ImagesContext";
import BottomLoadingComponent from "../../components/BottomLoadingComponent";
import DebounceInput from "../../components/DebounceInput";

const Home = () => {
  const {
    images,
    getImages,
    searchValue,
    setSearchValue,
    imagesError,
  } = useImagesContext() as ImageContextProps;

  useEffect(() => {
    if (images && images[searchValue]) return;
    getImages(1, searchValue);
  }, [searchValue]);

  console.log(images);

  const handleInput = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div>
        <DebounceInput onInput={handleInput} />
      </div>
      <ImageGallery
        imagesError={imagesError}
        images={images && images[searchValue]?.imgArr}
      />
      <BottomLoadingComponent />
    </div>
  );
};

export default Home;
