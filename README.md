# blockchain_event_management

## Packages name
- `blockchain-lib\common`: common library used for various projects.
- `blockchain-lib\event-mgmt`: general version to manage ticketing projects.
- `blockchain-lib\event-boost`: specific version to manage ticketing projects for the Event Boost project.

## Use
Tested node version: `v18.13.0`

The library is published on the private npm registry of the SUPSI ISIN DTI blockchain team.
To use the library in a project, it is necessary to:
1. `npm config set @blockchain-lib/:registry https://gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/` to configure correctly the npm registry.
2. `npm config set -- '//gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/:_authToken' authToken` to configure correctly the npm registry authentication.
3. `npm install`
