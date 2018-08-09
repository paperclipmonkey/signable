# TODO list
Items that if I had longer to work on this I'd like to implement (and stuff I think could be done better).

- **Add testing** Cypress e2e tests and unit testing frameworks have been added to the project but not implemented. API loading and basic functionality of each of the pages should be tested.

- **Investigate API content-type issue** A small issue with the API client wanting to specify the accepted content-type as JSON (and the API not having the required CORS header) meant that a small forwarding proxy was needed to stop pre-flight CORS checks in the client. Ick. Fixed by updating the client or adding the CORS header.

- **Support pagination**. Pagination and result limiting is supported by the API and by swagger, but not implemented in the UI.

- **Swagger** Finish implementing the Swagger file for API documentation and client generation. Test thoroughly and publish to NPM.

- **Signable theming** Style the interface to look more similar to the signable site.

- **Contact Import / Export** Possibly add import and export functionality to Contacts. This could export as either a csv or a vcards

-**Save notifications** Save is an asyncronous operation, but nothing is being shown in the UI as to whether the API has saved the data successfully. Using VueX an optimistic approach can be taken, showing the user the expected outcome whilst waiting for the actual result to resolve. Toast notifications or indeterminate loaders can be used to display to the user that an operation is occuring.

-**Loading indications** Add an indeterminate spinner to the UI whenever theres async operations going on in the background.

-**Remove Console error logging** Switch to using Sentry or similar for error logging in a production service. This allows quick reporting of any issues.
