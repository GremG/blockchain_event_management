# Library
Common library used for various **SUPSI ISIN DTI blockchain team** projects.

## Packages name
- `blockchain-lib\common`: common library used for various projects.
- `blockchain-lib\event-mgmt`: general version to manage ticketing projects.
- `blockchain-lib\event-boost`: specific version to manage ticketing projects for the Event Boost project.

## Use
Tested node version: `v18.13.0`

The library is published on the private npm registry of the SUPSI ISIN DTI blockchain team.
To use the library in a project, it is necessary to:
1. `npm config set @blockchain-lib/:registry https://gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/` to configure correctly the npm registry.
2. `npm config set -- '//gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/:_authToken' "$(cat ./credentials/gitlab_read_token)"` to configure correctly the npm registry authentication.
3. `npm install`

## Build
The library currently depends on smart contract-related types from the `Event Boost` project, which are created dynamically from the specific ABIs.\
To build the library, it is therefore necessary:
1. Run `npm install`, to install the library dependencies.
2. Compile and generate (typechain) types for `Event Managament` (`Event Boost`) smart contracts running `npm run compileForLib`.
3. At this point the ABIs and types of the individual projects should have been created in the `/blockchain-lib/packages/{PACKAGE_NAME}/smart-contracts` folder. 
4. Run `npm run build`, to finally build the library.

It is possible to study the use of the library by means of the files in `/blockchain-lib/packages/{PACKAGE_NAME}/integration-test`

## Tests
You can run tests for single packages using:
- `npm run test`
- `npm run integration-test`

## Deploy Smart Contracts
First you need to create/edit the `/blockchain-lib.env`, file with the missing information specified in `/blockchain-lib.env,template`.\
You can now deploy new instances of smart contracts with a setup using:
- `npx hardhat mockData --network sepolia`

## Doc
You can generate the documentation (markdown and html) using `npm run generate-doc`.


## Gitlab write token
In the `credentials` folder, present in the project root, a file named `gitlab_write_token` must be created with the content available in the secret channel on discord. Only the `registry-write-token` value is needed.
