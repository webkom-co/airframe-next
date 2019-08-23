# Airframe Next

High Quality **Dashboard / Admin / Analytics template** that works great on any smartphone, tablet or desktop. Available as **Open Source as MIT license.**

- [**View Demo**](http://airframe.nextjs.webkom.co)
- [jQuery Version](http://dashboards.webkom.co/jquery/airframe) 
- [React Version](https://github.com/0wczar/airframe-react/)
- [Angular Version](http://dashboards.webkom.co/angular/airframe) - _Documentation in preparation_
- [Vue Version](http://dashboards.webkom.co/vue/airframe) - _Documentation in preparation_
- [MVC.Net Version](http://dashboards.webkom.co/net-mvc/airframe) - _Documentation in preparation_
- *Sketch Files (Soon)*

![aiframe-2019-light-primary-ExchangeTrading2x-bfc026c1-0477-45c8-ba55-f6dd43141e4c](https://user-images.githubusercontent.com/2330394/63061353-20ea4600-bef5-11e9-84c8-000a6dceea4d.png)

# Introduction

**Airframe Dashboard** with a minimalist design and innovative Light UI will let you build an amazing and powerful application with great UI. Perfectly designed for large scale applications, with detailed step by step documentation.

This Airframe project is based on [NextJs](https://github.com/zeit/next.js/) - a popular framework made for React with great Server Side Rendering support. Includes customized [Reactstrap](https://reactstrap.github.io)
for Bootstrap support. Any topic that you won't find here is probably described in NextJs documentation.

_Note: If you want to use this project in production, you will need a server supporting NodeJs._

## Initial Configuration:
You need to have [NodeJs](https://nodejs.org/en/) (>= 10.0.0) installed on your local machine, before attempting to run a dev environment.

1. Extract contents of the package to your local machine.
2. Using the Terminal navigate to the extracted contents.
3. Run `npm install`.

Make sure you have a file called `.npmrc` in the extracted directory. Those files are typically hidden in Unix based systems.

### Development
To start the development environment type `npm run dev` in the console. This will start a development server with hot reloading enabled.

### Production
You can use a shell script included with the package. If you are using a Unix based system run `./build-dist.sh` from the terminal, and you will have a ready to deploy package in the `/dist` directory.

If you can't use the shell script you need to prepare the package manually:
1. Run `npm run build`
2. Copy those contents to the target machine
    * `.next`
    * `static`
    * `package.json`
    * `.npmrc`
3. Run `npm install` on the server where you copied the above contents.
4. You can now start the app by running `npm start`

### Build Customization
You can add additional build features by adding [next plugins](https://github.com/zeit/next-plugins) and configuring them inside the `next.config.js` file.

## Project Details
Some points of interest about the project project structure:

* `components` - global React components should go here
* `styles` - styles added here won't be treated as CSS Modules, so any global classes or library styles should go here
* `features` - page specific components should be found here
* `features/Layout` - the `AppLayout` component can be found here which hosts page contents within itself. You can change the Layout component for each page.
* `core/colors.js` - exports an object with all of the defined colors by the Dashboard. Useful for styling JS based components - for example charts.
* `pages` - Page components should be here. NextJs will automatically map the file names to Route URLs.

### Routing
Route components should be placed in separate directories inside the `/routes/` directory. Next you should open `/routes/index.js` file and attach the component. You can do this in two diffrent ways:

#### Static Imports
Pages imported statically will be loaded eagerly on PageLoad with all of the other content. There will be no additional loads when navigating to such pages **BUT** the initial app load time will also be longer. To add a statically imported page it should be done like this:

```jsx
// Import the default component
import SomePage from './SomePage';
// ...
export const RoutedContent = () => {
    return (
        <Switch>
            { /* ... */ }
            { /* Define the route for a specific path */ }
            <Route path="/some-page" exact component={SomePage} />
            { /* ... */ }
        </Switch>
    );
}
```

#### Routing
Routing system is handled by NextJs itself. You can find the documentation here - [NextJs Routing](https://nextjs.org/docs#routing)

#### Route specific Layout
Sometimes you might want to display additional content in the Navbar or the Sidebar. To do this you should define a customized Layout component for a particular Page. Example:

1. Create a new Layout component in `features/layout`. Take the `LayoutDefault` component as an example.
2. Open the Page Component for a particular route. For example `pages/example-page.js`.
3. Set the custom Layout Component like this:
```jsx
import React from 'react';

import { CustomLayout } from
    './../../features/Layout/CustomLayout';

const ExamplePage = () => (
    { /* Page Content Here */ }
);
ExamplePage.layoutComponent = CustomLayout;

export default ExamplePage;
```

## Theming
You can set the color scheme for the sidebar and navbar by providing `initialStyle` and `initialColor` to the `<ThemeProvider>` component which should be wrapping the `<Layout>` component.

Possible `initialStyle` values:
* light
* dark
* color

Possible `initialColor` values:
* primary
* success
* info
* warning
* danger
* indigo
* purple
* pink
* yellow

### Programatic Theme Changing
You can change the color scheme on runtime by using the `ThemeConsumer` from the components. Example:
```jsx
// ...
import { ThemeContext } from './../components';
// ...
const ThemeSwitcher = () => (
    <ThemeConsumer>
        ({ onChangeTheme }) => (
            <React.Fragment>
                <Button onClick={() => onThemeChange({ style: 'light' })}>
                    Switch to Light
                </Button>
                <Button onClick={() => onThemeChange({ style: 'dark' })}>
                    Switch to Dark
                </Button>
            </React.Fragment>
        )
    </ThemeConsumer>
);

```

Options provided by the `ThemeConsumer`:
* **style** - current theme style
* **color** - current theme color
* **onChangeTheme({ style?, color? })** - allows to change the theme
