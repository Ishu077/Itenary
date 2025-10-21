import React, { useState } from 'react'

function InclusionsExclusionsSection({ state, dispatch }) {
  const [inclusionForm, setInclusionForm] = useState({
    category: '',
    count: '',
    details: '',
    status: 'Included',
  })

  const [exclusionForm, setExclusionForm] = useState({
    category: '',
    count: '',
    details: '',
    status: 'Excluded',
  })

  const handleAddInclusion = () => {
    if (inclusionForm.category.trim() && inclusionForm.count && inclusionForm.details.trim()) {
      const newInclusion = {
        id: Date.now(),
        category: inclusionForm.category.trim(),
        count: parseInt(inclusionForm.count),
        details: inclusionForm.details.trim(),
        status: inclusionForm.status,
      }
      dispatch({
        type: 'SET_INCLUSIONS',
        payload: [...state.inclusions, newInclusion],
      })
      setInclusionForm({ category: '', count: '', details: '', status: 'Included' })
    }
  }

  const handleRemoveInclusion = (id) => {
    dispatch({
      type: 'SET_INCLUSIONS',
      payload: state.inclusions.filter((item) => item.id !== id),
    })
  }

  const handleAddExclusion = () => {
    if (exclusionForm.category.trim() && exclusionForm.count && exclusionForm.details.trim()) {
      const newExclusion = {
        id: Date.now(),
        category: exclusionForm.category.trim(),
        count: parseInt(exclusionForm.count),
        details: exclusionForm.details.trim(),
        status: exclusionForm.status,
      }
      dispatch({
        type: 'SET_EXCLUSIONS',
        payload: [...state.exclusions, newExclusion],
      })
      setExclusionForm({ category: '', count: '', details: '', status: 'Excluded' })
    }
  }

  const handleRemoveExclusion = (id) => {
    dispatch({
      type: 'SET_EXCLUSIONS',
      payload: state.exclusions.filter((item) => item.id !== id),
    })
  }

  return (
    <section className="form-section">
      <h2>✅ Inclusions & Exclusions</h2>
      <div className="inclusions-exclusions-grid">
        {/* INCLUSIONS */}
        <div className="inclusion-box">
          <h3>✅ Inclusions</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Category *</label>
              <input
                type="text"
                placeholder="e.g., Flight, Hotel, Transport"
                value={inclusionForm.category}
                onChange={(e) => setInclusionForm({ ...inclusionForm, category: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Count *</label>
              <input
                type="number"
                placeholder="e.g., 2"
                value={inclusionForm.count}
                onChange={(e) => setInclusionForm({ ...inclusionForm, count: e.target.value })}
                min="1"
              />
            </div>
            <div className="form-group">
              <label>Details *</label>
              <input
                type="text"
                placeholder="e.g., All flights mentioned"
                value={inclusionForm.details}
                onChange={(e) => setInclusionForm({ ...inclusionForm, details: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={inclusionForm.status}
                onChange={(e) => setInclusionForm({ ...inclusionForm, status: e.target.value })}
              >
                <option value="Included">Included</option>
                <option value="Awaiting Confirmation">Awaiting Confirmation</option>
                <option value="Optional">Optional</option>
              </select>
            </div>
          </div>
          <button className="btn-add-item" onClick={handleAddInclusion}>
            + Add Inclusion
          </button>

          <ul className="items-list">
            {state.inclusions.map((item) => (
              <li key={item.id} className="item">
                <div className="item-content">
                  <strong>{item.category}</strong> (Count: {item.count})
                  <br />
                  <span>{item.details}</span>
                  <br />
                  <small>Status: {item.status}</small>
                </div>
                <button
                  className="btn-remove-item"
                  onClick={() => handleRemoveInclusion(item.id)}
                  title="Remove"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* EXCLUSIONS */}
        <div className="exclusion-box">
          <h3>❌ Exclusions</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Category *</label>
              <input
                type="text"
                placeholder="e.g., Travel Insurance, Meals"
                value={exclusionForm.category}
                onChange={(e) => setExclusionForm({ ...exclusionForm, category: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Count *</label>
              <input
                type="number"
                placeholder="e.g., 1"
                value={exclusionForm.count}
                onChange={(e) => setExclusionForm({ ...exclusionForm, count: e.target.value })}
                min="1"
              />
            </div>
            <div className="form-group">
              <label>Details *</label>
              <input
                type="text"
                placeholder="e.g., Travel insurance not included"
                value={exclusionForm.details}
                onChange={(e) => setExclusionForm({ ...exclusionForm, details: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={exclusionForm.status}
                onChange={(e) => setExclusionForm({ ...exclusionForm, status: e.target.value })}
              >
                <option value="Excluded">Excluded</option>
                <option value="Not Available">Not Available</option>
                <option value="Optional">Optional</option>
              </select>
            </div>
          </div>
          <button className="btn-add-item" onClick={handleAddExclusion}>
            + Add Exclusion
          </button>

          <ul className="items-list">
            {state.exclusions.map((item) => (
              <li key={item.id} className="item">
                <div className="item-content">
                  <strong>{item.category}</strong> (Count: {item.count})
                  <br />
                  <span>{item.details}</span>
                  <br />
                  <small>Status: {item.status}</small>
                </div>
                <button
                  className="btn-remove-item"
                  onClick={() => handleRemoveExclusion(item.id)}
                  title="Remove"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InclusionsExclusionsSection
