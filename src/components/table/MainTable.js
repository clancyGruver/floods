import { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import Row from './Row';
import { reservoireAPI } from '../../API';

const Table = () => {
  const [reservoirs, setReservoirs] = useState([]);

  useEffect(() => {
    reservoireAPI
      .list()
      .then(reservoirs => {
        console.log(reservoirs);
        setReservoirs(reservoirs);
      });
  }, []);

  return (
    <table className="table table-striped table-hover">
      <TableHeader />
      <tbody>
        { reservoirs.map(reservoir => {
          if (reservoir.showed){
            return (<Row key={reservoir.id} reservoir={reservoir} />)
          }}
        ) }
      </tbody>
    </table>
  );
};

export default Table;