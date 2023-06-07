import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Headline, MultiColumnList, Pane, PaneHeader, Paneset } from '@folio/stripes/components';

interface DismissablePaneProps {
    displayed: boolean;
    setDisplayed: any;
}


const DismissablePane = (props: DismissablePaneProps) => {
  
  function dismissPane() {
    console.log('dismissed');
    props.setDisplayed(false);
  }
  
  return (
    <div>

        {
        props.displayed &&
        <Pane defaultWidth="50%">

            <PaneHeader
                paneTitle="Dismissable Pane"
                dismissible
                onClose={() => { dismissPane() }}
            />

            <Headline size="large">This is a dismissable pane</Headline>

        </Pane>
        }

    </div>
  )
}

export default DismissablePane
