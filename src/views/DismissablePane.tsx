import React, { Dispatch, SetStateAction } from 'react';
import { Headline, Pane, PaneHeader } from '@folio/stripes/components';

interface DismissablePaneProps {
    displayed: boolean;
    setDisplayed: Dispatch<SetStateAction<boolean>>;
}

const DismissablePane = (props: DismissablePaneProps) => {
  function dismissPane() {
    // console.log('dismissed');
    props.setDisplayed(false);
  }

  return (
    <div>

      {
        props.displayed &&
        <Pane defaultWidth="20%">

          <PaneHeader
            paneTitle="Dismissable Pane"
            dismissible
            onClose={() => { dismissPane(); }}
          />

          <Headline size="large">This is a dismissable pane</Headline>

        </Pane>
        }

    </div>
  );
};

export default DismissablePane;
