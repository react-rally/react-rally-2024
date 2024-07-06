import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AppProvider } from "App";
import Layout from "Layout";
import About from "screens/About";
import Conduct from "screens/Conduct";
import Home from "screens/Home";
import Privacy from "screens/Privacy";
import Schedule from "screens/Schedule";
import Speakers from "screens/Speakers";
import Sponsors from "screens/Sponsors";
import Stream from "screens/Stream";
import Venue from "screens/Venue";
import Workshop from "screens/Workshop";
import ga from "helpers/googleAnalytics";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src="assets/img/icons/t-rex.svg" />
      <h1>Sorry, you're looking for something that no longer exists.</h1>
      <section className="highlight">
        <p>
          But since you're here, why not{" "}
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
            watch a video
          </a>{" "}
          of our favorite talk from last year?
        </p>
      </section>
    </div>
  );
};

// Fix history
(function () {
  const hash = location.hash;
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;

  // Fix history for redirect coming from gh-pages 404.html
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
  // Fix history for legacy hash history URLs
  else if (hash.trim().length !== 0) {
    history.replaceState(null, null, hash.replace("#", ""));
  }
})();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/conduct" element={<Conduct />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/stream" element={<Stream />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

createRoot(document.getElementById("container")).render(
  <AppProvider>
    <RouterProvider
      router={router}
      onUpdate={() => {
        window.scrollTo(0, 0);
      }}
    />
  </AppProvider>,
);
