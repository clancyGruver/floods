import { Formik } from 'formik';

const ReservoireView = () => (
  <div className="container">
    <div className="card text-center col-md-8 offset-md-2">
      <div className="card-body">
        <h5 className="card-title mb-4 p-2">
          Внести данные
        </h5>
        <div className="card-text d-flex justify-content-around">
          <button className="btn btn-success mt-4" >Сохранить</button>
          <button className="btn btn-warning mt-4" >Отмена</button>
        </div>
      </div>
    </div>
  </div>
);

export default ReservoireView;