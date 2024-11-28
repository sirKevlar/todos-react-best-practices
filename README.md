# The most complicated 'simple' todo list

## Showcasing React best practices 2024

> ### CLIENTS: 2

<fieldset>

#### 1. guest

- A guest is simply a user who hasn't signed in
- Can use app to add max 5x Todos
- Can delete Todos
- Can view Todos

#### 2. signedInUser

- Can use app to add any number of Todos
- Can delete Todos
- Can view Todos

</fieldset>

> ### PAGES: 1

> ### LEFT SCREEN

<fieldset>

- Displays list with ability to delete items and item completed status visible
- Has progress bar for percentage completed
- Has numeric representation of the above (eg. 1/3 completed)

</fieldset>

> ### RIGHT SCREEN (sideBar)

<fieldset>

- Displays form
- Has input for adding todo
  > `if(signedOut)`
- Has sign in button
- Has register button
  > `if(signedIn)`
- Has sign out button

</fieldset>

> ### USER STORIES:

<fieldset>

- As a guest i can view all existing todos without signing in (ordered by completeBy date)
- As a guest i can add up to five todos without signing in
- As a guest i can open up individual todo to view more details
- As a guest I can filter todos by priority status
- As a guest i can delete todos
- As a guest i can sign in or register

- As a signed in user i can add any number of todos
- As a signed in user i can sign out

</fieldset>

> ### BEST PRACTICES

<fieldset>

- keep components dumb and uncoupled
- use composition where possible
- avoid prop drilling
- avoid unnecessary re-renders
- constant files for variables
- A11y friendly
- SVGs
- Typescript
- modular CSS
- context for users / themes
- use previous state when setting state
- separate functions
- pass functions rather than raw setState
- prop names like html onAddTodo={handleAddTodo}
- pass onClick functions as props, do not hardcode in components
- useMemo hook for derived state calculations
- useCallback hook to avoid unnecessary recreation of functions
- use react.memo to avoid unnecessary re-renders
- useMemo hook to stop objects and array being recreated unnecessarily
- single piece of state 'status' instead of error, loading etc
- separate types file
- keep state as simple as possible
- use URL for query options rather than state
- don't overuse useEffect, useQuery for dynamic caching
- ensure each useEffect has only one purpose
- use custom hooks

</fieldset>
