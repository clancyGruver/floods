const columnNames = [
  'ПСО ФПС',
  'Дата',
  'Район',
  'Населенный пункт',
  'Водохранилище',
  'Фактический объем',
  '% наполнения',
  'Форсированный подпорный уровень',
  'Фактический уровень',
  'Среднесуточный сброс воды, м3/с',
  '+/- (сброс)',
  'Объем сброса воды через ГТС, при котором отмечалось подтопление НП, м3/с',
  'Критический объем сброса воды через ГТС по проекту, м3/с',
  '',
];

const thStyle = {
  fontSize:'0.8rem',
};

const Header = () => {
  const cols = columnNames.map((name, index) => (
    <th
      style={thStyle}
      scope="col"
      key={index}
      className="text-center"
    >
      {name}
    </th>
  ));
  return (
    <thead>
      <tr>
        {cols}
      </tr>
    </thead>
  )
};

export default Header;