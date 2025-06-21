# AI Image Enhancer

A modern web application that allows users to upload images and enhance them using AI, built with React and Vite.

## Features
- Upload an image and enhance it with AI in seconds
- Side-by-side preview of original and enhanced images
- Responsive, modern UI with gradient backgrounds and card layouts
- Loading indicator during processing
- Built with React, Vite, and Tailwind CSS

## Demo
![App Screenshot](/src/Asests/image.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd react-ai-image-enhancer
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```env
     VITE_API_KEY=your_api_key_here
     ```
   - Replace `your_api_key_here` with your actual API key.

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` by default.

## Usage
1. Click the upload area to select an image from your device.
2. Wait for the AI to process and enhance your image.
3. View the original and enhanced images side by side.

## Project Structure
```
react-ai-image-enhancer/
├── src/
│   ├── App.jsx                # Main app layout and UI
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles (Tailwind)
│   ├── components/
│   │   ├── Home.jsx           # Main logic: handles upload, enhancement, and state
│   │   ├── ImageUpload.jsx    # Upload UI component
│   │   ├── ImagePreview.jsx   # Displays original/enhanced images
│   │   └── Loading.jsx        # Loading spinner
│   └── utils/
│       └── enhanceImageApi.js # Handles API calls for image enhancement
├── .env                       # API key (not committed)
├── package.json
├── vite.config.js
└── README.md
```

## Environment Variables
- `VITE_API_KEY`: Your API key for the image enhancement service. **Required.**

## Credits
- Powered by [Nitish](https://github.com/Nitish0943)
- Built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)

## License
This project is licensed under the MIT License.
