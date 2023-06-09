import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import withIntlConfiguration from '../test/util/withIntlConfiguration';

import useInstitutions from '../hooks/useInstitutions';

// at top of file, before the tests
jest.mock('../hooks/useInstitutions');

// Make some jest tests
describe('MainPage', () => {
  it('renders the institutions list', () => {
    // mock the useInstitutions hook
    (useInstitutions as any).mockReturnValue({
      isLoading: false,
      data: [
        {
          id: 'inst1-id',
          name: 'institution 1',
        },
        {
          id: 'inst2-id',
          name: 'institution 2',
        },
      ],
    });

    // render the component
    render(withIntlConfiguration(<MainPage />));

    // ensure that the list is rendered
    expect(screen.getByText('institution 1')).toBeInTheDocument();
    expect(screen.getByText('institution 2')).toBeInTheDocument();
  });
});
