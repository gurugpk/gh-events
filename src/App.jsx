import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// This comment does not need action to run
// This comment 2
// This is comment 3
// This is comment 4
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
