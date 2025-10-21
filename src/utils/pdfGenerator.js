import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const generatePDF = async (element, filename = 'itinerary') => {
  try {
    // Store original styles
    const originalStyle = element.getAttribute('style')
    const originalParentStyle = element.parentElement.getAttribute('style')

    // Temporarily expand the preview container to show all content
    element.style.maxHeight = 'none'
    element.style.overflow = 'visible'
    element.parentElement.style.maxHeight = 'none'
    element.parentElement.style.overflow = 'visible'
    element.parentElement.style.position = 'static'

    // Wait for DOM to update
    await new Promise((resolve) => setTimeout(resolve, 100))

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      allowTaint: true,
    })

    // Restore original styles
    if (originalStyle) {
      element.setAttribute('style', originalStyle)
    } else {
      element.removeAttribute('style')
    }
    if (originalParentStyle) {
      element.parentElement.setAttribute('style', originalParentStyle)
    } else {
      element.parentElement.removeAttribute('style')
    }

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = pageWidth - 20
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 10

    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
    heightLeft -= pageHeight - 20

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight + 10
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
      heightLeft -= pageHeight - 20
    }

    pdf.save(`${filename}.pdf`)
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Failed to generate PDF. Please try again.')
  }
}
