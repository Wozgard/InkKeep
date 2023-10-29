import { FirebaseUserAuthContextProvider } from 'contexts/FirebaseUserAuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <FirebaseUserAuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </FirebaseUserAuthContextProvider>
);
export default App;
