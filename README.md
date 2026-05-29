Learn 4.0 Technologies
A responsive React application that displays a collection of modern technology career paths using an interactive grid layout. Built using components, passing dynamic data through props, and utilizing CSS Flexbox with Media Queries to ensure a smooth layout transition across different screen resolutions.

🚀 Features
Reusable Architecture: Implements a modular CardItem component that dynamically renders text, imagery, and style themes.

Dynamic Styling via Props: Applies color-coded top borders to individual cards dynamically based on dataset configuration classes (card-1, card-2, etc.).

Perfect Layout Centering: Grid elements are symmetrically centered horizontally and vertically on the viewport canvas.

Fully Responsive Grid: Automatically adapts from a dual-column layout on desktop viewports to a stacked single-column layout on mobile devices.

🛠️ Tech Stack
React.js – UI Component architecture

JavaScript (ES6+) – Component mapping, destructuring, and props management

CSS3 – Layout design using Flexbox alignment patterns

Responsive Web Design – Media Queries targeting adaptive viewport breakpoints

📂 Project Structure
Plaintext
├── public/                  # Core static assets and global index.html
├── src/
│   ├── components/
│   │   └── CardItem/
│   │       ├── index.js     # Card functional component structure
│   │       └── index.css    # Card-specific layout & unique color variations
│   ├── App.js               # Application container holding the technology datasets
│   ├── App.css              # Typography, page layouts, and centering rules
│   └── index.js             # React application DOM entry point
├── package.json             # Build configurations and dependency tracking
└── README.md                # Project documentation
