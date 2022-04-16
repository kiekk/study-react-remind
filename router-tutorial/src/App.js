import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">
            홈
          </Link>
        </li>
        <li>
          <Link to="/about">
            소개
          </Link>
        </li>
        <li>
          <Link to="/info">
            소개2
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            프로필
          </Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/info" element={<About/>}/>
        <Route path="/profiles/*" element={<Profiles />}/>
        <Route path="/history" element={<HistorySample />}/>
        <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
