# restle
RSS reader built with React and Electron

This will be my attempt at doing some more React work while trying to learn as much es6 as possible. Packaging it inside Electron is also something I've been wanting try out.

Open sourcing my learning experience might also lead to PR's or issues to things I'm not even aware of. 

**Why create another RSS reader?**

I tend to go through quite a few tech sites during the day and having a central point of browsing the articles just seems a bit more logical.

There are various RSS readers out already, but I'm a developer so why not make my own.

**PS - Pull requests are welcome**

####UPDATE

*19-07-2016*

The app can now successfully pull the `arstechnica` rss feed and populate the content window. Now all we need to is find a way to handle multiple feeds and all their formats.

TODO

- [ ] Find solution to handle different rss feeds
- [ ] Clean up prototype code where possible
- [ ] Display more relevant data for each article
- [ ] Allow articles to be viewed inside app
- [ ] Store feed urls in the database and check for duplicates
- [ ] Display feeds as buttons to initiate ajax calls
- [ ] Possibly add offline feature
- [ ] Add some styling to the app

*18-07-2016*

Foundation of the components have been added. App renders all components correctly. Data is also being pulled correctly, xml feed's transformed to json.

The ability to store feed url's can also be done. Feed validation is rudimentary and needs to be looked at.

The **important** part will be to handle the differences among rss feeds as they don't follow the same format. There's quite possibly magic source to handle this, will have to do some research.

Things are looking good!
