# WorldFlags Website

WorldFlags is a web application that provides real-time information about countries around the world in a user-friendly manner. It allows users to access country-specific data through an interactive interface and provides direct links to the corresponding pages on the "Worldometer" website.  
This README.md file provides an overview of the project and instructions on how to install and use the application.

## Features

- Display of 235 flags representing different countries.
- Clicking on a flag opens a new tab with detailed information about the corresponding country on the "Worldometer" website.
- Sorting functionality to arrange flags alphabetically or based on population and land area.
- Interactive SideNav for easy access to sorting options.
- Additional links are available to access real-time global information, world population, Coronavirus, and more.
- Responsive design for seamless viewing on various devices.
- PageNotFound feature redirects users to a dedicated page when they try to access non-existent links.

## Installation and Prerequisites
### The following dependencies are required to run the WorldFlags application:
- Node.js (version 18.16.0): Make sure you have Node.js installed on your system.
  - You can download it from [nodejs.org](https://nodejs.org).
- React (version 18.2.0): A JavaScript library for building user interfaces. 
  - You can see the [Versions](https://github.com/facebook/react/tags) of React.
  - You can explore the React [Quick Start](https://react.dev/learn).

### Installing Project
1. Start by cloning this repository to your local machine or download the source code as a ZIP file:  

   ```bash
   https://github.com/OfirPeer07/info-countries-website.git
2. Open a terminal or command prompt and navigate to the project's root directory:  

   ```bash
   cd info-countries-website
3. Run the following command to install the necessary dependencies:  

   ```bash
    npm install
4. Once the dependencies are installed, start the application by running:  

   ```bash
   npm start
5. Open your web browser and visit http://localhost:3000 to access the WorldFlags application.
> Note: Please ensure you have the correct versions of the dependencies mentioned above for seamless functionality.
## Usage

Upon launching the application, you will be greeted with a main page featuring an animated rotating Earth.  

![This is Earth image](https://i.ibb.co/z6HFrv3/149.png)

Hovering over with your mouse on the Earth reveals a night-view representation.  

![This is Earth Night-View image](https://i.ibb.co/tMfK16S/150.png)

Clicking on the Earth night-view will lead you to the main page.  

![This is Main-Page image.](https://i.ibb.co/SXfg61L/152.png)

## Sort and Explore Country-Specific Information

### Explore Country-Specific Information
1. Search the country that you want to explore from any flags displayed on the `/worldflags` page.
2. Click on the chosen flag to access detailed information about the corresponding country on the "Worldometer" website.

### Sort Flags
1. Use the SideNav on the left side of the site.
2. Click on the $\textcolor{white}{\textsf{"Population"}}$ or $\textcolor{white}{\textsf{"Land Area"}}$ icons to sort flags based on the corresponding categories.
3. Click on the default sort icon to revert to the default sorting order (alphabetical).


### Additional Links

The application provides additional links for easy access to specific information:
- **World information:** Real-time global information about all countries.
- **World Population:** Real-time information on the world population.
- **All People In 1 Page:** Displaying real-time all people on one page.
- **Coronavirus:** Real-time information on the pandemic Coronavirus.

### PageNotFound

If you encounter a non-existent page or invalid link, you will be redirected to the PageNotFound page.  
From there, you can click on the image of the Moon/Sun to return to the main page.

![This is PageNotFound page image](https://i.ibb.co/71f9V22/162.jpg)

## Technologies Used

The WorldFlags web application is built using the following technologies:
- **React:** A JavaScript library for building user interfaces.
- **HTML:** The standard markup language for creating web pages.
- **CSS:** A stylesheet language used for designing the application's appearance.
- **JavaScript:** The programming language used for adding interactivity and functionality to the application.

## Credits

- All links found on the WorldFlags website are retrieved from the [Worldometers](https://www.worldometers.info/) website.
- The country-specific information obtained by clicking on the country flags on the WorldFlags website is retrieved from the [Worldometers](https://www.worldometers.info/) website.

## License

This project is licensed under the [MIT License](LICENSE.txt).
