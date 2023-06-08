import React, { useState } from 'react';
import { Button, MultiColumnList, Pane, Paneset } from '@folio/stripes/components';
import DismissablePane from '../components/DismissablePane';
import Debug from '../components/Debug';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useInstitutions } from '../hooks/useInstitutions';

export default function MainPage() {
  const [displayed, setDisplayed] = useState(false);
  const institutionsQuery = useInstitutions();

  function toggleDisplayed() {
    setDisplayed(!displayed);
  }

  const institutions = institutionsQuery.data?.map(institution => ({
    code: institution.code,
    name: institution.name,
  })) || [];

  console.log('institutions', institutions);


  const dummyData = ['a', 'b', 'c'];

  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false} />
      <Debug label="useInstitutions" value={useInstitutions()} />
      <Paneset>
        <Pane defaultWidth="fill">
          <MultiColumnList
            contentData={dummyData}
          />

          <Button onClick={toggleDisplayed}>
            Show Dismissable Pane
          </Button>
        </Pane>
      </Paneset>

      <DismissablePane displayed={displayed} setDisplayed={setDisplayed} />
    </div>
  );
}
