import {useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
    <h1>Ooooppppssss</h1>
    <p>Something went wrong.</p>
    <p>{error.status}: {error.statusText || error.message}</p>
    </div>
  )
}

export default Error