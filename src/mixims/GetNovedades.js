// useNovedades.js

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const useNovedades = (backUrl) => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const fetchNovedades = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "novedades"));
        const novedadesData = querySnapshot.docs.map((doc) => doc.data());
        const novedadesFiltradas = novedadesData.filter(
          (novedad) => novedad.back_url !== backUrl
        );
        setNovedades(novedadesFiltradas);
      } catch (error) {
        console.log("Error fetching novedades:", error);
      }
    };

    fetchNovedades();
  }, [backUrl]);

  return { novedades };
};

export default useNovedades;
