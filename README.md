# chvndler.ch

## **personal site**.

<div align="center">
    <a href="https://www.dylanmeivis.com"><img src="https://cdn.chvndler.ch/assets/other/chan.memoji.gif" alt="Chandler Chappell" width="200"></a>
    <br>
    <h3><strong><a href="https://twitter.com/chvndlerch">@chvndlerch</a></strong></h3>
    <sub>enjoying the internet
    </sub>
</div>

<hr />

### stack

→ **CSS:** [Tailwindcss](https://tailwindcss.com/)

→ **Front/Back:** [React](https://reactjs.org/), [Next.js](https://nextjs.org/)

→ **Deployment:** [Vercel](https://vercel.com/)

### running locally

1. Clone this repo:

```sh
$ git clone https://github.com/chvndler/chvndler.ch.git
```

2. Then go to the project's folder:

```sh
cd chvndler.ch
```

3. Install all dependencies:

```sh
yarn install
```

4. Run locally:

```sh
yarn dev
```

! Don't forget to check `.env.example` !

---

### Project Structure

```
Route (app)                                Size     First Load JS
┌ ○ /                                      4.46 kB         109 kB
├ ○ /_not-found                            0 B                0 B
├ ○ /dev                                   3.71 kB         108 kB
├ ○ /interact                              237 B           135 kB
├ ● /interact/[...slug]                    1.08 kB         136 kB
├   ├ /interact/menubar
├   ├ /interact/spotify
├   ├ /interact/git-colour
├   └ [+3 more paths]
├ ○ /media                                 1.29 kB        89.3 kB
├ ○ /projects                              4.24 kB         101 kB
└ ● /projects/[...slug]                    4.34 kB         109 kB
    ├ /projects/are.na
    ├ /projects/arie
    ├ /projects/arweave
    └ [+3 more paths]
+ First Load JS shared by all              77.7 kB
  ├ chunks/769-459c8437ffe56edf.js         25.1 kB
  ├ chunks/bce60fc1-ae1cef3915316b9c.js    50.5 kB
  ├ chunks/main-app-dde81206f717071b.js    216 B
  └ chunks/webpack-baa0616e1c56ab7f.js     1.76 kB

Route (pages)                              Size     First Load JS
┌ ○ /404                                   182 B          75.6 kB
└ λ /api/spotify                           0 B            75.4 kB
+ First Load JS shared by all              75.4 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45 kB
  ├ chunks/main-41b639713b40d111.js        28.4 kB
  ├ chunks/pages/_app-998b8fceeadee23e.js  195 B
  └ chunks/webpack-baa0616e1c56ab7f.js     1.76 kB
```

### license

---

[MIT License](/license)

`© chvndler`
