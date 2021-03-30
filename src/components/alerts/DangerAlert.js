const DangerAlert = (props) => (
  <div className="alert alert-danger" role="alert">
    {props.children}
  </div>
)

export default DangerAlert;