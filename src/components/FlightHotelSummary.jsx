import React from 'react'

const FlightHotelSummary = ({ state }) => {
  // Sample flight data - in real app, this would come from state
  const flights = [
    {
      id: 1,
      date: 'Thu 10 Jan\'24',
      airline: 'Air India',
      flightNumber: 'AX-123',
      from: 'Delhi (DEL)',
      to: 'Singapore (SIN)',
    },
    {
      id: 2,
      date: 'Thu 10 Jan\'24',
      airline: 'Air India',
      flightNumber: 'AX-123',
      from: 'Delhi (DEL)',
      to: 'Singapore (SIN)',
    },
    {
      id: 3,
      date: 'Thu 10 Jan\'24',
      airline: 'Air India',
      flightNumber: 'AX-123',
      from: 'Delhi (DEL)',
      to: 'Singapore (SIN)',
    },
    {
      id: 4,
      date: 'Thu 10 Jan\'24',
      airline: 'Air India',
      flightNumber: 'AX-123',
      from: 'Delhi (DEL)',
      to: 'Singapore (SIN)',
    },
  ]

  const hotelNotes = [
    'All Hotels Are Tentative And Can Be Replaced With Similar.',
    'Breakfast Included For All Hotel Stays.',
    'All Hotels Will Be 4* And Above Category.',
    'A maximum occupancy of 2 people/room is allowed in most hotels.',
  ]

  return (
    <div className="part2-container">
      {/* ========== FLIGHT SUMMARY SECTION ========== */}
      <div className="flight-summary-section">
        <h2 className="flight-summary-title">
          <span className="title-black">Flight</span>
          <span className="title-purple">Summary</span>
        </h2>

        <div className="flight-box">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-row">
              <div className="flight-date-pill">{flight.date}</div>
              <div className="flight-details">
                <span className="flight-details-airline">
                  Fly {flight.airline} ({flight.flightNumber})
                </span>
                <span className="flight-details-route">
                  {' '}
                  From {flight.from} To {flight.to}.
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flight-note">
          Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg Checked Baggage.
        </div>
      </div>

      {/* ========== HOTEL BOOKINGS SECTION ========== */}
      <div className="hotel-bookings-section">
        <h2 className="hotel-bookings-title">
          <span className="title-black">Hotel</span>
          <span className="title-purple">Bookings</span>
        </h2>

        <table className="hotel-table">
          <thead className="hotel-table-header">
            <tr>
              <th>City</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Nights</th>
              <th>Hotel Name</th>
            </tr>
          </thead>
          <tbody className="hotel-table-body">
            {state.hotels && state.hotels.length > 0 ? (
              state.hotels.map((hotel, index) => (
                <tr key={hotel.id || index}>
                  <td>{hotel.city || 'Singapore'}</td>
                  <td>{hotel.checkIn || '24/02/2024'}</td>
                  <td>{hotel.checkOut || '24/02/2024'}</td>
                  <td>{hotel.nights || 2}</td>
                  <td className="hotel-name-column">
                    {hotel.name || 'Super Townhouse Oak Vashi Formerly Blue Diamond'}
                  </td>
                </tr>
              ))
            ) : (
              <>
                {[1, 2, 3, 4, 5].map((index) => (
                  <tr key={index}>
                    <td>Singapore</td>
                    <td>24/02/2024</td>
                    <td>24/02/2024</td>
                    <td>2</td>
                    <td className="hotel-name-column">
                      Super Townhouse Oak
                      <br />
                      Vashi Formerly Blue Diamond
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <div className="hotel-notes">
          {hotelNotes.map((note, index) => (
            <div key={index} className="hotel-notes-item" data-number={`${index + 1}.`}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FlightHotelSummary
