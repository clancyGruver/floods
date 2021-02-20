import TableHeader from './TableHeader';
import Row from './Row';

const Table = () => (
  <table className="table table-striped table-hover">
    <TableHeader />
    <tbody>
      <Row />
    </tbody>
  </table>
);

export default Table;