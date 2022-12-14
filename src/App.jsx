import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './components/ChildArea';
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

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
  // console.log(temp);

  return (
    <div className='App'>
      <input type='text' value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={toggleOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <br />
      <br />
      <InlineStyle />
      <br />
      <CssModules />
      <br />
      <StyledJsx />
      <br />
      <StyledComponents />
      <br />
      <Emotion />
    </div>
  );
};

export default App;
