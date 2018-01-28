![Build Status](https://gitlab.com/pages/hugo/badges/master/build.svg)

---

This is the Mainland Big Band's website source code.

---
**Table of Contents**

- [GitLab CI](#gitlab-ci)
- [Building locally](#building-locally)
- [Adding a Gig](#adding-a-gig)

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml).

The site is scheduled to rebuild nightly so that the next gig is updated correctly.

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Hugo
1. Preview your project: `hugo server --buildFuture`
1. Add content
1. Generate the website: `hugo --buildFuture` (optional)

Read more at Hugo's [documentation][].

### Preview your site

If you clone or download this project to your local computer and run `hugo server`,
your site can be accessed under `localhost:1313/hugo/`.

## Adding a gig

1. In the `content/gigs` folder, create a folder for the appropriate year if it doesn't exist already
1. Find an existing gig file that has the same venue
1. Copy that gig file into the new folder and rename it corresponding to the gig date, e.g. 7 October is `10-07.md`
1. In the new file, change the date for the gig as appropriate. Any extra details about the gig can go at the bottom of the file  

[ci]: https://about.gitlab.com/gitlab-ci/
[hugo]: https://gohugo.io
[install]: https://gohugo.io/overview/installing/
[documentation]: https://gohugo.io/overview/introduction/
[userpages]: http://doc.gitlab.com/ee/pages/README.html#user-or-group-pages
[projpages]: http://doc.gitlab.com/ee/pages/README.html#project-pages
[post]: https://about.gitlab.com/2016/04/07/gitlab-pages-setup/#custom-domains
