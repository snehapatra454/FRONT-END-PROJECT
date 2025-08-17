# B.planet - Plant E-commerce Platform

A React-based plant e-commerce platform with admin and customer interfaces.

## Features

### Customer Features
- Browse plant products with pagination
- View detailed product descriptions
- Contact form with social media integration
- User profile management
- Responsive design

### Admin Features
- Product management dashboard
- Plant guide creation and editing
- Contact page management
- Profile management
- Role-based authentication

## Tech Stack
- React 18
- React Router DOM
- Context API for state management
- CSS3 for styling

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd FRONT-END-PROJECT
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Usage

### Login Credentials
- **Admin**: Use any email ending with `@admin.com`
- **Customer**: Use any other email format

### Navigation
- **Customer**: Home → Products → Profile → Contact
- **Admin**: Featured Products → Guide → Profile → Contact

## Project Structure
```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── context/            # React Context providers
├── data/               # Static data
├── assets/             # Images and static files
└── App.js              # Main app component
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## License

This project is licensed under the MIT License.