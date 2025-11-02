import React, { useState } from 'react'
import useReviewSubmit from '../../hooks/useReviewSubmit'


const NewReview = () => {
  const { onSubmit, errors } = useReviewSubmit()
  const [userName, setUserName] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(0)
  const [formErrors, setFormErrors] = useState({})
  const MAX_MESSAGE_LENGTH = 100
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating)
  }

  const validateForm = () => {
    const errors = {}
    if (!userName.trim()) {
      errors.userName = "Full Name is required"
    }
    if (!content.trim()) {
      errors.content = "Message is required"
    }
    if (rating === 0) {
      errors.rating = "Rating is required"
    }
    return errors
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({ userName: userName, content: content, rating: rating })
      setUserName('')
      setContent('')
      setRating(0)
      setFormErrors({})
    } else {
      setFormErrors(validationErrors)
    }
  }

  return (
    <div className='container pt-5 mt-5 '>
      <h2 className='text-center text-white mb-4'>Add Review</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleFormSubmit} className='p-4 border border-white rounded shadow-sm text-white' >
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>Full Name:</label>
              <input
                type='text'
                className={`form-control `}
                id='userName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {(errors.userName || formErrors.userName) &&
                <small className='text-danger'>Full Name is required</small>
              }
            </div>
            <div className='mb-3'>
              <label htmlFor='content' className='form-label'>Message:</label>
              <textarea
                className={`form-control `}
                id='content'
                value={content}
                rows="4"
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(e) => setContent(e.target.value)}
              />
              <small className=" text-white">{content.length}/{MAX_MESSAGE_LENGTH}</small><br />
              {(errors.content || formErrors.content) &&
                <small className='text-danger'>Message is required</small>
              }
            </div>
            <div className='mb-3'>
              <label htmlFor='rating' className='form-label'>Rating:</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'active' : ''}`}
                    style={{
                      cursor: 'pointer',
                      fontSize: '2rem',
                      color: star <= rating ? '#ffd700' : 'white'
                    }}
                    onClick={() => handleRatingClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              {(errors.rating || formErrors.rating) &&
                <small className='text-danger'>Rating is required</small>
              }
            </div>
            <button type='submit' className='btn btn-primary w-100'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewReview