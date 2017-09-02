# CostPers
CostPers is an app that helps you better understand the value of your things. The app keeps track of how much you paid for an item and how many times you've used it - then it calculates the item's real-time "cost per use."

Watch this short demo video to see the CostPers app in action:

[![alt text](https://raw.githubusercontent.com/icedcoffeeallday/CostPers/master/CostPers_on_YouTube.png)](https://www.youtube.com/watch?v=fcuIzBc5JEg&feature=youtu.be)


## Team Members
Andrea Scott ([@icedcoffeeallday](http://github.com/icedcoffeeallday))

Faye Hayes ([@fhayes301](http://github.com/fhayes301))

Ginny Fahs ([@ginnyfahs](http://github.com/ginnyfahs))

Kevin Cai ([@kevincai79](http://github.com/kevincai79))

Tyler Kawabata ([@tylerk64](http://github.com/tylerk64))

Costpers was created as a final project at Dev Bootcamp, San Francisco.

## MVP Functionality

* CostPers is an iOS and Android app built on a decoupled architecture featuring:
 * Rails API backend
 * React Native frontend

*Rails API backend features*
* User authentication with BCrypt
* Calculates CostPers
* Controls item sorting and starred/un-starred item lists
* Parses and passes JSON to the frontend

*React Native frontend features*
* Allows users to create and store items, as well as each item's uses, passing data to and from the backend via Axios
* Displays CostPer reduction in real-time when user logs a use of an item
* Routing and state management handled with React Native Router Flux

## Flow
* Log in to see a list of your items, with starred items shown at the top
* From the item list screen, you can:
 * Log a use of any item by tapping the gray checkmark, and see the cost-per-use go down in real time
 * Tap on any item to view the item's price and total uses, plus favorite or un-favorite the item
 * Use Add Item footer button to add an item

## Future Features
* You love logging seeing your laptop's CostPer drop, but what about all those subscriptions you have hanging around? Additional configuration for monthly subscriptions is on our list!
* Add item photos
* Deeper item categorization and analytics
* Log past uses for an item you already own
* Emoji support :heart:
* Notifications and Google Maps integration for donating items with high CostPers

## Test on your local machine
*iOS and Android preinstallation*
* Clone this repo `git clone https://github.com/icedcoffeeallday/CostPers.git`
* `cd CostPers/frontend/`
* Run `npm install` in your command line tool
* For troubleshooting see: React Native Docs ([running on device](https://facebook.github.io/react-native/docs/running-on-device.html)) for your specific setup

*iOS - macOS*
* Navigate to `CostPers/frontend/ios/` then open frontend.xcodeproj in Xcode
* Connect iOS device to your Mac and if necessary register device for development by selecting __Product__ in the Xcode menubar, then __Destination__, and lastly by choosing your device from the list
* Register for an Apple Developer Account if you don't have one yet
* In the Xcode Project Navigator, click the "General" tab and in the "Signing" section make sure your Apple developer account or team is selected under the Team dropdown. Repeat this step for the Tests target in your project
* Press cmd+r `(⌘R)` to build and run app on local iOS device

*Android - macOS, Windows*
* On Android device first enable the "Developer Options" menu by going to __Settings__ → __About Phone__ then tapping the `Build number` row at the bottom seven times. Then back in __Settings__ → __Developer Options__ enable "USB Debugging"
* Plug in the Android device to the development machine via USB, confirm the _singular_ device is properly connecting to ADB by running `adb devices` in command line and verifying `device` is displayed in the right column
* Type `react-native run-android` in command prompt to install and run the app on the Android device



