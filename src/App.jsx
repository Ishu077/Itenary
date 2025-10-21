import { useReducer, useRef } from 'react'
import './App.css'
import './styles/vigovia-pdf.css'
import './styles/vigovia-new-design.css'
import './styles/vigovia-part2.css'
import './styles/vigovia-part3.css'
import './styles/vigovia-part4.css'
import './styles/vigovia-part5.css'
import ItineraryForm from './components/ItineraryForm'
import PdfPreview from './components/PdfPreview'
import { generatePDF } from './utils/pdfGenerator'

import vigoviaLogo from './assets/vigovia-logo.png'

const initialState = {
  overview: {
    title: '',
    subtitle: '',
    travelers: 1,
    duration: 1,
    departureCity: '',
    departureDate: '',
    arrivalCity: '',
    arrivalDate: '',
  },
  hotels: [],
  days: [],
  payments: {
    currency: 'USD',
    installments: [],
  },
  inclusions: [],
  exclusions: [],
  visaDetails: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_OVERVIEW':
      return { ...state, overview: { ...state.overview, ...action.payload } }
    case 'ADD_DAY':
      return {
        ...state,
        days: [
          ...state.days,
          {
            id: Date.now(),
            dayNumber: state.days.length + 1,
            date: '',
            summary: '',
            activities: { morning: '', afternoon: '', evening: '' },
            transport: [],
          },
        ],
      }
    case 'REMOVE_DAY':
      return {
        ...state,
        days: state.days.filter((day) => day.id !== action.payload),
      }
    case 'UPDATE_DAY':
      return {
        ...state,
        days: state.days.map((day) =>
          day.id === action.payload.id ? { ...day, ...action.payload.updates } : day
        ),
      }
    case 'ADD_HOTEL':
      return {
        ...state,
        hotels: [
          ...state.hotels,
          {
            id: Date.now(),
            name: '',
            city: '',
            checkIn: '',
            checkOut: '',
            nights: 1,
          },
        ],
      }
    case 'REMOVE_HOTEL':
      return {
        ...state,
        hotels: state.hotels.filter((hotel) => hotel.id !== action.payload),
      }
    case 'UPDATE_HOTEL':
      return {
        ...state,
        hotels: state.hotels.map((hotel) =>
          hotel.id === action.payload.id ? { ...hotel, ...action.payload.updates } : hotel
        ),
      }
    case 'ADD_INSTALLMENT':
      return {
        ...state,
        payments: {
          ...state.payments,
          installments: [
            ...state.payments.installments,
            {
              id: Date.now(),
              label: '',
              amount: 0,
              dueDate: '',
            },
          ],
        },
      }
    case 'REMOVE_INSTALLMENT':
      return {
        ...state,
        payments: {
          ...state.payments,
          installments: state.payments.installments.filter((inst) => inst.id !== action.payload),
        },
      }
    case 'UPDATE_INSTALLMENT':
      return {
        ...state,
        payments: {
          ...state.payments,
          installments: state.payments.installments.map((inst) =>
            inst.id === action.payload.id ? { ...inst, ...action.payload.updates } : inst
          ),
        },
      }
    case 'UPDATE_PAYMENTS_CURRENCY':
      return {
        ...state,
        payments: { ...state.payments, currency: action.payload },
      }
    case 'SET_INCLUSIONS':
      return { ...state, inclusions: action.payload }
    case 'SET_EXCLUSIONS':
      return { ...state, exclusions: action.payload }
    case 'ADD_VISA_DETAIL':
      return {
        ...state,
        visaDetails: [...state.visaDetails, action.payload],
      }
    case 'REMOVE_VISA_DETAIL':
      return {
        ...state,
        visaDetails: state.visaDetails.filter((visa) => visa.id !== action.payload),
      }
    case 'UPDATE_VISA_DETAIL':
      return {
        ...state,
        visaDetails: state.visaDetails.map((visa) =>
          visa.id === action.payload.id ? { ...visa, ...action.payload.updates } : visa
        ),
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const previewRef = useRef(null)

  const handleGeneratePDF = async () => {
    if (previewRef.current) {
      await generatePDF(previewRef.current, state.overview.title || 'Itinerary')
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌍 Itinerary Builder</h1>
        <p>Create your perfect travel itinerary</p>
      </header>
      <div className="app-layout">
        <div className="form-section">
          <ItineraryForm state={state} dispatch={dispatch} />
          <button className="generate-btn" onClick={handleGeneratePDF}>
            📥 Generate PDF
          </button>
        </div>
        <div className="preview-section">
          <PdfPreview state={state} ref={previewRef} />
        </div>
      </div>
    </div>
  )
}

export default App
