import React from 'react'

function DailyPlanSection({ state, dispatch }) {
  const handleAddDay = () => {
    dispatch({ type: 'ADD_DAY' })
  }

  const handleRemoveDay = (id) => {
    dispatch({ type: 'REMOVE_DAY', payload: id })
  }

  const handleUpdateDay = (id, field, value) => {
    dispatch({
      type: 'UPDATE_DAY',
      payload: { id, updates: { [field]: value } },
    })
  }

  const handleUpdateActivity = (id, timeOfDay, value) => {
    const currentDay = state.days.find((d) => d.id === id)
    dispatch({
      type: 'UPDATE_DAY',
      payload: {
        id,
        updates: {
          activities: { ...currentDay.activities, [timeOfDay]: value },
        },
      },
    })
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>📅 Daily Plans</h2>
        <button className="btn-add" onClick={handleAddDay}>
          + Add Day
        </button>
      </div>
      <div className="days-list">
        {state.days.length === 0 ? (
          <p className="empty-state">No days added yet. Click "Add Day" to create your itinerary.</p>
        ) : (
          state.days.map((day, index) => (
            <div key={day.id} className="day-card">
              <div className="card-header">
                <h3>Day {day.dayNumber}</h3>
                <button
                  className="btn-remove"
                  onClick={() => handleRemoveDay(day.id)}
                  title="Remove day"
                >
                  ✕
                </button>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={day.date}
                    onChange={(e) => handleUpdateDay(day.id, 'date', e.target.value)}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Day Summary</label>
                  <textarea
                    placeholder="Brief overview of the day"
                    value={day.summary}
                    onChange={(e) => handleUpdateDay(day.id, 'summary', e.target.value)}
                    rows="2"
                  />
                </div>
              </div>
              <div className="activities-section">
                <h4>Activities</h4>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>🌅 Morning</label>
                    <textarea
                      placeholder="Morning activities and sightseeing"
                      value={day.activities.morning}
                      onChange={(e) => handleUpdateActivity(day.id, 'morning', e.target.value)}
                      rows="3"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>☀️ Afternoon</label>
                    <textarea
                      placeholder="Afternoon activities and sightseeing"
                      value={day.activities.afternoon}
                      onChange={(e) => handleUpdateActivity(day.id, 'afternoon', e.target.value)}
                      rows="3"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>🌙 Evening</label>
                    <textarea
                      placeholder="Evening activities and dining"
                      value={day.activities.evening}
                      onChange={(e) => handleUpdateActivity(day.id, 'evening', e.target.value)}
                      rows="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default DailyPlanSection
