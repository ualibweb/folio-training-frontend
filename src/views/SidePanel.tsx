import React from 'react';
import { Pane, PaneHeader} from '@folio/stripes/components';

interface SidePanelProps{
  togglePanel: () => void
  showPanel: boolean
}

export default function SidePanel({ togglePanel, showPanel }: SidePanelProps){
  return (
    <>
    {showPanel && 
      <Pane 
      defaultWidth='50%' 
      renderHeader={renderProps => (
        <PaneHeader
        {...renderProps}
        dismissible
        onClose={togglePanel}
        paneTitle='Dismiss this'
        />
      )}>
        Side panel
      </Pane>
    }
    </>
  );
}