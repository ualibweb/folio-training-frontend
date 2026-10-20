# ui-training

This module was designed for use as a training module for UA libraries to learn how to create a Stripes module and use some of the common technologies, such as Jest, RTL, react-query, and react-final-form. For the associated documentation and instructions, please see [ua-folio-docs](https://github.com/ualibweb/ua-folio-docs/tree/main/training/frontend).

This software is distributed under the terms of the Apache License, Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Run the app

Set up a Stripes workspace first, following the
[frontend training setup](https://github.com/ualibweb/ua-folio-docs/blob/main/training/frontend/00-prereqs-and-setup.md).
Then, from inside this module's folder, run:

```
yarn stripes serve --okapi https://folio-etesting-snapshot-kong.ci.folio.org --tenant diku --hasAllPerms
```

Open http://localhost:3000 and log in as `diku_admin` / `admin`. The `--okapi` flag points at the
Eureka snapshot's Kong gateway; the old Okapi snapshot environments were retired on
October 1, 2026. `--hasAllPerms` is needed because this module doesn't define its own backend
permissions.