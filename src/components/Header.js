import react from 'react';

const Header = (props) => (
  <div className="row mb-3 mt-3">
    <h1>
      {props.text}
    </h1>
  </div>
);

export default Header;
