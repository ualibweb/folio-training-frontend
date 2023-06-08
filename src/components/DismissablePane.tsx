import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Headline, Pane, PaneHeader } from '@folio/stripes/components';
import { Button } from '@material-ui/core';

interface DismissablePaneProps {
    displayed: boolean;
    setDisplayed: Dispatch<SetStateAction<boolean>>;
}

const DismissablePane = (props: DismissablePaneProps) => {
  const dismissPane = useCallback(() => props.setDisplayed(false), [props]);

  return (
    <div>

      {
        props.displayed &&
        <Pane defaultWidth="20%">

          <PaneHeader
            paneTitle="Dismissable Pane"
            dismissible
            onClose={dismissPane}
          />

          <Button
            className="dismissable-pane-close-button"
            onClick={dismissPane}
          >
            Close Pane
          </Button>

          <Headline size="large">This is a dismissable pane</Headline>

        </Pane>
        }

    </div>
  );
};

export default DismissablePane;
