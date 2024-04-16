import React from 'react';
import css from './MainPage.module.css';
import { Pane, Paneset, PaneHeader, Headline, MultiColumnList, Button } from '@folio/stripes/components';
import { useState } from 'react';

export default function MainPage() {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const openPanel = () => {
    setShowPanel(true);
  }

  const closePanel = () => {
    setShowPanel(false);
  }

  const bookData = [
    {"Title": "The Cat in the Hat", "Author": "Dr. Suess"},
    {"Title": "The Great Gatsby", "Author": "F. Scott Fitzgerald"}
  ]

  return (
    <div>
      <Paneset>
        <Pane defaultWidth="fill">
          <Headline size='large' margin='medium' tag='h3'>
            Headline
            <Button onClick={openPanel}>
              Open side panel
            </Button>
          </Headline>
          <MultiColumnList contentData={bookData} />
        </Pane>
        {showPanel && 
          <Pane 
          defaultWidth='50%' 
          renderHeader={renderProps => (
            <PaneHeader
            {...renderProps}
            dismissible
            onClose={closePanel}
            paneTitle="Dismiss this"
            />
          )}>
            Side panel
          </Pane>
        }
      </Paneset>
    </div>
  );
}
