import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Prelaoder from '../components/Preloader/Preloader';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Card.css';

const Card = () => {
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [reservoire, setReservoire] = useState({
    name: '',
  });

  const reserv = useSelector(
    state => state.reservoire.reservoires.find(
        (res) => res.id === Number.parseInt(id, 10)
    )
  );
  
  useEffect(() => {
    setReservoire(reserv);
    setLoading(false);
  }, [reserv]);

  const handleBack = () => {
    history.goBack();
  }

  const filledCard = () => {
    return (
      <div className="container">
        <div className="card text-center col-md-8 offset-md-2">
          <div className="card-body">
            <h5 className="card-title mb-4 p-2">
              <span>
                {reservoire.name} - {reservoire.type.name}
              </span>
            </h5>
            <div className="card-text">
              <div className="row">
                <div className="col"><strong>ПСО:</strong> <br/>{reservoire.ofps}</div>
                <div className="col"><strong>Район:</strong><br/>{reservoire.raion.name}</div>
                <div className="col"><strong>Населенный пункт:</strong><br/>{reservoire.locality.name}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col"><strong>НПУ:</strong> <br/>{reservoire.NPU}</div>
                <div className="col"><strong>ФПУ:</strong><br/>{reservoire.FPU}</div>
                <div className="col"><strong>Объем по проекту:</strong><br/>{reservoire.project_volume}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col"><strong>Максимальный уровень сброса по проекту:</strong> <br/>{reservoire.max_dump_level_project}</div>
                <div className="col"><strong>уровень сброса подтопления:</strong><br/>{reservoire.flood_level}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col"><strong>Инженер:</strong> <br/>{reservoire.tel_egineer}</div>
                <div className="col"><strong>Оператор:</strong><br/>{reservoire.tel_operator}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col"><strong>Таблица завиисимостей: </strong>
                  <span className="text-danger">Нет</span>
                </div>
                <div className="col"><strong>Заполняется ПСО: </strong>
                  {
                    reservoire.is_ofps_fill
                    ? <span className="text-primary">Да</span>
                    : <span className="text-danger">Нет</span>
                  }
                </div>
              </div>
              <div className="row">
                  Place for photos
              </div>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleBack}>Назад</button>
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