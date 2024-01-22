import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.config";

export const UseNovedades = (limitNov) => {
  const [novedades, setUltimasNovedades] = useState([]);

  const getPublicationNow = async () => {
    const novedadesRef = db
      .collection("novedades")
      .where("habilitado", "==", true)
      .orderBy("fecha_publicacion", "desc")
      .limit(limitNov);
    const snapshot = await novedadesRef.get();
    const novedades = snapshot.docs.map((doc) => doc.data());

    setUltimasNovedades(novedades);
  };

  useEffect(() => {
    getPublicationNow();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { novedades };
};
