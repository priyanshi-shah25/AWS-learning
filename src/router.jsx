import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutUs,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
});
