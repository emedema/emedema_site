import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
      try{
         const templateParams = {
             contactName: data.contactName,
             contactEmail: data.contactEmail,
             contactSubject: data.contactSubject,
             contactMessage: data.contactMessage
         } 
         await send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
          reset();
          toastifySuccess();
      
        } catch (e) {
            console.log(e);
        }
  };

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='form-field'>
                    <input
                      type='text'
                      name='contactName'
                      id="contactName"
                      ref={register({
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='full-width'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='form-field'>
                    <input
                      type='email'
                      name='contactEmail'
                      id="contactEmail"
                      ref={register({
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='full-width'
                      placeholder='Email'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
                {/* Row 2 of form */}
                <div className='form-field'>
                    <input
                      type='text'
                      name='contactSubject'
                      id="contactSubject"
                      ref={register({
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='full-width'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                </div>
                {/* Row 3 of form */}
                <div className='form-field'>
                    <textarea
                      rows={3}
                      name='contactMessage'
                      id="contactMessage" 
                      ref={register({
                        required: true
                      })}
                      className='full-width'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
                <div className="form-field">
                <button className='full-width submit-btn' type='submit'>
                  Submit
                </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;