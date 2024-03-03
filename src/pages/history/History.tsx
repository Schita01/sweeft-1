import { useState } from "react";
import {
  ImageContextProps,
  useImagesContext,
} from "../../context/ImagesContext";
import ImageGallery from "../../components/ImageGallery";
import BottomLoadingComponent from "../../components/BottomLoadingComponent";

const History = () => {
  const { images } = useImagesContext() as ImageContextProps;

  const imageCategoryValues = [];
  for (let [key] of Object.entries(images || {})) {
    imageCategoryValues.push(key);
  }

  const [imageCategoryValue, setImageCategoryValue] = useState<string | null>(
    imageCategoryValues[0] || null
  );

  return (
    <div>
      <h1>History page</h1>

      <ul style={{ display: "flex", gap: 20 }}>
        {imageCategoryValues.length === 0 ? (
          <p>No Image History</p>
        ) : (
          imageCategoryValues.filter(value => value.length > 0).map((value) => {
            return (
              <li
               style={
                  {
                    display: "flex",
                    flexWrap: "wrap",
                    listStyle: "none"
                  }
               }
               key={value}>
                <button
                  style={{
                    border:
                      imageCategoryValue === value ? "1px dashed red" : "",
                      width: 90,
                      height: 40,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize:17,
                      marginBottom: 20,
                      cursor: "pointer",

                  }}
                  onClick={() => setImageCategoryValue(value)}
                >
                  {value}
                </button>
              </li>
            );
          })
        )}
      </ul>

      {imageCategoryValue === null ? null : (
        <ImageGallery
          imagesError={null}
          images={images && images[imageCategoryValue]?.imgArr}
        />
      )}

      <BottomLoadingComponent />
    </div>
  );
};

export default History;
