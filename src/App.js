import TopAlert from './components/topAlert';
import Menu from './components/Menu/Menu';
import MainTable from './components/MainTable';
import Header from './components/Header';
import { setUser } from './store/auth';
import { connect } from 'react-redux';

function App() {
  setUser();
  return (
    <div className="container-fluid">
      <Header text="Водохранилища ПСО ФПС" />
      <TopAlert />
      <Menu />
      <MainTable />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);