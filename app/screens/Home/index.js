import React from "react";
import { Link } from "react-router";
import moment from "moment";
import shuffle from "helpers/shuffle";
import About from "components/About";
import Person from "components/Person";
import { useAppContext } from "App";

import UpcomingDate from "./UpcomingDate";
import TicketCard from "./TicketCard";

export default () => {
  const { constants, speakers, tickets: _tickets } = useAppContext();

  const dates = React.useMemo(
    () =>
      [
        {
          date: constants.Dates.CFP_OPEN,
          description: "Call for Proposals opens.",
        },
        {
          date: constants.Dates.CFP_CLOSE,
          description: "Call for Proposals closes.",
        },
        {
          date: constants.Dates.TICKET_RELEASE,
          description: "Early Bird Tickets (round one) go on sale.",
        },
        {
          date: moment.utc(constants.Dates.TICKET_RELEASE).add(7, "days"),
          description: "Early Bird Tickets (round two) go on sale.",
        },
        {
          date: moment.utc(constants.Dates.TICKET_RELEASE).add(14, "days"),
          description: "Standard tickets go on sale.",
        },
      ].sort((a, b) => {
        const isAAfter = moment.utc().isAfter(a.date);
        const isBAfter = moment.utc().isAfter(b.date);

        if (isAAfter && !isBAfter) return 1;
        if (!isAAfter && isBAfter) return -1;

        return 0;
      }),
    [constants],
  );

  const tickets = React.useMemo(
    () =>
      _tickets.sort((a, b) => {
        if (a.soldOut && !b.soldOut) return 1;
        if (!a.soldOut && b.soldOut) return -1;

        return 0;
      }),
    [constants],
  );

  return (
    <div className="Home">
      <section className="Home__About">
        <h2>What is React Rally?</h2>
        <About />
        <Link to="/about" className="Link">
          More about React Rally &raquo;
        </Link>
      </section>

      {Object.keys(speakers).length > 0 && (
        <section>
          <h2>Featured Speakers</h2>
          <div className="align-center">
            {shuffle(Object.keys(speakers))
              .filter((key) => speakers[key].featured)
              .map((key) => {
                return <Person {...speakers[key]} key={key} />;
              })}
          </div>
          <Link to="/speakers" className="Link">
            See All the Speakers &raquo;
          </Link>
        </section>
      )}

      {dates.length > 0 && (
        <section>
          <h2>Upcoming Dates</h2>
          {dates.map(({ date, description }) => (
            <UpcomingDate timestamp={date} description={description} />
          ))}
        </section>
      )}

      {tickets.length > 0 && (
        <section>
          <h2>Tickets</h2>
          {tickets.map((t, i) => (
            <TicketCard key={i} {...t} />
          ))}
        </section>
      )}
    </div>
  );
};
