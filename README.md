# EmailReader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

# Author
E.M.S.E Student. Jhon Alexander Rueda Sanchez

## About
Email Reader has been successfully developed in accordance with the specified requirements. While minor adjustments have been made to the overall style and presentation, the core functionality remains unchanged.

Key Features:

- Built with Bootstrap 5: A robust framework for modern web development.
- Enhanced User Experience:
  - Highlighting Focused Fields: Directives ensure clear visual feedback when users interact with form elements.
  - Responsive Design: The application adapts seamlessly to various screen sizes.
  - <span style="color:red">~~Resizable Reading Div: Users can customize the reading area for optimal comfort.~~</span> (<span style="color:green">Removed for the second assessment, conflict when clicking inside elements such as links or buttons</span> )
  - Sticky Table Headers: Important information remains visible even when scrolling.
- Robust Functionality:
  - Form Validation: Template-driven forms with built-in validation ensure data integrity.
  - Form Tracking: Efficiently monitor and manage form submissions.
  - Parent-Child Data Sharing: Effective communication between components for complex data structures.

### Second Assessment

**Key Features:**

- Enhanced Navbar:
  - Email Reader: Accesses the features from the first assessment.
  - Email Lists: Displays emails in a list format, leveraging the UpToDate component for flexible rendering.
  - Email Form: Enables users to create new emails.
- Email Service:
  - Provides methods for adding, deleting (single or multiple), and viewing email details.
- Storage Service:
  - Stores data locally to persist filters and search text across routes.
- Search Box Component:
  - Allows users to search for emails based on their content.
- Filter Component:
  - Quickly filters emails based on whether their body message is null or not.
  - Sweet Alert Library:
  - Provides visually appealing alerts and confirmations, such as when deleting all emails.

#### Additional Notes:

- The system has been decomposed into highly granular components for better reusability and adaptability.
- This modular approach allows for consistent behavior and rendering across different contexts.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Pictures Assessment II
<img width="1440" alt="EmailListComponent" src="https://github.com/user-attachments/assets/8b749693-29ea-4ef8-a880-492f6050f514">
<img width="1440" alt="EmailFormComponent" src="https://github.com/user-attachments/assets/3c6cdc76-5ff9-428a-8bed-0980e09f919c">
<img width="1440" alt="EmailFilter" src="https://github.com/user-attachments/assets/f707058e-3467-48d5-ba87-c6ff2dfb0211">
<img width="1434" alt="EmailSearchBox" src="https://github.com/user-attachments/assets/4af82aae-6c24-4683-b4cb-a098906f4aaa">
<img width="1440" alt="EmailDeleteConfirmation" src="https://github.com/user-attachments/assets/5cf41d17-f2a8-4c36-9e3a-e54179fc4aee">
<img width="390" alt="EmailResponsiveDesign" src="https://github.com/user-attachments/assets/e4299a9c-1d86-46d6-9355-ba4437a81e4e">
<img width="388" alt="EmailMobileConfirmation" src="https://github.com/user-attachments/assets/bd8318a0-dc83-4113-bc52-7e1fed01bc7e">

## Pictures Assessment I
<img width="1440" alt="Field validations" src="https://github.com/user-attachments/assets/212a2f1d-3525-4716-a697-a1294d8b0206">
<img width="1440" alt="Valid form" src="https://github.com/user-attachments/assets/7884a27b-146b-4ae5-8403-f448ea92ddd0">
<img width="1440" alt="Alert after sending email" src="https://github.com/user-attachments/assets/a9f58f03-c065-426b-906b-46523f69809b">
<img width="364" alt="Responsive design" src="https://github.com/user-attachments/assets/56c5f6e3-1496-4b7e-ba81-f17a5ea0f8a3">

