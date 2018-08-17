import React from 'react';

import FormContainer from '../container/FormContainer';
import MessageContainer from '../container/MessageContainer';

const ApplicationComponent = () => (
  <main>
    <h1>
      {'Shrt.ly'}
    </h1>
    <h2>
      {'Tiny URL shortener with advanced statistics.'}
    </h2>
    <FormContainer />
    <MessageContainer />
  </main>
);

export default ApplicationComponent;
