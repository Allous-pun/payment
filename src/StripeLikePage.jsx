import { useState } from 'react';
import './StripeLikePage.css';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function StripeLikePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Payment processing logic would go here
    console.log('Form submitted:', formData);
  }

  return (
    <div className="stripe-container">
      <div className="stripe-header">
        <h1>Complete your purchase</h1>
      </div>
      
      <div className="stripe-content">
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+1 (555) 123-4567" 
                required 
              />
            </div>
            
            <div className="payment-details">
              <h3>Payment Details</h3>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  name="cardNumber" 
                  value={formData.cardNumber} 
                  onChange={handleChange} 
                  placeholder="1234 5678 9012 3456" 
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    name="expiry" 
                    value={formData.expiry} 
                    onChange={handleChange} 
                    placeholder="MM/YY" 
                    required 
                  />
                </div>
                
                <div className="form-group half">
                  <label htmlFor="cvc">CVC</label>
                  <input 
                    type="text" 
                    id="cvc" 
                    name="cvc" 
                    value={formData.cvc} 
                    onChange={handleChange} 
                    placeholder="123" 
                    required 
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" className="submit-button">Pay Now</button>
          </form>
        </Card>
      </div>
    </div>
  );
}