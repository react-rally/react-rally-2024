const constants = {};
export default constants;

constants.Meta = {
  EVENT_NAME: "React Rally",
  CONFERENCE_NAME: "React Rally",
  COMPANY_NAME: "React Utah, LLC",
};

constants.Links = {
  CODE_OF_CONDUCT: "http://confcodeofconduct.com/",
  CODE_OF_CONDUCT_FORM:
    "https://docs.google.com/forms/d/e/1FAIpQLScghazbFL90gtVbWjlE2BxwXGuV-S1IIXGyXqeU9lyLAA7NmQ/viewform",
  EMAIL_ORGANIZERS: "info@reactrally.com",
  TICKET_SALES: "https://ti.to/react-rally/react-rally-2024",
  PROPOSAL_FORM: "https://sessionize.com/react-rally-2024",
  // HOTEL_RESERVATION:
  //   'https://www.marriott.com/event-reservations/reservation-link.mi?id=1675272098037&key=GRP&app=resvlink',
  // VENUE_DIRECTIONS: 'https://goo.gl/maps/26iT97pXY2pZztis9',
  // PARTY_DIRECTIONS: 'https://goo.gl/maps/AeYKJrkAFZG2',
  LIVE_STREAM_PLACEHOLDER: "https://www.youtube.com/embed/5NNOrp_83RU",
  LIVE_STREAM_DAY_ONE: "https://www.youtube.com/embed/ispz-5cwNW0",
  LIVE_STREAM_DAY_TWO: "https://www.youtube.com/embed/pxCs9IAhciE",
  LIVE_STREAM_OVER: "https://www.youtube.com/embed/T1XgFsitnQw",
  YOUTUBE_CHANNEL:
    "https://www.youtube.com/playlist?list=PLUD4kD-wL_zYSfU3tIYsb4WqfFQzO_EjQ",
  SPONSOR_PROSPECTUS: "docs/sponsor.pdf",
  // OPPORTUNITY_SCHOLARSHIP_FORM:
  // 'https://docs.google.com/forms/d/e/1FAIpQLSevXCteBpBysq8afjuHQuFL4sx3OUv3o2iIciQ6sMCfCk12uw/viewform',
};

constants.Venue = {};
// constants.Venue.Hotel = {
//   NAME: "Salt Lake Marriott Downtown at City Creek",
//   ADDRESS: "75 S W Temple St, Salt Lake City, UT 84101",
//   DESCRIPTION: "Salt Lake Marriot is a world class hotel located in the heart of the downtown business and entertainment district."
// };
// constants.Venue.Party = {
//   NAME: "The Gateway",
//   ADDRESS: "10 North Rio Grande Street, Salt Lake City, UT, 84101",
//   DESCRIPTION: "Join us after the conference on Friday for dinner, dessert, lawn games, and live music. Be there!"
// };

constants.Prices = {
  // HOTEL_RATE: 189,
};

constants.Dates = {
  CFP_OPEN: "2024-03-01T06:00:00-00:00",
  CFP_CLOSE: "2024-03-31T06:00:00-00:00",
  TICKET_RELEASE: "2024-04-17T18:00:00-00:00",
  CONF_DAY_ONE: "2024-08-12T06:00:00-00:00",
  CONF_DAY_TWO: "2024-08-13T06:00:00-00:00",
  CONF_DAY_THREE: "2024-08-14T06:00:00-00:00",
  HOTEL_DISCOUNT: "2024-07-25T06:00:00-00:00",
  // OPPORTUNITY_SCHOLARSHIP_OPEN: '2024-01-01T06:00:00-00:00',
  // OPPORTUNITY_SCHOLARSHIP_CLOSE: '2024-01-01T06:00:00-00:00',
};

constants.FeatureSets = {};
constants.FeatureSets.Sponsors = {
  features: [
    { id: 0, name: "Linked logo on conference website" },
    { id: 1, name: "Logo on sponsor slide between presentations" },
    { id: 2, name: "Table in Exhibit Area" },
    { id: 3, name: "Break Sponsor" },
    { id: 4, name: "Preferential booth placement" },
    { id: 5, name: "Breakfast Sponsor" },
    { id: 6, name: "30 Minute Planning Call with Planning Staff" },
    { id: 7, name: "Exclusive Lunch Sponsor" },
    { id: 8, name: "Logo Displayed Onstage" },
    { id: 9, name: "Official Party Sponsor" },
    { id: 10, name: "Option to provide lanyard with your company logo" },
  ],
  levels: [
    { name: "Silver", price: 5000, quantity: 10, tickets: 1, features: [0, 1] },
    {
      name: "Gold",
      price: 12500,
      quantity: 6,
      tickets: 2,
      features: [0, 1, 2],
    },
    {
      name: "Platinum",
      price: 15000,
      quantity: 5,
      tickets: 4,
      features: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      name: "Premier",
      price: 25000,
      quantity: 1,
      tickets: 6,
      features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ],
};
