import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { db } from "../../../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

import { MdDone, MdClose } from 'react-icons/md'

import { TableUserContainer } from "./UserListComponentStyles";
import { Loader } from "../../../../assets/utils/UtilsSvg";

const UserListComponent = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserList(userData);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error al obtener los usuario");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", fontSize: "17px", fontStyle: "italic", color: "#3e3e3e" }}>Listado de usuarios activos</h1>
      <TableUserContainer>
        {loading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-ccc" : "bg-fff"}
                >
                  <td>{user.displayName}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>{user.isAdmin
                    ? <MdDone className="is_admin" />
                    : <MdClose className="not_admin" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </TableUserContainer>
    </div>
  );
};

export default UserListComponent;
