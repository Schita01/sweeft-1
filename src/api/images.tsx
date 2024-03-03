const api_key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const fetchImages = async (pageIndex: number, searchValue: string) => {
  try {
    var res = await fetch(
      `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=20&query=${searchValue}&client_id=${api_key}&order_by=popular`
    );
    // var res = await fetch(
    //   `https://api.unsplash.com/photos?page=${pageIndex}&per_page=10&query=${searchValue}&client_id=${api_key}&order_by=popular`
    // );

    if (!res.ok) {
      return null;
    }
    const data = await res.json();

    return data;
  } catch (err) {
    return null;
  }
};

export const fetchPhoto = async (id: string) => {
  try {
    var res = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${api_key}`
    );

    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
};

export default fetchImages;
