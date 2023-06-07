import React, { useState } from 'react';
import { Button, MultiColumnList, Pane, Paneset } from '@folio/stripes/components';

import { IntlProvider } from 'react-intl';
import DismissablePane from './DismissablePane';


const catalogResults = [
  { title:'Microbiology Today', author:'James Edward' },
  { title:'Orange Book', author:'Philip Ramos' },
];


export default function MainPage() {
  const [displayed, setDisplayed] = useState(false);

  function toggleDisplayed() {
    setDisplayed(!displayed);
  }

  return (
    <IntlProvider locale="en">
      <div>
        <Paneset>

          <Pane defaultWidth="fill">
            <MultiColumnList contentData={catalogResults} />

            <Button
              onClick={() => { toggleDisplayed(); }}
            >
              Show Dismissable Pane
            </Button>

          </Pane>

          <DismissablePane
            displayed={displayed}
            setDisplayed={setDisplayed}
          />

        </Paneset>
      </div>
    </IntlProvider>
  );
}
