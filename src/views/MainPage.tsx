import React, { useState } from 'react';
import { Button, MultiColumnList, Pane, Paneset } from '@folio/stripes/components';
import { ReactQueryDevtools } from 'react-query/devtools';
import DismissablePane from '../components/DismissablePane';
import Debug from '../components/Debug';
import { useInstitutions } from '../hooks/useInstitutions';

export default function MainPage() {
  const [displayed, setDisplayed] = useState(false);
  const institutionsQuery = useInstitutions();

  const toggleDisplayed = () => setDisplayed(!displayed);

  const isLoading = institutionsQuery.isLoading;
  const data = institutionsQuery.data;

  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false} />
      <Debug label="useInstitutions" value={useInstitutions()} />
      <Paneset>
        <Pane defaultWidth="fill">
          {!isLoading && <MultiColumnList
            contentData={data ?? []}
            visibleColumns={['name', 'code']}
          />
          }

          <Button onClick={toggleDisplayed}>
            Show Dismissable Pane
          </Button>
        </Pane>
      </Paneset>

      <DismissablePane displayed={displayed} setDisplayed={setDisplayed} />
    </div>
  );
}
