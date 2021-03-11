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
    <td><Link to={`/reservoir/${reservoir.id}`}><FontAwesomeIcon icon={['fas', 'clipboard']} /></Link></td>
    <td></td>
  </tr>
);

export default Row;