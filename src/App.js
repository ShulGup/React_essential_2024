import "./App.css";
import React from "react";
import FormComponent from "./component/SignForm";
import { action as authToken } from "./component/http";
import { authLogout } from "./component/Logout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContextProviderComponent from "./ContextProviderComponent";
import RefLogin from "./component/RefLogin";
import LogoutPage from "./component/LogoutPage";
import { tokenLoader, checkAuthLoader } from "./component/utils/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InputComponent from "./component/InputComponent";
import CounterApp from "./component/CounterApp";
import CounterClass from "./component/CounterApp_class";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <ContextProviderComponent /> },
      {
        path: "/input",
        element: <InputComponent />,
        loader: checkAuthLoader,
        // children: [
        //   {
        //     index: true,
        //     element: <EventsPage />,
        //   },
        //   {
        //     path: ":eventId",
        //     id: "event-detail",
        //     loader: eventDetailLoader,
        //     children: [
        //       {
        //         index: true,
        //         element: <EventDetailPage />,
        //         action: deleteEventAction,
        //       },
        //       {
        //         path: "edit",
        //         element: <checkAuthLoader />,
        //         action: manipulateEventAction,
        //         loader: checkAuthLoader,
        //       },
        //     ],
        //   },
        //   {
        //     path: "new",
        //     element: <NewEventPage />,
        //     action: manipulateEventAction,
        //     loader: checkAuthLoader,
        //   },
        // ],
      },
      {
        path: "auth",
        element: <FormComponent />,
        action: authToken,
      },
      {
        path: "logout",
        action: authLogout,
        element: <LogoutPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CounterApp />
      <CounterClass />
    </>
  );
}

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<ContextProviderComponent />} />
//       <Route path="/auth" element={<FormComponent />} action={authToken} />
//       <Route path="/logout" element={<LogoutPage />} action={authLogout} />
//     </Routes>
//   </BrowserRouter>
// );

export default App;
