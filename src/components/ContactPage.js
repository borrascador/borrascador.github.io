import React from 'react';
import { contact } from './contact';
import { parseMdText } from './common';

const ContactPage = () => (
  <div className="center-column">
    <div className="text-column">
      { parseMdText(contact) }
    </div>
  </div>
);

export default ContactPage;