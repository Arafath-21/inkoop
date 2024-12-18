import { useNumberContext } from '../store/numberContext';

const Display: React.FC = () => {
  const { state } = useNumberContext();
  return (
    <div>
      {state.message && <p>{state.message}</p>}
      {state.numbers.length > 0 && (
        <p>Next Numbers: {state.numbers.join(', ')}</p>
      )}
    </div>
  );
};

export default Display;
