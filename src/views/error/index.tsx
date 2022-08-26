import { useParams } from 'react-router-dom';

function Error() {
  const params = useParams();
  return <div>{params.type}</div>;
}

export default React.memo(Error);
