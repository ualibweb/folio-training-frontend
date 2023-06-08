import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './index';
import withIntlConfiguration from './test/util/withIntlConfiguration';



describe('Main page', () => {
  it('renders the app', () => {
    render(withIntlConfiguration(<BrowserRouter><App /></BrowserRouter>));

    // Only renders <body><div /></body>, so just testing if it renders
  });
});


