import './Row.Module.css'
import '../../utils/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Row = ({reservoir}) => (
  <tr className="text-center">
    <td>{reservoir.ofps}</td>
    <td></td>
    <td>{reservoir.raion.name}</td>
    <td>{reservoir.locality.name}</td>
    <td>{reservoir.name}</td>
    <td></td>
    <td></td>
    <td>{reservoir.FPU}</td>
    <td></td>
    <td></td>
    <td></td>
    <td>{reservoir.flood_level}</td>
    <td></td>
    <td className="d-flex ">
      <Link to={`/reservoir/${reservoir.id}`} className="btn btn-warning">
        <FontAwesomeIcon icon={['fas', 'clipboard']} fixedWidth  />
      </Link>
      <Link to={`/reservoirView/${reservoir.id}`} className="btn btn-warning">
        <FontAwesomeIcon icon={['fas', 'plus']} fixedWidth  />
      </Link>
      <Link to={`/reservoir/edit/${reservoir.id}`} className="btn btn-warning">
        <FontAwesomeIcon icon={['fas', 'pen']} fixedWidth  />
      </Link>
    </td>
  </tr>
);

export default Row;