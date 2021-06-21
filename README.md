# JSONplaceholderRN
## _React Native_

## How to run the app

```sh
git clone https://github.com/OscarDRT/JSONplaceholderRN.git
"cd JSONplaceholderRN"
"npm install" or "npm i" or "yarn install"
"npx pod-install" or "cd ios && pod install && cd .."   //for ios
"npm run ios" //Run the application - ios
"npm run android" //Run the application - android
```

## Setting up the development environment

Run the following command to see if you have what you need to lift the application

```sh
npx @react-native-community/cli doctor
```
Follow the instructions in the react native documentation. [react native documentation](https://reactnative.dev/docs/environment-setup)

## Tech

-  [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/): Async Storage is an asynchronous, unencrypted, persistent, key-value storage solution useful for persisting simple data.
-  [react-navigation](https://reactnavigation.org/): To handle navigation between screens, it is quick to implement and has very good performance.
-  [Shopify/restyle](https://github.com/Shopify/restyle): This library is useful to work on applications that maintain an integrated design system, it allows to have components that through props are styled.



First I analyzed the type of problem, how big it was and the time available to come up with a solution. 

I needed to be able to share information between screens, which posts were viewed and which ones had a star for being favorites.

I decided to handle a global context that allows me to share statuses between components and change those statuses according to user interaction.

I used a Context API to manage the posts as a global state, this allows me to subscribe to this state and manipulate it if necessary. A disadvantage of this solution is the re-rendering of components that are subscribed to this state, if the global state changes all components subscribed to this state will be re-rendered.

Other solutions 
You could combine a global state solution with the use of caching to persist the data and only in specific cases such as deleting a post or refreshing all the posts to query the API again.

To better manage the state of the application I could use a library like react query, it allows me to have global states of the application, avoids re-rendering and has an experimental option to associate a client to persist the information.
