import { Spinner } from 'reactstrap';



const Spiny = (props) => {
  const { type, colour } = props;
  return (
    <div className='loginSpiny'>
      <Spinner type={type} color={colour} />
    </div>
  );
}

export default Spiny;