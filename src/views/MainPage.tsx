import React from 'react';
import SidePanel from './SIdePanel';
import { Pane, Paneset, PaneHeader, Headline, MultiColumnList, Button } from '@folio/stripes/components';
import { useState } from 'react';

export default function MainPage() {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  }

  const bookData = [
    {"Title": "The Cat in the Hat", "Author": "Dr. Suess"},
    {"Title": "The Great Gatsby", "Author": "F. Scott Fitzgerald"}
  ]

  return (
    <div>
      <Paneset>
        <Pane defaultWidth='fill'>
          <Headline size='large' margin='medium' tag='h3'>
            Headline
            <Button onClick={togglePanel}>
              Open side panel
            </Button>
          </Headline>
          <MultiColumnList contentData={bookData} />
        </Pane>
        <SidePanel togglePanel={togglePanel} showPanel={showPanel}/>
      </Paneset>
    </div>
  );
}
