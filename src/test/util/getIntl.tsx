import { cleanup, render } from '@folio/jest-config-stripes/testing-library/react';
import React from 'react';
import { IntlContext, IntlShape } from 'react-intl';
import withIntlConfiguration from './withIntlConfiguration';

function TestComponent({
  intlCapturer,
}: {
  intlCapturer: (intl: IntlShape) => void;
}) {
  return <IntlContext.Consumer>{intlCapturer}</IntlContext.Consumer>;
}

export default function getIntl(locale = 'en-US', timeZone = 'UTC'): IntlShape {
  const intlCapturer = jest.fn();

  render(
    withIntlConfiguration(
      <TestComponent intlCapturer={intlCapturer} />,
      locale,
      timeZone
    )
  );

  expect(intlCapturer).toHaveBeenCalled();
  const intl = intlCapturer.mock.calls[0][0] as IntlShape;

  cleanup();

  return intl;
}
