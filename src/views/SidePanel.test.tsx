import { render, screen } from '@testing-library/react';
import React from 'react';
import SidePanel from './SidePanel';
import withIntlConfiguration from '../test/util/withIntlConfiguration';

describe('Side panel', () => {
  it('checks the text', () => {
    render(withIntlConfiguration(<SidePanel togglePanel={() => {}} showPanel={true}/>))

    expect(screen.getByText('Side panel')).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Dismiss this' })).toBeVisible();
  })
})