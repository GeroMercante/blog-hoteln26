import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// db
import { db } from "../../../../firebase/firebase.config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getStorage, ref as storageRef } from "firebase/storage";

import ModalConfirm from "../../../../components/modals/ModalConfirm";

// styles & icons
import { ImageGalleryList, ImageListContainer } from "./ImagesListStyle";
import { Loader } from "../../../../assets/utils/UtilsSvg";
import { DeleteBtn } from "../../../../components/icons/IconsApp";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "galeria"));
      const imageData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageData);
    } catch (error) {
      toast.error("Error al obtener las imágenes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteImage = (id, imageURL) => {
    setModalData({ id, imageURL });
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setModalData(null);
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    if (modalData) {
      try {
        const { id, imageURL } = modalData;
        const storage = getStorage();
        const fileName = imageURL.split('/o/')[1].split('?')[0];
        const imageRef = storageRef(storage, decodeURIComponent(fileName));
        await deleteObject(imageRef);
        await deleteDoc(doc(db, "galeria", id));
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
        toast.success("Imagén borrada con éxito.");
      } catch (error) {
        toast.error("Error al eliminar la imagen");
      } finally {
        setIsLoading(false);
        setModalOpen(false);
        setModalData(null);
      }
    } else {
      setIsLoading(false);
      setModalOpen(false);
      setModalData(null);
    }
  };

  return (
    <ImageListContainer>
      <h1>Este listado de imágenes le pertenece a la sección de Galería. Aquí puedes verlas y borrarlas.</h1>
      <ImageGalleryList>
        {loading ? (
          <Loader />
        ) : (
          <>
            {images.map((image) => (
              <div key={image.id} className="image-card">
                <img
                  src={image.imageURL}
                  alt={`Imagen de ${image.categoria}`}
                />
                <div className="card-contain_btn">
                  <button
                    onClick={() => handleDeleteImage(image.id, image.imageURL)}
                    className="btn-delete"
                  >
                    <DeleteBtn />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </ImageGalleryList>
      <ModalConfirm isOpen={isModalOpen} onCancel={handleCancel} onConfirm={handleConfirm} isLoading={loading} />
    </ImageListContainer>
  );
};

export default ImagesList;
