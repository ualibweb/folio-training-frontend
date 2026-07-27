import React, { useState } from 'react';
import { AppIcon } from '@folio/stripes/core';
import { Paneset, Pane, Headline, MultiColumnList} from '@folio/stripes/components';
import { Button } from '@folio/stripes/components';
const contentData = [
  { name: 'Sushim', role: 'Assistant' },
  { name: 'J Cole', role: 'Rapper' },
];

const MainPage = () => {
  const [showSecondPane, setShowSecondPane] = useState(false);

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
          contentData={contentData}
          visibleColumns={['name', 'role']}
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