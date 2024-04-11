import React from "react";
import cx from "classnames";
import moment from "moment";

import Button from "components/Button";
import { useAppContext } from "App";

export default ({ name, description, price, soldOut }) => {
  const { constants } = useAppContext();
  const isTicketSaleOpen = moment.utc().isAfter(constants.Dates.TICKET_RELEASE);
  const isDisabled = soldOut || !isTicketSaleOpen;
  const ticketLabel = soldOut
    ? "Sold Out"
    : !isTicketSaleOpen
      ? "On Sale Soon"
      : "Buy Now";

  return (
    <div
      className={cx("Home__TicketCard", {
        "Home__TicketCard--disabled": soldOut,
      })}
    >
      <div className="Home__TicketCard__Details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="Home__TicketCard__Order">
        {!isNaN(price) && <h2>{`$${price}`}</h2>}
        <Button
          className="primary"
          href={constants.Links.TICKET_SALES}
          disabled={isDisabled}
        >
          {ticketLabel}
        </Button>
      </div>
    </div>
  );
};
