OKB Affordables
OKB Affordables is a real estate application that provides a list of properties for sale. It consists of a website and a web application that automates the process of buying a property.

Dependencies
The following dependencies are required to run the application:

React: a JavaScript library for building user interfaces
Node: a JavaScript runtime for running server-side applications
NPM: a package manager for Node.js
React Router: a routing library for React
Styled Components: a CSS-in-JS library for React
Website
The website is composed of the following components:

Common
These components are used across the entire website:

Navbar: a navigation component that spans the entire website and allows users to navigate through it
Footer: a footer component that spans the entire website and provides social navigation, copyright information, and policies
Carousel: a landing page carousel component that navigates to the Property and Property/Details pages (for featured property)
LocationCard: a landing page location component that navigates to the Property page formatted based on location
PrinciplesCard: a landing page principles component
PropertyCard: a property card component that spans the Property and Landing pages and navigates to the Property/Details page. The data is fetched from an API.
Testimonials: a landing page testimonials component with animation
Landing
The Landing component is a parent component that contains the overview of the product. It includes the following child components:

PrinciplesCard: a principles card component that displays the principles of OKB Affordables
LocationCard: a location card component that displays the locations where properties are available
PropertyCard: a property card component that displays a list of properties. The data is fetched from the backend API.
Carousel: a carousel component that displays featured properties and navigates to the Property/Details page.
Additionally, the Landing component provides a form to book an inspection and routes to a Google form for that purpose.

Aboutus
The Aboutus component provides more detailed descriptions of OKB Affordables.

Agent
The Agent component displays information about the agent and provides a form for agent applications.

Contact
The Contact component provides social media navigation and a contact form.

PropertyList
The PropertyList component displays a list of properties and allows filtering by location. The data is fetched from the backend API. It navigates to the Property/Details page.

PropertyDetails
The PropertyDetails component shows the details of a property, including a map, number of bedrooms and bathrooms, etc. The data is fetched from the backend API.

Web Application
The web application consists of the following authentication components:

Common
These components are used across all authentication components:

LoginImage: the left side component for all authentication components. It spans all components.
Navbar: a navigation component that spans all authentication components.
ForgotPassword
The ForgotPassword component displays a form for resetting a forgotten password.

Register
The Register component displays a form for user registration.

Login
The Login component displays a form for user login.


