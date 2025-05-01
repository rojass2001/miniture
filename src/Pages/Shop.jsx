import Box from '../Components/Box'; // Box component for layout and styling
import Products from '../Components/shop/Products'; // Products component to display product items

function Shop() {
  return (
    <Box> {/* The Box component is being used as the container for the Shop page */}
      <Products /> {/* This component will display the products in the shop */}
    </Box>
  );
}

export default Shop; // Exports the Shop component for use in other parts of the application
