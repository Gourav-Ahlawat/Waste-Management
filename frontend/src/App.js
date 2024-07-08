import { Login } from "./components/export";
import { Home, AdminHome, Driver } from "./pages/export";
function App() {
  return (
    <div className=" flex w-full h-screen">
      <div className="flex w-full items-center justify-center">
        {/* <Login /> */}
        <Driver />
      </div>
    </div>
  );
}

export default App;
