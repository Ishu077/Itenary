# Vigovia Itinerary Builder

[![Live Demo](https://img.shields.io/badge/View-Demo-brightgreen?style=for-the-badge)](https://itenary-dusky.vercel.app/)

A modern, responsive web application built with React that allows users to create, customize, and generate beautiful PDF travel itineraries.

🔗 **Live Demo:** [https://itenary-dusky.vercel.app/](https://itenary-dusky.vercel.app/)

## Features

- Create detailed travel itineraries with multiple days
- Add hotel information and accommodation details
- Include payment schedules and pricing information
- Customize inclusions and exclusions
- Add visa and travel requirement details
- Generate professional PDF documents
- Responsive design that works on all devices

## Tech Stack

- **Frontend**: React 19
- **Styling**: CSS Modules
- **PDF Generation**: jsPDF and html2canvas
- **Icons**: Font Awesome
- **Build Tool**: Vite

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vigovia-itinerary-builder.git
   cd vigovia-itinerary-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`


## Project Structure

```
src/
├── assets/           # Static assets like images
├── components/       # Reusable React components
├── styles/           # CSS modules and global styles
├── utils/            # Utility functions
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Usage

1. **Create a New Itinerary**
   - Fill in the trip overview including title, dates, and traveler information
   - Add days to your itinerary with detailed activities
   - Include hotel information and accommodation details
   - Set up payment schedules and pricing
   - Add any additional information like visa requirements

2. **Preview and Generate PDF**
   - Use the preview feature to see how your itinerary will look
   - Click "Generate PDF" to create a downloadable PDF document

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- PDF generation powered by [jsPDF](https://parall.ax/products/jspdf) and [html2canvas](https://html2canvas.hertzen.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
