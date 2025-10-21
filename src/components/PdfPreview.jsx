import React, { forwardRef } from 'react'
import vigoviaLogo from '../assets/vigovia-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlane, faClipboardList, faTicketAlt, faCar, faHotel, 
  faPlaneUp, faBed, faStickyNote, faListCheck, faCheck, faTimes,
  faFileInvoiceDollar, faPassport, faBuilding, faHeart
}from '@fortawesome/free-solid-svg-icons';
import FlightHotelSummary from './FlightHotelSummary'
import Part3Summary from './Part3Summary'
import Part4ActivityTable from './Part4ActivityTable'
import Part5PaymentVisa from './Part5PaymentVisa'

// Helper function to generate activity table from all days
const generateActivityTable = (days) => {
  const activities = []
  days.forEach((day) => {
    if (day.activities.morning) {
      activities.push({
        day: `Day ${day.dayNumber}`,
        time: 'Morning',
        activity: day.activities.morning,
        date: day.date,
      })
    }
    if (day.activities.afternoon) {
      activities.push({
        day: `Day ${day.dayNumber}`,
        time: 'Afternoon',
        activity: day.activities.afternoon,
        date: day.date,
      })
    }
    if (day.activities.evening) {
      activities.push({
        day: `Day ${day.dayNumber}`,
        time: 'Evening',
        activity: day.activities.evening,
        date: day.date,
      })
    }
  })
  return activities
}

// Hard-coded Important Notes (as per design)
const IMPORTANT_NOTES = [
  'Please arrive at the airport 3 hours before departure',
  'Carry valid passport and travel documents',
  'Check visa requirements for your destination',
  'Travel insurance is recommended',
  'Keep emergency contact numbers handy',
]

// Hard-coded Scope of Services (as per design)
const SCOPE_OF_SERVICES = [
  'Accommodation in 3-4 star hotels',
  'Daily breakfast included',
  'Airport transfers',
  'Guided city tours',
  'Travel insurance',
  ' 24/7 customer support',
]

