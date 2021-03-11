import TableHeader from './TableHeader';
import Row from './Row';
import { useSelector } from 'react-redux';

const Table = () => {
  const { reservoires } = useSelector(state => state.reservoire)

  return (
    <table className="table table-striped table-hover">
      <TableHeader />
      <tbody>
        { reservoires.map(reservoire => {
          if (reservoire.showed){
            return (<Row key={reservoire.id} reservoire={reservoire} />)
          }}
        ) }
      </tbody>
    </table>
  );
};

export default Table;