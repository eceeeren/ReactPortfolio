import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Filter from './components/Filter';
import MainPage from './components/MainPage';


function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/filter" element={<Filter />} />
          </Routes>
        </Router>
  </ChakraProvider>
  );
}

export default App;
