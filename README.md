# chvndler.ch

## **personal site**.

### stack

→ **CSS:** [Tailwindcss](https://tailwindcss.com/)

→ **Back-end:** [Next.js](https://nextjs.org/)

→ **Front-end:** [React](https://reactjs.org/), [Next.js](https://nextjs.org/)

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

```plain-text
Route (app)                                Size     First Load JS
┌ ○ /                                      227 B           156 kB
├ ○ /_not-found                            0 B                0 B
├ ○ /archive                               137 B          80.2 kB
├ ○ /media                                 178 B          85.9 kB
├ ○ /projects                              178 B          85.9 kB
└ ● /projects/[...slug]                    1.97 kB         145 kB
    ├ /projects/arie
    ├ /projects/arweave
    ├ /projects/atelierkit
    └ /projects/components
+ First Load JS shared by all              80 kB
  ├ chunks/2443530c-d2aec7c3191112f3.js    50.5 kB
  ├ chunks/488-373b808392478b82.js         27.6 kB
  ├ chunks/main-app-075e98ceba500e37.js    216 B
  └ chunks/webpack-d5f1339de20a6c94.js     1.68 kB
Route (pages)                              Size     First Load JS
─ ○ /404                                   181 B            75 kB
+ First Load JS shared by all              74.8 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-6d0c3239fc6bbc8b.js        27.9 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-d5f1339de20a6c94.js     1.68 kB
```

### license

---

[MIT License](/license)

`© chvndler`
