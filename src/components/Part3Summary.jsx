import React from 'react'

const Part3Summary = ({ state }) => {
  // Important Notes data
  const importantNotes = [
    {
      id: 1,
      point: 'Airline Standard Policy',
      details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      id: 2,
      point: 'Flight/Hotel Cancellation',
      details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      id: 3,
      point: 'Trip Insurance',
      details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      id: 4,
      point: 'Hotel Check-In & Check Out',
      details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      id: 5,
      point: 'Visa Rejection',
      details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
  ]

  // Scope of Services data
  const scopeOfServices = [
    {
      id: 1,
      service: 'Flight Tickets And Hotel Vouchers',
      details: 'Delivered 3 Days Post Full Payment',
    },
    {
      id: 2,
      service: 'Web Check-In',
      details: 'Boarding Pass Delivery Via Email/WhatsApp',
    },
    {
      id: 3,
      service: 'Support',
      details: 'Chat Support - Response Time 4 Hours',
    },
    {
      id: 4,
      service: 'Cancellation Support',
      details: 'Provided',
    },
    {
      id: 5,
      service: 'Trip Support',
      details: 'Response Time: 5 Minutes',
    },
  ]

    // Combine Inclusions and Exclusions
  const inclusionSummary = [
    ...(state.inclusions || []),
    ...(state.exclusions || []),
  ]
  const inclusionNote = 'Transfer Policy/Refundable Upon Claim: If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.'

  return (
    <div className="part3-container">
      {/* ========== IMPORTANT NOTES SECTION ========== */}
      <div className="part3-card important-notes-card">
        <h2 className="part3-card-title">
          <span className="title-black">Important</span>
          <span className="title-purple">Notes</span>
        </h2>

        <table className="important-notes-table">
          <thead className="important-notes-header">
            <tr>
              <th>Point</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="important-notes-body">
            {importantNotes.map((note) => (
              <tr key={note.id}>
                <td>{note.point}</td>
                <td>{note.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== SCOPE OF SERVICES SECTION ========== */}
      <div className="part3-card scope-services-card">
        <h2 className="part3-card-title">
          <span className="title-black">Scope Of</span>
          <span className="title-purple">Service</span>
        </h2>

        <table className="scope-services-table">
          <thead className="scope-services-header">
            <tr>
              <th>Service</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="scope-services-body">
            {scopeOfServices.map((service) => (
              <tr key={service.id}>
                <td>{service.service}</td>
                <td>{service.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== INCLUSION SUMMARY SECTION ========== */}
      <div className="part3-card inclusion-summary-card">
        <h2 className="part3-card-title">
          <span className="title-black">Inclusion</span>
          <span className="title-purple">Summary</span>
        </h2>

        <table className="inclusion-summary-table">
          <thead className="inclusion-summary-header">
            <tr>
              <th>Category</th>
              <th>Count</th>
              <th>Details</th>
              <th>Status / Comments</th>
            </tr>
          </thead>
                    <tbody className="inclusion-summary-body">
            {inclusionSummary.length > 0 ? (
              inclusionSummary.map((item) => (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.count}</td>
                  <td>{item.details}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', color: '#999', fontStyle: 'italic' }}>
                  No inclusions or exclusions added by user
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="inclusion-note">{inclusionNote}</div>
      </div>
    </div>
  )
}

export default Part3Summary
