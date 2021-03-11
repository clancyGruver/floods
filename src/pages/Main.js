import Menu from '../components/Menu/Menu';
import MainTable from '../components/table/MainTable';
import Header from '../components/Header';
import TopAlert from '../components/topAlert';
import { useEffect, useState } from 'react';
import { setReservoires } from '../store/reservoire';
import Prelaoder from '../components/Preloader/Preloader';
import { useDispatch } from 'react-redux';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReservoires());
    setLoading(false)
  },[dispatch])

  return (
    <div className="container-fluid">
      <Header text="Водохранилища ПСО ФПС" />
      <TopAlert />
      <Menu />
      {
        loading
        ? <Prelaoder />
        : <MainTable />
      }
      
    </div>
  );
};

export default Main;