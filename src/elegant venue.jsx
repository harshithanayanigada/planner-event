import React, { useState } from 'react';
import './App.css'; // Ensure to create an App.css file for additional styling

function App() {
    const [reviews, setReviews] = useState([
        { name: "Emily Clarke", text: "Absolutely stunning venue! Highly recommend for any occasion." },
        { name: "Michael Johnson", text: "A perfect setting for our anniversary celebration." },
    ]);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        occasion: '',
        time: '',
    });
    const [bookingDate, setBookingDate] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [userReview, setUserReview] = useState(''); // Controlled state for review text

    const addReview = (name, text) => {
        setReviews([...reviews, { name, text }]);
        setUserReview(''); // Reset review text after submission
    };

    const checkAvailability = () => {
        if (bookingDate) {
            // Simulate availability check
            setIsAvailable(true);
        } else {
            alert("Please select a date.");
        }
    };

    const proceedToPayment = () => {
        if (userDetails.name && userDetails.email && bookingDate && userDetails.time) {
            setIsPaymentVisible(true);
        } else {
            alert("Please fill in all fields.");
        }
    };

    const confirmBooking = () => {
        setConfirmationMessage(`Thank you, ${userDetails.name}! Your booking has been confirmed for ${bookingDate} at ${userDetails.time}. You will receive an email confirmation at ${userDetails.email}.`);
        setIsConfirmationVisible(true);
        setIsPaymentVisible(false);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Elegant Venue</h1>
                <img className="logo" src="https://via.placeholder.com/150" alt="Elegant Venue Logo" />
                <p>Your dream venue for elegant gatherings. Ideal for weddings, parties, and corporate events.</p>
            </div>

            {/* Gallery */}
            <div className="section">
                <h2>Gallery</h2>
                <div className="gallery">
                    {[...Array(6)].map((_, i) => (
                        <img key={i} src={`https://via.placeholder.com/200?text=Image+${i + 1}`} alt={`Function Hall Image ${i + 1}`} />
                    ))}
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="section review">
                <h2>Customer Reviews</h2>
                <div id="reviews-elegant">
                    {reviews.map((review, index) => (
                        <p key={index}><strong>{review.name}:</strong> {review.text}</p>
                    ))}
                </div>
                <h3>Add Your Review</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                />
                <textarea
                    rows="3"
                    placeholder="Your Review"
                    value={userReview} // Controlled value
                    onChange={(e) => setUserReview(e.target.value)}
                />
                <button onClick={() => addReview(userDetails.name, userReview)}>Submit Review</button>
            </div>

            {/* Availability Check */}
            <div className="section" id="availability-section-elegant">
                <h2>Check Availability</h2>
                <label htmlFor="date-elegant">Select Date:</label>
                <input
                    type="date"
                    onChange={(e) => setBookingDate(e.target.value)}
                />
                <button onClick={checkAvailability}>Check Availability</button>
                {isAvailable && <p className="notification">Hall is available for booking!</p>}
            </div>

            {/* User Details */}
            {isAvailable && (
                <div className="section" id="user-details-section-elegant">
                    <h2>Enter Your Details</h2>
                    <label htmlFor="name-elegant">Name:</label>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    />
                    <label htmlFor="email-elegant">Email:</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                    <label htmlFor="phone-elegant">Phone Number:</label>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                    />
                    <label htmlFor="time-elegant">Preferred Time Slot:</label>
                    <input
                        type="time"
                        onChange={(e) => setUserDetails({ ...userDetails, time: e.target.value })}
                    />
                    <label htmlFor="occasion-elegant">Occasion:</label>
                    <input
                        type="text"
                        placeholder="Type of Occasion (e.g., Wedding, Birthday)"
                        onChange={(e) => setUserDetails({ ...userDetails, occasion: e.target.value })}
                    />
                    <button onClick={proceedToPayment}>Proceed to Payment</button>
                </div>
            )}

            {/* Payment Section */}
            {isPaymentVisible && (
                <div className="section" id="payment-section-elegant">
                    <h2>Select Payment Method</h2>
                    <div className="payment-options">
                        <label><input type="radio" name="payment-elegant" value="Credit Card" onChange={(e) => setSelectedPaymentMethod(e.target.value)} /> Credit Card</label><br />
                        <label><input type="radio" name="payment-elegant" value="Debit Card" onChange={(e) => setSelectedPaymentMethod(e.target.value)} /> Debit Card</label><br />
                        <label><input type="radio" name="payment-elegant" value="UPI" onChange={(e) => setSelectedPaymentMethod(e.target.value)} /> UPI Payment</label><br />
                        <label><input type="radio" name="payment-elegant" value="Net Banking" onChange={(e) => setSelectedPaymentMethod(e.target.value)} /> Net Banking</label><br />
                    </div>
                    <button onClick={confirmBooking}>Confirm Booking</button>
                </div>
            )}

            {/* Confirmation Message */}
            {isConfirmationVisible && (
                <div className="section" id="confirmation-section-elegant">
                    <h2>Booking Confirmed</h2>
                    <p>{confirmationMessage}</p>
                </div>
            )}
        </div>
    );
}

export default App;
