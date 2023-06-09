import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
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

  it('shows the text', async () => {
    render(withIntlConfiguration(<MainPage />));

    expect(screen.getByText('Show Dismissable Pane')).toBeVisible();
  });

  it('click the toggle window button', async () => {
    render(withIntlConfiguration(<MainPage />));

    // See if we can see the dismissable pane before clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();

    const showButton = screen.getByRole('button', { name: 'Show Dismissable Pane' });

    await userEvent.click(showButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();
  });

  it('click the toggle window button, then close it', async () => {
    render(withIntlConfiguration(<MainPage />));

    // See if we can see the dismissable pane before clicking the button
    const showButton = screen.getByRole('button', { name: 'Show Dismissable Pane' });

    await userEvent.click(showButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();

    const closeButton = screen.getByRole('button', { name: 'Close Pane' });

    await userEvent.click(closeButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();
  });
  /**
 *         <Pane defaultWidth="fill">
          {!isLoading && <MultiColumnList
            contentData={data ?? []}
            visibleColumns={['name', 'code']}
          />
 */
  it('renders the institutions list', () => {
    // mock the useInstitutions hook
    (useInstitutions as any).mockReturnValue({
      isLoading: false,
    });

    // render the component
    render(withIntlConfiguration(<MainPage />));

    // ensure that the list is rendered and except the data in the lsit to be empty and therefore nothing in the pane is rendered
    expect(screen.queryByText('institution 1')).toBeNull();
    expect(screen.queryByText('institution 2')).toBeNull();
  });
});
