import { Component } from "react";
import "./App.css";
// Add the Route named import
import { Route, Routes, Navigate } from "react-router-dom";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import Logo from './components/Logo/Logo';
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/:id" element={<Logo />}/>
          {/* <Route path="*" element={<Navigate to="/orders" replace/>} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
