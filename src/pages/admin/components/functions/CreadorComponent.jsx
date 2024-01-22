// dependencias
import React, { useEffect, useState } from "react";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";

import { serverTimestamp } from "firebase/firestore";

// iconos
import { DeleteBtn, StatusWarninig, UploadBtn } from "../../../../components/icons/IconsApp";

// firebase - redux
import { db, storage } from "../../../../firebase/firebase.config";
import { actions } from "../../../../store";
import { saveItem } from "../../../../firebase/firebaseFunctions";

// utils
import { categories } from "../utils/data";

// styles
import { Container, FormBox } from "./CreadorStyles";
import { Loader } from "../../../../assets/utils/UtilsSvg";

const CreadorComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");
  const [fecha, setFecha] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [habilitado, setHabilitado] = useState(false);
  const [backUrl, setBackUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const generateBackUrl = () => {
      const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
      setBackUrl(formattedTitle);
    };
    generateBackUrl();
  }, [title]);

  // eslint-disable-next-line no-unused-vars
  const { Timestamp } = db;

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    if (images.length >= 3) {
      setIsLoading(false);
      setError("Máximo 3 imágenes permitidas");
      return;
    }
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // eslint-disable-next-line no-unused-vars
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error("Error al subir imagen: intenta de nuevo 🙇‍♀️!");
        console.log(error);
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImages([...images, downloadURL]);
          setIsLoading(false);
          toast.success("Imagen cargada con éxito 😊!");
        });
      }
    );
  };

  const deleteImage = (index) => {
    setIsLoading(true);
    const deleteRef = ref(storage, images[index]);
    deleteObject(deleteRef).then(() => {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
      setIsLoading(false);
      toast.success("¡Imagen borrada con éxito 😊!");
    });
  };

  const saveDetails = async () => {
    setIsLoading(true);
    try {
      if (
        !title ||
        !description ||
        !images.length ||
        images.length > 3 ||
        !fecha ||
        !category ||
        !fecha
      ) {
        toast.error("¡Se requieren todos los datos solicitados 🙇‍♀️!");
      } else {
        const querySnapshot = await db
          .collection("novedades")
          .where("back_url", "==", backUrl)
          .get();

        if (!querySnapshot.empty) {
          setError("La URL ya existe. Por favor, elija otro título.");
          setIsLoading(false);
          return;
        }

        const data = {
          id: `${Date.now()}`,
          titulo: title,
          imageURL: images,
          categoria: category,
          descripcion: description,
          fecha: fecha,
          fecha_publicacion: serverTimestamp(),
          back_url: backUrl,
          habilitado: habilitado,
          description_long: descriptionLong,
        };

        saveItem(data).then(() => {
          actions.novedades.refreshPublicaciones();
          setIsLoading(false);
          toast.success("Creado con éxito 😊!");
          clearData();
        });
      }
    } catch (error) {
      toast.error("Error al subir cambios, intenta de nuevo 🙇‍♀️!");
    }
  };

  const clearData = () => {
    setTitle("");
    setDescription("");
    setDescriptionLong("");
    setCategory("");
    setFecha("");
    setDescription("");
    setHabilitado(false);
    setError("");
    setImages([]);
  };

  return (
    <Container>
      <FormBox>
        <div className="input-contain-full">
          <input
            type="text"
            name="titulo"
            id="titulo"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de la novedad"
            className="input-name"
          />
        </div>
        <div className="input-contain-full">
          <p style={{ marginRight: "10px", color: "#fff" }}>URL:</p>
          <input
            id="url"
            name="url"
            type="text"
            value={backUrl}
            disabled
            className="input-name"
            style={{ pointerEvents: "none", color: "#fff" }}
          />
          {error && <div className="error-url">{error}</div>}
        </div>
        <div className="container-categories">
          <select
            id="select_categoria"
            onChange={(e) => setCategory(e.target.value)}
            className="input-categorias"
          >
            <option
              value="other"
              className="option-c"
              id="categoria"
              name="categoria"
            >
              Seleccionar categoría
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  name="opcion_categoria"
                  className="option-categoria"
                  value={item.urlParamName}
                  id="opcion_categoria"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="container-categories">
          <select
            className="input-categorias"
            placeholder="Habilitado"
            id="visibilidad"
            name="visibilidad"
            onChange={(e) => setHabilitado(e.target.value === "true")}
          >
            <option value="other" className="option-c">
              Habilitar novedad (si el público lo ve o no)
            </option>
            <option
              className="option-categoria"
              value="true"
              id="habilitado_true"
            >
              Visible al público
            </option>
            <option
              className="option-categoria"
              value="false"
              id="habilitado_false"
            >
              Ocultar al público
            </option>
          </select>
        </div>
        <div className="container-upload">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <label
                className={
                  !images.length > 0 ? "label-upload" : "absolute-upload"
                }
              >
                <div className="div-upload">
                  <UploadBtn className="logo-upload" />
                  <p className="text-upload">Subir imagen</p>
                </div>
                <input
                  type="file"
                  name="imageFile"
                  id="imageFile"
                  accept="image/*"
                  onChange={uploadImage}
                  className="none-upload"
                  disabled={images && images.length >= 3}
                />
              </label>
              {images && images.length > 0 ? (
                <>
                  {images.map((image, index) => (
                    <div key={index} className="relative-upload">
                      <img
                        src={image}
                        alt="subir imagen"
                        className="file-upload"
                      />
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => deleteImage(index)}
                      >
                        <DeleteBtn />
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <p className="absolute-context">
                  <StatusWarninig className="advert" />
                  Máximo 3 imágenes. La primera imagen será la portada de la
                  novedad.
                </p>
              )}
            </>
          )}
        </div>
        <div className="flex-inputs">
          <div className="grid-inputs">
            <input
              type="text"
              required
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              placeholder="Ej: 9 de Febrero o 27/09/2024"
              id="fecha"
            />
            <textarea
              type="text"
              required
              className="shor-desciption"
              value={description}
              id="descripcion"
              name="descripcion"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Breve descripción"
            />
            <textarea
              type="text"
              required
              className="long-desciption"
              value={descriptionLong}
              id="descripcion"
              name="descripcion"
              onChange={(e) => setDescriptionLong(e.target.value)}
              placeholder="Descripción detallada"
            />
          </div>
        </div>
        <button type="button" className="btn-uploadfiles" onClick={saveDetails}>
          Publicar novedad
        </button>
      </FormBox>
    </Container>
  );
};

export default CreadorComponent;
