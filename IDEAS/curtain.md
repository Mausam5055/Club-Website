# Curtain Effect Logic

This document explains the logic behind the slide-up curtain effect used in this project.

## Overview

The effect creates a stack of sections that slide up and over each other as the user scrolls down the page. This is achieved by making each section "sticky" and offsetting its top position based on its order in the page.

**Note:** This curtain effect is achieved purely with CSS and does not use any JavaScript animation libraries like GSAP.

## Core Logic

The effect relies on the following CSS properties:

-   `position: sticky`: This makes an element stick to the viewport once it reaches a certain scroll position.
-   `top`: This property is used with `position: sticky` to define the offset from the top of the viewport where the element should stick.

## Implementation Details

The core of the implementation is in the `TextAndImage` slice component.

### 1. Stacking with `position: sticky`

Each section that is part of the curtain effect is a sticky element. This allows it to stay fixed on the screen while scrolling.

### 2. Dynamic `top` offset with CSS Custom Properties

To create the stacking effect, each sticky section has a different `top` value. This is achieved by using a CSS custom property (`--index`) that is set dynamically for each component.

The `top` value is calculated using `calc(var(--index) * 2rem)`. This means that each subsequent section will be offset by an additional `2rem` from the top, creating the curtain effect.

### 3. Passing the `index`

The `<SliceZone>` component from `@prismicio/react` automatically provides an `index` prop to each slice it renders. This index corresponds to the order of the slice on the page.

This `index` is then used to set the `--index` custom property on the component's style.

## Scrolling Up and Down to Preview Content

The ability to scroll back up and see the previous sections is an inherent behavior of `position: sticky`. No additional JavaScript or libraries are needed to achieve this.

### How it works:

1.  **Scrolling Down:** As you scroll down, each new section becomes `sticky` when its top edge reaches the calculated `top` offset (`calc(var(--index) * 2rem)`). This makes it stick to the viewport, stacking on top of the previous sticky section.

2.  **Scrolling Up:** When you scroll back up, the process reverses. As the scroll position moves above the point where a section became sticky, the `position: sticky` property no longer has an effect on that section, and it scrolls up with the rest of the page, revealing the section underneath it.

This creates a seamless experience of previewing content by scrolling up and down, all handled by the browser's implementation of CSS `position: sticky`.

## Clarification on GSAP and ScrollTrigger

While this project uses **GSAP** and **@gsap/react** for other animations (like the parallax image effect and 3D model interactions), it's important to note that **the curtain effect itself does not use GSAP or the ScrollTrigger plugin.** The curtain effect is created entirely with CSS.

## Code Example

Here is the relevant code from `src/slices/TextAndImage/index.tsx`:

```tsx
const TextAndImage = ({ slice, index }: TextAndImageProps): JSX.Element => {
  // ...
  return (
    <Bounded
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        // ... other classes
      )}
      style={{ "--index": index }}
    >
      {/* ... content of the slice ... */}
    </Bounded>
  );
};
```

## How to use in your project

To replicate this effect in a different project, you need to:

1.  Have a list of components that you want to apply the effect to.
2.  When rendering the list, pass an `index` prop to each component.
3.  In the component, use the `index` to set a CSS custom property (e.g., `--index`).
4.  Apply `position: sticky` and a calculated `top` value using the custom property to the component's container.

For example, using Tailwind CSS:

```jsx
// Your component
const MyComponent = ({ index, children }) => {
  return (
    <section
      className="sticky top-[calc(var(--index)*2rem)]"
      style={{ '--index': index }}
    >
      {children}
    </section>
  );
};

// Your page
const MyPage = () => {
  const items = [/* ... your items ... */];

  return (
    <div>
      {items.map((item, index) => (
        <MyComponent key={item.id} index={index}>
          {/* ... your content ... */}
        </MyComponent>
      ))}
    </div>
  );
};
```

## Libraries and Tools Used

While the curtain effect itself is CSS-based, the project and the `TextAndImage` component utilize several libraries and tools for other functionalities.

### GSAP (GreenSock Animation Platform)

GSAP is used for other animations in the project, but not for the curtain effect.
- **`gsap`**: The core GSAP library. Version: `^3.12.5`
- **`@gsap/react`**: A helper library for using GSAP with React. Version: `^2.1.1`

### Other Libraries

- **`clsx`**: A tiny utility for constructing `className` strings conditionally. Version: `^2.1.1`
- **`@prismicio/react`**: Provides components for working with Prismic CMS content in React, including the `<SliceZone>` component. Version: `^2.9.1`
- **`@prismicio/client`**: The official Prismic client. Version: `^7.13.0`
- **`@prismicio/next`**: Prismic integration for Next.js. Version: `^1.7.1`
- **`next`**: The React framework used for this project. Version: `15.0.3`
- **`react`**: The JavaScript library for building user interfaces. Version: `19.0.0-rc-66855b96-20241106`
- **`tailwindcss`**: A utility-first CSS framework used for styling. Version: `^3.4.1`

This gives a more complete picture of the tools used in and around the components that create the curtain effect.
