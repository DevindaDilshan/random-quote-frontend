import React, { useState, useEffect } from 'react';
import api from '../api/api';

export default function Hero() {
  const [author, setAuthor] = useState('Author');
  const [quote, setQuote] = useState('Quote');

  const getQuote = async () => {
    try {
      const response = await api.get('/QuoteAPI.json');
      const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];

      setAuthor(randomQuote.author);
      setQuote(randomQuote.text);
    } catch (error) {
      console.error('Error fetching random quote:', error.message);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <section className='px-4 py-5 my-5 text-center'>
      <div className='card text-center w-50  mx-auto shadow'>
        <div className='card-header p-3 bg-success'>
          <h4 className='fw-bold text-white'>Random Quote </h4>
        </div>
        <div className='card-body fw-medium '>
          <blockquote className='blockquote mb-0 fw-bold'>
            <p className='fs-4 card-title text-dark'>{quote}</p>
            {/*
            <p className='blockquote-footer mt-3 '>{author}</p>
  */}
          </blockquote>
          <button className='btn btn-success mt-5 fw-bold' onClick={getQuote}>
            Get a Quote
          </button>
        </div>
      </div>
    </section>
    
  );
}
