import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    original:
      "https://plus.unsplash.com/premium_photo-1683141170766-017bf7a2ecb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
  },
];
const GallerySection = () => {
  return (
    <div className="pt-5">
      <div className="my-20">
        <h2 className="mt-10 text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
          Gallery
        </h2>
      </div>
      <ImageGallery items={images} />
    </div>
  );
};

export default GallerySection;
