# Hey there Disco team! 👋🏼

This project was bootstrapped with Create React App, and among others it uses
React Router, Redux Toolkit, Typescript, React, and MaterialUI.

To be able to try everything, you will probably need to install the
dependencies first by running `npm install`.

Once this is done, you can run the server with `npm start` from this directory.

This will run the app in development mode and you will be able to see it by
opening [http://localhost:3000](http://localhost:3000) in your browser.

You can also run `npm test` but there isn't a lot of tests unfortunately, I
had to prioritise finishing everything over testing 😓

Quick tour of the codebase:

- `src/app` hosts config that are required to run the app (redux, routing, theme,
...)
- `src/features` is where most of the application code is, redux or not, I haven't
worked in a redux  codebase in the last 3 years and I'm not sure what the current
best practices are around code organisation so I chucked things there
- `src/lib` is just for small helper functions/components
- `src/services` is where the RTK query stuff lives as that's what they seemed to suggest
in the resources I've read. Again, never used RTK in a real project before so not
sure if that's the way to go 😅
- `src/index` is binding everything together and `src/main` is my main layout.

A few things that could have been done better:

- More Redux? I found it hard to figure out what to use redux for since with
RTK Query the entire app could probablyrun just through that abstraction. I
added a bit of a dummy store to handle the pagination just to show that I can
create a slice/test a reducer/use selectors 😂
- The routes could be lazy loaded via Suspense/lazy but I didn't get enough
time to do that ⏰️
- More test would have been nice but again, I was short on time and wanted to
have something that was OK-ish and sort of functional 😅
- The loading is baaaaad and would benefit from a better image component that
would have a placeholder. It's a matter of creating a base Image object and
then adding listening to the `onload` event, then swapping the placeholder
for the redenred image when the event is triggered. Another option is to
preload a super small version of the image and apply a blur on it. It's more
in line with the idea of "progressive immage loading".
- I tried to reproduce the Artic website and as a result a lot of things are
hardcoded to look like it. Not great but again, it was in the interest of
saving time 😆

If you have any questions, feel free to reach out! Hopefully it makes sense!

Have a wonderful day 🌈