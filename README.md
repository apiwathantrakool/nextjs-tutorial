This is a tutorial project to learn Next JS via online course. This document will be used as the lecture in this course.

# Running script command

- next dev = Run the web app in debug mode.
- next build = Create the build files and HTML file prepared for running on client.
- next start = Run the build files to test. Before deploy the web app.

# Static generation (Preparing on build time)

`getStaticProps` = Pre-generate a page with data prepared on the server during <b>build time</b>.

<b>Return props:</b>

- `props` = Any data to prepare.
- `revalidate` = Duration to re-generate build files in seconds. In case of the web app need to receipt new data from database.
  For example, revalidate = 10. If the page refreshes in 10 seconds the web will not re-generate the build files.
- `notFound` = Render 404 page when a condition is true.
- `redirect` = Navigate a route when a condition is true. For example, `{ redirect: { destination: '/no-data' } }`

<br/>

`getStaticPaths` = Work with `getStaticProps` to handle dynamic path.

<b>Return props:</b>

- `paths` = List of prepare path(mock). For example, `paths: [{ params: { id: '1' } }, { params: { id: '2' } }]`
- `fallback` = Require prop, will return value following:
  - `false` = Good for static path. Any paths not returned by `getStaticPaths` > `paths` will result in a 404 page.
  - `true` = Good for dynamic path. Any paths from URL can be rendered to HTML at build time by `getStaticProps`. But need to condition the path exist before rendering.
  - `blocking` = Good and Suitable for dynamic path. Similar to `true` but it will wait until a path successfully loaded. Because when use `true` the page will finish loading before the path loading.

# Server-side rendering (Preparing on run time)

`getServerSideProps` = Dynamic page with data fetching on the server during <b>run time</b>.

<b>Return props:</b>

- `props` = Any data to prepare.
  For example,

```
// This gets called on every request
export async function getServerSideProps(context) {
  // Don't need to prepare paths for `getStaticPaths`.
  const { params } = context;
  // Fetch data from external API
  const res = await fetch(`https://.../data/${params.eventId}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

# Client-side data fetching

`useSWR` = Similar to `fetch()` but executes when a component is loaded not rendered(`useEffect`). This is similar as Firebase realtime fetching which it will fetch a new data(not the whole just only new changes) when the data was changed from a listening api.
SWR = Stale While Revalidate, it will read the data from cache first before fetch the API. After send the API request, merge the response with the cache data. (ref: https://swr.vercel.app/)

# Optimizing

`Head` = Custom title bar name, icon, description, or any meta tags. Note that if the web contains multiple nested title then the last one will be used.
For example,

```
import Head from 'next/head';
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name='description' content='Home page description' />
      </Head>
     </div>
  );
}
```

`_app.js` = The root component inside the body section of HTML document.

`_document.js` = Similar to custom default index.html which allows to add HTML content outside the app component.

`Image` = https://nextjs.org/docs/api-reference/next/image

# API Routes

https://nextjs.org/docs/api-routes/introduction

<p align="center">
  <img src="https://github.com/apiwathantrakool/nextjs-tutorial/blob/main/readmeAssets/api-routes-details.png?raw=true" width="350" title="hover text">
 </p>
