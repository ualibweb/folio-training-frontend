import React from 'react';
import SidePanel from './SidePanel';
import { Pane, Paneset, Headline, MultiColumnList, Button } from '@folio/stripes/components';
import { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import Debug from '../components/Debug';
import { useInstitutions } from '../hooks/useInstitutions';

export default function MainPage() {
  const getInsts = useInstitutions();
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  }

  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false}/>;
      <Debug label='useInstitutions' value={useInstitutions()}/>
      <Paneset>
        <Pane defaultWidth='fill'>
          <Headline size='large' margin='medium' tag='h3'>
            Headline
            <Button onClick={togglePanel}>
              Open side panel
            </Button>
          </Headline>
          <MultiColumnList contentData={getInsts?.data ?? []} visibleColumns={['name', 'code']}/>
        </Pane>
        <SidePanel togglePanel={togglePanel} showPanel={showPanel}/>
      </Paneset>
    </div>
  );
}
