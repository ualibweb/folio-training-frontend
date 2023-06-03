import { Accordion, AccordionSet } from '@folio/stripes/components';
import React, { ReactNode, useMemo } from 'react';
import { FormSpy } from 'react-final-form';

export interface DebugProps {
  /** just a string is fine, making this a formatted message or something similar is a bit overkill */
  label: ReactNode;
  defaultOpen?: boolean;
  value: unknown;
}

/**
 * A component to print out a certain value as JSON, with a configurable label.
 * By default, it will be closed (unless `defaultOpen` is set to `true`)
 *
 * @example
 * <Debug label="API response" value={values} />
 * @example
 * <Debug label="Current state" value={myState} defaultOpen />
 */
export default function Debug({
  label,
  defaultOpen = false,
  value,
}: DebugProps) {
  const contents = useMemo(() => {
    if (value === undefined) {
      return 'undefined';
    }
    return JSON.stringify(value, undefined, 2);
  }, [value]);

  return (
    <AccordionSet>
      <Accordion
        label={<span>Debug ({label})</span>}
        closedByDefault={!defaultOpen}
      >
        <pre>{contents}</pre>
      </Accordion>
    </AccordionSet>
  );
}

/**
 * A component to debug a form's current values.  Closed by default, but this
 * can be changed with `defaultOpen`.
 */
export function DebugForm({
  defaultOpen = false,
}: Pick<DebugProps, 'defaultOpen'>) {
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => (
        <Debug label="Form values" value={values} defaultOpen={defaultOpen} />
      )}
    </FormSpy>
  );
}
