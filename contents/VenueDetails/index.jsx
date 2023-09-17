import React,{useState,useEffect} from "react";
import classNames from "classnames/bind";
import axios from "axios";
import { BASE_URL } from "utils/constants";
import { getCurrentDate } from "utils/dateHelper";
// components
import { Navbar, Section } from "components";
import { Details, VenueSlider, Reviews } from "./components";
import VenueImages from "./components/VenueImages/VenueImages";
import SuggestionSlider from "./components/VenueSuggestion/SuggestionSlider";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const VenueDetails = () => {
    const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let now = getCurrentDate();
        const  data  = await axios.get(
          `${BASE_URL}/EventDetailsByVenue`,
          {
            data: {
              userID: 0,
              VenueName: "Bally's Las Vegas",
              AccessToken: "",
              Latitude: "36.114647",
              Longitude: "-115.172813",
              UserDate: now.prettier.dateTimeNow,
            },
          }
        );
        setVenues(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <Section>
        <Details />
        <VenueImages/>
        <VenueSlider
          className={cx("venue-slider-root")}
          heading="Tomorrow"
          count={6}
        />
        <VenueSlider
          className={cx("venue-slider-root")}
          heading="This Weekend"
          count={6}
        />
        <Reviews />
        <SuggestionSlider  className={cx("venue-slider-root")}
          heading="Suggested Follows"
          count={6}/>
      </Section>
    </>
  );
};

export default VenueDetails;
