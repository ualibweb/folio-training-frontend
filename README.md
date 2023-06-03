# ui-training

This module was designed for use as a training module for UA libraries to learn how to create a Stripes module and use some of the common technologies, such as Jest, RTL, react-query, and react-final-form. For the associated documentation and instructions, please see [ua-folio-docs](https://github.com/ualibweb/ua-folio-docs/tree/main/training/frontend).

This software is distributed under the terms of the Apache License, Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Run the app

Run the following from the ui-training directory to serve your new app using a development server:

Note: Since this module does not have its own backend permissions established, pass the `--hasAllPerms` option to display the app in the UI navigation. For example:

```
yarn stripes serve --hasAllPerms
```

To specify your own tenant ID or to use an Okapi instance other than `http://localhost:9130` pass the `--okapi` and `--tenant` options:

```
yarn stripes serve --hasAllPerms --okapi https://folio-snapshot-okapi.dev.folio.org --tenant diku
```
