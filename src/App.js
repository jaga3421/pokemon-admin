import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TrainerDetails from "./pages/TrainerDetails";
import { Box } from "@chakra-ui/react";
import AllTrainers from "./pages/AllTrainers";

function App() {
  return (
    <Box background={"gray.100"} h={"100vh"}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllTrainers />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
