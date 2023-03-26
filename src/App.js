import React, { Suspense, lazy } from "react";
console.log(React.version);
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import "./static/css/main.scss"; // All of our styles
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";

const { PUBLIC_URL } = process.env;

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Resume = lazy(() => import("./pages/Resume"));
const Stats = lazy(() => import("./pages/Stats"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article1" component={Article1} /> // define the route for
        Article1
        <Route path="/article2" component={Article2} /> // define the route for
        Article2
        <Route component={NotFound} status={404} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
