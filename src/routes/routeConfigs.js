import { AuthLayout } from "../layouts";
import { SignInPage, SignUpPage } from "../pages/Auth";

export const dashboardRoutes = [
];

export const authRoutes = [
  { path: '/auth/signin', component: <SignInPage />, layout: AuthLayout, private: false },
  { path: '/auth/signup', component: <SignUpPage />, layout: AuthLayout, private: false },
];