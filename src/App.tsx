import TipStore from './store/tipStore';

import MainContainer from './containers/MainContainer/MainContainer';
import Title from './components/Title/Title';

import styles from './App.module.css';

function App() {
  return (
    <TipStore>
      <header className={styles.header}>
        <Title text='splitter' />
      </header>
      <MainContainer />
    </TipStore>
  );
}

export default App;
