/* eslint-disable @typescript-eslint/no-unused-vars */
import icon from '../../assets/icon.svg';
import './App.css';
import AppRouter from './routes/routes';
import { FetchProvider } from './services/useFetch';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="bg-red-500">electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className=" w-full ">
      <header>
        <p>navworks</p>
      </header>
      <section
        id="app-section"
        className="overflow-hidden h-[650px] rounded-md"
      >
        <FetchProvider>
          <AppRouter />
        </FetchProvider>
      </section>
    </main>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Hello />} />
    //   </Routes>
    // </Router>
  );
}
