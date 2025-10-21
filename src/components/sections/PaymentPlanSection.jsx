import React from 'react'

function PaymentPlanSection({ state, dispatch }) {
  const handleAddInstallment = () => {
    dispatch({ type: 'ADD_INSTALLMENT' })
  }

  const handleRemoveInstallment = (id) => {
    dispatch({ type: 'REMOVE_INSTALLMENT', payload: id })
  }

  const handleUpdateInstallment = (id, field, value) => {
    dispatch({
      type: 'UPDATE_INSTALLMENT',
      payload: { id, updates: { [field]: value } },
    })
  }

  const handleUpdateCurrency = (value) => {
    dispatch({ type: 'UPDATE_PAYMENTS_CURRENCY', payload: value })
  }

  const totalAmount = state.payments.installments.reduce((sum, inst) => sum + (inst.amount || 0), 0)

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>💳 Payment Plan</h2>
        <button className="btn-add" onClick={handleAddInstallment}>
          + Add Installment
        </button>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Currency *</label>
          <select value={state.payments.currency} onChange={(e) => handleUpdateCurrency(e.target.value)}>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="INR">INR (₹)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </div>
      </div>
      <div className="installments-list">
        {state.payments.installments.length === 0 ? (
          <p className="empty-state">No payment installments added yet.</p>
        ) : (
          <>
            {state.payments.installments.map((inst, index) => (
              <div key={inst.id} className="installment-card">
                <div className="card-header">
                  <h4>Installment {index + 1}</h4>
                  <button
                    className="btn-remove"
                    onClick={() => handleRemoveInstallment(inst.id)}
                    title="Remove installment"
                  >
                    ✕
                  </button>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Label *</label>
                    <input
                      type="text"
                      placeholder="e.g., Initial Deposit"
                      value={inst.label}
                      onChange={(e) => handleUpdateInstallment(inst.id, 'label', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount ({state.payments.currency}) *</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      value={inst.amount}
                      onChange={(e) => handleUpdateInstallment(inst.id, 'amount', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Due Date *</label>
                    <input
                      type="date"
                      value={inst.dueDate}
                      onChange={(e) => handleUpdateInstallment(inst.id, 'dueDate', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="payment-summary">
              <strong>Total Amount: {state.payments.currency} {totalAmount.toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default PaymentPlanSection
