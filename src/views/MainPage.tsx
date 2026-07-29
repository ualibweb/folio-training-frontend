import React, { useState } from 'react';
import { AppIcon } from '@folio/stripes/core';
import { Paneset, Pane, Headline, MultiColumnList} from '@folio/stripes/components';
import { Button } from '@folio/stripes/components';
import {ReactQueryDevtools} from "react-query/devtools";
import { useInstitutions } from '../hooks/useInstitutions';
import Debug from '../components/Debug';
const MainPage = () => {
  const [showSecondPane, setShowSecondPane] = useState(false);
  const { data, isLoading, isError, error } = useInstitutions();

if (isError) {
  console.log('Query error:', error);
  return <div>Error: {String(error)}</div>;
}
if (isLoading || !data){
  return <div >Loading..</div>;
}

  return (
    <Paneset>
      <Pane
        defaultWidth="fill"
        paneTitle="My Test App"
        appIcon={<AppIcon app="inventory" iconKey="holdings" />}
        lastMenu={<Button onClick={() => setShowSecondPane(true)}>Open</Button>}
      >
        <Headline size="large" margin="none">
          Hyalo
        </Headline>
        <MultiColumnList
          contentData={data}
          visibleColumns={['name', 'id']}
        />
      </Pane>
      {showSecondPane && (
        <Pane
        defaultWidth="30%"
          paneTitle="Details"
          dismissible
          onClose={() => setShowSecondPane(false)}
        >
          <p>Extra</p>
        </Pane>
      )}
    </Paneset>
  );
};

export default MainPage;