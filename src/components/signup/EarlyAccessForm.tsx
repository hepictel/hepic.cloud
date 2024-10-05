import React, { useState } from 'react'
import SmoothIframe from '../../../src/components/SmoothIframe'

export default function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const isFormValid = () => {
    return formData.name && formData.company && formData.email && formData.package
  }

  const FORM_URL = "https://script.google.com/macros/s/AKfycbypIQWKvFDiAVAQZZCWlFGdU61YdXr9WKLHrH7DJqnC7fURvKX4qBu0W4dzmaEu3Yx69g/exec"

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      alert('There was a problem submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    minWidth: '130%',
    margin: '0 auto',
    padding: '0rem',
  }

  const columnStyle: React.CSSProperties = {
    flex: 1,
  }

  const columnLeft: React.CSSProperties = {
    flex: '0 1 30%'
  }
  
  const columnRight: React.CSSProperties = {
    flex: '1 0 70%'
  }

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start',
  }

  const inputStyle: React.CSSProperties = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  }

  const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }

  if (isSubmitted) {
    return (
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h2>Thank you for your request! We will be in touch soon!</h2>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <div style={columnLeft}>
        <h2>Please provide your details</h2><br/>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="company"
            placeholder="Company *"
            required
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Business Email *"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="package"
            required
            value={formData.package}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Current Status *</option>
            <option value="basic">No Monitoring</option>
            <option value="medium">Monitoring, HOMER</option>
            <option value="large">Monitoring, Other Vendor</option>
          </select>
          <textarea
            name="comments"
            placeholder="Comments (Optional)"
            value={formData.comments}
            onChange={handleChange}
            style={{ ...inputStyle, minHeight: '100px' }}
          />
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            style={{ ...buttonStyle, opacity: isSubmitting || !isFormValid() ? 0.5 : 1 }}
          >
            {isSubmitting ? 'Submitting...' : 'Request Demo Session'}
          </button>
        </form>
      </div>
      <div style={columnRight}>
        <h2>Too Curious? Here's a quick interactive demonstration. <img src="https://img.shields.io/badge/Follow%20the%20Prompt%20-8A2BE2"/></h2><br/>
        <SmoothIframe src="https://demo.arcade.software/KGk0X0tSaMv7opJjHbDj?embed" height="550px" />
      </div>
    </div>
  )
}
