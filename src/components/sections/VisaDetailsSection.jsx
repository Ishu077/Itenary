import React from 'react'

function VisaDetailsSection({ state, dispatch }) {
  const handleAddVisaDetail = () => {
    dispatch({
      type: 'ADD_VISA_DETAIL',
      payload: {
        id: Date.now(),
        visaType: '',
        validity: '',
        processingDate: '',
      },
    })
  }

  const handleRemoveVisaDetail = (id) => {
    dispatch({ type: 'REMOVE_VISA_DETAIL', payload: id })
  }

  const handleUpdateVisaDetail = (id, field, value) => {
    dispatch({
      type: 'UPDATE_VISA_DETAIL',
      payload: { id, updates: { [field]: value } },
    })
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>🛂 Visa Details</h2>
        <button className="btn-add" onClick={handleAddVisaDetail}>
          + Add Visa
        </button>
      </div>
      <div className="visa-list">
        {state.visaDetails.length === 0 ? (
          <p className="empty-state">No visa details added yet.</p>
        ) : (
          state.visaDetails.map((visa, index) => (
            <div key={visa.id} className="visa-card">
              <div className="card-header">
                <h3>Visa {index + 1}</h3>
                <button
                  className="btn-remove"
                  onClick={() => handleRemoveVisaDetail(visa.id)}
                  title="Remove visa"
                >
                  ✕
                </button>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Visa Type *</label>
                  <input
                    type="text"
                    placeholder="e.g., Schengen, Tourist, Business"
                    value={visa.visaType}
                    onChange={(e) => handleUpdateVisaDetail(visa.id, 'visaType', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Validity *</label>
                  <input
                    type="text"
                    placeholder="e.g., 90 days"
                    value={visa.validity}
                    onChange={(e) => handleUpdateVisaDetail(visa.id, 'validity', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Processing Date *</label>
                  <input
                    type="date"
                    value={visa.processingDate}
                    onChange={(e) => handleUpdateVisaDetail(visa.id, 'processingDate', e.target.value)}
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

export default VisaDetailsSection
