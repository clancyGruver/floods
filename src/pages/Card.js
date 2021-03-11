import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { reservoireAPI } from '../API';
import Prelaoder from '../components/Preloader/Preloader';
import { useHistory } from 'react-router-dom';

const Card = () => {
  const { id } = useParams();
  const history = useHistory();

  const [reservoire, setReservoire] = useState({name: ''});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reservoireAPI
      .one(id)
      .then(reservoire => {
        setReservoire(reservoire);
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    history.goBack();
  }

  const filledCard = () => {
    return (
      <div className="container">
        <div className="card text-center col-md-8 offset-md-2">
          <div className="card-body">
            <h5 className="card-title">{reservoire.name}</h5>
            <div className="card-text">

            </div>
            <button className="btn btn-primary" onClick={handleBack}>Назад</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <Header text={'Карточка водохранилища'} />
      {loading
        ? <Prelaoder />
        : filledCard()
      }
    </div>
  );
};

export default Card;