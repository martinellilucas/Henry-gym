import { useDispatch } from "react-redux";
import style from "../DashboardAdmin.module.css";
import { calculoMembresias } from "../calculoMembresias";
import Swal from "sweetalert2";
import Search from "../Search/Search";
import bronce from "../../../assets/broncelogo.png";
import plata from "../../../assets/platalogo.png";
import oro from "../../../assets/orologo.png";
import platino from "../../../assets/platinologo.png";

import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  adminUser,
  banComentario,
  deleteClase,
  searchClaseByName,
  searchClientByEmail,
  searchComentarioByName,
  banUser,
} from "../../../redux/Actions/index";
import { useState } from "react";
import PostClase from "./PostClase/PostClase";

const Contenido = ({ clientes, comentarios, clases, pathname }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const dispatch = useDispatch();

  const handleBan = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to ban/unban the user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban the user!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Banned", "The user has been banned/unbanned", "success");
        if (item?.isBanned) dispatch(banUser(item?.email, { isBanned: false }));
        else dispatch(banUser(item?.email, { isBanned: true }));
      }
    });
  };

  const handleAdmin = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You about to make a user admin or remove his admin privileges",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Done", "The user is / is not now an admin", "success");
        if (item?.isAdmin) dispatch(adminUser(item?.email, { isAdmin: false }));
        else dispatch(adminUser(item?.email, { isAdmin: true }));
      }
    });
  };
  const handleBanComent = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The comment is not visible in the page and the user has been banned",
          "success"
        );
        if (item?.isBanned) {
          dispatch(banComentario(item?.id, { isBanned: false }));
        } else {
          dispatch(banComentario(item?.id, { isBanned: true }));
          dispatch(banUser(item?.emailCliente, { isBanned: true }));
        }
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The class has been deleted from the data base",
          "success"
        );
        dispatch(deleteClase(id));
      }
    });
  };
  const [client, setClient] = useState("");
  const [clase, setClase] = useState("");
  const [comentario, setComentario] = useState("");
  const handleSubmitClient = (e) => {
    e.preventDefault();
    dispatch(searchClientByEmail(client));
    setCurrentPage(1);
  };
  const handleSubmitClase = (e) => {
    e.preventDefault();
    dispatch(searchClaseByName(clase));
    setCurrentPage(1);
  };
  const handleSubmitComentario = (e) => {
    e.preventDefault();
    dispatch(searchComentarioByName(comentario));
    setCurrentPage(1);
  };

  function paginate(array, tamaño) {
    var result = [];
    for (var i = 0; i < array.length; i += tamaño) {
      result.push(array.slice(i, i + tamaño));
    }
    return result;
  }

  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesClients = Math.ceil(clientes.length / pageSize);
  const pagesClasses = Math.ceil(clases.length / pageSize);
  const pagesComments = Math.ceil(comentarios.length / pageSize);

  const clientesPaginados = paginate(clientes, pageSize);
  const clasesPaginadas = paginate(clases, pageSize);
  const comentariosPaginados = paginate(comentarios, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box className={style.container}>
      <div className={style.titleContainer}>
        <Text className={style.title}>Admin's Dashboard</Text>

        <Button
          colorScheme="blue"
          className={style.refreshButton}
          onClick={refreshPage}
        >
          Refresh Data
        </Button>
      </div>

      <Divider
        marginTop={"50px"}
        w={"80%"}
        border={"5px solid white"}
      ></Divider>
      {pathname === "/dashboard/stadistics" || pathname === "/dashboard" ? (
        <div className={style.titleestadisticas}>
          <div>
            <Text
              className={style.clientlist}
              fontFamily={'"Titillium Web", sans-serif'}
              fontSize="4xl"
              fontWeight="bold"
            >
              Membership stadistics - Total clients: {clientes.length}
            </Text>
          </div>
          <div>
            <Box>
              <Flex gap={"2em"} marginTop={"50px"} align="center">
                <div className={style.circulo}>
                  <CircularProgress
                    value={calculoMembresias(clientes, "Bronze")}
                    color="orange"
                    size="300px"
                  >
                    <CircularProgressLabel>
                      <img
                        className={style.logoMem}
                        src={bronce}
                        alt="Bronze"
                      />
                    </CircularProgressLabel>
                  </CircularProgress>
                  <h4 className={style.stadistics}>
                    Clients amount:{" "}
                    {(calculoMembresias(clientes, "Bronze") / 100) *
                      clientes.length}
                  </h4>
                </div>
                <div className={style.circulo}>
                  <CircularProgress
                    value={calculoMembresias(clientes, "Silver")}
                    color="gray"
                    size="300px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgressLabel>
                      <img className={style.logoMem} src={plata} alt="Silver" />
                    </CircularProgressLabel>
                  </CircularProgress>
                  <h4 className={style.stadistics}>
                    Clients amount:{" "}
                    {(calculoMembresias(clientes, "Silver") / 100) *
                      clientes.length}
                  </h4>
                </div>
                <div className={style.circulo}>
                  <CircularProgress
                    value={calculoMembresias(clientes, "Gold")}
                    color="gold"
                    size="300px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgressLabel>
                      <img className={style.logoMem} src={oro} alt="Gold" />
                    </CircularProgressLabel>
                  </CircularProgress>
                  <h4 className={style.stadistics}>
                    Clients amount:{" "}
                    {(calculoMembresias(clientes, "Gold") / 100) *
                      clientes.length}
                  </h4>
                </div>
                <div className={style.circulo}>
                  <CircularProgress
                    value={calculoMembresias(clientes, "Platinum")}
                    color="teal"
                    size="300px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgressLabel>
                      <img
                        className={style.logoMem}
                        src={platino}
                        alt="Platinum"
                      />
                    </CircularProgressLabel>
                  </CircularProgress>
                  <h4 className={style.stadistics}>
                    Clients amount:{" "}
                    {(calculoMembresias(clientes, "Platinum") / 100) *
                      clientes.length}
                  </h4>
                </div>
              </Flex>
            </Box>
          </div>
        </div>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/clients" ? (
        <>
          <div className={style.clientSearch}>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Clients List:
            </Text>
            <Search
              search={client}
              setSearch={setClient}
              handleSubmit={handleSubmitClient}
            />
          </div>

          <div className={style.containerListado}>
            <Box>
              <table className={style.tabla}>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Suscription</th>
                    <th>Is Banned</th>
                    <th>Is Admin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clientesPaginados[currentPage - 1]?.map((item, index) => (
                    <tr key={index}>
                      <td>{item?.nombre}</td>
                      <td>{item?.email}</td>
                      <td>{item?.tipoDeSuscripcion}</td>
                      <td>{item?.isBanned.toString()}</td>
                      <td>{item?.isAdmin.toString()}</td>
                      <td className={style.buttonO}>
                        <Button
                          colorScheme="red"
                          onClick={() => handleBan(item)}
                        >
                          BAN
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAdmin(item)}
                        >
                          ADMIN
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={style.pagesContainer}>
                <Button
                  onClick={() =>
                    handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                  }
                >
                  {"<"}
                </Button>

                {Array.from({ length: pagesClients + 1 }).map((_, index) => {
                  return (
                    index > 0 && (
                      <Button
                        colorScheme={
                          index === currentPage ? "blackAlpha" : undefined
                        }
                        onClick={() => handlePageChange(index)}
                      >
                        {index}
                      </Button>
                    )
                  );
                })}

                <Button
                  onClick={() =>
                    handlePageChange(
                      currentPage === pagesClients
                        ? currentPage
                        : currentPage + 1
                    )
                  }
                >
                  {">"}
                </Button>
              </div>
            </Box>
          </div>
        </>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/classes" ? (
        <>
          <div className={style.clientSearch}>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Classes:
            </Text>
            <Search
              search={clase}
              setSearch={setClase}
              handleSubmit={handleSubmitClase}
            />
          </div>
          <div className={style.containerListado}>
            <Box>
              <table className={style.tabla}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Days</th>
                    <th>Start time</th>
                    <th>Delete Class</th>
                  </tr>
                </thead>
                <tbody>
                  {clasesPaginadas[currentPage - 1]?.map((item, index) => (
                    <tr key={index}>
                      <td className={style.class}>
                        {item?.nombre.toUpperCase()}
                      </td>
                      <td className={style.days}>{item?.dias.join(" - ")}</td>
                      <td className={style.schudle}>{item?.horario}</td>
                      <td className={style.buttonO}>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PostClase />
              <div className={style.pagesContainer}>
                <Button
                  onClick={() =>
                    handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                  }
                >
                  {"<"}
                </Button>

                {Array.from({ length: pagesClasses + 1 }).map((_, index) => {
                  return (
                    index > 0 && (
                      <Button
                        colorScheme={
                          index === currentPage ? "blackAlpha" : undefined
                        }
                        onClick={() => handlePageChange(index)}
                      >
                        {index}
                      </Button>
                    )
                  );
                })}

                <Button
                  onClick={() =>
                    handlePageChange(
                      currentPage === pagesClasses
                        ? currentPage
                        : currentPage + 1
                    )
                  }
                >
                  {">"}
                </Button>
              </div>
            </Box>
          </div>
        </>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/comments" ? (
        <>
          <div className={style.clientSearch}>
            <Text
              className={style.commentsList}
              fontSize="2xl"
              fontWeight="bold"
            >
              Clients Comments:
            </Text>
            <Search
              search={comentario}
              setSearch={setComentario}
              handleSubmit={handleSubmitComentario}
            />
          </div>
          <div className={style.containerListado}>
            <Box>
              <table className={style.tabla}>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Comment</th>
                    <th>Is Banned</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {comentariosPaginados[currentPage - 1]?.map((item, index) => (
                    <tr key={index}>
                      <td className={style.user}>{item?.nombreCliente}</td>
                      <td className={style.email}>{item?.emailCliente}</td>
                      <td className={style.class}>{item.nombreClase}</td>

                      <td className={style.comment}>
                        <textarea disabled={true}>{item?.texto}</textarea>
                      </td>
                      <td className={style.isBanned}>
                        {item?.isBanned.toString()}
                      </td>
                      <td className={style.buttonO}>
                        <Button
                          onClick={() => handleBanComent(item)}
                          colorScheme="red"
                        >
                          BAN
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={style.pagesContainer}>
                <Button
                  onClick={() =>
                    handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                  }
                >
                  {"<"}
                </Button>

                {Array.from({ length: pagesComments + 1 }).map((_, index) => {
                  return (
                    index > 0 && (
                      <Button
                        colorScheme={
                          index === currentPage ? "blackAlpha" : undefined
                        }
                        onClick={() => handlePageChange(index)}
                      >
                        {index}
                      </Button>
                    )
                  );
                })}

                <Button
                  onClick={() =>
                    handlePageChange(
                      currentPage === pagesComments
                        ? currentPage
                        : currentPage + 1
                    )
                  }
                >
                  {">"}
                </Button>
              </div>
            </Box>
          </div>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Contenido;
