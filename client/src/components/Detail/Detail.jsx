import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const detail = useSelector((store) => store.ejercicioDetail);
  const { id } = useParams();

  return (
    <div>
      <h1>Detail</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tempore in
        laboriosam ex non aliquam aut pariatur ab nesciunt molestias quibusdam
        illo reiciendis aliquid consectetur ratione at, inventore iusto dolorum.
      </p>
    </div>
  );
};

export default Detail;
