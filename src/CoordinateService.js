import Geocode from "react-geocode";

class CoordinateService {
  Geocode.setApiKey("AIzaSyCMEo_N7hfhyTHPF5u6ApkXAIKmYJnzXrQ");
  // Get latitude & longitude from address.
  Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
}

