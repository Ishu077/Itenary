import React from 'react'

const Part5PaymentVisa = ({ state }) => {
  // Calculate total amount
  const calculateTotalAmount = () => {
    if (state.payments.installments && state.payments.installments.length > 0) {
      const total = state.payments.installments.reduce((sum, inst) => {
        return sum + (inst.amount || 0)
      }, 0)
      return total
    }
    return 900000
  }

  const totalAmount = calculateTotalAmount()
  const travelers = state.overview.travelers || 3
  const currency = state.payments.currency || '₹'
  const tcsStatus = state.payments.tcsCollected ? 'Collected' : 'Not Collected'

  // Format currency
  const formatCurrency = (amount) => {
    return `${currency} ${amount.toLocaleString('en-IN')}`
  }

  // Get visa details (first entry if multiple)
  const visaDetail = state.visaDetails && state.visaDetails.length > 0 ? state.visaDetails[0] : null

  // Demo installments if none provided
  const demoInstallments = [
    {
      id: 1,
      label: 'Installment 1',
      amount: 350000,
      dueDate: 'Initial Payment',
    },
    {
      id: 2,
      label: 'Installment 2',
      amount: 400000,
      dueDate: 'Post Visa Approval',
    },
    {
      id: 3,
      label: 'Installment 3',
      amount: null,
      dueDate: '20 Days Before Departure',
    },
  ]

  const installments = state.payments.installments && state.payments.installments.length > 0 
    ? state.payments.installments 
    : demoInstallments

  return (
    <div className="part5-container">
      {/* ========== PAYMENT PLAN SECTION ========== */}
      <div className="payment-plan-section">
        <h2 className="payment-plan-title">
          <span className="title-black">Payment</span>
          <span className="title-purple">Plan</span>
        </h2>

        <div className="payment-card">
          {/* Total Amount Chevron Row */}
          <div className="chevron-row">
            <div className="chevron-label">Total Amount</div>
            <div className="chevron-value">
              {formatCurrency(totalAmount)} For {travelers} Pax (Inclusive Of GST)
            </div>
          </div>

          {/* TCS Chevron Row */}
          <div className="chevron-row">
            <div className="chevron-label">TCS</div>
            <div className="chevron-value">{tcsStatus}</div>
          </div>

          {/* Payment Table */}
          <div className="payment-table-section">
            <table className="payment-table">
              <thead className="payment-table-header">
                <tr>
                  <th>Installment</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody className="payment-table-body">
                {installments.map((inst) => (
                  <tr key={inst.id}>
                    <td>{inst.label}</td>
                    <td>{inst.amount ? formatCurrency(inst.amount) : 'Remaining'}</td>
                    <td>{inst.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========== VISA DETAILS SECTION ========== */}
      <div className="visa-details-section">
        <h3 className="visa-details-title">
          <span className="title-black">Visa</span>
          <span className="title-purple">Details</span>
        </h3>

        <div className="visa-capsule">
          <div className="visa-column">
            <div className="visa-column-label">Visa Type :</div>
            <div className="visa-column-value">{visaDetail?.visaType || '123456'}</div>
          </div>
          <div className="visa-column">
            <div className="visa-column-label">Validity :</div>
            <div className="visa-column-value">{visaDetail?.validity || '123456'}</div>
          </div>
          <div className="visa-column">
            <div className="visa-column-label">Processing Date :</div>
            <div className="visa-column-value">{visaDetail?.processingDate || '123456'}</div>
          </div>
        </div>
      </div>

      {/* ========== DIVIDER ========== */}
      <div className="section-divider"></div>

      {/* ========== CTA SECTION ========== */}
      <div className="cta-section">
        <h2 className="cta-heading">PLAN.PACK.GO!</h2>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  )
}

export default Part5PaymentVisa
