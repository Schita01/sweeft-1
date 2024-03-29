import { ModalContextprops, useModalContext } from "../context/ModalContext";
import { Img } from "../models/images";
// import Spinner from "./Spinner";

type Props = {
  images: Img[] | null;
  imagesError: null | string;
};

// ss

const ImageGallery = ({ images, imagesError }: Props) => {
  // Error case on specific search value
  const { setModalIsopen, setModalImageId, setModalImage } =
    useModalContext() as ModalContextprops;

  if ((images === null || images === undefined) && imagesError) {
    return (
      <div>
        <p>Somethig Went wrong, Please try again.</p>
      </div>
    );
  }

  // No Images found on Specific search value
  if (images?.length === 0) {
    return (
      <div>
        <h2>No Images were found</h2>
      </div>
    );
  }

  return (
    <div className="images-container">
      {images ? (
        images.map((img) => (
          <img
            onClick={() => {
              setModalIsopen(true);
              setModalImageId(img.id);
              setModalImage(img.url);
            }}
            key={img.key}
            src={img.url}
          />
        ))
      ) : (
        <div>
          {/* <p>Loading ...</p> */}
          {/* <Spinner /> */}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
