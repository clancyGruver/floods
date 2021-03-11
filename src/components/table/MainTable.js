import TableHeader from './TableHeader';
import Row from './Row';
import { useSelector } from 'react-redux';

const Table = () => {
  const { reservoires } = useSelector(state => state.reservoire)

  return (
    <table className="table table-striped table-hover">
      <TableHeader />
      <tbody>
        { reservoires.map(reservoir => {
          if (reservoir.showed){
            return (<Row key={reservoir.id} reservoir={reservoir} />)
          }}
        ) }
      </tbody>
    </table>
  );
};

export default Table;