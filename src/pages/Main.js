import Menu from '../components/Menu/Menu';
import MainTable from '../components/table/MainTable';
import Header from '../components/Header';
import TopAlert from '../components/topAlert';

const Main = () => (
  <div className="container-fluid">
    <Header text="Водохранилища ПСО ФПС" />
    <TopAlert />
    <Menu />
    <MainTable />
  </div>
);

export default Main;