import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  formData: any = {
    fullName: '',
    content: ''
  };

  onSubmit() {
    // Formspree endpoint for your form
    const formEndpoint = 'https://formspree.io/f/xzbneabr/claricekibii@gmail.com';

    // Create a FormData object
    const formData = new FormData();
    formData.append('fullName', this.formData.fullName);
    formData.append('content', this.formData.content);

    // Send a POST request to Formspree
    fetch(formEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Formspree response:', data);
      // Show an alert on successful form submission
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Show an alert on form submission error
      alert('Error submitting form. Please try again.');
    });
  }

}
