import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TrainerDetails from "./pages/TrainerDetails";
import { Box } from "@chakra-ui/react";
import AllTrainers from "./pages/AllTrainers";
import { useEffect, useState } from "react";
import { trainersContext } from "./trainersContext";
import { defaultValues } from "./api/defaultValues";

function App() {
  const [trainers, setTrainers] = useState([]);

  const modifyTrainers = (val) => {
    setTrainers(val);
  };

  useEffect(() => {
    // Setting few default values to start with
    modifyTrainers(defaultValues);
  }, []);

  return (
    <Box background={"gray.100"} minH={"100vh"}>
      <trainersContext.Provider value={trainers}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllTrainers />} />
            <Route path="/trainer/:id" element={<TrainerDetails />} />
          </Routes>
        </Router>
      </trainersContext.Provider>
    </Box>
  );
}

export default App;
