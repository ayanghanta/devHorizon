import { useDispatch } from 'react-redux';
import Button from '../../ui/buttons/Button';
import { headingH1, headingH2, headingH3, text } from './writingSlice';

function BlockTypes() {
  const dispatch = useDispatch();

  return (
    <div className="rounded-sm bg-slate-400 px-4 py-2">
      <div className="grid grid-cols-4 gap-1">
        <Button type="block" onClick={() => dispatch(headingH1())}>
          h1
        </Button>
        <Button type="block" onClick={() => dispatch(headingH2())}>
          h2
        </Button>
        <Button type="block" onClick={() => dispatch(headingH3())}>
          h3
        </Button>
        <Button type="block" onClick={() => dispatch(text())}>
          text
        </Button>
      </div>
    </div>
  );
}

export default BlockTypes;
