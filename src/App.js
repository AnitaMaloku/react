import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import UserDetails from './pages/UserDetails';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path='/userDetails/:id' element={<UserDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
