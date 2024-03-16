import React, { useState } from 'react';
import { touch } from '../../assets';
import conf from '../../conf/conf';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      const response = await fetch(`https://formspree.io/f/${conf.FORM}`, {
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
    <div className=' min-h-screen md:-mt-12 flex items-center justify-center px-3'>

        <div className='max-w-screen-lg mx-auto p-5 dark:bg-gray-800 rounded-md shadow-xl'>
            <h1 className=' text-4xl underline underline-offset-4 text-purple-700 font-bold text-center mb-10'>Get In Touch</h1>
        <div className=' flex md:flex-row gap-5 flex-col w-full h-full items-center justify-between'>

            <div className='w-full '>

            <LazyLoadImage
            className='w-full h-auto rounded-md'
            alt=""
            src={touch}
            effect="blur" 
            threshold={200}
            width="100%"
            height="100%"
          />

            </div>


            <div className='w-full md:pl-8'>
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
                  className='bg-purple-700 border-2 border-purple-700 font-medium duration-200 text-lg text-gray-200 hover:text-purple-700 p-2 rounded-md hover:bg-transparent transition-colors'
                >
                  Submit
                </button>
              </form>
            </div>
            
        </div>
        </div>
    </div>

            
  );
};

export default Contact;
