import { Accordion, AccordionSet } from '@folio/stripes/components';
import React, { ReactNode, useMemo } from 'react';
import { FormSpy } from 'react-final-form';

export interface DebugProps {
  /** just a string is fine, making this a formatted message is a bit overkill */
  label: ReactNode;
  defaultOpen?: boolean;
  value: unknown;
}

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
