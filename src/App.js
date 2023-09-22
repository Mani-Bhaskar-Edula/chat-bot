import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import "./App.css";
const HomeLoad = lazy(() => import("./pages/HomePage"));
const ChatLoad = lazy(() => import("./pages/ChatPage"));
const ConfirmLoad = lazy(() => import("./pages/ConfirmationPage"));
const NotFoundLoad = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomeLoad />
            </Suspense>
          }
        />
        <Route
          path="chat-page"
          element={
            <Suspense fallback={<Loader />}>
              <ChatLoad />
            </Suspense>
          }
        />
        <Route
          path="confirmation"
          element={
            <Suspense fallback={<Loader />}>
              <ConfirmLoad />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundLoad />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
export default App;