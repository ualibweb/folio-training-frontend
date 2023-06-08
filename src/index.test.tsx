import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import App from './index';
import withIntlConfiguration from './test/util/withIntlConfiguration';
import { BrowserRouter } from 'react-router-dom';



describe('Main page', () => {
  it('renders the app', () => {
    render(withIntlConfiguration(<BrowserRouter><App /></BrowserRouter>));

    // Only renders <body><div /></body>, so just testing if it renders
  });
});


