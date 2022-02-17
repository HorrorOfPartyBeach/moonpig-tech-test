# Moonpig Tech Test

This project was built for a tech test. I enjoyed working on it and can think of a number of things I would like to have done differently given time. I've listed some thoughts on improvements under the section 'Future Improvements'.

The requirements included rendering a page of cards which is responsive based on a wireframe.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm tw:build`

Launches the Tailwindcss CLI build process
See the section about [Getting Started with Tailwind](https://tailwindcss.com/docs/installation) for more information.

The build process occurs when you make changes to Tailwind utility classes.

### `npm tw:react`

Runs the app in development mode and launches the Tailwindcss CLI build process

## Tech Stack

[Create React App](https://github.com/facebook/create-react-app)
[Tailwind CSS](https://tailwindcss.com/docs/installation)

## Future Improvements

If I was to add to this project in future, I would do the following:

- Add further unit tests for components (Jest and React Testing Library)
- Improve current unit tests, I prefer to take my time and use TDD but I don't find tech tests easy to do this in and as a result the unit tests are insufficient and not currently passing.
- Add additional accessibility improvements and test thoroughly for accessibility criteria
- Add automated accessibility testing with a plugin such as cypress-axe or jest-axe
- Further refactor components to be more generic and reusable, for example, I would probably extract the logic for rendering each card as a separate Card component that could be used in the List component.
- Use [Tailwindcss classnames](https://github.com/muhammadsammy/tailwindcss-classnames) - functional typed classnames for Tailwind and additionally refactor the app to use TypeScript.
