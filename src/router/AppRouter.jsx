import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/404/NotFoundPage";
import { HomePage } from "../pages/home/HomePage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/:cfskey/:cfstoken" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
