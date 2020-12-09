This project aimed to build an app that teachers could use to share and collaborate on lesson plans.
Originally, I planned to build a web app and combine this project with CS33a, however I wanted to stretch myself
and so split this project into a separate branch to build a mobile app with a related mission.

This was the first time I have ever built a mobile app or worked with React Native so needless to say it was a very steep learning curve!

I spent the first few weeks just using online resources (such as CS50's free online lectures on mobile development!) to learn as much as possible.
I decided to build the pp using React Native so that in theory it could be deployed to both the App and Play store will minimal extra work.
This is also one of the best supported frameworks in online teaching.
I decided to use Expo as a development tool as this was my first app. Expo speeds up a lot of development features and
I was unlikely to need all of the custom features of React Native CLI for a simple mobile app (although this assumption turned out
to be incorrect!)

I was pleased with the final result of the project. Just getting an app which can navigate between screens, show some
data and is reasonably aesthetic represents huge progress from my previous abailities (zero).
However, I was nowhere near implementing all the features I would have liked to (and indeed have done for my web app version).
I did not set up a database, functionality to upload anything. I also did not get the filtering or favourite-ing functionality
working.
I need to watch some more lectures to get those set up!

I also spent some time trying to be able to download a lesson plan pdf through the app, or to show it through a WebView.
However, for some reason, the WebView always crashed the app and I couldn't get the download to work (from a security
point of view, download functionality seemed like a risk in the long term anyway). From some initial investigation it seemed
like part of the problem is that some of the react libraries for handling pdfs are not supported in expo, so to implement this
perhaps I would need to export the project.


From the parts of the app I was able to implement I learned about:
- navigators
- screens
- React built in components (Views, Texts, Buttons etc)
- React custom components
- props and passing parameters
- Stylesheets
- State
- React Hooks (State, Callbacks etc)


To conclude, I learned a huge amount in a very short amount of time and was please with the result. I plan to
continue working on the app to finish off the features I wasn't able to get to in the allocated time and hopefully build
many more apps in the future.

Thanks for a fantastic course - I've learned a HUGE amount taking CS50 at the extension school!