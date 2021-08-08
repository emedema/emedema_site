import React from "react"

const functionURL = "https://wisteria-grasshopper-6885.twil.io/send-email" // replace this with your function URL

class ContactForm2 extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { contactName: "", contactEmail: "", contactSubject: "", contactMessage: "" },
     submitting: false,
     error: null,
   }
 }

 onClick = async event => {
   event.preventDefault()
   this.setState({ submitting: true })
   const { contactName, contactEmail,  contactSubject, contactMessage } = this.state.message

   const response = await fetch(functionURL, {
     method: "post",
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
     },
     body: new URLSearchParams({ contactName, contactEmail, contactSubject, contactMessage }).toString(),
   })
   if (response.status === 200) {
     this.setState({
       error: null,
       submitting: false,
       message: {
         contactName: "",
         contactEmail: "",
         contactSubject: "",
         contactMessage: "",
       },
     })
   } else {
     const json = await response.json()
     this.setState({
       error: json.error,
       submitting: false,
     })
   }
 }

 onChange = event => {
   const name = event.target.getAttribute("name")
   this.setState({
     message: { ...this.state.message, [name]: event.target.value },
   })
 }
 render() {
   return (
     <>
       <div>{this.state.error}</div>
       <form
         method="post"
         action={functionURL}
         name = 'contactForm'
         id="contactForm"
       >
         <div className="form-field">
         <input
           type="text"
           name="contactName"
           id="contactName"
           placeholder="Name"
           value={this.state.message.contactName}
           onChange={this.onChange}
         />
         </div>
         <div className="form-field">
         <input
           type="email"
           name="contactEmail"
           id="contactEmail"
           placeholder="Email"
           value={this.state.message.contactEmail}
           onChange={this.onChange}
         ></input>
         </div>
         <div className="form-field">
         <input
           type="text"
           name="contactSubject"
           id="contactSubject"
           placeholder="Subject"
           value={this.state.message.contactSubject}
           onChange={this.onChange}
         />
         </div>
         <div className="form-field">
         <textarea
           style={{
             height: `125px`,
           }}
           name="contactMessage"
           id="contactMessage"
           placeholder="Message"
           value={this.state.message.contactMessage}
           onChange={this.onChange}
         />
         </div>
         <button
           style={{
             marginTop: `7px`,
           }}
           type="submit"
           disabled={this.state.submitting}
           onClick={this.onClick}
           className="full-width btn--primary"
         >
           Submit
         </button>
       </form>
     </>
   )
 }
}

export default ContactForm2
