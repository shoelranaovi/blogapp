import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className=" flex flex-col gap-4 ">
      <Header />
      <main className="bg-gray-100 ">
        <Outlet />
      </main>
    </div>
  );
}
export default App;
