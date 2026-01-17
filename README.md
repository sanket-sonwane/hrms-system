
  # Enterprise HRMS Application Design

  This is a code bundle for Enterprise HRMS Application Design. The original project is available at https://www.figma.com/design/fhoxoL9CugmK8OW9AVmSmI/Enterprise-HRMS-Application-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Deployment

  ### Vercel SPA Refresh Fix
  This app uses client-side routing (`BrowserRouter`). On Vercel, directly loading a nested route or refreshing can cause a 404 unless unmatched paths fall back to `index.html`.

  Fix: a `vercel.json` is included to rewrite all non-file routes to `index.html`.

  - Config: see [vercel.json](vercel.json)
  - After pushing, redeploy on Vercel to apply the change.

  Alternative: switch to `HashRouter` if you prefer not to use rewrites.
  