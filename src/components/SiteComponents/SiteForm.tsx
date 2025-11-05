import { useState } from 'react';

const SiteForm = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', 'e2e69929-642f-419b-b1ec-1fd77aae780e');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully!');
      event.currentTarget.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='services-form-container'>
      <form className='services-form' onSubmit={onSubmit}>
        <div className='services-form-entry-container'>
          <div className='services-form-header'>Get A Quote!</div>
          <label htmlFor='name'>Name</label>
          <input
            className='services-form-entry-input'
            type='text'
            name='name'
            required
          />
        </div>

        <div className='services-form-entry-container'>
          <label htmlFor='email'>E-mail</label>
          <input
            className='services-form-input'
            type='email'
            name='email'
            required
          />
        </div>

        <div className='services-form-entry-container'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='services-form-text-area'
            name='message'
            required
          ></textarea>
        </div>

        <button className='services-form-submit' type='submit'>
          Get A Quote!
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default SiteForm;
