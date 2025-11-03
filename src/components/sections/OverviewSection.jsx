import React from 'react'

function OverviewSection({ state, dispatch }) {
  const handleChange = (field, value) => {
    dispatch({
      type: 'UPDATE_OVERVIEW',
      payload: { [field]: value },
    })
  }

  return (
    <section className="form-section">
     
      <h2>📋 Tour Overview</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Trip Title *</label>
          <input
            type="text"
            placeholder="e.g., Paris & Rome Adventure"
            value={state.overview.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g., 10 Days of European Wonders"
            value={state.overview.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of Travelers *</label>
          <input
            type="number"
            min="1"
            value={state.overview.travelers}
            onChange={(e) => handleChange('travelers', parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Total Duration (Days) *</label>
          <input
            type="number"
            min="1"
            value={state.overview.duration}
            onChange={(e) => handleChange('duration', parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Departure City *</label>
          <input
            type="text"
            placeholder="e.g., New York"
            value={state.overview.departureCity}
            onChange={(e) => handleChange('departureCity', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Departure Date *</label>
          <input
            type="date"
            value={state.overview.departureDate}
            onChange={(e) => handleChange('departureDate', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Arrival City *</label>
          <input
            type="text"
            placeholder="e.g., Rome"
            value={state.overview.arrivalCity}
            onChange={(e) => handleChange('arrivalCity', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Arrival Date *</label>
          <input
            type="date"
            value={state.overview.arrivalDate}
            onChange={(e) => handleChange('arrivalDate', e.target.value)}
          />
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
