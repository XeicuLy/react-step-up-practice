import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './components/ChildArea';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = e => {
    setText(e.target.value);
  };
  const toggleOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  const temp = useMemo(() => {
    1 + 3;
  }, []);
  console.log(temp);

  return (
    <div className='App'>
      <input type='text' value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={toggleOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};

export default App;
