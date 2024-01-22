import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
// db
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../../../../firebase/firebase.config";
// Style & icons
import { ImageAdminContainer, ImageGalleryAdmin } from "./ImageAdminStyle";
import { DeleteBtn, UploadBtn } from "../../../../components/icons/IconsApp";

import { Loader } from "../../../../assets/utils/UtilsSvg";

const ImageAdmin = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Agrega el estado isLoading

  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImages([...selectedImages, { imageFile, categoria }]);
    setCategoria("");
  };

  const handleCategoriaChange = (index, newCategoria) => {
    const updatedImages = [...selectedImages];
    updatedImages[index].categoria = newCategoria;
    setSelectedImages(updatedImages);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const saveImages = async () => {
    if (selectedImages.length === 0) {
      toast.error("Por favor, seleccione al menos una imagen y categoría");
      return;
    }
    try {
      setIsLoading(true);
      for (const { imageFile, categoria } of selectedImages) {
        const storageRef = ref(
          storage,
          `ImagesGallery/${Date.now()}-${imageFile.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        const snapshot = await uploadTask;
        const id = `${Date.now()}`;
        const downloadURL = await getDownloadURL(snapshot.ref);
        const data = {
          id: id,
          imageURL: downloadURL,
          categoria: categoria,
          timestamp: serverTimestamp(),
        };
        await setDoc(doc(db, "galeria", id), data);
      }
      toast.success("Imágenes guardadas con éxito");
      setSelectedImages([]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al subir imagen:", error);
      toast.error("Error al subir imagen");
      setIsLoading(false);
    }
  };

  return (
    <ImageAdminContainer>
      <ImageGalleryAdmin>
        <h4 style={{ textAlign: 'center' }}>En esta vista podrás agregar imagenes a la sección de galería</h4>
        {!isLoading ? (
          <>
            <div className="container-admin_gallery">
              {
                selectedImages.length > 0 && (
                  <div className="upload-images_gallery">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="object-gallery_create">
                        <select
                          value={image.categoria}
                          onChange={(e) =>
                            handleCategoriaChange(index, e.target.value)
                          }
                        >
                          <option value="">Seleccionar categoría</option>
                          <option value="sede">Sede</option>
                          <option value="space_comun">Espacios comunes</option>
                          <option value="rooms">Habitaciones</option>
                          <option value="food">Comedor</option>
                          <option value="instalations">Instalaciones</option>
                          <option value="services">Servicios</option>
                          <option value="activities">Actividades</option>
                        </select>
                        <img
                          src={URL.createObjectURL(image.imageFile)}
                          alt={`Preview ${index}`}
                          className="preview-image"
                        />
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => handleDeleteImage(index)}
                          className="delete-image"
                        >
                          <DeleteBtn />
                        </motion.button>
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
            <div style={{ marginTop: "2rem" }}>
              <label className="label-upload">
                <div className="div-upload">
                  <UploadBtn className="logo-upload" />
                  <p className="text-upload">Subir imagen</p>
                </div>
                <input
                  type="file"
                  name="imageFile"
                  id="imageFile"
                  accept="image/*"
                  className="none-upload"
                  onChange={uploadImage}
                />
              </label>
            </div>
          </>
        ) : (
          <Loader />
        )}
        {
          selectedImages.length > 0 && (
            <button
              onClick={saveImages}
              className="btn-save_images"
              disabled={isLoading}
              style={{ marginTop: "1rem" }}
            >
              Guardar imágenes
            </button>
          )
        }
      </ImageGalleryAdmin>
    </ImageAdminContainer>
  );
};

export default ImageAdmin;
