This is a tutorial project to learn Next JS via online course. This document will be used as the lecture in this course.

# Running script command

- next dev = Run the web app in debug mode.
- next build = Create the build files and HTML file prepared for running on client.
- next start = Run the build files to test. Before deploy the web app.

# Static generation

`getStaticProps` = Pre-generate a page with data prepared on the server during build time.

- props = Any data to prepare.
- revalidate = Duration to re-generate build files in seconds. In case of the web app need to receipt new data from database.
  For example, revalidate = 10. If the page refreshes in 10 seconds the web will not re-generate the build files.
