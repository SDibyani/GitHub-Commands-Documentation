import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="min-h-screen  bg-gray-100">
      <Header />
      <div className="flex justify-center">
        <Login />
      </div>
    </div>
  );

}

export default App;