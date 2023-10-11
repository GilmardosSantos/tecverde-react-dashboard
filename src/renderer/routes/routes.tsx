import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TermsComponent from '../pages/terms/terms';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TermsComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
