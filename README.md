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

## Installation

To run the WorldFlags application locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) installed on your system.
2. Clone this repository to your local machine or download the source code as a ZIP file.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to install the necessary dependencies:

   ```bash
   npm install

5. Once the dependencies are installed, start the application by running:
   ```bash
   npm start
6. Open your web browser and visit http://localhost:3000 to access the WorldFlags application.

## Usage

Upon launching the application, you will be greeted with a main page featuring an animated rotating Earth.  
Hovering over the Earth reveals a night-view representation.  
The main page also includes a title and a subtitle indicating the purpose of the website.

### Explore Country-Specific Information

To explore country-specific information:
1. Click on any flag displayed on the "worldflags" page.  
This will open a new tab in your browser with detailed information about the corresponding country on the "Worldometer" website.

### Sort Flags

To sort flags:
1. Use the SideNav on the left side of the site.
2. Click on the "Population" or "Land Area" icons to sort flags based on the corresponding categories.
3. Click on the default sort icon to revert to the default sorting order (alphabetical).

### Additional Links

The application provides additional links for easy access to specific information:
- **World information:** Real-time global information about all countries.
- **World Population:** Real-time information on the world population.
- **All People In 1 Page:** Displaying real-time all people on one page.
- **Coronavirus:** Real-time informaion of the pandemic Coronavirus.

### PageNotFound

If you encounter a non-existent page or invalid link, you will be redirected to the PageNotFound page.  
From there, you can click on the image of the Moon/Sun to return to the main page (App).

## Technologies Used

The WorldFlags web application is built using the following technologies:
- **React:** A JavaScript library for building user interfaces.
- **HTML:** The standard markup language for creating web pages.
- **CSS:** A stylesheet language used for designing the application's appearance.
- **JavaScript:** The programming language used for adding interactivity and functionality to the application.

## Credits

- The flag images used in the application are sourced from the [WorldFlags](https://www.worldometers.info/geography/flags-of-the-world/) collection on Worldometers.
- The country-specific information is retrieved from the [Worldometer](https://www.worldometers.info/) website.

## License

This project is licensed under the [MIT License](LICENSE).
