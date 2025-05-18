import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for styling
import './App.css'; // Importing custom CSS for additional styling of the app
import Routings from './Components/Routings'; // Importing the Routings component for managing routes in the app
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for React Toastify for displaying notifications

function App() {
  return (
    <>
      <main className='w-full'> {/* main Container  that takes up the full width of the page */}
        <Routings /> {/* The Routings component handles the routing logic for the app */}
      </main>
    </>
  );
}

export default App; // Exports the App component for rendering in index.js or root file
