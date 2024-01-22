import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";

import { db } from "../../../../firebase/firebase.config";
import { actions } from "../../../../store";

import { Container, DataBase } from "./GetPublicacionesStyles";
import ModalConfirm from "../../../../components/modals/ModalConfirm";
import { Loader } from "../../../../assets/utils/UtilsSvg";

const GetPublicaciones = () => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const obtenerNovedades = async () => {
      const novedadesRef = db.collection("novedades");
      const snapshot = await novedadesRef.get();
      const nuevasNovedades = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovedades(nuevasNovedades);
      setIsLoading(false);
    };
    obtenerNovedades();
  }, []);

  const handleDeleteNews = (id, imageURL) => {
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
        const { id } = modalData;
        const novedadRef = db.collection("novedades").doc(id);
        await novedadRef.delete();
        setNovedades(novedades.filter((n) => n.id !== id));
        toast.success("Articulo eliminado con éxito");
        actions.novedades.refreshPublicaciones();
      } catch (error) {
        console.error("Error al eliminar la novedad: ", error);
        toast.error("Error al eliminar articulo");
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

  const handleHabilitadoChange = async (novedadId, newValue) => {
    try {
      const novedadRef = db.collection("novedades").doc(novedadId);
      await novedadRef.update({
        habilitado: newValue,
      });
      setNovedades(
        novedades.map((n) =>
          n.id === novedadId ? { ...n, habilitado: newValue } : n
        )
      );
      toast.success("Visibilidad actualizada con éxito.");
      actions.novedades.refreshPublicaciones();
    } catch (error) {
      console.error("Error al actualizar habilitado: ", error);
      toast.error("Error al actualizar Visibilidad.");
    }
  };

  return (
    <Container>
      {
        loading ? (
          <Loader />
        ) : (
          <DataBase>
        {novedades.map((novedad) => (
          <div key={novedad.id}>
            <div className="logo">
              <h2>titulo: {novedad.titulo}</h2>
              <h6>descripcion: {novedad.descripcion}</h6>
              <img src={novedad.imageURL} alt={novedad.titulo} />
              <h6>fecha: {novedad.fecha}</h6>
              <label>
                {novedad.habilitado === true ? (
                  <h3 className="novedadV visible">Novedad visible</h3>
                ) : (
                  <h3 className="novedadV novisible">Novedad no visible</h3>
                )}
              </label>
              <h5 className="alter-v">Alterar visibilidad</h5>
              <select
                value={novedad.habilitado}
                onChange={(e) =>
                  handleHabilitadoChange(novedad.id, e.target.value === "true")
                }
                className="habilitado"
              >
                <option value={true}>Habilitado</option>
                <option value={false}>Deshabilitado</option>
              </select>
              <motion.button
                whileTap={{ scale: 0.5 }}
                onClick={() => handleDeleteNews(novedad.id)}
                className="btn-delete"
              >
                Eliminar publicación
                <MdDelete />
              </motion.button>
            </div>
          </div>
        ))}
      </DataBase>
        )
      }
      <ModalConfirm isOpen={isModalOpen} onCancel={handleCancel} onConfirm={handleConfirm} isLoading={loading} />
    </Container>
  );
};

export default GetPublicaciones;
