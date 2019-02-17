# Backend Project: Jason, Katie, Chris

# emOceans

* Description
* Technologies
* Challenges and Solutions
* MVP
* Stretch Goals
* Authors

# Description
emOceans is a simple web application that allows you to take note of your mood every day using color and language. Each day (and each mood, each memory) forms a tiny drop in the vast and ever-shifting ocean that is every human. We hope to make the observation and appreciation of those shifts and waves more accessible, helpful, and more beautiful.

[moodboards](_screenshots/moodsmonth.png)

# Technologies
- HTML/CSS/JavaScript
- jQuery
- Node.js/Express
- EJS
- MySQL
- [chroma.js](https://gka.github.io/chroma.js/)
- [datamuse API](https://www.datamuse.com/api/)

# Challenges & Solutions
- Challenge: We're not using any charting or data visualization library to get our
data to render beautifully!
    - Solution: We're still working on solving this; likely the implementation of moment.js will allow us to isolate blocks of time and render them accordingly.

- Challenge: Mobile/Desktop Design Differences. Interaction with the app differs vastly between different screen sizes, presenting challenges especially when working with add-on items, like a word-search API.
    - Solution: We're still working on a solution and may restructure HTML for easier programming, and in order to accommodate extras (like a word search), while not necessary, are helpful to many users. Currently, the API interactivity is only accesible on desktop-sized screens.

- Challenge: Scripting with data from the DB in the DOM with JSON.stringify.
    - Solution: The scripting itself was not an issue, but syntactical confusion between the interfaces was; we're working this out at present for more specific CSS targeting with classes for better data visualization.  

# MVP
A front-and-backend web application, with responsive design, that allows a user to track mood using color and language. It also allows the user to easily view their moods overtime by taking note of shifts in color, and through clicking, scrolling or hovering, allows them to see mood/note for each day.

# Stretch Goals
- Complete integration of datamuse API (at present it is in use for large screens only), as well as making the API results clickable to send to form.
- Rendering data in concentric circles to represent chunks of time (still a WIP) or altering size/behavior of the circles according to view (month vs. day, for example).
- Use of datamuse API on mobile/tablet (WIP)
- Seamless movement through data visualization even on small screens (likely use of a modal) (WIP)


# Authors
- Jason Benson
  - Contributions: Wireframes, UX concept, final design and logo, fonts, colors & images,CSS for main pages on mobile, tablet, and desktop, JavaScript for 'About' page, router set-up, log-in connection, database schema, database connection, frontend debugging, data visualization.
  - [GitHub Profile](https://github.com/jasonpbenson)

- Katie Duane
  - Contributions: Concept, project management, wireframes, chroma.js implementation, datamuse API implementation, frontend JavaScript functionality, CSS for desktop/XL screens, router set-up, registration connection, database schema, database connection, router debugging, backend and frontend debugging, data visualization.
  - [GitHub Profile](https://github.com/katiejduane)
  
- Christopher Soltis
  - Contributions: Wireframes, HTML and CSS for splash/login/registration, CSS for mobile (hamburger) menu, database schema stage 1, router debugging.
  - [GitHub Profile](https://github.com/cdsalty)

  