# Basic Donation Webpage

Created with React (CRA), react-bootstrap, Formik(form library), and yup (data validation library).

## Functionality

Application has robust form validation for each of its fields and could be easily adapted to any non-profit's use.

### Donation Parent Page (Donations.js)

Comment marking place to put API call to get the list of current gifts (line 25 in getVendorGiftInfo function).

### Credit Card Form (DonationForm.js)

The credit card number is setup to visually display the number in a more user-friendly manner for visual validation (e.g. XXXX XXXX XXXX XXXX).

Comment marking place to put API call to send donation details to payment processor (line 40 in the Formik constructor's onSubmit).

### Gift Form (DonationGiftForm.js)

Comment marking place to put API call to send shipping details to gift vendor (line 37 in Formik constructor's onSubmit).

Comment marking place to put API call to send call to internal donation tracker (line 40 in Formik constructor's onSubmit).

### Donation Information (DonationInformation.js)

Displays an appealing image to invite engagement (stored within the ./src/images directory).

In a popover, displays the list of example gifts one may receive depending on their donation amount. (provided by parent component)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


