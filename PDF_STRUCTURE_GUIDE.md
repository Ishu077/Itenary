# Vigovia PDF Itinerary - 5-Part Structure Guide

## Overview
The generated PDF is divided into **5 distinct sections**, each on its own page with a consistent footer. This document explains what each part contains and where page breaks occur.

---

## 📋 PART 1: DAILY ITINERARY
**File**: `src/components/PdfPreview.jsx` (Lines 62-165)

### What It Shows:
- **Header Section** with Vigovia logo and trip title
- **Overview Cards** (4 cards in a grid):
  - 📅 Duration (total days)
  - 👥 Number of Travelers
  - ✈️ Departure City & Date
  - 🏁 Arrival City & Date
- **Daily Plans** for each day with:
  - Day number and date badge
  - Day summary (optional)
  - **Activities Timeline** with 3 time periods:
    - 🌅 Morning activities
    - ☀️ Afternoon activities
    - 🌙 Evening activities

### Styling:
- **Color**: Purple gradient header (#2D1B69 to #5A4B8A)
- **Cards**: Lavender background (#E8E4F3) with purple left border
- **Timeline**: Each activity has a colored left border (orange for morning, gold for afternoon, purple for evening)

### Page Break:
```
/* PAGE BREAK - End of Part 1: Daily Itinerary */
```
After all days are listed, the page breaks and Part 2 begins on a new page.

---

## ✈️ PART 2: FLIGHT BOOKING & HOTEL SUMMARY
**File**: `src/components/PdfPreview.jsx` (Lines 167-225)

### What It Shows:
- **Flight Details Section**:
  - Departure city and date
  - Arrival city and date
- **Accommodations Section** (if hotels exist):
  - Hotel name
  - City location
  - Check-in and check-out dates
  - Number of nights

### Styling:
- **Section Title**: Purple with underline
- **Flight/Hotel Cards**: White background with purple left border
- **Layout**: Two-column grid for flight details, stacked cards for hotels

### Page Break:
```
/* PAGE BREAK - End of Part 2: Flight & Hotel Summary */
```
After hotel details, page breaks and Part 3 begins.

---

## ⚠️ PART 3: IMPORTANT NOTES, SCOPE OF SERVICES & INCLUSIONS
**File**: `src/components/PdfPreview.jsx` (Lines 227-286)

### What It Shows:

#### 1. **Important Notes** (Hard-coded from design):
- Arrive 3 hours before departure
- Carry valid passport and travel documents
- Check visa requirements
- Travel insurance recommended
- Keep emergency contact numbers

#### 2. **Scope of Services** (Hard-coded from design):
- Accommodation in 3-4 star hotels
- Daily breakfast included
- Airport transfers
- Guided city tours
- Travel insurance
- 24/7 customer support

#### 3. **Inclusions & Exclusions** (User-provided):
- Two-column layout
- Inclusions with ✓ checkmarks
- Exclusions with ✕ marks

### Styling:
- **Notes Box**: Yellow warning icon, red accent color
- **Services Box**: Green checkmarks for each service
- **Inclusions/Exclusions**: Two-column grid with green/red indicators

### Page Break:
```
/* PAGE BREAK - End of Part 3: Notes & Inclusions */
```
After inclusions section, page breaks and Part 4 begins.

---

## 📋 PART 4: ACTIVITY TABLE & TERMS & CONDITIONS
**File**: `src/components/PdfPreview.jsx` (Lines 288-333)

### What It Shows:

#### 1. **Activity Summary Table** (Auto-generated from daily activities):
- **Columns**: Day | Time | Activity | Date
- **Data**: All activities from all days compiled into one table
- **Rows**: Alternating white and lavender backgrounds for readability
- **Header**: Purple gradient background with white text

#### 2. **Terms & Conditions**:
- Single paragraph with T&C statement
- Yellow background box with orange left border
- Covers cancellation policy, insurance, and liability

### How Activity Table is Generated:
```javascript
// Helper function in PdfPreview.jsx
const generateActivityTable = (days) => {
  // Iterates through all days
  // For each day, creates entries for morning, afternoon, evening
  // Returns array of activity objects with: day, time, activity, date
}
```

### Styling:
- **Table Header**: Purple gradient (#2D1B69 to #5A4B8A)
- **Table Rows**: Alternating white and lavender
- **T&C Box**: Yellow background (#FFF3CD) with orange left border

### Page Break:
```
/* PAGE BREAK - End of Part 4: Activity Table & T&C */
```
After T&C section, page breaks and Part 5 begins.

---

## 💳 PART 5: PAYMENT PLAN & VISA DETAILS
**File**: `src/components/PdfPreview.jsx` (Lines 335-397)

### What It Shows:

#### 1. **Payment Plan** (User-provided):
- **Table Columns**: Installment | Amount | Due Date
- **Data**: All payment installments entered by user
- **Total Row**: Bold row showing total amount in selected currency
- **Currency**: Displayed for each amount (USD, EUR, GBP, INR, AUD)

#### 2. **Visa Details** (User-provided):
- **For each visa**: 
  - Visa Type (e.g., Schengen, Tourist, Business)
  - Validity (e.g., 90 days)
  - Processing Date
- **Cards**: White background with purple left border

### Styling:
- **Payment Table**: Purple gradient header, alternating row colors
- **Total Row**: Lavender background with bold text
- **Visa Cards**: White with purple left border

### Page Break:
```
/* PAGE BREAK - End of Part 5: Payment & Visa (End of Document) */
```
This is the last page. Document ends here.

---

## 🏷️ FOOTER (Appears on All Pages)
**File**: `src/components/PdfPreview.jsx` (Lines 399-408)

### What It Shows:
- **Vigovia Logo** (left side)
- **Generation Date** (center)
- **Tagline**: "Your Perfect Travel Experience Awaits" (center)

### Styling:
- **Background**: Purple gradient (#2D1B69 to #5A4B8A)
- **Text**: White color
- **Layout**: Flexbox with logo on left, content on right

---

## 🎨 Color Scheme (Figma Design)

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Purple | Dark Purple | #2D1B69 |
| Secondary Purple | Medium Purple | #5A4B8A |
| Background | Lavender | #E8E4F3 |
| Light Background | Very Light Lavender | #F8F7FB |
| Accent (Morning) | Orange | #FFB84D |
| Accent (Afternoon) | Gold | #FFD700 |
| Accent (Evening) | Purple | #9B59B6 |
| Success | Green | #28a745 |
| Error | Red | #dc3545 |
| Warning | Yellow | #FFF3CD |

---

## 📄 Page Break Summary

```
PAGE 1: Daily Itinerary
  ├─ Header with logo & title
  ├─ Overview cards (4 cards)
  └─ Daily plans (all days with activities)
  
PAGE 2: Flight & Hotel Summary
  ├─ Flight details
  └─ Hotel accommodations
  
PAGE 3: Important Info & Inclusions
  ├─ Important notes (hard-coded)
  ├─ Scope of services (hard-coded)
  └─ Inclusions & exclusions (user-provided)
  
PAGE 4: Activity Table & Terms
  ├─ Activity summary table (auto-generated)
  └─ Terms & conditions
  
PAGE 5: Payment & Visa
  ├─ Payment plan (user-provided)
  └─ Visa details (user-provided)

FOOTER: Appears on all pages
  ├─ Logo
  ├─ Generation date
  └─ Tagline
```

---

## 🔧 How to Customize

### Change Hard-coded Content:
Edit `src/components/PdfPreview.jsx`:
- **Important Notes**: Lines 36-42 (IMPORTANT_NOTES array)
- **Scope of Services**: Lines 45-52 (SCOPE_OF_SERVICES array)

### Change Colors:
Edit `src/styles/vigovia-pdf.css`:
- Search for hex color codes (#2D1B69, #E8E4F3, etc.)
- Replace with your desired colors

### Change Fonts:
Edit `src/styles/vigovia-pdf.css`:
- Modify `font-family` properties
- Currently using system fonts (Segoe UI, Tahoma, etc.)

### Add/Remove Sections:
Edit `src/components/PdfPreview.jsx`:
- Each section is wrapped in conditional rendering
- Add new sections within `<div className="pdf-page">` blocks
- Remember to add page break indicators

---

## 📱 Responsive Design

The PDF is optimized for:
- **Desktop**: Full width with all features
- **Tablet**: 2-column layouts become 1-column
- **Mobile**: Stacked layout with adjusted font sizes

---

## 🖨️ Printing

When printing the PDF:
- Page breaks are automatically applied
- Footer appears on each page
- Colors are preserved
- All content is visible

---

## 📝 Notes

- **Activity Table**: Auto-generated from daily activities. If a day has no activities, it won't appear in the table.
- **Empty Sections**: Sections with no data are hidden (e.g., if no hotels, hotel section won't appear)
- **Logo**: Currently using SVG placeholder. Replace with actual logo image in `src/assets/vigovia-logo.png`
- **PDF Generation**: Uses `html2canvas` + `jsPDF` library for conversion

---

**Last Updated**: October 19, 2025
**Version**: 1.0
