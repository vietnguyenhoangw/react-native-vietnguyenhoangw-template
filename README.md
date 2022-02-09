# React Native - Template
### React Native template has built by vietnguyenhoangw

This template building for skip some basic steps like build source's structure, common components: **button, image, text, view...** (*read more in components folder*), config basic lib: **i18n, rn-fast-image, navigation, production and staging environment, redux-saga, crop-image, image picker...** (*read more in package.json file*).

> Based on **Ignite Boilerplate** and custom by vietnguyenhoangw
> Ignite official docs: https://github.com/infinitered/ignite

## Features
- Components's fast-styles properties (h1, h2, center, fillWidth, bold, row, col ...)
![code-snapshot](https://user-images.githubusercontent.com/43869718/153229609-0e2fa67c-997a-494f-8604-6b0acea621aa.png)
- Integrate staging, production dev mode
- Avaiable redux-saga, api-sauce, i18n, navigation...
> Everything you need is develop the new feature and custom some components and styles following projects requirement.

## Tech

Project folder's structure and features.

- **[assets]** - Contain image and icon folder.
- **[components]** - Define common components or custom components in app like button, image, text, ect... [**Noticed**: *Component's name start with first character is 'C', 'CText', 'CView' to recognize between Custom Component and Default component in react-native lib*].
- **[config]** - Config api in this one.
- **[containers]** - Contain screens. Every screen have 3 main file namescreen-screen, index and styles. And we still can create more screen folder into screen dependent on feature or task requirements.
- **[i18n]** - Config multiple language.
- **[models]** - Contain 2 of folder. **app** with global app's interface and **api-reponse** with api-reponse interface (json's properties).  
- **[navigation]** - Config navigation, navigate's method...
- **[redux]** - Config and handle redux, store, reducer...
- **[sagas]** - Config and handle sagas.
- **[services]** - Define api methods.
- **[themes]** - Define config colors, fonts, images, metrics, common styles...
- **[utils]** - Contain utils methods.

## Installation

Require basic environment to run React-native app (Node, java, yarn ...) following official docs:
> https://reactnative.dev/docs/environment-setup

- ### Init project
```sh
1. Init project
npx react-native init AppName --template https://github.com/vietnguyenhoangw/react-native-vietnguyenhoangw-template.git
```

- ### Run projects

```sh
1. Start
yarn start

2. Run
yarn run-android-staging (to debug with staging env)
or
yarn run-android-production (to debug with production env)
```

## License

vietnguyenhoangw-2021

## Contacts
Email, Skype: vietnguyenhoangw@gmail.com
Github: vietnguyenhoangw
Linkedin: https://www.linkedin.com/in/viet-hoang-nguyen-656227171/


**Everything is free, Hell Yeah!**
