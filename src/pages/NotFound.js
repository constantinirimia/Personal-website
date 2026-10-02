import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta
          name="description"
          content="The content you are looking for cannot be found."
        />
      </Helmet>
      <p className="not-found__code" data-testid="heading">
        404
      </p>
      <h1>going around</h1>
      <p>
        Runway not in sight at this fix. Return <Link to="/">base</Link>.
      </p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