const PdfPreview = forwardRef(({ state }, ref) => {
  const totalAmount = state.payments.installments.reduce((sum, inst) => sum + (inst.amount || 0), 0)
  const activityTable = generateActivityTable(state.days)

  return (
    <div className="preview-container">
      <div className="preview-label">📄 PDF Preview</div>
      <div ref={ref} className="pdf-preview">
        {/* ========================================
            PART 1: DAILY ITINERARY
            Shows each day with morning/afternoon/evening activities
            PAGE BREAK: After all days are listed
            ======================================== */}
          
        {/* <img src="../assets/vigovia-logo.png" alt="LOGO" /> */}
        <div className="pdf-page">
          <div className="header-container">
          <div className="pdf-header-logo">
            <img src={vigoviaLogo} alt="LOGO"  />
          </div>

          <div className="pdf-header-vigovia-new">
            <div className="header-greeting-section">
              <h1 className="header-greeting">Hi, {state.overview.subtitle || 'Traveler'}!</h1>
              <h2 className="header-destination">{state.overview.title || 'Your Itinerary'}</h2>
              <p className="header-duration">{state.overview.duration} Days {Math.max(0, state.overview.duration - 1)} Nights</p>
              <div className="header-icons">
                <FontAwesomeIcon icon={faPlaneUp} />
                <FontAwesomeIcon icon={faClipboardList} /> 
                <FontAwesomeIcon icon={faTicketAlt} /> 
                <FontAwesomeIcon icon={faCar} /> 
                <FontAwesomeIcon icon={faHotel} />
              </div>
            </div>
          </div>
          </div>

          {/* Trip Overview Cards - Single Row */}
          <div className="overview-container">
          <div className="pdf-overview-cards-new">
            <div className="overview-card-new">
              <p className="card-label-new">Departure From :</p>
              <p className="card-value-new">{state.overview.departureCity}</p>
            </div>
            <div className="overview-card-new">
              <p className="card-label-new">Departure :</p>
              <p className="card-value-new">{state.overview.departureDate}</p>
            </div>
            <div className="overview-card-new">
              <p className="card-label-new">Arrival :</p>
              <p className="card-value-new">{state.overview.arrivalDate}</p>
            </div>
            <div className="overview-card-new">
              <p className="card-label-new">Destination :</p>
              <p className="card-value-new">{state.overview.arrivalCity}</p>
            </div>
            <div className="overview-card-new">
              <p className="card-label-new">No. Of Travellers :</p>
              <p className="card-value-new">{state.overview.travelers}</p>
            </div>
          </div>
          </div>

          {/* PART 1: Daily Itinerary Section */}
          {state.days.length > 0 && (
            <div className="part1-container">
            <div className="pdf-section-vigovia">
              {/* <h2 className="pdf-section-title-vigovia">📅 Daily Itinerary</h2> */}
              {state.days.map((day, dayIndex) => (
                <div key={day.id} className="daily-plan-card-new">
                  <div className="day-badge-left">Day {day.dayNumber}</div>
                  <div className="day-info-section">
                      <div className="day-image-container">
                        <img src="https://via.placeholder.com/140?text=Day+Image" alt="Day activity" />
                      </div>
                      {day.date && <p className="day-date-text">{day.date}</p>}
                      {day.summary && <p className="day-summary-title">{day.summary}</p>}
                    </div>
                  <div className="day-content-wrapper">
                    
                    {/* Activities Timeline */}
                    <div className="activities-timeline-new">
                      {day.activities.morning && (
                        <div className="timeline-item morning-item">
                          <div className="timeline-marker">🌅</div>
                          <div className="timeline-content">
                            <h4 className="timeline-title">Morning</h4>
                            <div className="timeline-description">{day.activities.morning}</div>
                          </div>
                        </div>
                      )}
                      {day.activities.afternoon && (
                        <div className="timeline-item afternoon-item">
                          <div className="timeline-marker">☀️</div>
                          <div className="timeline-content">
                            <h4 className="timeline-title">Afternoon</h4>
                            <div className="timeline-description">{day.activities.afternoon}</div>
                          </div>
                        </div>
                      )}
                      {day.activities.evening && (
                        <div className="timeline-item evening-item">
                          <div className="timeline-marker">🌙</div>
                          <div className="timeline-content">
                            <h4 className="timeline-title">Evening</h4>
                            <div className="timeline-description">{day.activities.evening}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                {/* <hr /> */}

                </div>
              ))}
              
            </div>
            </div>
          )}

          {/* PAGE BREAK INDICATOR - After Daily Itinerary */}
          <div className="page-break-indicator">/* PAGE BREAK - End of Part 1: Daily Itinerary */</div>
          <div className="pdf-footer-vigovia">
            <div className="footer-left">
              <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
              <p className="footer-address">Registered Office: Hd-109 Cinnabar Hills,<br />Links Business Park, Karnataka, India.</p>
            </div>
            <div className="footer-center">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-value">+91-9504061112</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email ID:</span>
                <span className="footer-contact-value">Utkarsh@Vigovia.Com</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">CIN:</span>
                <span className="footer-contact-value">U79110KA2024PTC191890</span>
              </p>
            </div>
            <div className="footer-right">
              <img src={vigoviaLogo} alt="Vigovia Logo" className="footer-logo-img" />
              <p className="footer-tagline">PLAN.PACK.GO</p>
            </div>
          </div>
        </div>

        {/* ========================================
            PART 2: FLIGHT BOOKING & HOTEL SUMMARY
            Shows flight details and accommodations
            PAGE BREAK: After hotel details
            ======================================== */}
        <div className="pdf-page">
            <FlightHotelSummary state={state} />

          {/* PAGE BREAK INDICATOR - After hotel details */}
          <div className="page-break-indicator">/* PAGE BREAK - End of Part 2: Flight & Hotel */</div>
          <div className="pdf-footer-vigovia">
            <div className="footer-left">
              <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
              <p className="footer-address">Registered Office: Hd-109 Cinnabar Hills,<br />Links Business Park, Karnataka, India.</p>
            </div>
            <div className="footer-center">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-value">+91-9504061112</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email ID:</span>
                <span className="footer-contact-value">Utkarsh@Vigovia.Com</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">CIN:</span>
                <span className="footer-contact-value">U79110KA2024PTC191890</span>
              </p>
            </div>
            <div className="footer-right">
              <img src={vigoviaLogo} alt="Vigovia Logo" className="footer-logo-img" />
              <p className="footer-tagline">PLAN.PACK.GO</p>
            </div>
          </div>
        </div>

        {/* ========================================
            PART 3: IMPORTANT NOTES, SCOPE OF SERVICES, INCLUSIONS
            Hard-coded notes + scope + user inclusions/exclusions
            PAGE BREAK: After inclusions
            ======================================== */}
         <div className="pdf-page">
               <Part3Summary state={state} />

          {/* PAGE BREAK INDICATOR - After Inclusions */}
          <div className="page-break-indicator">/* PAGE BREAK - End of Part 3: Notes & Inclusions */</div>
          <div className="pdf-footer-vigovia">
            <div className="footer-left">
              <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
              <p className="footer-address">Registered Office: Hd-109 Cinnabar Hills,<br />Links Business Park, Karnataka, India.</p>
            </div>
            <div className="footer-center">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-value">+91-9504061112</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email ID:</span>
                <span className="footer-contact-value">Utkarsh@Vigovia.Com</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">CIN:</span>
                <span className="footer-contact-value">U79110KA2024PTC191890</span>
              </p>
            </div>
            <div className="footer-right">
              <img src={vigoviaLogo} alt="Vigovia Logo" className="footer-logo-img" />
              <p className="footer-tagline">PLAN.PACK.GO</p>
            </div>
          </div>
        </div>

        {/* ========================================
            PART 4: ACTIVITY TABLE & TERMS & CONDITIONS
            Summary table of all activities + T&C line
            PAGE BREAK: After T&C
            ======================================== */}
        <div className="pdf-page">
            <Part4ActivityTable state={state} />
          {/* PAGE BREAK INDICATOR - After Activity Table */}
          <div className="page-break-indicator">/* PAGE BREAK - End of Part 4: Activity Table & T&C */</div>
          <div className="pdf-footer-vigovia">
            <div className="footer-left">
              <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
              <p className="footer-address">Registered Office: Hd-109 Cinnabar Hills,<br />Links Business Park, Karnataka, India.</p>
            </div>
            <div className="footer-center">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-value">+91-9504061112</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email ID:</span>
                <span className="footer-contact-value">Utkarsh@Vigovia.Com</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">CIN:</span>
                <span className="footer-contact-value">U79110KA2024PTC191890</span>
              </p>
            </div>
            <div className="footer-right">
              <img src={vigoviaLogo} alt="Vigovia Logo" className="footer-logo-img" />
              <p className="footer-tagline">PLAN.PACK.GO</p>
            </div>
          </div>
        </div>

        {/* ========================================
            PART 5: PAYMENT PLAN & VISA DETAILS
            Payment installments + visa information + CTA
            PAGE BREAK: End of document
            ======================================== */}
        <div className="pdf-page">
          <Part5PaymentVisa state={state} />
          {/* PAGE BREAK INDICATOR - End of Document */}
          <div className="page-break-indicator">/* PAGE BREAK - End of Part 5: Payment Plan & Visa (End of Document) */</div>
          
          {/* Footer - On last page */}
          <div className="pdf-footer-vigovia">
            <div className="footer-left">
              <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
              <p className="footer-address">Registered Office: Hd-109 Cinnabar Hills,<br />Links Business Park, Karnataka, India.</p>
            </div>
            <div className="footer-center">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-value">+91-9504061112</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email ID:</span>
                <span className="footer-contact-value">Utkarsh@Vigovia.Com</span>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">CIN:</span>
                <span className="footer-contact-value">U79110KA2024PTC191890</span>
              </p>
            </div>
            <div className="footer-right">
              <img src={vigoviaLogo} alt="Vigovia Logo" className="footer-logo-img" />
              <p className="footer-tagline">PLAN.PACK.GO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

PdfPreview.displayName = 'PdfPreview'

export default PdfPreview
