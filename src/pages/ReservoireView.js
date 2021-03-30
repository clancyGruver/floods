import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import DangerAlert from '../components/alerts/DangerAlert'

const ReservoireView = () => {
  const [levelVolume, setLevelVolume] = useState();
  useEffect(() => {
    
  }, []);

  const { id } = useParams();
  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.go(-1);
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ReservoireViewSchema = Yup.object().shape({
    level: Yup
      .number('Уровень должен быть числом')
      .required('Уровень обязателен для заполнения')
      .positive('Уровень должен быть положительным'),
    volume: Yup
      .number('Объем должен быть числом')
      .required('Объем обязателен для заполнения')
      .positive('Объем должен быть положительным'),
    dump_volume: Yup
      .number('Объем сброса должен быть числом')
      .required('Объем сброса обязателен для заполнения')
      .positive('Объем сброса должен быть положительным'),
    fio: Yup
      .string()
      .required('ФИО обязательно для заполнения'),
    tel: Yup
      .number('Номер телефона должен быть числом')
      .integer('Номер телефона должен быть целочисленным')
      .max(100000000000, 'Номер телефона слишком длинный!')
      .positive('Номер телефона должен быть положительным')
      .required('Телефон обязателен для заполнения'),
  });

  const formik = useFormik({
    initialValues: {
      level: 0.0,
      volume: 0.0,
      dump_volume: 0.0,
      fio: '',
      tel: '',
    },
    validationSchema: ReservoireViewSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const form = () => (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="container">
          {formik.errors.level ? <DangerAlert>{formik.errors.level}</DangerAlert> : null}
          {formik.errors.volume ? <DangerAlert>{formik.errors.volume}</DangerAlert> : null}
          {formik.errors.dump_volume ? <DangerAlert>{formik.errors.dump_volume}</DangerAlert> : null}
          {formik.errors.fio ? <DangerAlert>{formik.errors.fio}</DangerAlert> : null}
          {formik.errors.tel ? <DangerAlert>{formik.errors.tel}</DangerAlert> : null}
        </div>
        <div className="form-group col">
          <label htmlFor="level">Уровень</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            id="level"
            name="level"
            placeholder="Уровень"
            onChange={formik.handleChange}
            value={formik.values.level}
          />
        </div>
        <div className="form-group col">
          <label htmlFor="volume">Объем</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            id="volume"
            name="volume"
            placeholder="Объем"
            onChange={formik.handleChange}
            value={formik.values.volume}
          />
        </div>
        <div className="form-group col">
          <label htmlFor="dump_volume">Объем сброса</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            id="dump_volume"
            name="dump_volume"
            placeholder="Объем сброса"
            onChange={formik.handleChange}
            value={formik.values.dump_volume}
          />
        </div>
      </div>
      <hr/>
      <div className="row">
        <h5>Ответственный за внесение</h5>
      </div>
      <div className="row">
        <label htmlFor="fio" className="col-sm-2 col-form-label">ФИО</label>
        <div className="col-sm-10">
          <input
            type="text" 
            className="form-control-plaintext"
            id="fio"
            name="fio"
            placeholder="ФИО"
            onChange={formik.handleChange}
            value={formik.values.fio}
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="tel" className="col-sm-2 col-form-label">Телефон</label>
        <div className="col-sm-10">
          <input
            type="tel" 
            className="form-control-plaintext"
            id="tel"
            name="tel"
            placeholder="Телефон"
            onChange={formik.handleChange}
            value={formik.values.tel}
          />
        </div>
      </div>
      <div className="row  d-flex justify-content-around">
        <button type="submit" className="btn btn-success mt-4" >Сохранить</button>
        <button onClick={handleCancel} className="btn btn-warning mt-4" >Отмена</button>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="card text-center col-md-8 offset-md-2">
        <div className="card-body">
          <h5 className="card-title mb-4 p-2">
            Внести наблюдение
          </h5>
          <div className="card-text">
            { form() }
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReservoireView;