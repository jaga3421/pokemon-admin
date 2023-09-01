import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TrainerDetails from "./pages/TrainerDetails";
import { Box } from "@chakra-ui/react";
import AllTrainers from "./pages/AllTrainers";
import { useState, useEffect } from "react";
import { TrainersContext } from "./TrainersContext";
import { defaultTrainers } from "./api/defaultValues";

function App() {
  const [trainers, setTrainers] = useState(defaultTrainers);
  console.log(trainers);

  useEffect(() => {
    console.log(trainers);
  }, []);

  return (
    <Box background={"gray.100"} minH={"100vh"}>
      <TrainersContext.Provider value={[trainers, setTrainers]}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllTrainers />} />
            <Route path="/trainer/:id" element={<TrainerDetails />} />
          </Routes>
        </Router>
      </TrainersContext.Provider>
    </Box>
  );
}

export default App;
