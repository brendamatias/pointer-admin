import { SignIn, Logout } from "@/pages";
import { AuthLayout } from "@/pages/layouts";

export const authRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
];
