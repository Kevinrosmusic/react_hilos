import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import { AppRouter } from "./router/AppRouter";

function App() {
    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    );
}

export default App;
