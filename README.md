https://youtu.be/X1nM8QGXzl0


This project was built using React Native and Expo.
In order to use it, first of all download node.js from https://nodejs.org/en/download/.
Follow the instructions at https://expo.io/learn to download and get setup with expo.

Then install extra react libraries that we need:
- npm install --save react-navigation
- npm install --save react-navigation-stack
- npm install --save react-navigation-tabs
- npm install --save react-navigation-drawer
- npm install --save react-navigation-header-buttons
- npm install --save react-navigation-material-bottom-tabs

to start the app using a local server, use the command:
 sudo npm start
 or
 sudo expo start



FILE STRUCTURE OF THE PROJECT:
This project is subdivided into many different directories.

The screens for the project (Subject categories, lessons within a subject, details of a lesson, filtering and favourites)
are all held under the 'screens' folder.

Reusable react components that fill out the screens are held in the 'components' directory.

The 'database' for the project is currently just a file of dictionaries entitled 'dummy-data.js' and held within the data directory.
Also in this directory is a sample pdf file that was used for testing in implementing pdf viewing and downloading (I couldn't get this to
work in the end though..).

The 'models' folder holds the classes for the entities that are encoded in our dummy database. These are the categories (subjects) and lessons data objects.

The navigational logic that binds the project together is in the 'navigation' directory, in the file ' LessonNavigator'.

Finally, we have a 'constants' folder for entities that do not change but that we refer to in the app. This includes a repository of reference colours
and a (very much WIP) function to handle downloads.


USING THE APP:
Navigating between screens should be intuitive (I hope!).
It's important to note that not all functionality of the app is working (yet!).
For example, clicking the 'star' icon to favourite a particular lesson does not yet result in the lesson being displayed in the favourites screen.
Similarly, although the filters do hold their own state, their state does not yet affect displayed lessons.
These features are WIP, I need to spend some more time learning how to pass parameters around in React Native.




