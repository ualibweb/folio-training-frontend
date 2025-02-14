import React from 'react';
import { Headline, MultiColumnList, Pane, PaneHeader, Paneset, Button, Icon } from '@folio/stripes/components';
import { useState } from 'react';
import { ReactQueryDevtools } from "react-query/devtools";
import Debug from '../components/Debug';
import { useInstitutions } from '../hooks/useInstitutions';


export default function MainPage() {
  
  
  const getInstitutions = useInstitutions();
  const cars = [
    { name: "Model S", manufacturer: "Tesla", year: 2023, type: "Electric" },
    { name: "Mustang", manufacturer: "Ford", year: 2022, type: "Sports" },
    { name: "Civic", manufacturer: "Honda", year: 2021, type: "Sedan" },
    { name: "Camry", manufacturer: "Toyota", year: 2023, type: "Sedan" },
    { name: "911", manufacturer: "Porsche", year: 2024, type: "Sports" }
  ];
  
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const open = () => {
    setShowPanel(true);
  }

  const close = () => {
    setShowPanel(false);
  }


  return (
    <div>
    <ReactQueryDevtools initialIsOpen={false} />;
    <Debug label="useInstitutions" value={useInstitutions()} />;
    <Paneset>
      <Pane
        defaultWidth="20%"
        paneTitle="Filters"
      >
        <Headline>
        <div style={{ textAlign: "right" }}>
        <div style={{ textAlign: "center" }}>
            Pane 1
        </div>
          <Button onClick={open}>
            <Icon
              icon="arrow-right"
              size="large"
              iconClassName="myClass"
            />
          </Button> 
        </div>
        
       
        </Headline>
      
        <MultiColumnList contentData={getInstitutions.data ?? []} visibleColumns={['name', 'code']}/>
      </Pane>
      
       {showPanel && 
        <Pane 
        defaultWidth='50%' 
        renderHeader={renderProps => (
          <PaneHeader
          {...renderProps}
          dismissible
          onClose={close}
          paneTitle="Side Pane"
          />
        )}>
          Side pane
        </Pane>
      }
    </Paneset>
    </div>
    
  );
}
