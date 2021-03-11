import './Row.Module.css'
import '../../utils/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Row = ({reservoire}) => {
  const percent = () => {
    const percentage = reservoire.views[0].volume / reservoire.project_volume * 100;
    if (Number.isFinite(percentage))
      return Number.parseInt(percentage, 10);
    return 0;
  };

  const diff = () => {
    let val = reservoire.views[0].dump_volume - reservoire.views[1].dump_volume;
    val = Number.parseFloat(val).toFixed(2);
    if (val < 0)
      return (<span className="text-success">-{val}</span>);
    if (val > 0)
      return (<span className="text-danger">+{val}</span>);
    return (<span className="text-primary">{val}</span>);
  };

  return (
    <tr className="text-center">
      <td>{reservoire.ofps}</td>
      <td>{reservoire.views[0].update_time}</td>
      <td>{reservoire.raion.name}</td>
      <td>{reservoire.locality.name}</td>
      <td>{reservoire.name}</td>
      <td>{reservoire.views[0].volume}</td>
      <td>{percent()}</td>
      <td>{reservoire.FPU}</td>
      <td>{reservoire.views[0].level}</td>
      <td>{reservoire.views[0].dump_volume}</td>
      <td>{diff()}</td>
      <td>{reservoire.flood_level}</td>
      <td>{reservoire.max_dump_level_project}</td>
      <td className="d-flex ">
        <Link to={`/reservoire/${reservoire.id}`} className="btn btn-warning">
          <FontAwesomeIcon icon={['fas', 'clipboard']} fixedWidth  />
        </Link>
        <Link to={`/reservoireView/${reservoire.id}`} className="btn btn-warning">
          <FontAwesomeIcon icon={['fas', 'plus']} fixedWidth  />
        </Link>
        <Link to={`/reservoire/edit/${reservoire.id}`} className="btn btn-warning">
          <FontAwesomeIcon icon={['fas', 'pen']} fixedWidth  />
        </Link>
      </td>
    </tr>
  );
};

export default Row;