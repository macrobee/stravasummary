import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./pages/auth/authentication";
import Home from './pages/home';
import Summaries from "./components/summaries";
import StravaRedirectPage from './pages/stravaredirect';
import DataDisplay from './pages/datadisplay';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="summaries" element={<Summaries />}/>
        <Route path="redirect/*" element={<StravaRedirectPage/>}/>
        <Route path='dashboard' element={<DataDisplay/>}/>
      </Route>
    </Routes>
  );
}

export default App;
