# **Next JS**

## **Table of Content**

* [**Introduction**](#introduction)
* [**Getting Started: Hello World Application**](#getting-started-hello-world-application)
* [**Project Structure**](#project-structure)
* [**React Server Components**](#react-server-components)
* [**Routing**](#routing)
* [**Nested Routes**](#nested-routes)
* [**Dynamic Routes**](#dynamic-routes)
* [**Nested Dynamic Routes**](#nested-dynamic-routes)
* [**Catch-all Segments**](#catch-all-segments)
* [**Not Found Page**](#not-found-page)
* [**File Colocation**](#file-colocation)
* [**Private Folders**](#private-folders)
* [**Route Groups**](#route-groups)
* [**Layouts**](#layouts)
* [**Nested Layouts**](#nested-layouts)
* [**Multiple Root Layouts**](#multiple-root-layouts)
* [**Routing Metadata**](#routing-metadata)
* [**`title` Metadata**](#title-metadata)
* [**Active Links**](#active-links)
* [**`params` and `searchParams`**](#params-and-searchparams)
* [**Navigating Programmatically**](#navigating-programmatically)

## **Introduction**

* [**What is Next.js?**](#why-learn-next.js?)
* [**Why Learn Next.js?**](#why-learn-next.js?)
* [**Prerequisites**](#prerequisites)

### **What is Next.js?**

**Next.js** is a powerful React framework used to build **full-stack, production-ready web applications**. While React itself is a library focused solely on building user interfaces, it lacks the structure and features required for creating complete applications.

Next.js builds on top of React, providing a robust framework that includes:

* File-based routing
* Optimized rendering (server-side and client-side)
* Integrated API routes
* Bundling and compiling
* Performance optimizations

These features come built-in, so there’s no need to manually install or configure third-party libraries for most use cases. Next.js follows certain conventions and opinions, but they are based on real-world experience building production applications and make development more efficient and scalable.

---

### **Why Learn Next.js?**

Next.js greatly simplifies the process of building production-ready web applications. Some of the standout features include:

* [**File-Based Routing**](#file-based-routing)
* [**Built-In API Routes**](#built-in-api-routes)
* [**Rendering Flexibility**](#rendering-flexibility)
* [**Streamlined Data Fetching**](#streamlined-data-fetching)
* [**Performance Optimizations**](#performance-optimizations)
* [**Optimized Build System**](#optimized-build-system)

---

#### **File-Based Routing**

Instead of configuring a routing library manually (as in traditional React apps), you simply create files in the `app` or `pages` directory, and routes are generated automatically.

---

#### **Built-In API Routes**

Next.js allows you to build both frontend React components and backend APIs in the same codebase. This tight integration streamlines development and simplifies full-stack applications.

---

#### **Rendering Flexibility**

Next.js supports multiple rendering methods:

* Server-Side Rendering (SSR)
* Static Site Generation (SSG)
* Client-Side Rendering (CSR)

This flexibility allows for better performance and SEO (Search Engine Optimization).

---

#### **Streamlined Data Fetching**

With built-in support for asynchronous data fetching in React components, fetching data becomes more intuitive and efficient.

---

#### **Styling Options**

Next.js supports various styling methods:

* CSS Modules
* Tailwind CSS
* CSS-in-JS solutions

---

#### **Performance Optimizations**

Next.js includes automatic optimizations for:

* Images
* Fonts
* Scripts

These help improve **Core Web Vitals** and enhance the overall user experience.

---

#### **Optimized Build System**

Next.js offers a seamless development experience and an efficient production build pipeline—allowing you to focus on building features rather than dealing with configurations.

---

### **Prerequisites**

Before starting with Next.js, you should be familiar with:

* **HTML and CSS**
* **Modern JavaScript** (ES6+)
* **React fundamentals**, including:

  * Functional components
  * Props and state
  * JSX
  * React Hooks

---

## **Getting Started Hello World Application**

Let's begin by setting up a simple **Hello World** application using Next.js. This step will walk you through setting up your development environment and creating your first project.

* [**Prerequisites**](#prerequisites)
* [**Step 1: Create a Project Folder**](#step-1-create-a-project-folder)
* [**Step 2: Create a New Next.js App**](#step-2-create-a-new-next.js-app)
* [**Step 3: Run the Development Server**](#step-3-run-the-development-server)
* [**Step 4: Make Your First Edit**](#step-4-make-your-first-edit)

---

### **Prerequisites**

Before creating a Next.js app, ensure the following are installed on your system:

* **Node.js** (version **18.18.0** or later): Download from [nodejs.org](https://nodejs.org/)
* **Code Editor**: Any editor will work, but **Visual Studio Code** is recommended ([Download VS Code](https://code.visualstudio.com/))

---

### **Step 1 Create a Project Folder**

Create a folder to store your project files:

```bash
mkdir nextjs-tutorial
cd nextjs-tutorial
```

Open the folder in your code editor. If you're using VS Code:

```bash
code .
```

---

### **Step 2 Create a New Next.js App**

Run the following command in your terminal to scaffold a new Next.js project:

```bash
npx create-next-app@latest
```

You will be prompted to answer some configuration questions. Use the following choices:

| Prompt                               | Choice               |
| ------------------------------------ | -------------------- |
| Project name                         | `hello-world`        |
| TypeScript                           | Yes                  |
| ESLint                               | Yes                  |
| Tailwind CSS                         | Yes                  |
| Source directory                     | Yes (`/src`)         |
| App Router                           | Yes (recommended)    |
| Customize import alias               | No (default setting) |
| Use Turbopack (experimental bundler) | No                   |

Once completed, a new folder called `hello-world` will be created with your Next.js project setup.

---

### **Step 3 Run the Development Server**

Navigate into the project folder:

```bash
cd hello-world
```

Start the development server:

```bash
npm run dev
```

The application will be running at [http://localhost:3000](http://localhost:3000). Open the link in your browser.

You should see the default Next.js welcome page with the message:

> Get started by editing `src/app/page.tsx`

---

### **Step 4 Make Your First Edit**

To test live editing, follow these steps:

1. In your editor, open:
   `src/app/page.tsx`

2. Locate the section that says:
   *"Get started by editing `src/app/page.tsx`"*

3. Replace the second list item text with:

```tsx
Hello World
```

4. Save the file. Your browser will automatically refresh, and you’ll see your changes reflected instantly.

Congratulations — your first Next.js application is up and running!

---

## **Project Structure**

After creating and running a basic Next.js application, it's important to understand the structure of the project. This section breaks down the key files and folders that power your app.

* [**Key Files**](#key-files)
* [**Key Folders**](#key-folders)
* [**How It All Works**](#how-it-all-works)

---

### **Key Files**

* [**`package.json`**](#package.json)
* [**Configuration Files**](#configuration-files)
* [**Other Files**](#other-files)

#### **`package.json`**

* Manages **project dependencies** and **scripts**.
* Common dependencies include:

  * `next` (v15)
  * `react` and `react-dom` (v19)
  * Optionally: `typescript`, `@types/*`, `tailwindcss`, `postcss`, `eslint`

* Common scripts:

  * `dev` – Start development server
  * `build` – Build for production
  * `start` – Start the production server
  * `lint` – Run ESLint using built-in configuration

#### **Configuration Files**

* `next.config.js` – Next.js configuration
* `tsconfig.json` – TypeScript settings
* `eslint.config.js` – ESLint configuration
* `tailwind.config.js` & `postcss.config.js` – Tailwind CSS setup

#### **Other Files**

* `package-lock.json` – Locks dependency versions for consistent installs
* `.gitignore` – Files and folders to ignore in version control
* `README.md` – Project overview and instructions
* `next-env.d.ts` – TypeScript environment declarations for Next.js

---

### **Key Folders**

* [**`.next/`**](#.next/)
* [**`node_modules/`**](#node_modules/)
* [**`public/`**](#public/)
* [**`src/`**](#src/)

#### **`.next/`**

* Generated automatically during development or build.
* Stores compiled output and other internal data.
* **Ignored by version control** – no need to interact with it.

#### **`node_modules/`**

* Contains all project dependencies.
* Created by `npm install` or during initial project setup.
* Also **ignored by version control**.

#### **`public/`**

* Stores **static assets** like images, SVGs, and favicon files.
* Files in this folder are served at the root path (`/`).

#### **`src/`**

This is where most of the application code lives.

**Inside `src/`:**

* **`app/`** – The entry point of the application using the **App Router** (available from Next.js 13+).

**Files inside `app/`:**

* `favicon.ico` – Browser tab icon.
* `global.css` – Global styles for the app.
* `layout.tsx` – Root layout file. Used to wrap pages with shared UI (like headers, footers, themes).
* `page.tsx` – The **home page** of your app (`/` route). This is what you initially see when visiting `http://localhost:3000`.

> The component in `page.tsx` is passed as a child to the layout defined in `layout.tsx`. This composition defines the full structure of your home page.

You might notice a font import in `layout.tsx` (such as a Google font). This may appear differently depending on the exact minor version of Next.js, but it doesn’t impact core learning.

---

### **How It All Works**

When you run:

```bash
npm run dev
```

The development server starts and executes the following flow:

1. **`package.json`** provides the `dev` script.
2. The **root layout** (`layout.tsx`) is rendered.
3. For the root URL (`/`), Next.js looks for `page.tsx` inside the `app/` folder.
4. The component from `page.tsx` is rendered as a child inside `layout.tsx`.

This is how the base UI is constructed and served at `http://localhost:3000`.

---

## **React Server Components**

Before diving into routing in Next.js, it's important to understand a core concept introduced in modern React and adopted by Next.js: **React Server Components (RSC)**.

* [**What Are React Server Components?**](#what-are-react-server-components?)
* [**Server vs Client Components**](#server-vs-client-components)
* [**When to Use Each**](#when-to-use-each)
* [**Why This Matters for Routing**](#why-this-matters-for-routing)

---

### **What Are React Server Components?**

React Server Components represent a new architecture developed by the React team that introduces a more powerful and efficient way to build applications by dividing components into two categories:

* **Server Components**
* **Client Components**

This model is fully supported in **Next.js 13+**, and is a default behavior in **Next.js 15+**.

---

### **Server vs Client Components**

* [**Server Components**](#server-components)
* [**Client Components**](#client-components)

#### **Server Components**

* Executed **on the server**.
* Can perform server-side operations such as:

  * Reading from the file system
  * Fetching data directly from databases

* **Cannot** use React hooks (e.g., `useState`, `useEffect`) or handle browser events (e.g., `onClick`).
* Ideal for performance, SEO, and resource-heavy tasks that don’t require user interaction.

#### **Client Components**

* Executed **in the browser**.
* Enable full interactivity:

  * Can use **React hooks**
  * Can handle **user interactions**
* Must begin with a special directive at the top of the file:

  ```tsx
  'use client';
  ```
* These behave just like traditional React components.

---

### **When to Use Each**

* Use **Server Components** by default whenever possible for performance and simplicity.
* Use **Client Components** when you need:

  * Hooks like `useState`, `useEffect`, `useRouter`, etc.
  * DOM events and interactions (clicks, forms, etc.)
  * Dynamic rendering on the client side

---

### **Why This Matters for Routing**

Understanding the distinction between server and client components is critical before learning how **routing** works in Next.js. Many routing features (like transitions, navigation hooks, or loading indicators) rely on using client components effectively.

---

## **Routing**

Routing is one of the core features of **Next.js**, and it follows a **file-based routing** system. This means your app’s URL structure is directly mapped from how you organize folders and files within the `app` directory.

* [**Key Routing Conventions in Next.js**](#key-routing-conventions-in-next.js)
* [**Scenario 1 Create a Homepage**](#scenario-1-create-a-homepage)
* [**Scenario 2 Create `About` and `Profile` Routes**](#scenario-2-create-about-and-profile-routes)
* [**Summary of Key Routing Concepts**](#summary-of-key-routing-concepts)

---

### **Key Routing Conventions in Next.js**

Next.js routing is based on a few important conventions:

1. **All routes must live inside the `app/` folder** (which itself lives inside `src/`).
2. **Each route must be defined in a file named `page.tsx`** (or `page.js` if not using TypeScript).
3. **Each folder represents a segment of the URL path.**

---

### **Scenario 1 Create a Homepage**

We want a simple homepage available at: `http://localhost:3000/`.

**Steps:**

1. Inside the `src/` directory, create a new folder called `app/`.
2. Inside the `app/` folder, create a file named `page.tsx`.
3. Add the following code:

```tsx
export default function Home() {
  return <h1>Welcome Home</h1>;
}
```

4. Start the dev server:

```bash
npm run dev
```

Visit `http://localhost:3000/` in your browser—you'll see "Welcome Home" rendered.

> **Note**: Even though we deleted the original `layout.tsx`, Next.js will regenerate it behind the scenes as part of its default behavior. We'll cover layouts in detail later.

---

### **Scenario 2 Create `About` and `Profile` Routes**

We’ll now create two new routes:

* `/about` → shows an About page
* `/profile` → shows a Profile page

**Steps:**

1. In the `app/` folder, create a new folder named `about/`.
2. Inside `about/`, create a file named `page.tsx` with:

```tsx
export default function About() {
  return <h1>About Me</h1>;
}
```

3. Similarly, create another folder inside `app/` called `profile/`.
4. Inside `profile/`, create `page.tsx` with:

```tsx
export default function Profile() {
  return <h1>My Profile</h1>;
}
```

5. Save the files and navigate to the URLs:

   * `http://localhost:3000/about` → displays "About Me"
   * `http://localhost:3000/profile` → displays "My Profile"

---

### **Summary of Key Routing Concepts**

* `page.tsx` inside the `app/` folder maps to the root route `/`.

* Each folder in `app/` represents a **URL segment**.

* A `page.tsx` file inside a folder maps to that folder's **route path**.

  For example:

  ```
  src/
  └── app/
      ├── page.tsx              --> /
      ├── about/
      │   └── page.tsx          --> /about
      └── profile/
          └── page.tsx          --> /profile
  ```

* If a user navigates to a route that doesn’t exist (e.g., `/dashboard`), Next.js automatically returns a **404 Not Found** page.

---

## **Nested Routes**

Routing uses a **file-based routing system**, where folders and files under the `app/` directory determine the structure of your application’s URLs. Now, let’s explore **nested routing** by implementing a `blog` section with its own sub-routes.

* [**Scenario 3 Create a Blog Route with Nested Pages**](#scenario-3-create-a-blog-route-with-nested-pages)
* [**Creating Nested Routes**](#creating-nested-routes)
* [**Route Structure Summary**](#route-structure-summary)

---

### **Scenario 3 Create a Blog Route with Nested Pages**

We want to implement the following routes:

* `/blog` – Main blog landing page
* `/blog/first` – First blog post
* `/blog/second` – Second blog post

**Steps:**

1. Inside the `app/` directory, create a folder named `blog/`.
2. Inside `blog/`, create a `page.tsx` file:

```tsx
export default function Blog() {
  return <h1>My Blog</h1>;
}
```

3. This will render at `http://localhost:3000/blog`.

---

### **Creating Nested Routes**

To handle `/blog/first` and `/blog/second`, follow these steps:

1. Inside the `blog/` folder, create two subfolders: `first/` and `second/`.
2. In each of those folders, create a `page.tsx` file:

**`app/blog/first/page.tsx`**

```tsx
export default function FirstBlogPost() {
  return <h1>First Blog Post</h1>;
}
```

`app/blog/second/page.tsx`

```tsx
export default function SecondBlogPost() {
  return <h1>Second Blog Post</h1>;
}
```

3. Now the following routes are available:

   * `http://localhost:3000/blog/first` → shows *First Blog Post*
   * `http://localhost:3000/blog/second` → shows *Second Blog Post*

---

### **Route Structure Summary**

Your folder and file structure now looks like this:

```
src/
└── app/
    └── blog/
        ├── page.tsx           → /blog
        ├── first/
        │   └── page.tsx       → /blog/first
        └── second/
            └── page.tsx       → /blog/second
```

**Key Takeaway**

Next.js automatically mirrors your folder structure into URL routes. You don’t need to write route configuration files or install any extra libraries—**just follow the folder and file naming conventions**, and routing will work out of the box.

Next, we’ll explore something even more powerful: **Dynamic Routes**.

Here is the **Dynamic Routes** section of your tutorial, rewritten clearly and professionally for your README:

---

## **Dynamic Routes**

Previous example, we've seen how **nested routing** works by creating folders like `/blog/first` and `/blog/second`. However, this approach doesn't scale well for large datasets or content fetched dynamically. That’s where **dynamic routes** come in.

* [**Scenario 4 Product Listing and Dynamic Detail Pages**](#scenario-4-product-listing-and-dynamic-detail-pages)
* [**Step 1 Create the Static Product List**](#step-1-create-the-static-product-list)
* [**Step 2 Set Up the Dynamic Route**](#step-2-set-up-the-dynamic-route)
* [**Dynamic Segments**](#dynamic-segments)
* [**Dynamic Routing Structure Summary**](#dynamic-routing-structure-summary)

---

### **Scenario 4 Product Listing and Dynamic Detail Pages**

We want to implement two types of routes:

* `/products` – A static list of products
* `/products/[productId]` – A dynamic route that displays product details based on the ID

---

### **Step 1 Create the Static Product List**

1. Inside the `app/` directory, create a `products/` folder.
2. Inside `products/`, create a `page.tsx` file:

```tsx
export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
}
```

* This page will render at `http://localhost:3000/products`.

---

### **Step 2 Set Up the Dynamic Route**

Manually creating a folder for every product ID (like `/products/1`, `/products/2`, etc.) isn’t scalable. Instead, we use **dynamic segments**.

1. Inside the `products/` folder, create a new folder named `[productId]/`.
2. Inside `[productId]/`, create a `page.tsx` file:

```tsx
// app/products/[productId]/page.tsx

type Params = {
  params: {
    productId: string;
  };
};

export default async function ProductDetails({ params }: Params) {
  const { productId } = params;

  return <h1>Details about Product {productId}</h1>;
}
```

* This file handles all routes like:

  * `/products/1`
  * `/products/2`
  * `/products/iPhone`
  * `/products/abc123`

---

### **Dynamic Segments**

* A folder name in square brackets like `[productId]` tells Next.js to treat it as a **dynamic route parameter**.
* The `params` object contains all route parameters and is **available to server components** as a prop.

---

### **Dynamic Routing Structure Summary**

Here’s what your folder structure looks like now:

```
src/
└── app/
    └── products/
        ├── page.tsx              → /products
        └── [productId]/
            └── page.tsx          → /products/:productId
```

Now any route that matches `/products/*` is handled dynamically.

---

**Example Output**

* Visiting `/products/1` shows: **Details about Product 1**
* Visiting `/products/abc` shows: **Details about Product abc**

---

## **Nested Dynamic Routes**

In many real-world applications, you'll often need to handle **multiple dynamic segments** in a single URL. That’s where **nested dynamic routing** becomes incredibly useful.

* [**Scenario 5 Product Reviews**](#scenario-5-product-reviews)
* [**Step-by-Step Setup**](#step-by-step-setup)
* [**Nested Dynamic Routing Structure Summary**](#nested-dynamic-routing-structure-summary)

---

### **Scenario 5 Product Reviews**

We’ve already implemented dynamic product detail pages at:

```
/products/[productId]
```

Now, we want to extend this further to support product reviews like:

```
/products/[productId]/reviews/[reviewId]
```

This means:

* `/products/1` shows **Product 1 details**
* `/products/1/reviews/1` shows **Review 1 for Product 1**

---

### **Step-by-Step Setup**

* [**Step 1 Start from Existing Dynamic Route**](#step-1-start-from-existing-dynamic-route)
* [**Step 2 Add `reviews/` Folder**](#step-2-add-reviews/-folder)
* [**Step 3 Add Dynamic `[reviewId]/` Folder**](#step-3-add-dynamic-[reviewid]/-folder)

#### **Step 1 Start from Existing Dynamic Route**

We already have this structure:

```
app/
└── products/
    └── [productId]/
        └── page.tsx   → /products/:productId
```

#### **Step 2 Add `reviews/` Folder**

Inside `app/products/[productId]/`, create a folder named `reviews`. This will map to:

```
/products/:productId/reviews
```

#### **Step 3 Add Dynamic `[reviewId]/` Folder**

Inside the `reviews/` folder, create a new folder named `[reviewId]`.

Inside `[reviewId]/`, add a `page.tsx` file:

```tsx
// app/products/[productId]/reviews/[reviewId]/page.tsx

type Params = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default async function ProductReview({ params }: Params) {
  const { productId, reviewId } = params;

  return <h1>Review {reviewId} for Product {productId}</h1>;
}
```

Now, when you visit:

* `/products/1/reviews/1` → You’ll see **Review 1 for Product 1**

* `/products/100/reviews/5` → You’ll see **Review 5 for Product 100**

---

### **Nested Dynamic Routing Structure Summary**

```
src/
└── app/
    └── products/
        └── [productId]/
            ├── page.tsx              → /products/:productId
            └── reviews/
                └── [reviewId]/
                    └── page.tsx      → /products/:productId/reviews/:reviewId
```

---

**Key Takeaway**

You can create nested dynamic routes easily using folders with square brackets:

* `[productId]` is the first dynamic segment
* `[reviewId]` is a nested dynamic segment

Each segment corresponds to a part of the URL and is made available through the `params` object in your component.

---

## **Catch-all Segments**

Catch-all segments in Next.js allow you to handle dynamic routes with multiple path segments using just a **single file**. This is especially powerful for documentation sites, wikis, and other apps that require deeply nested or flexible routing structures.

* [**Scenario 6 Documentation Site with Nested Routes**](#scenario-6-documentation-site-with-nested-routes)
* [**Use a Catch-all Route**](#use-a-catch-all-route)
* [**Optional Catch-all Segments**](#optional-catch-all-segments)
* [**Catch-all Segments Structure Summary**](#catch-all-segments-structure-summary)

---

### **Scenario 6 Documentation Site with Nested Routes**

Imagine building a documentation site where each feature contains several concepts, and each concept might have further nested examples. Example routes:

```
/docs/feature1/concept1  
/docs/feature1/concept2  
/docs/feature2/concept1/example1  
...
```

Now, if you had 20 features and each had 20 concepts, you'd be looking at **400+ different routes**. File-based routing would make this hard to scale—unless we use **dynamic** and **catch-all segments**.

---

### **Use a Catch-all Route**

We can simplify this setup to just **one** route handler using a catch-all segment.

* [**Step 1 Create the Catch-all Folder**](#step-1-create-the-catch-all-folder)
* [**Step 2 Implement the Component**](#step-2-implement-the-component)

#### **Step 1 Create the Catch-all Folder**

In your `app` directory, create the following structure:

```
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

* The folder `[...slug]` uses the `...` syntax (like the JavaScript spread operator), which means: “match **any number of path segments**.”
* Inside `[...slug]`, create a `page.tsx` file.

---

#### **Step 2 Implement the Component**

Here’s a simple example of how to access and display the segments:

```tsx
// app/docs/[...slug]/page.tsx

type Params = {
  params: {
    slug?: string[];
  };
};

export default async function DocsPage({ params }: Params) {
  const slug = params.slug ?? [];

  if (slug.length === 2) {
    return <h1>Viewing docs for feature "{slug[0]}" and concept "{slug[1]}"</h1>;
  }

  if (slug.length === 1) {
    return <h1>Viewing docs for feature "{slug[0]}"</h1>;
  }

  return <h1>Docs homepage</h1>;
}
```

Now try visiting these routes:

* `/docs/routing` → Viewing docs for feature **routing**

* `/docs/routing/catch-all-segments` → Viewing docs for feature **routing** and concept **catch-all-segments**

* `/docs` → You’ll see a **404** error (but we’ll fix that next!)

---

### **Optional Catch-all Segments**

To handle even `/docs` using the same file, make the segment **optional** by renaming the folder to:

```
[[...slug]]
```

So now the structure becomes:

```
app/
└── docs/
    └── [[...slug]]/
        └── page.tsx
```

Now, `/docs` will also be matched and render the same page component.

**Use Cases**

Use **optional catch-all segments** when:

* You want a single page to handle multiple levels of routes.
* The layout or logic of the page depends on the depth or content of the route.

---

### **Catch-all Segments Structure Summary**

```
app/
├── page.tsx                  → /
└── docs/
    └── [[...slug]]/
        └── page.tsx          → /docs/* (all depths)
```

* **Catch-all segments** (`[...slug]`) match any number of nested route segments.
* **Optional catch-all segments** (`[[...slug]]`) also match when no segments are present.
* Use `params.slug` to access the segments in your component.
* Ideal for documentation sites, blogs, and pages with variable depth.

---

## **Not Found Page**

Next.js makes it simple to define a **custom 404 page** using the App Router. This allows you to provide a more branded and user-friendly experience when users navigate to a route that doesn’t exist.

By default, visiting an unknown route (e.g. `http://localhost:3000/building`) will display a generic Next.js 404 page, which is fine for development but insufficient for production environments.

* [**Step 1 Create a Global Not Found Page**](#step-1-create-a-global-not-found-page)
* [**Triggering Not Found Programmatically**](#triggering-not-found-programmatically)
* [**Route-Specific Not Found**](#route-specific-not-found)

---

### **Step 1 Create a Global Not Found Page**

Create a `not-found.tsx` file in the `app/` directory:

```
app/
├── not-found.tsx
```

```tsx
// app/not-found.tsx

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find the requested resource.</p>
    </div>
  );
}
```

This file will **automatically** be used by Next.js for all unmatched routes.

---

### **Triggering Not Found Programmatically**

Sometimes you want to manually show a 404 page from within a page. For example, if your product review system should not show reviews above ID 1000, use the `notFound()` function:

```tsx
// app/products/[productId]/reviews/[reviewId]/page.tsx
import { notFound } from 'next/navigation';

export default function ProductReview({ params }: { params: { reviewId: string } }) {
  const reviewId = parseInt(params.reviewId);

  if (reviewId > 1000) {
    notFound();
  }

  return <h1>Review ID: {reviewId}</h1>;
}
```

---

### **Route-Specific Not Found**

You can also create **section-specific** not-found pages by adding `not-found.tsx` within route folders. Next.js will use the **closest** matching `not-found.tsx`.

For example:

```
app/
└── products/
    └── [productId]/
        └── reviews/
            └── [reviewId]/
                ├── page.tsx
                └── not-found.tsx   ← More specific 404
```

```tsx
// app/products/[productId]/reviews/[reviewId]/not-found.tsx

'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split('/');

  const productId = segments[2];
  const reviewId = segments[4];

  return (
    <div>
      <h2>Review {reviewId} Not Found for Product {productId}</h2>
    </div>
  );
}
```

> **Note:** Since you're using the `usePathname()` hook, mark this file as a **client component** with `'use client'`.

---

## **File Colocation**

While Next.js follows a **file-system based routing** convention, it’s also **flexible** about how you organize your files and folders. This concept is known as **file colocation**, and it plays a key role in keeping your project maintainable and scalable.

* [**Understanding File Colocation**](#understanding-file-colocation)
* [**Organizing Your Project**](#organizing-your-project)

---

### **Understanding File Colocation**

Each folder in the `app/` directory represents a **route segment** that maps directly to a URL path. But **a route only becomes accessible if a `page.tsx` file exists within that folder**.

* [**Example Creating a Route**](#example-creating-a-route)
* [**Making the Route Public**](#making-the-route-public)

---

#### **Example Creating a Route**

Suppose we create a folder and a component like this:

```
app/
└── dashboard/
    └── LineChart.tsx
```

```tsx
// app/dashboard/LineChart.tsx

export default function LineChart() {
  return <h1>Line Chart</h1>;
}
```

Now, if you visit `/dashboard` in the browser, you’ll get a **404 error**.

Why? Because there's **no `page.tsx`** in the `dashboard` folder yet.

---

#### **Making the Route Public**

Now add a `page.tsx` file:

```tsx
// app/dashboard/page.tsx

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}
```

Now `/dashboard` will render correctly in the browser, showing the "Dashboard" heading.


> * Only files named `page.tsx` (or `layout.tsx`, `loading.tsx`, etc.) are **treated as special** by the router.
>
> * Any other file (e.g. `BarChart.tsx`, `utils.ts`) **can be safely colocated** inside the same folder without making it a route.
> 
> * These files won't be publicly accessible or interfere with routing, unless explicitly used by a `page.tsx` or another component.

---

### **Organizing Your Project**

Next.js allows flexibility in how you organize supporting files:

* You **can colocate** components, helpers, and modules inside the `app/` route folders for tight cohesion.
* Alternatively, you **can separate** UI components into a dedicated `components/` or `src/` folder outside of `app/`, which is a common pattern in many large-scale projects.

> Example: The `shadcn/ui` library follows the separate `components/` structure for clean separation of concerns.

---

## **Private Folders**

As we just explored file collocation, let’s now dive into a **Next.js-exclusive organizational feature** called **private folders**. This pattern helps keep your project clean and focused by **excluding internal folders from routing**.

* [**What is a Private Folder?**](#what-is-a-private-folder?)
* [**Example Creating a Private Folder**](#example-creating-a-private-folder)
* [**Why Use Private Folders?**](#why-use-private-folders?)

---

### **What is a Private Folder?**

A **private folder** in Next.js is any folder **prefixed with an underscore (`_`)**. These folders and their contents are **ignored by the routing system**.

> Useful for keeping internal utilities, helpers, or non-UI logic separate from your app’s public routing structure.

---

### **Example Creating a Private Folder**

Let’s walk through it.

```
app/
└── _lib/
    ├── formatDate.ts
    └── page.tsx ← This won't be routable
```

```tsx
// app/_lib/page.tsx

export default function PrivateRoute() {
  return <h1>You cannot view this in the browser</h1>;
}
```

If you now navigate to `/lib` in the browser, you’ll get a **404 error** – because `_lib` is a private folder.

Even though it contains a valid `page.tsx` file, **Next.js excludes it from route generation**.

---

### **Why Use Private Folders?**

Private folders are a great way to:

* **Keep routing logic clean** by isolating internal logic.
* **Avoid naming conflicts** with future Next.js reserved filenames.
* **Group utilities and internal components** for easier navigation in editors.
* **Maintain a consistent project structure** for teams and large projects.

---

## **Route Groups**

**Route Groups** are a powerful way to **organize your project’s routing structure without affecting the URL paths**. They help teams manage complex apps while keeping URLs clean and intuitive.

* [**What Are Route Groups?**](#what-are-route-groups?)
* [**Scenario Organizing Auth Routes**](#scenario-organizing-auth-routes)
* [**Grouping Auth Routes**](#grouping-auth-routes)

---

### **What Are Route Groups?**

* A **route group** is a folder wrapped in parentheses like `(group-name)` inside the `app/` directory.
* Files inside a route group behave **exactly the same** as regular routes.
* The **folder name is excluded from the URL**.

> Route groups are also the **only way to share layouts** between multiple routes **without changing the URL structure**.

---

### **Scenario Organizing Auth Routes**

Let’s say we are building the following auth routes:

* `/register`
* `/login`
* `/forgot-password`

First, create individual folders for each:

```
app/
├── register/
│   └── page.tsx
├── login/
│   └── page.tsx
└── forgot-password/
    └── page.tsx
```

Each `page.tsx`:

```tsx
// app/register/page.tsx
export default function Register() {
  return <h1>Register</h1>;
}
```

```tsx
// app/login/page.tsx
export default function Login() {
  return <h1>Login</h1>;
}
```

```tsx
// app/forgot-password/page.tsx
export default function ForgotPassword() {
  return <h1>ForgotPassword</h1>;
}
```

So far, everything works great — but the auth routes are scattered.

---

### **Grouping Auth Routes**

To improve structure, let’s move these into a logical group:

```
app/
└── (auth)/
    ├── register/
    ├── login/
    └── forgot-password/
```

> Rename the folder as `(auth)` – **parentheses indicate a route group**.

**Resulting URLs:**

* `/register`
* `/login`
* `/forgot-password`

> URLs stay clean — just like before.
>
> Internally, code is now much better organized.

---

## **Layouts**

**Layouts** allow you to define **shared UI** that stays consistent across multiple routes — such as headers, footers, navigation menus, and more. Next.js makes working with layouts simple and powerful.

* [**What Is a Layout?**](#what-is-a-layout?)
* [**The Root Layout**](#the-root-layout)
* [**Example Basic Layout**](#example-basic-layout)
* [**How It Renders**](#how-it-renders)

---

### **What Is a Layout?**

A layout is a **React component** that wraps your route-specific page content using the `children` prop.

**Common use cases:**

* Headers and footers
* Sidebars
* Authentication wrappers
* Global layout styles

---

### **The Root Layout**

Every Next.js project using the App Router **must** include a `layout.tsx` file in the root of the `app/` directory.

```bash
app/
├── layout.tsx   ← Root layout (mandatory)
├── page.tsx     ← Home page content
```

> If you delete `layout.tsx`, Next.js **automatically regenerates it**.

---

### **Example Basic Layout**

Here's a minimal `layout.tsx` file with shared layout content:

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>

        {children}  {/* Page-specific content gets rendered here */}

        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
```

- The `children` prop dynamically renders the content of `page.tsx` for the current route.

---

### **How It Renders**

When you visit:

* `/` → content from `app/page.tsx` is injected into `layout.tsx`
* `/about` → content from `app/about/page.tsx` is injected
* `/profile` → content from `app/profile/page.tsx` is injected

But the **layout remains constant** — with the same header and footer.

> This helps maintain consistent structure and styling across all pages.

---

## **Nested Layouts**

In addition to the required **root layout**, Next.js allows you to create **nested layouts** — layouts that apply to a specific route or group of routes. This gives you fine-grained control over the UI for different sections of your app.

* [**Why Use Nested Layouts?**](#why-use-nested-layouts?)
* [**Example Nested Layout for Product Details**](#example-nested-layout-for-product-details)
* [**Nested Layout How It Renders**](#nested-layout-how-it-renders)

---

### **Why Use Nested Layouts?**

You might want:

* A custom layout for product details pages
* A cleaner layout for authentication routes
* Unique sidebars or headers for specific sections

Nested layouts make that possible.

---

### **Example Nested Layout for Product Details**

Let’s build a special layout for product detail pages:

* [**File structure**](#file-structure)
* [**`products/[productId]/layout.tsx`**](#products/[productid]/layout.tsx)

#### **File structure**

```
app/
├── layout.tsx                   # Root layout (with header/footer)
├── products/
│   ├── page.tsx                 # Product list page
│   └── [productId]/
│       ├── page.tsx            # Product detail by ID
│       └── layout.tsx          # Custom layout for product details
```

#### **`products/[productId]/layout.tsx`**

Create `layout.tsx` in [productId]

```tsx
// app/products/[id]/layout.tsx
export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}
```

This layout will **wrap around** the page at `products/[productId]/page.tsx`.

---

### **Nested Layout How It Renders**

Let’s walk through what happens when you visit different routes:

| URL           | Layouts Applied                               | Content Rendered                                   |
| ------------- | --------------------------------------------- | -------------------------------------------------- |
| `/`           | `app/layout.tsx`                              | Root layout → `app/page.tsx`                       |
| `/products`   | `app/layout.tsx`                              | Root layout → `products/page.tsx`                  |
| `/products/1` | `app/layout.tsx` → `products/[productId]/layout.tsx` | Root layout → ProductDetails layout → Product page |

- The `products/[productId]/layout.tsx` file only applies to dynamic product routes — it adds the `Featured Products` heading above the main page content.

---

## **Multiple Root Layouts**

By default, your Next.js app has **one root layout** (`layout.tsx` in the `app/` folder), which wraps every page in your application. But what if different parts of your app require **different layouts**?

For example:

* Marketing pages (e.g., `/revenue`, `/customers`) need a **header and footer**
* Authentication pages (e.g., `/login`, `/register`) should be **clean and minimal**

This is where **multiple root layouts** — powered by **route groups** — come in.

* [**Set Up Multiple Root Layouts**](#set-up-multiple-root-layouts)

---

### **Set Up Multiple Root Layouts**

We’ll organize our app using **route groups**, which let us apply layouts without affecting URLs.

* [**Create Route Groups**](#create-route-groups)
* [**Create Layouts for Each Route Group**](#create-layouts-for-each-route-group)
* [**Move Pages into Route Groups**](#move-pages-into-route-groups)

#### **Create Route Groups**

In your `app/` folder:

```
app/
├── (marketing)/           ← Route group for marketing pages
│   ├── layout.tsx         ← Marketing layout (with header & footer)
│   ├── page.tsx           ← Home page
│   ├── revenue/
│   └── customers/
├── (auth)/                ← Route group for auth pages
│   ├── layout.tsx         ← Auth layout (footer only)
│   ├── login/
│   └── register/
```

> Folders wrapped in `()` denote **route groups** — organizational only, ignored in the URL path.

---

#### **Create Layouts for Each Route Group**

**`(marketing)/layout.tsx`**

```tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <p>Header</p>
      </header>
      {children}
      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
        <p>Footer</p>
      </footer>
    </>
  );
}
```

**`(auth)/layout.tsx`**

```tsx
// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
        <p>Footer</p>
      </footer>
    </>
  );
}
```

---

#### **Move Pages into Route Groups**

* Move `login/` and `register/` into the `(auth)/` folder
* Move `revenue/`, `customers/`, and the main `page.tsx` into the `(marketing)/` folder

> Every page now lives **inside a route group**, each with its **own root layout**.

**What Happens Now?**

Despite changing the folder structure...

* `/login` and `/register` still work — now using the **auth layout** (minimal)
* `/revenue`, `/customers`, and `/` now use the **marketing layout** (with header & footer)
* **URLs stay the same** — because route group names are not part of the path

---

Here's your next tutorial section for the **README file**, focusing on **Routing Metadata** in Next.js App Router:

---

## **Routing Metadata**

Next.js makes it easy to manage **SEO and social preview information** through the **metadata API**, which allows you to define page titles, descriptions, Open Graph tags, and more.

You can configure metadata in both:

* `layout.tsx` → metadata applies to **all nested pages**
* `page.tsx` → metadata applies **only to that specific page**

* [**Static Metadata**](#static-metadata)
* [**Dynamic Metadata with `generateMetadata`**](#dynamic-metadata-with-generatemetadata)
* [**Metadata and `use client`**](#metadata-and-use-client)

---

### **Static Metadata**

The simplest way to define metadata is by exporting a static object.

* [**Example Root `layout.tsx`**](#example-root-layout.tsx)
* [**Example `about/page.tsx`**](#example-about/page.tsx)

#### **Example Root `layout.tsx`**

```tsx
// app/layout.tsx
export const metadata = {
  title: "Next.js App",
  description: "Generated by Next.js",
};
```

#### **Example `about/page.tsx`**

```tsx
// app/about/page.tsx
export const metadata = {
  title: "About | Code Evolution",
};
```

**How it works**:

* Metadata is **merged top-down**
* Deeper segments (like `page.tsx`) **override** values defined at the layout level
* In the example above:

  * Title = "About | Code Evolution"
  * Description = "Generated by Next.js" (inherited)

---

### **Dynamic Metadata with `generateMetadata`**

For dynamic routes or data-driven content, you can define metadata using the `generateMetadata` function.

**Use Case Dynamic Product Page**

```tsx
// app/products/[productId]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = params;

  // Simulate fetching data
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${productId}`), 100);
  });

  return {
    title: `Product | ${title}`,
  };
}
```

**When to use `generateMetadata`**:

* Dynamic route segments (like `[id]`)
* Data from an API or database
* Metadata based on route parameters

---

### **Metadata and `use client`**

> You **cannot** export `metadata` or `generateMetadata` in a file using the `use client` directive.

**This will throw an error**

```tsx
// app/counter/page.tsx
'use client';

export const metadata = {
  title: 'Counter',
};

// Will cause: Error - cannot export metadata from client component
```

---

#### **Correct Pattern for Client Components**

Split your logic into:

* A **server component** (for metadata export)
* A **client component** (for interactivity like `useState`, `useEffect`)

**Example Structure:**

```bash
app/
├── counter/
│   ├── Counter.tsx       ← Client component
│   └── page.tsx          ← Server component (exports metadata)
```

**`Counter.tsx` (Client)**

```tsx
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**`page.tsx` (Server)**

```tsx
import { Counter } from './Counter';

export const metadata = {
  title: 'Counter',
};

export default function Page() {
  return <Counter />;
}
```

- Now the page renders with metadata **and** interactive logic — no errors.

---

## **`title` Metadata**

The `title` field in metadata is essential for setting the browser tab title and optimizing search engine visibility. Next.js supports **two ways** to define it:

* [**Simple Title**](#simple-title)
* [**Advanced Title**](#advanced-title)

### **Simple Title**

Set a title using a plain string:

```tsx
// page.tsx
export const metadata = {
  title: "About | Code Evolution",
};
```

> This directly renders the string into the `<title>` tag of the HTML document.

---

### **Advanced Title**

For more control, define `title` as an **object** with optional fields:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial – Code Evolution",
    template: "%s | Code Evolution",
  },
};
```

Let’s break down the options:

* [**`default`**](#default)
* [**`template`**](#template)
* [**`absolute`**](#absolute)

#### **`default`**

* Acts as a **fallback** for any child routes that don’t specify their own title.
* Useful for global defaults.

```tsx
title: {
  default: "Next.js Tutorial – Code Evolution",
}
```

#### **`template`**

* Formats child page titles using a pattern.
* `%s` is replaced by the child route’s title.

```tsx
title: {
  template: "%s | Code Evolution"
}
```

Example:
If a page’s metadata sets `title: "Blog"`, the final title becomes:

```text
Blog | Code Evolution
```

#### **`absolute`**

* Use this to **bypass inherited title templates** from parent segments.
* Gives you a completely independent title.

```tsx
export const metadata = {
  title: {
    absolute: "Blog",
  },
};
```

Result: The title will simply be `Blog`, ignoring any template logic from higher up in the route tree.

---

### **Summary Choosing the Right Title Strategy**

| Use Case                      | Approach                        |
| ----------------------------- | ------------------------------- |
| Simple, static pages          | `title: "Static Title"`         |
| Consistent formatting needed  | `title.template` + child titles |
| Break template inheritance    | `title.absolute`                |
| Global fallback for all pages | `title.default`                 |

---

## **Active Links**

Styling **active navigation links** improves UX by showing users where they are in the app. Let’s walk through how to highlight the **current route** using Tailwind CSS and the `usePathname()` hook.

---

### **Example Setup**

In our `/auth` route group, we have a `layout.tsx` file that renders a simple navigation bar:

```tsx
// File: app/auth/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css'; // Tailwind imports

const navLinks = [
  { name: 'Register', href: '/auth/register' },
  { name: 'Login', href: '/auth/login' },
  { name: 'Forgot Password', href: '/auth/forgot-password' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <nav className="mb-4">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== '/');

          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </>
  );
}
```

---

### **Breakdown**

| Concept          | Explanation                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `usePathname()`  | Hook from `next/navigation` to get the current URL                 |
| `use client`     | Needed because hooks are not allowed in server components          |
| `isActive` logic | Compares `pathname` to the link's `href`                           |
| Tailwind classes | `font-bold` (active), `text-blue-500` (inactive), `mr-4` (spacing) |

---

### **Add Tailwind Styling**

If you don’t already have global styles set up, create a local `styles.css` file:

**File**: `app/auth/styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then import it into `layout.tsx`:

```tsx
import './styles.css';
```

> Alternatively, you can bring back your `globals.css` from the root `app` directory.

---

### **Try It Out**

1. Navigate to `/auth/register`
2. You’ll see **Register** link is bold; others are blue
3. Click **Login** → Login becomes bold
4. Works dynamically without page reload

---

## **`params` and `searchParams`**

In Next.js App Router, dynamic route parameters and query strings are handled through **`params`** and **`searchParams`** respectively. Let’s explore how to use them in both **server** and **client** components.

* [**What Are `params` and `searchParams`?**](#what-are-params-and-searchparams?)
* [**Example Multilingual News Article Page**](#example-multilingual-news-article-page)
* [**Using `params` and `searchParams` in Client Components**](#using-params-and-searchparams-in-client-components)
* [**Important Notes**](#important-notes)

---

### **What Are `params` and `searchParams`?**

| Feature        | Description                                               |
| -------------- | --------------------------------------------------------- |
| `params`       | Object that holds **dynamic segments** in the route URL   |
| `searchParams` | Object for **query parameters** from the URL (`?lang=en`) |

---

### **Example Multilingual News Article Page**

* [**Step 1 Define Links**](#step-1-define-links)
* [**Step 2 Create Dynamic Route**](#step-2-create-dynamic-route)
* [**Step 3 Use `params` and `searchParams` in a Server Component**](#step-3-use-params-and-searchparams-in-a-server-component)


#### **Step 1 Define Links**

In your **home page**, add links with both dynamic and query parameters:

```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/articles/breaking-news-123?language=en">Read in English</Link>
      <br />
      <Link href="/articles/breaking-news-123?language=fr">Read in French</Link>
    </>
  );
}
```

---

#### **Step 2 Create Dynamic Route**

Create the file structure:

```
app/
└── articles/
    └── [articleId]/
        └── page.tsx
```

---

#### **Step 3 Use `params` and `searchParams` in a Server Component**

```tsx
// File: app/articles/[articleId]/page.tsx
import Link from 'next/link';

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { language?: string };
}) {
  const { articleId } = params;
  const language = searchParams.language || 'English';

  return (
    <>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: {language}</p>

      <div className="mt-4">
        <Link href={`/articles/${articleId}?language=en`}>English</Link> |{' '}
        <Link href={`/articles/${articleId}?language=es`}>Spanish</Link> |{' '}
        <Link href={`/articles/${articleId}?language=fr`}>French</Link>
      </div>
    </>
  );
}
```

> Since this is a **server component**, `params` and `searchParams` can be **awaited directly**.

---

### **Using `params` and `searchParams` in Client Components**

1. **Server components** allow async/await on props.
2. **Client components** must use the `useParams()` and `useSearchParams()` hooks from `next/navigation`.

```tsx
'use client';

import { useParams, useSearchParams } from 'next/navigation';

export default function NewsClient() {
  const params = useParams();
  const searchParams = useSearchParams();

  const articleId = params.articleId;
  const language = searchParams.get('language') || 'English';

  return (
    <>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: {language}</p>
    </>
  );
}
```

---

### **Important Notes**

| Limitation                | Explanation                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `searchParams` in layouts | Not supported—**only `params`** are accessible in `layout.tsx` |
| Server components         | Can use async/await directly on props                          |
| Client components         | Must use `useParams()` and `useSearchParams()` hooks           |

---

## **Navigating Programmatically**

While links (`<Link>`) are great for typical navigation, sometimes you need to **navigate based on logic**—such as after a form submission or conditionally based on user input. That’s where **programmatic navigation** comes in.

* [**Example Order Placement Redirect**](#example-order-placement-redirect)
* [**Router Methods**](#router-methods)
* [**Example Redirect in Server Component**](#example-redirect-in-server-component)

---

### **Example Order Placement Redirect**

We’ll simulate a product order flow: clicking a **“Place Order”** button takes the user to the homepage.

* [**Step 1 Create the Route**](#step-1-create-the-route)
* [**Step 2 Implement Client-Side Navigation**](#step-2-implement-client-side-navigation)

---

#### **Step 1 Create the Route**

Create a folder and file for the new route:

```
app/
└── order-product/
    └── page.tsx
```

---

#### **Step 2 Implement Client-Side Navigation**

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order...');
    router.push('/'); // Navigate to homepage
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
```

> Don't forget the `'use client'` directive—`useRouter()` only works in **client components**.

---

### **Router Methods**

| Method             | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `router.push()`    | Navigate to a new route (adds to browser history)                          |
| `router.replace()` | Navigate and replace the current entry in browser history (no back button) |
| `router.back()`    | Navigate to the **previous page**                                          |
| `router.forward()` | Move forward in browser history                                            |

---

### **Example Redirect in Server Component**

Sometimes, you want to **redirect in server logic**. For example, redirect users with invalid IDs.

```tsx
// File: app/products/[productId]/reviews/[reviewId]/page.tsx
import { redirect } from 'next/navigation';

export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const reviewId = parseInt(params.reviewId);

  if (reviewId > 100) {
    // Instead of showing a not-found page, redirect to product list
    redirect('/products');
  }

  return (
    <>
      <h1>Product Review</h1>
      <p>Review ID: {reviewId}</p>
    </>
  );
}
```

> This only works in **server components**—the `redirect()` function is not available in client code.

---