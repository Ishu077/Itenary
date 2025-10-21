import React from 'react'

const Part4ActivityTable = ({ state }) => {
  // Build activity table from daily plans
  const buildActivityTable = () => {
    const activities = []
    
    if (state.days && state.days.length > 0) {
      state.days.forEach((day) => {
        // Get city from day data (if available) or use a default
        const city = day.city || `Day ${day.dayNumber}`
        
        // Add morning activity
        if (day.activities.morning) {
          activities.push({
            id: `${day.id}-morning`,
            city: city,
            activity: day.activities.morning,
            type: 'Morning Activity',
            timeRequired: '2-3 Hours',
          })
        }
        
        // Add afternoon activity
        if (day.activities.afternoon) {
          activities.push({
            id: `${day.id}-afternoon`,
            city: city,
            activity: day.activities.afternoon,
            type: 'Afternoon Activity',
            timeRequired: '2-3 Hours',
          })
        }
        
        // Add evening activity
        if (day.activities.evening) {
          activities.push({
            id: `${day.id}-evening`,
            city: city,
            activity: day.activities.evening,
            type: 'Evening Activity',
            timeRequired: '2-3 Hours',
          })
        }
      })
    }
    
    return activities
  }

  const activityTable = buildActivityTable()

  // Demo data if no activities
  const demoActivities = [
    {
      id: 1,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Nature/Sightseeing',
      timeRequired: '2-3 Hours',
    },
    {
      id: 2,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 3,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 4,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 5,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 6,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 7,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 8,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 9,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
    {
      id: 10,
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airlines Standard',
      timeRequired: '2-3 Hours',
    },
  ]

  const displayActivities = activityTable.length > 0 ? activityTable : demoActivities

  return (
    <div className="part4-container">
      {/* ========== ACTIVITY TABLE SECTION ========== */}
      <div className="activity-table-card">
        <h2 className="activity-table-title">
          <span className="title-black">Activity</span>
          <span className="title-purple">Table</span>
        </h2>

        <table className="activity-table">
          <thead className="activity-table-header">
            <tr>
              <th>City</th>
              <th>Activity</th>
              <th>Type</th>
              <th>Time Required</th>
            </tr>
          </thead>
          <tbody className="activity-table-body">
            {displayActivities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.city}</td>
                <td>{activity.activity}</td>
                <td>{activity.type}</td>
                <td>{activity.timeRequired}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== TERMS AND CONDITIONS SECTION ========== */}
      <div className="terms-conditions-section">
        <h3 className="terms-conditions-title">
          <span className="title-black">Terms and</span>
          <span className="title-purple">Conditions</span>
        </h3>
        <a href="#" className="terms-conditions-link" onClick={(e) => e.preventDefault()}>
          View all terms and conditions
        </a>
      </div>
    </div>
  )
}

export default Part4ActivityTable
