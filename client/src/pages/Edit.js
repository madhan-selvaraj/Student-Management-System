import { useLocation } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const { id } = location.state;
  return (
    <h1>{id}</h1>
  )
}

export default Edit;