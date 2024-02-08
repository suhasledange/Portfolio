import React, { useState } from 'react';
import { touch } from '../../assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mnqenlvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitSuccess(true);
        setSubmitError(null); 
      } else {
        console.error('Form submission failed', await response.json());
        setSubmitSuccess(false);
        setSubmitError('Form submission failed. Please try again.'); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
      setSubmitError('An unexpected error occurred. Please try again later.'); 
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    
    <div className='w-full flex flex-col min-h-screen max-w-screen-xl mx-auto dark:bg-[#222C39]'>
      <div className='w-full flex flex-col items-center justify-center h-screen md:-mt-12 mt-10 md:p-0 pb-10'>
        <div className='w-full bg-white dark:bg-gray-800 lg:p-10 p-3 py-16 rounded-lg shadow-xl'>
          <h1 className='text-center mb-20 font-medium tracking-wider text-4xl text-purple-700 dark:text-gray-100 underline underline-offset-4'>Get in touch</h1>
          <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
            <div className='w-full '>
              <img className='w-full h-auto rounded-md' src={touch} alt='Touch' />
            </div>
            <div className='w-full lg:pl-8'>
              <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <input
                  name='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='focus:outline-purple-400 bg-gray-100 dark:focus:outline-purple-800 dark:bg-gray-700 p-2 rounded-md w-full'
                  type='text'
                  placeholder='Name'
                />
                <input
                  name='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='dark:focus:outline-purple-800 dark:bg-gray-700 focus:outline-purple-400 bg-gray-100 p-2 rounded-md w-full'
                  type='email'
                  placeholder='Email'
                />
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='dark:focus:outline-purple-800 dark:bg-gray-700 focus:outline-purple-400 resize-none bg-gray-100 p-2 rounded-md w-full'
                  placeholder='Message'
                  rows={5}
                />
                {submitSuccess && <p className="text-green-600">Form submitted successfully!</p>}
                {submitError && <p className="text-red-600">{submitError}</p>}
                <button
                  type='submit'
                  className='bg-purple-700 border-2 border-purple-700 font-medium duration-200 text-lg text-gray-100 p-2 rounded-md hover:bg-transparent transition-colors'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
