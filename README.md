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

`getServerSideProps` = Dynamic page with data fetching on the server during <b>run time</b>. Don't need to prepare paths for `getStaticPaths`.

<b>Return props:</b>

- `props` = Any data to prepare.
  For example,

```
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```
