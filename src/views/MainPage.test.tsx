import { render, screen } from '@folio/jest-config-stripes/testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import {useInstitutions} from "../hooks/useInstitutions";


jest.mock("../hooks/useInstitutions");

describe('Main page', () => {
  it.each([
    [{ isSuccess: false }, []],
    [{ isSuccess: true, data: [
      { name: 'Institution 1', code: 'INST1' },
      { name: 'Institution 2', code: 'INST2' }
    ] }, ['Institution 1', 'INST1', 'Institution 2', 'INST2']]
  ])('renders MultiColumnList with %p', (mockReturnValue, expectedTexts) => {
    (useInstitutions as any).mockReturnValue(mockReturnValue);
    render(<MainPage />);

    expectedTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
