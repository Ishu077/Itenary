import React from 'react'
import OverviewSection from './sections/OverviewSection'
import HotelSection from './sections/HotelSection'
import DailyPlanSection from './sections/DailyPlanSection'
import PaymentPlanSection from './sections/PaymentPlanSection'
import InclusionsExclusionsSection from './sections/InclusionsExclusionsSection'
import VisaDetailsSection from './sections/VisaDetailsSection'

function ItineraryForm({ state, dispatch }) {
  return (
    <div className="form-container">
      <div className="form-sections">
        <OverviewSection state={state} dispatch={dispatch} />
        <HotelSection state={state} dispatch={dispatch} />
        <DailyPlanSection state={state} dispatch={dispatch} />
        <PaymentPlanSection state={state} dispatch={dispatch} />
        <InclusionsExclusionsSection state={state} dispatch={dispatch} />
        <VisaDetailsSection state={state} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default ItineraryForm
