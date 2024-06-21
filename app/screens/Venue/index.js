import React from "react";
import moment from "moment";
import Button from "components/Button";
import { useAppContext } from "App";

// TODO new map images
export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Venue">
      <section>
        <h2>{constants.Venue.Conference.NAME}</h2>
        <div className="Venue__Details">
          <div className="Venue__Details__Mapbox">
            <a
              href={constants.Links.CONFERENCE_DIRECTIONS}
              aria-label="Map directions to venue."
              target="_blank"
            >
              <img src="assets/dist/img/EcclesCenter.png" alt="" width="400" />
            </a>
            <div className="Venue__Details__Mapbox__Address">
              <strong>{constants.Venue.Conference.NAME}</strong>
              <small>{constants.Venue.Conference.ADDRESS}</small>
            </div>
            <div className="Venue__Details__Mapbox__Actions">
              <Button href={constants.Links.CONFERENCE_DIRECTIONS}>
                Get Directions
              </Button>
            </div>
          </div>
          <div className="Venue__Details__Description">
            <p>{constants.Venue.Conference.DESCRIPTION}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{constants.Venue.Hotel.NAME}</h2>
        <div className="Venue__Details">
          <div className="Venue__Details__Mapbox">
            <a
              href={constants.Links.HOTEL_DIRECTIONS}
              aria-label="Map directions to hotel."
              target="_blank"
            >
              <img src="assets/dist/img/DoubleTree.png" alt="" width="400" />
            </a>
            <div className="Venue__Details__Mapbox__Address">
              <strong>{constants.Venue.Hotel.NAME}</strong>
              <small>{constants.Venue.Hotel.ADDRESS}</small>
            </div>
            <div className="Venue__Details__Mapbox__Actions">
              <Button
                href={constants.Links.HOTEL_RESERVATION}
                className="primary"
              >
                Book a Room
              </Button>
              <Button href={constants.Links.HOTEL_DIRECTIONS}>
                Get Directions
              </Button>
            </div>
          </div>
          <div className="Venue__Details__Description">
            <p>{constants.Venue.Hotel.DESCRIPTION}</p>
            <p>
              Need a place to stay while you're at {constants.Meta.EVENT_NAME}?
              We have arranged a group discount with{" "}
              {constants.Venue.Hotel.NAME} our attendees. Rooms are available
              for <b>${constants.Prices.HOTEL_RATE}</b> per night. This
              discounted rate is only available until{" "}
              <b>
                {moment.utc(constants.Dates.HOTEL_DISCOUNT).format("MMMM Do")}
              </b>{" "}
              and there are a limited number of rooms available, so book your
              room early.
            </p>
          </div>
        </div>
      </section>

      {/*
      <section>
        <h2>The Afterparty</h2>
        <div className="Venue__Details">
          <div className="Venue__Details__Mapbox">
            <a href={constants.Links.PARTY_DIRECTIONS} aria-label="Map directions to after party." target="_blank">
              <img src="assets/dist/img/Gateway_Map.png" alt="" width="400" />
            </a>
            <div className="Venue__Details__Mapbox__Address">
              <strong>{constants.Venue.Party.NAME}</strong>
              <small>
                {constants.Venue.Party.ADDRESS}
              </small>
            </div>
            <div className="Venue__Details__Mapbox__Actions">
             <Button href={constants.Links.PARTY_DIRECTIONS}>
                Get Directions
              </Button>
            </div>
          </div>
          <div className="Venue__Details__Description">
            <p>
              {constants.Venue.Party.DESCRIPTION}
            </p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};
