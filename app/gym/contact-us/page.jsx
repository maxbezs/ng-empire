'use client';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would handle the form submission (e.g., send data to an API)
    reset(); // Resets the form after submission
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl rounded-lg bg-white p-8 shadow-lg">
        {/* Header */}
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600">
          Have questions? We're here to help! Reach out to us via the form below or find our contact
          details.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="yourname@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address'
                  }
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9+\-() ]{7,15}$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="How can we help you?"
                {...register('message', { required: 'Message is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Our friendly team is here to assist you. Reach out via the following methods:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="material-icons mr-2 text-blue-600">Location</span>
                <p>123 Fitness St, Workout City, CA 12345</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-blue-600">Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-blue-600">Email</span>
                <p>contact@gymwebsite.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Facebook"
              >
                <span className="material-icons">facebook</span>
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-600 hover:text-pink-800"
                aria-label="Instagram"
              >
                <span className="material-icons">instagram</span>
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-600"
                aria-label="Twitter"
              >
                <span className="material-icons">twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Find Us Here</h2>
          <div className="mt-4">
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.6986562321445!2d-3.146941407117449!3d51.4739563527928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d8219ad328f%3A0x1e3251ba2964d4cd!2sNaked%20Ground%20Health%20Club!5e0!3m2!1sen!2suk!4v1720099575969!5m2!1sen!2suk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
