import React from 'react'

function HotelSection({ state, dispatch }) {
  const handleAddHotel = () => {
    dispatch({ type: 'ADD_HOTEL' })
  }

  const handleRemoveHotel = (id) => {
    dispatch({ type: 'REMOVE_HOTEL', payload: id })
  }

  const handleUpdateHotel = (id, field, value) => {
    dispatch({
      type: 'UPDATE_HOTEL',
      payload: { id, updates: { [field]: value } },
    })
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>🏨 Hotel Details</h2>
        <button className="btn-add" onClick={handleAddHotel}>
          + Add Hotel
        </button>
      </div>
      <div className="hotels-list">
        {state.hotels.length === 0 ? (
          <p className="empty-state">No hotels added yet. Click "Add Hotel" to get started.</p>
        ) : (
          state.hotels.map((hotel, index) => (
            <div key={hotel.id} className="hotel-card">
              <div className="card-header">
                <h3>Hotel {index + 1}</h3>
                <button
                  className="btn-remove"
                  onClick={() => handleRemoveHotel(hotel.id)}
                  title="Remove hotel"
                >
                  ✕
                </button>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Hotel Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Grand Hotel Paris"
                    value={hotel.name}
                    onChange={(e) => handleUpdateHotel(hotel.id, 'name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder="e.g., Paris"
                    value={hotel.city}
                    onChange={(e) => handleUpdateHotel(hotel.id, 'city', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Check-In Date *</label>
                  <input
                    type="date"
                    value={hotel.checkIn}
                    onChange={(e) => handleUpdateHotel(hotel.id, 'checkIn', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Check-Out Date *</label>
                  <input
                    type="date"
                    value={hotel.checkOut}
                    onChange={(e) => handleUpdateHotel(hotel.id, 'checkOut', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Number of Nights *</label>
                  <input
                    type="number"
                    min="1"
                    value={hotel.nights}
                    onChange={(e) => handleUpdateHotel(hotel.id, 'nights', parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default HotelSection
