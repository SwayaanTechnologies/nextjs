# **Next JS**

## **Table of Content**

**Day 1**

* [**1. Introduction**](#1.-introduction)
* [**2. Setting up development environment**](#2.-setting-up-development-environment)
* [**3. Layouts**](#3.-layouts)
* [**4. Styling**](#4.-styling)
* [**5. Routing**](#5.-routing)
* [**6. Route Handlers**](#6.-route-handlers)
* [**7. Using TypeScript in Next.js 15**](#7.-using-typescript-in-next.js-15)

**Day 2**

* [**8. Middleware**](#8.-middleware)
* [**9. Rendering**](#9.-rendering)
* [**10. Rendering Strategies**](#10.-rendering-strategies)
* [**11. Component Composition Patterns and Code Boundaries**](#11.-component-composition-patterns-and-code-boundaries)
* [**12. Data Fetching**](#12.-data-fetching)
* [**13. Metadata Management**](#13.-metadata-management)

## **1. Introduction**

* [**What is Next.js?**](#why-learn-next.js?)
* [**Prerequisites**](#prerequisites)
* [**Libraries vs Frameworks**](#libraries-vs-frameworks)
* [**Example Projects Built with React and Next.js**](#example-projects-built-with-react-and-next.js)
* [**Why Learn Next.js?**](#why-learn-next.js?)
* [**React Understanding**](#react-understanding)
* [**Before We Start**](#before-we-start)
* [**Why Next.js over Traditional React**](#why-next.js-over-traditional-react)
* [**SSR + SSG + ISR + RSC Quick Reference**](#ssr-+-ssg-+-isr-+-rsc-quick-reference)
* [**App Router vs Pages Router**](#app-router-vs-pages-router)

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

### **Libraries vs Frameworks**

| Aspect                   | Library                                                               | Framework                                                                                                  |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Definition**           | A collection of reusable functions or tools you can call when needed. | A complete structure that provides a foundation and flow for your application.                             |
| **Control**              | **You** control the flow of the application.                          | The **framework** controls the flow; you fill in the blanks.                                               |
| **Inversion of Control** | **No** inversion of control – you call the library.                   | **Yes** – the framework calls your code (known as "Hollywood Principle": *Don’t call us, we’ll call you*). |
| **Flexibility**          | More flexible, you pick and choose when/how to use it.                | Less flexible; you're expected to follow framework conventions.                                            |
| **Examples**             | Lodash, Axios, React (often considered a library), jQuery             | Angular, Next.js, Django, Ruby on Rails                                                                    |

---

### **Example Projects Built with React and Next.js**

**React Projects**

| Project Name         | Description               | Key Features                                   |
| -------------------- | ------------------------- | ---------------------------------------------- |
| **To-Do List App**   | Basic task management     | CRUD, state management, component lifecycle    |
| **Weather App**      | Real-time weather fetch   | API calls, `useEffect`, conditional rendering  |
| **Calculator App**   | Basic calculator          | Event handling, state updates                  |
| **Chat App**         | Real-time messaging       | WebSocket/Firebase, state syncing              |
| **Movie Search App** | Search movie database     | API fetch, search, modals                      |
| **E-commerce UI**    | Product list, cart system | React Router, Context API, reusable components |

---

**Next.js Projects**

| Project Name              | Description                             | Key Features                                           |
| ------------------------- | --------------------------------------- | ------------------------------------------------------ |
| **Blog App**              | Markdown blog with SEO                  | App Router, SSG, dynamic routing, metadata             |
| **Portfolio Website**     | Personal site                           | Static generation, image optimization                  |
| **E-commerce Platform**   | Full shop with Stripe                   | SSR/ISR, API routes, client/server components          |
| **Admin Dashboard**       | Data dashboard for authenticated users  | Protected routes, server components, charts            |
| **Multi-language Site**   | Localized content                       | i18n, route-based language switching                   |
| **Auth App**              | Login, register, session-based access   | Middleware, next-auth, protected routing               |
| **CMS Blog**              | Blog using a headless CMS like Sanity   | ISR/SSG, API fetch, dynamic metadata                   |
| **Real-Time Chat App**    | Chat system with live updates           | API routes, WebSockets, real-time UI updates           |
| **Job Board**             | Job listings and filter                 | Dynamic routes, SSG/SSR, metadata                      |
| **SaaS Site + Dashboard** | Public landing + private user dashboard | App Router layouts, auth protection, role-based access |

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

![images](images/next-1.png)

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

### **React Understanding**

Next.js is built on top of React, so a solid understanding of React is essential. Here are some key concepts to grasp:

* **Components**: The building blocks of React applications. Components can be functional or class-based.

* **Props**: Short for "properties," props are used to pass data from parent to child components.

* **State**: A built-in object that allows components to manage their own data. State changes trigger re-renders.

* **Lifecycle Methods**: Special methods that allow you to run code at specific points in a component's lifecycle (e.g., `componentDidMount`, `componentWillUnmount`).

* **Hooks**: Functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.

* **Context API**: A way to manage global state in React applications. It allows you to share data between components without passing props down manually.

* **React Router**: A library for handling routing in React applications. It allows you to create single-page applications with multiple views.

* **Redux**: A state management library often used with React. It provides a centralized store for managing application state.

* **React Query**: A library for managing server state in React applications. It simplifies data fetching, caching, and synchronization.

* **Styled Components**: A library for writing CSS in JavaScript. It allows you to style components using tagged template literals.

* **CSS Modules**: A CSS file in which all class names and animation names are scoped locally by default. This helps avoid naming conflicts.

* **Tailwind CSS**: A utility-first CSS framework that allows you to build custom designs without leaving your HTML.

* **TypeScript**: A superset of JavaScript that adds static typing. It helps catch errors at compile time and improves code quality.

* **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code. It helps maintain code quality and consistency.

* **Prettier**: An opinionated code formatter that enforces a consistent style across your codebase. It helps improve readability and maintainability.

* **Jest**: A JavaScript testing framework used for unit and integration testing. It provides a simple API for writing tests and includes features like mocking and code coverage.

* **React Testing Library**: A library for testing React components. It provides utilities for rendering components and simulating user interactions.

* **Playwright**: A library for end-to-end testing of web applications. It allows you to automate browser interactions and test user flows.

* **Vercel**: The company behind Next.js. Vercel provides a platform for deploying Next.js applications with features like serverless functions, automatic scaling, and global CDN.

* **Render**: A cloud platform for deploying web applications. It provides a simple interface for deploying Next.js applications and includes features like automatic scaling and monitoring.

* **Docker**: A platform for building, shipping, and running applications in containers. It allows you to package your application and its dependencies into a single unit that can run anywhere.

* **Prisma**: An ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It simplifies database access and provides a type-safe API for querying databases.

* **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents. It is often used with Node.js and Next.js applications.

* **PostgreSQL**: An open-source relational database management system. It is often used for larger applications and provides advanced features like transactions and indexing.

* **REST**: A set of architectural principles for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources.

* **WebSockets**: A protocol for full-duplex communication channels over a single TCP connection. It is often used for real-time applications like chat and notifications.

* **WebRTC**: A protocol for peer-to-peer communication in web applications. It allows you to build real-time applications like video conferencing and file sharing.

* **Service Workers**: A script that runs in the background of a web application. It allows you to intercept network requests and cache responses, enabling offline functionality and improved performance.

* **Progressive Web Apps (PWAs)**: A type of web application that uses modern web capabilities to deliver an app-like experience. PWAs can work offline, send push notifications, and be installed on the user's device.

* **Single Page Applications (SPAs)**: A type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. SPAs provide a smoother user experience but can be more complex to build and optimize.

* **Multi-Page Applications (MPAs)**: A type of web application that consists of multiple HTML pages. Each page is loaded separately, and navigation between pages requires a full page reload. MPAs are simpler to build but can be less performant than SPAs.

* **React Suspense**: A feature that allows you to "suspend" rendering while waiting for data to load. This can improve the user experience by showing a loading state instead of a blank screen.

* **React.lazy()**: A function that allows you to load components lazily. This can improve performance by splitting your code into smaller chunks that are loaded only when needed.

* **React.memo()**: A higher-order component that memoizes a component's output. This can improve performance by preventing unnecessary re-renders.

* **React DevTools**: A browser extension for debugging React applications. It provides a visual interface for inspecting components, props, and state.

* **Zod**: A TypeScript-first schema declaration and validation library. It is often used for validating data structures and API responses.

* **Fetch API**: A built-in JavaScript API for making network requests. It is often used for fetching data in React applications.

* **GraphQL**: A query language for APIs. It allows you to request only the data you need and provides a flexible way to interact with APIs.

* **Apollo Client**: A library for managing GraphQL data in React applications. It simplifies data fetching, caching, and synchronization.

---

### **Before We Start**

Before diving into routing in Next.js, it's important to understand a core concept introduced in modern React and adopted by Next.js: **React Server Components (RSC)**.

* [**What Are React Server Components?**](#what-are-react-server-components?)
* [**Server vs Client Components**](#server-vs-client-components)
* [**When to Use Each**](#when-to-use-each)
* [**Why This Matters for Routing**](#why-this-matters-for-routing)

---

#### **What Are React Server Components?**

React Server Components represent a new architecture developed by the React team that introduces a more powerful and efficient way to build applications by dividing components into two categories:

* **Server Components**
* **Client Components**

This model is fully supported in **Next.js 13+**, and is a default behavior in **Next.js 15+**.

---

#### **Server vs Client Components**

* [**Server Components**](#server-components)
* [**Client Components**](#client-components)

##### **Server Components**

* Executed **on the server**.
* Can perform server-side operations such as:

  * Reading from the file system
  * Fetching data directly from databases

* **Cannot** use React hooks (e.g., `useState`, `useEffect`) or handle browser events (e.g., `onClick`).
* Ideal for performance, SEO, and resource-heavy tasks that don’t require user interaction.

##### **Client Components**

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

#### **When to Use Each**

* Use **Server Components** by default whenever possible for performance and simplicity.
* Use **Client Components** when you need:

  * Hooks like `useState`, `useEffect`, `useRouter`, etc.
  * DOM events and interactions (clicks, forms, etc.)
  * Dynamic rendering on the client side

---

#### **Why This Matters for Routing**

Understanding the distinction between server and client components is critical before learning how **routing** works in Next.js. Many routing features (like transitions, navigation hooks, or loading indicators) rely on using client components effectively.

---

### **Why Next.js over Traditional React**

When comparing Next.js to traditional React applications (created with Create React App or Vite), there are several key differences that make Next.js a more powerful choice for building modern web applications.

| Feature | React (CRA/Vite) | Next.js 15 (App Router) |
| --- | --- | --- |
| Routing | Manual (React Router) | Filesystem-based, automatic |
| Server-side rendering | ❌ | ✅ Built-in with `fetch()` |
| Metadata / SEO | Manual | Automatic via `metadata` export |
| Static + Dynamic Pages | Custom logic | Built-in (`revalidate`, `cache`) |
| Server components | ❌ | ✅ `app/` supports RSC out-of-box |

---

### **SSR + SSG + ISR + RSC Quick Reference**

**SSR (Server-Side Rendering)**: Fetches data on each request, generating HTML on the server. This is useful for dynamic content that changes frequently.

**SSG (Static Site Generation)**: Pre-renders pages at build time, generating static HTML. This is ideal for content that doesn't change often.

**ISR (Incremental Static Regeneration)**: Combines the benefits of SSR and SSG. It allows you to update static pages after the build process, making it suitable for content that changes occasionally.

**RSC (React Server Components)**: A new way to build components that run on the server. This allows for better performance and reduced client-side JavaScript.

**Key features of each rendering method:**

| Feature | How you write it | Result |
| --- | --- | --- |
| SSR | `await fetch(...)` with `cache: 'no-store'` | Runs on every request |
| SSG | `await fetch(...)` with `cache: 'force-cache'` | Static HTML |
| ISR | `await fetch(...)` with `next: { revalidate: 60 }` | Rebuilds after 60s |
| RSC | Default when no `use client` | Server-rendered with streaming |

---

### **App Router vs Pages Router**

Next.js has two different routers: the App Router and the Pages Router. 

The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

---

## **2. Setting up development environment**

* [**Installing Node.js and npm**](#installing-node.js-and-npm)
* [**Next.js Blog Post Application Requirements**](#next.js-blog-post-application-requirements)
* [**Creating a new Next.js 15 app with App Router**](#creating-a-new-next.js-15-app-with-app-router)
* [**Project Structure**](#project-structure)
* [**Application Router vs Pages Router**](#application-router-vs-pages-router)

### **Installing Node.js and npm**

> **Node.js** includes **npm** (Node Package Manager), which you’ll use to install dependencies like Next.js.

* [**1. Windows Setup**](#1.-windows-setup)
* [**2. macOS Setup**](#2.-macos-setup)
* [**3. Linux Setup**](#3.-linux-setup-ubuntu-debian-based)


---

#### **1. Windows Setup**

---

**Official Installer**

**1.** Visit the official Node.js website:  

- 👉 [https://nodejs.org](https://nodejs.org/) 
- Download the **LTS version** (recommended for most users).

**2.** Run the installer:

- Follow the prompts (use default settings).
- Installs both **Node.js** and **npm**.

**3.** **Verify installation** in Command Prompt or PowerShell:

```bash
node -v
npm -v
```

---

**Using nvm-windows (Node Version Manager for Windows)**

> ⚠️ This is different from the nvm used on Linux/macOS.

**1.** Go to:  

- 👉 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

**2.** Download and run `nvm-setup.exe`.

**3.** In Command Prompt or PowerShell:

```bash
nvm install lts
nvm use lts
```

---

#### **2. macOS Setup**

---

**Official Installer**

**1.** Visit [https://nodejs.org](https://nodejs.org/) and download the **macOS Installer (LTS)**.

**2.** Run the `.pkg` file and complete the installation.

**3.** **Verify installation**:

```bash
node -v
npm -v
```

---

**Using Homebrew + NVM**

> NVM lets you manage multiple Node.js versions.

**1.** **Install Homebrew** (if not already installed):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**2.** **Install nvm**:

```bash
brew install nvm
mkdir ~/.nvm
```

**3.** **Add to your shell config** (`~/.zshrc`, `~/.bash_profile`, or `~/.zprofile`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" ] && \. "$HOMEBREW_PREFIX/opt/nvm/nvm.sh"
```

**4.** **Apply changes**:

```bash
source ~/.zshrc  # or ~/.bash_profile, depending on your shell
```

**5.** **Install Node.js**:

```bash
nvm install --lts
nvm use --lts
nvm alias default node
```

**6.** **Verify installation**:

```bash
node -v
npm -v
```

---

#### **3. Linux Setup**

---

**Official NodeSource Installer**

**1.** Run the following (replace `18` with your desired version):

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2.** **Verify installation**:

```bash
node -v
npm -v
```

---

**Using NVM**

**1.** **Install NVM**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

**2.** **Load NVM** (add to `~/.bashrc` or `~/.zshrc`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

**3.** **Apply changes**:

```bash
source ~/.bashrc  # or source ~/.zshrc
```

**4.** **Install Node.js**:

```bash
nvm install --lts
nvm use --lts
nvm alias default node
```

**5.** **Verify installation**:

```bash
node -v
npm -v
```

---

### **Next.js Blog Post Application Requirements** 

* [**Objective**](#objective)
* [**Functional Requirements**](#functional-requirements)
* [**Technical Requirements**](#technical-requirements)
* [**Data Models**](#data-models)
* [**Non-Functional Requirements**](#non-functional-requirements)
* [**Optional Enhancements**](#optional-enhancements)
* [**Tech Stack**](#tech-stack)

#### **Objective**

To develop a **basic blog post application** using **Next.js 15** that showcases all major features of the framework, including the **App Router**, **server components**, **client components**, **dynamic routing**, **API routes**, **authentication**, **SEO optimization**, **image optimization**, **static generation**, **server-side rendering**, and more. The app will serve as a learning and demo tool.

---

#### Functional Requirements

* [1. **Homepage**](#1.-homepage)
* [2. **Blog Post Page**](#2.-blog-post-page)
* [3. **Create/Edit Blog Post Page**](#3.-create/edit-blog-post-page)
* [4. **Authentication**](#4.-authentication)
* [5. **Comments Section**](#5.-comments-section)
* [6. **Admin Dashboard**](#6.-admin-dashboard)
* [7. **Search and Filtering**](#7.-search-and-filtering)
* [8. **Tag and Category Pages**](#8.-tag-and-category-pages)

##### 1. **Homepage**

* Lists latest blog posts with title, excerpt, author, date, and thumbnail.
* Uses `fetch()` from a server component.
* Paginated or infinite scrolling.

##### 2. **Blog Post Page**

* Dynamic route: `/blog/[slug]`
* Displays full blog content.
* Rendered statically (SSG) if possible or SSR otherwise.
* Includes metadata (title, og tags) using `generateMetadata`.

##### 3. **Create/Edit Blog Post Page**

* Protected via authentication (admin-only).
* Rich text editor (Markdown or WYSIWYG).
* Uses client component + API call to submit.
* Form validation with Zod or Yup.

##### 4. **Authentication**

* Uses `next-auth` (auth.js).
* GitHub, Google OAuth login.
* Session-based access control.
* Logged-in users can like posts, add comments.

##### 5. **Comments Section**

* Comment form (client component).
* Displays threaded comments (SSR or ISR).
* Likes or reactions on comments (optional).

##### 6. **Admin Dashboard**

* Route: `/admin`
* List, edit, delete blog posts.
* Add new categories/tags.
* Protected route using middleware and session checking.

##### 7. **Search and Filtering**

* Client-side filtering by tag/category.
* Full-text search using server-side route or client search.

##### 8. **Tag and Category Pages**

* Dynamic routes: `/tag/[tag]`, `/category/[category]`
* Lists all posts under a tag or category.
* Uses `generateStaticParams` and `generateMetadata`.

---

#### **Technical Requirements**

**Next.js Features to Demonstrate**

| Feature                               | Description                                |
| ------------------------------------- | ------------------------------------------ |
| App Router                            | Use `/app` directory for routing           |
| Server Components                     | Fetch blog data from server components     |
| Client Components                     | Rich text editor, search bar, comment form |
| Dynamic Routing                       | Blog posts, categories, tags               |
| `generateMetadata()`                  | Dynamic SEO on each page                   |
| API Routes (`app/api`)                | For CRUD operations on posts/comments      |
| Authentication (`next-auth`)          | Secure login, protected routes             |
| Layouts & Templates                   | Global layout, nested layouts              |
| Static Generation (SSG)               | For most blog and category pages           |
| Server-Side Rendering (SSR)           | For search and user-specific pages         |
| Image Optimization                    | Blog post thumbnails with `<Image>`        |
| Middleware                            | Session handling and route protection      |
| ISR (Incremental Static Regeneration) | Revalidate content after changes           |
| Error & Loading UI                    | `error.js`, `loading.js` per route         |
| Environment Variables                 | For secure API keys                        |
| SEO/OG Tags                           | Using dynamic metadata                     |
| Deployment                            | Vercel or Docker deployment                |

---

#### **Data Models**

* [**Blog Post**](#blog-post)
* [**Comment**](#comment)

##### **Blog Post**

```ts
{
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnailUrl: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  category: string;
}
```

##### **Comment**

```ts
{
  id: string;
  postId: string;
  author: string;
  message: string;
  parentId?: string;
  createdAt: Date;
}
```

---

#### **Non-Functional Requirements**

* **Responsive Design**: Mobile-first using Tailwind CSS.
* **Accessibility**: Authentication and Authorization.
* **Performance**: Lazy loading images, server components.
* **Security**: Auth, sanitization of user input.
* **Code Quality**: TypeScript, ESLint, Prettier.
* **Testing**: Unit tests (Jest), E2E (Playwright or Cypress).

---

####  **Optional Enhancements**

* Dark Mode toggle.
* Markdown editor with preview.
* Author profiles and bios.
* RSS Feed and sitemap generation.
* Email notifications on comments.
* PWA support.

---

####  **Tech Stack**

* **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
* **Backend**: Next.js API routes or external backend
* **Database**: SQLite, PostgreSQL, or MongoDB (via Prisma or Mongoose)
* **Auth**: `next-auth`
* **Deployment**: Vercel / Docker + Render / Railway

---

### **Creating a new Next.js 15 app with App Router**

* [**Step 1 Create a Work Space Folder**](#step-1-create-a-work-space-folder)
* [**Step 2 Create a New Next.js Project for Blog Post**](#step-2-create-a-new-next.js-project-for-blog-post)
* [**Step 3 Run the Development Server**](#step-3-run-the-development-server)
* [**Step 4 Make Your First Edit**](#step-4-make-your-first-edit)

#### **Step 1 Create a Work Space Folder**

Create a folder to store your project files:

```bash
mkdir workspace
cd workspace
```

Open the folder in your code editor. If you're using VS Code:

```bash
code .
```

---

#### **Step 2 Create a New Next.js Project for Blog Post**

Run the following command in your terminal to scaffold a new Next.js project:

```bash
npx create-next-app@latest
```

You will be prompted to answer some configuration questions. Use the following choices:

| Prompt                               | Choice               |
| ------------------------------------ | -------------------- |
| Project name                         | `blog-post-app`      |
| TypeScript                           | Yes                  |
| ESLint                               | Yes                  |
| Tailwind CSS                         | Yes                  |
| Source directory                     | Yes (`/src`)         |
| App Router                           | Yes (recommended)    |
| Customize import alias               | No (default setting) |
| Use Turbopack (experimental bundler) | No                   |

Once completed, a new folder called `blog-post-app` will be created with your Next.js project setup.

#### **Step 3 Run the Development Server**

Navigate into the project folder:

```bash
cd blog-post-app
```

Then, start the development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to see your new Next.js app in action.

You should see the default Next.js welcome page.

---

#### **Step 4 Make Your First Edit**

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

### **Project Structure**

After creating and running a basic Next.js application, it's important to understand the structure of the project. This section breaks down the key files and folders that power your app.

* [**Key Files**](#key-files)
* [**Key Folders**](#key-folders)
* [**How It All Works**](#how-it-all-works)

---

#### **Key Files**

* [**`package.json`**](#package.json)
* [**Configuration Files**](#configuration-files)
* [**Other Files**](#other-files)

##### **`package.json`**

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

##### **Configuration Files**

* `next.config.js` – Next.js configuration
* `tsconfig.json` – TypeScript settings
* `eslint.config.js` – ESLint configuration
* `tailwind.config.js` & `postcss.config.js` – Tailwind CSS setup

##### **Other Files**

* `package-lock.json` – Locks dependency versions for consistent installs
* `.gitignore` – Files and folders to ignore in version control
* `README.md` – Project overview and instructions
* `next-env.d.ts` – TypeScript environment declarations for Next.js

---

#### **Key Folders**

* [**`.next/`**](#.next/)
* [**`node_modules/`**](#node_modules/)
* [**`public/`**](#public/)
* [**`src/`**](#src/)

##### **`.next/`**

* Generated automatically during development or build.
* Stores compiled output and other internal data.
* **Ignored by version control** – no need to interact with it.

##### **`node_modules/`**

* Contains all project dependencies.
* Created by `npm install` or during initial project setup.
* Also **ignored by version control**.

##### **`public/`**

* Stores **static assets** like images, SVGs, and favicon files.
* Files in this folder are served at the root path (`/`).

##### **`src/`**

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

#### **How It All Works**

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

### **Application Router vs Pages Router**

| Feature / File | **App Router (`app/`)** | **Pages Router (`pages/`)** |
| --- | --- | --- |
| 📁 **Routing Directory** | `src/app/` | `src/pages/` |
| 🌐 **Route Files** | `page.tsx`, `layout.tsx` | `index.tsx`, `about.tsx` |
| 🧱 **Layout System** | `layout.tsx` (nested layouts supported) | `_app.tsx` (global layout only) |
| 🗂️ **CSS Files** | `globals.css`, `page.module.css` (scoped with modules) | `globals.css`, `Home.module.css` |
| 📃 **Document Customization** | *Not required – handled internally* | `_document.tsx` |
| 🔁 **Shared Layout Logic** | `layout.tsx` per route level | `_app.tsx` for global layout |
| 🧪 **API Routes** | Not in `app/` (requires `/pages/api`) | `pages/api/` (e.g., `hello.ts`) |
| ⚙️ **Server Components** | Supported natively | ❌ Not supported |
| 🔁 **Routing Behavior** | File-based + nested segments + layouts | File-based only (flat) |
| ✨ **New Features** | Server/Client components, Streaming, Metadata, etc. | Legacy, stable |
| 🧩 **Custom Head Handling** | `metadata` export in each route | `<Head>` tag in `_app.tsx` or pages |
| 🛠️ **Recommended Use** | From Next.js 13+ with App Router enabled | Default in older Next.js versions |

---

## **3. Layouts**

**Layouts** allow you to define **shared UI** that stays consistent across multiple routes — such as headers, footers, navigation menus, and more. Next.js makes working with layouts simple and powerful.

* [**What Is a Layout?**](#what-is-a-layout?)
* [**The Root Layout**](#the-root-layout)
* [**Example Basic Layout**](#example-basic-layout)
* [**How It Renders**](#how-it-renders)
* [**Nested Layouts**](#nested-layouts)
* [**Multiple Root Layouts**](#multiple-root-layouts)

---

### **What Is a Layout?**

A layout is a **React component** that wraps your route-specific page content using the `children` prop.

**Common use cases:**

* Headers and footers
* Sidebars
* Authentication wrappers
* Global layout styles

---

### 1. **`React.ReactNode`**

- `React.ReactNode` is used to type the `children` prop. It represents any valid React content (e.g., JSX, strings, numbers, arrays, `null`, etc.).
- This is essential for layouts because they often wrap and render page-specific content passed as `children`.
 
Example:

```tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```
 
### 2. **`children` Prop**
   
- The `children` prop is a special prop in React that allows you to pass nested content into a component.
- In layouts, `children` is used to render the content of the specific page within the layout structure.
 
Example: `/app/layout.tsx`

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}  {/* Page-specific content gets rendered here */}
      </body>
    </html>
  );
}
```
 
### 3. **HTML Structure**
   
- Layouts often define the overall HTML structure of the application, such as `<html>`, `<head>`, and `<body>` tags.
- In Next.js, layouts are used to wrap pages with consistent elements like headers, footers, or navigation bars.
 
Example:

```tsx
return (
  <html lang="en">
    <body>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </body>
  </html>
);
```
 
### 4. **Styling**
   
- Layouts often include global or shared styles, such as CSS for headers, footers, or sidebars.
- Inline styles, CSS modules, or global CSS files can be used.
 
Example:
   
```tsx
<header style={{ backgroundColor: "lightblue", padding: "1rem" }}>Header</header>
```
 
### 5. **Context Providers**
   
- Layouts are a great place to include React Context Providers for managing global state, themes, or authentication.
 
Example:
   
```tsx
import { ThemeProvider } from "./theme-context";
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
```
 
### 6. **Metadata and SEO**

- In Next.js, layouts often include metadata for SEO, such as `<title>` and `<meta>` tags, using the `Head` component.
 
Example:

```tsx
import Head from "next/head";
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My App Description" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
```
 
### 7. **Dynamic Layouts**
   
- Layouts can be dynamic, adapting based on props or context (e.g., different headers for authenticated vs. unauthenticated users).
 
Example:

```tsx
export default function RootLayout({ children, isLoggedIn }: { children: React.ReactNode; isLoggedIn: boolean }) {
  return (
    <html lang="en">
      <body>
        {isLoggedIn ? <header>Welcome Back</header> : <header>Please Log In</header>}
        {children}
      </body>
    </html>
  );
}
```

### 8. **Nested Layouts**
   
- Next.js supports nested layouts, where a layout can wrap another layout. This is useful for creating layouts specific to certain sections of the app.
 
Example:

```bash
app/
├── layout.tsx       // Root layout
├── dashboard/
│   ├── layout.tsx   // Dashboard-specific layout
│   ├── page.tsx     // Dashboard page
```
 
In `dashboard/layout.tsx`:

```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
``` 

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

### **Nested Layouts**

In addition to the required **root layout**, Next.js allows you to create **nested layouts** — layouts that apply to a specific route or group of routes. This gives you fine-grained control over the UI for different sections of your app.

* [**Why Use Nested Layouts?**](#why-use-nested-layouts?)
* [**Example Nested Layout for Blog Details**](#example-nested-layout-for-blog-details)
* [**Nested Layout How It Renders**](#nested-layout-how-it-renders)

---

#### **Why Use Nested Layouts?**

You might want:

* A custom layout for blog details pages
* A cleaner layout for authentication routes
* Unique sidebars or headers for specific sections

Nested layouts make that possible.

---

#### **Example Nested Layout for Blog Details**

Let’s build a special layout for blog detail pages:

* [**File structure**](#file-structure)
* [**`blog/[blogId]/layout.tsx`**](#blog/[blogid]/layout.tsx)

##### **File structure**

```
app/
├── layout.tsx                   # Root layout (with header/footer)
├── blog/
│   ├── page.tsx                 # Blog list page
│   └── [blogId]/
│       ├── page.tsx            # Blog detail by ID
│       └── layout.tsx          # Custom layout for blog details
```

##### **`blog/[blogId]/layout.tsx`**

Create `layout.tsx` in `[blogId]` folder:

```tsx
// app/blog/[blogId]/layout.tsx
export default function BlogDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Featured Blogs</h2>
      {children}
    </>
  );
}
```

This layout will **wrap around** the page at `blog/[blogId]/page.tsx`.

---

#### **Nested Layout How It Renders**

Let’s walk through what happens when you visit different routes:

| URL           | Layouts Applied                               | Content Rendered                                   |
| ------------- | --------------------------------------------- | -------------------------------------------------- |
| `/`           | `app/layout.tsx`                              | Root layout → `app/page.tsx`                       |
| `/blog`      | `app/layout.tsx`                              | Root layout → `blog/page.tsx`                      |
| `/blog/1`    | `app/layout.tsx` → `blog/[blogId]/layout.tsx` | Root layout → BlogDetails layout → Blog page      |

- The `blog/[blogId]/layout.tsx` file only applies to dynamic blog routes — it adds the `Featured Blogs` heading above the main page content.

---


### **Multiple Root Layouts**

By default, your Next.js app has **one root layout** (`layout.tsx` in the `app/` folder), which wraps every page in your application. But what if different parts of your app require **different layouts**?

For example:

* Admin pages (e.g., `/dashboard`, `/users`) need a **header and footer**
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
├── (admin)/           ← Route group for admin pages
│   ├── layout.tsx         ← Admin layout (with header & footer)
│   ├── page.tsx           ← Home page
│   ├── dashboard/
│   └── users/
├── (auth)/                ← Route group for auth pages
│   ├── layout.tsx         ← Auth layout (footer only)
│   ├── login/
│   └── register/
```

> **Note:**
>
> - Folders wrapped in `()` denote **route groups** — organizational only, ignored in the URL path.
>
> - make sure to move the `page.tsx` from app to the `(admin)` folder.
>
> - the `layout.tsx` file in the `(admin)` folder will be used for all pages inside that group.
>
> - layout can be used to wrap the `page.tsx` file in the `(admin)` folder, and any other pages inside that group.
>
> - make sure layout.tsx having full html structure, like `<html>`, `<head>`, and `<body>` tags.

---

#### **Create Layouts for Each Route Group**

**`(admin)/layout.tsx`**

```tsx
// app/(admin)/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
* Move `dashboard/`, `users/`, and the main `page.tsx` into the `(admin)/` folder

> Every page now lives **inside a route group**, each with its **own root layout**.

**What Happens Now?**

Despite changing the folder structure...

* `/login` and `/register` still work — now using the **auth layout** (minimal)
* `/dashboard`, `/users`, and `/` now use the **admin layout** (with header & footer)
* **URLs stay the same** — because route group names are not part of the path

---

## **4. Styling**

* Goal: Apply consistent styling, extract reusable components, and lay the foundation for a beautiful, scalable UI.

**We’ll cover:**

- Project-level structure for styling
- Global styles vs component styles
- Tailwind best practices
- Reusable UI components: `Card`, `Container`, `Button`
- Organizing `components/` and `styles/`

---

### **Folder Setup**

Let’s organize your project cleanly:

```
src/
├── components/
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Button.tsx
│   ├── blog/
│   │   └── BlogPostPreview.tsx
├── styles/
│   └── globals.css

```

---

### **Tailwind Setup Recap**

**If you didn’t add Tailwind during setup, run:**

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

**And apply styles in `app/globals.css`:**

```css
@import "tailwindcss";
```

**Configure PostCSS Plugins**

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**page.tsx**

```tsx
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

**Make sure to import `globals.css` in your `layout.tsx`:**

```tsx  
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### **UI Component: `Container`**

**`components/ui/Container.tsx`**

```tsx
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-3xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}

```

Use it in `layout.tsx`:

```tsx
import Container from '@/components/ui/Container';

<main>
  <Container>{children}</Container>
</main>

```

---

### **UI Component: `Card`**

**`components/ui/Card.tsx`**

```tsx
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border rounded-md p-4 shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}

```

---

### **Blog Component: `PostPreview`**

Let’s clean up `/blog/page.tsx` with a blog post preview card.

* [**`app/lib/posts.ts`**](#applibpoststs)
* [**`components/blog/BlogPostPreview.tsx`**](#components/blog/blogpostpreview.tsx)
* [**Use it in `app/blog/page.tsx`**](#use-it-in-app/blog/page.tsx)

#### **`app/lib/posts.ts`**

```tsx
// lib/posts.ts
export type Post = {
  title: string;
  slug: string;
  content: string;
};

export const posts: Post[] = [
  {
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started',
    content: 'Welcome to the world of Next.js 15 App Router!',
  },
  {
    title: 'Understanding React Server Components',
    slug: 'react-server-components',
    content: 'RSCs let you build fast and dynamic apps without shipping JS!',
  },
];
```

> **Note:** This is a mock data file. In a real app, you’d fetch this from an API or database.

#### **`components/blog/BlogPostPreview.tsx`**

```tsx
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { Post } from '@/lib/posts';

export default function BlogPostPreview({ post }: { post: Post }) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-gray-800">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mt-2">{post.content.slice(0, 80)}...</p>
    </Card>
  );
}

```

---

#### **Use it in `app/blog/page.tsx`**

```tsx
import { posts } from '@/lib/posts';
import PostPreview from '@/components/blog/PostPreview';

export default function BlogIndexPage() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}

```

---

### **Final Result**

You now have:

- A styled list of blog posts
- Clean layout and spacing
- Reusable components you can scale with
- Tailwind setup for responsive design

---

### **Bonus: Add a Custom Font**

**In `layout.tsx`**

- The `next/font` module automatically optimizes your fonts and removes external network requests for improved privacy and performance.

- It includes built-in self-hosting for any font file. This means you can optimally load web fonts with no layout shift.

- To start using `next/font`, import it from `next/font/local` or `next/font/google`, call it as a function with the appropriate options, and set the className of the element you want to apply the font to. For example:

```tsx
import { Inter } from 'next/font/google';
const inter = Inter({ weight: '400' , subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

```

> **Note**: Modify the `weight` and `subsets` options as per your requirements.

**You’ve learned:**

- How to use Tailwind CSS professionally
- How to organize reusable UI and layout components
- Component design practices that scale in a real app

---

## **5. Routing**

Routing is one of the core features of **Next.js**, and it follows a **file-based routing** system. This means your app’s URL structure is directly mapped from how you organize folders and files within the `app` directory.

* [**Key Routing Conventions in Next.js**](#key-routing-conventions-in-next.js)
* [**Simple Routing Examples**](#simple-routing-examples)
* [**Multiple Routes**](#multiple-routes)
* [**Nested Routes**](#nested-routes)
* [**Dynamic Routes**](#dynamic-routes)
* [**Nested Dynamic Routes**](#nested-dynamic-routes)
* [**Catch-all Segments**](#catch-all-segments)
* [**Not Found Page**](#not-found-page)
* [**File Colocation**](#file-colocation)
* [**Private Folders**](#private-folders)
* [**Route Groups**](#route-groups)
* [**Linking Component Navigation**](#linking-component-navigation)
* [**Active Links**](#active-links)
* [**`params` and `searchParams`**](#params-and-searchparams)
* [**Navigating Programmatically**](#navigating-programmatically)
* [**Templates**](#templates)
* [**Loading UI**](#loading-ui)
* [**Error Handling**](#error-handling)
* [**Recovering from Errors**](#recovering-from-errors)
* [**Handling Errors in Nested Routes**](#handling-errors-in-nested-routes)
* [**Handling Errors in Layouts**](#handling-errors-in-layouts)
* [**Handling Global Errors**](#handling-global-errors)
* [**Parallel Routes**](#parallel-routes)
* [**Handling Unmatched Routes**](#handling-unmatched-routes)
* [**Conditional Routes**](#conditional-routes)
* [**Intercepting Routes**](#intercepting-routes)
* [**Parallel Intercepting Routes**](#parallel-intercepting-routes)

---

### **Key Routing Conventions in Next.js**

Next.js routing is based on a few important conventions:

1. **All routes must live inside the `app/` folder** (which itself lives inside `src/`).
2. **Each route must be defined in a file named `page.tsx`** (or `page.js` if not using TypeScript).
3. **Each folder represents a segment of the URL path.**

---

### **Simple Routing Examples**

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

### **Multiple Routes**

We’ll now create two new routes(Multiple routes):

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

#### **Summary of Key Routing Concepts**

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

### **Nested Routes**

Routing uses a **file-based routing system**, where folders and files under the `app/` directory determine the structure of your application’s URLs. Now, let’s explore **nested routing** by implementing a `blog` section with its own sub-routes.

* [**Create a Blog Route with Nested Pages**](#create-a-blog-route-with-nested-pages)
* [**Creating Nested Routes**](#creating-nested-routes)
* [**Route Structure Summary**](#route-structure-summary)

---

#### **Create a Blog Route with Nested Pages**

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

#### **Creating Nested Routes**

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

#### **Route Structure Summary**

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

---

### **Dynamic Routes**

Previous example, we've seen how **nested routing** works by creating folders like `/blog/first` and `/blog/second`. However, this approach doesn't scale well for large datasets or content fetched dynamically. That’s where **dynamic routes** come in.

* [**Blog Listing Dynamic Route**](#blog-listing-dynamic-route)
* [**Step 1 Create the Static Blog List**](#step-1-create-the-static-blog-list)
* [**Step 2 Set Up the Dynamic Route**](#step-2-set-up-the-dynamic-route)
* [**Dynamic Segments**](#dynamic-segments)
* [**Dynamic Routing Structure Summary**](#dynamic-routing-structure-summary)

#### **Blog Listing Dynamic Route**

* `/blog/[blogId]` – Dynamic route for blog posts.
* `[blogId]` is a **dynamic segment** that can match any blog post ID.

---

#### **Step 1 Create the Static Blog List**

1. Inside the `app/blog/` directory.
2. Inside `blog/`, update the `page.tsx` file:

```tsx
export default function BlogList() {
  return (
    <div>
      <h1>Blog List</h1>
      <h2>Blog 1</h2>
      <h2>Blog 2</h2>
      <h2>Blog 3</h2>
    </div>
  );
}
```

* This page will render at `http://localhost:3000/blog/`.

---

#### **Step 2 Set Up the Dynamic Route**

Manually creating a folder for every blog ID (like `/blog/1`, `/blog/2`, etc.) isn’t scalable. Instead, we use **dynamic segments**.

1. Inside the `blog/` folder, create a new folder named `[blogId]/`.
2. Inside `[blogId]/`, create a `page.tsx` file:

```tsx
// app/blog/[blogId]/page.tsx

type Params = {
  params: Promise<{
    blogId: string;
  }>;
};

export default async function BlogDetails({ params }: Params) {
  const { blogId } = await params;

  return <h1>Details about Blog {blogId}</h1>;
}
```

* This file handles all routes like:

  * `/blog/1`
  * `/blog/2`

---

#### **Dynamic Segments**

* A folder name in square brackets like `[blogId]` tells Next.js to treat it as a **dynamic route parameter**.
* The `params` object contains all route parameters and is **available to server components** as a prop.

---

#### **Dynamic Routing Structure Summary**

Here’s what your folder structure looks like now:

```
src/
└── app/
    └── blog/
        ├── page.tsx
        └── [blogId]/
            └── page.tsx    → /blog/[blogId]
```

Now any route that matches '/`blog/[blogId]` will be handled by the `page.tsx` file inside the `[blogId]` folder.

**Example Output**

* Visiting `http://localhost:3000/blog/1` will show: **Details about Blog 1**
* Visiting `http://localhost:3000/blog/2` will show: **Details about Blog 2**

---

### **Nested Dynamic Routes**

In many real-world applications, you'll often need to handle **multiple dynamic segments** in a single URL. That’s where **nested dynamic routing** becomes incredibly useful.

* [**Blog Comments Dynamic Route**](#blog-comments-dynamic-route)
* [**Step-by-Step Setup**](#step-by-step-setup)
* [**Nested Dynamic Routing Structure Summary**](#nested-dynamic-routing-structure-summary)

---

#### **Blog Comments Dynamic Route**

We’ve already implemented dynamic blog detail pages at:

* `/blog/[blogId]` – Displays details about a specific blog post.

Now, we want to add a **nested dynamic route** for comments:

* `/blog/[blogId]/comments/[commentId]` – Displays details about a specific comment on a blog post.
* `[blogId]` and `[commentId]` are both dynamic segments.

---

#### **Step-by-Step Setup**

* [**Step 1 Start from Existing Dynamic Route**](#step-1-start-from-existing-dynamic-route)
* [**Step 2 Add `comments/` Folder**](#step-2-add-comments/-folder)
* [**Step 3 Add Dynamic `[commentId]/` Folder**](#step-3-add-dynamic-[commentId]/-folder)

---

##### **Step 1 Start from Existing Dynamic Route**

We already have this structure:

```
src/
└── app/
    └── blog/
        ├── page.tsx
        ├── [blogId]/
        │   └── page.tsx    → /blog/[blogId]
```

1. Inside the `blog/[blogId]/` folder, create a new folder named `comments/`.

2. Inside `comments/`, create a `page.tsx` file:

```tsx
export default async function Comments() {
  return <h1>Comments Section</h1>;
}
```

3. This will render at `http://localhost:3000/blog/[blogId]/comments`.

4. Save the file and navigate to `http://localhost:3000/blog/1/comments` in your browser. You should see "Comments Section" displayed.

5. Now, we want to add a dynamic route for individual comments.

---

##### **Step 3 Add Dynamic `[commentId]/` Folder**

1. Inside the `comments/` folder, create a new folder named `[commentId]/`.

2. Inside `[commentId]/`, create a `page.tsx` file:

```tsx
// app/blog/[blogId]/comments/[commentId]/page.tsx

type Params = {
  params: Promise<{
    blogId: string;
    commentId: string;
  }>;
};

export default async function CommentDetails({ params }: Params) {
  const { blogId, commentId } = await params;

  return <h1>Details about Comment {commentId} on Blog {blogId}</h1>;
}
```

3. This file will handle all routes like:

   * `/blog/1/comments/1`
   * `/blog/1/comments/2`
   * `/blog/2/comments/1`

4. Save the file and navigate to `http://localhost:3000/blog/1/comments/1` in your browser. You should see "Details about Comment 1 on Blog 1" displayed.

---

#### **Nested Dynamic Routing Structure Summary**

Here’s what your folder structure looks like now:

```
src/
└── app/
    └── blog/
        ├── page.tsx
        └── [blogId]/
            ├── page.tsx            → /blog/[blogId]
            └── comments/
                ├── page.tsx        → /blog/[blogId]/comments
                └── [commentId]/
                    └── page.tsx    → /blog/[blogId]/comments/[commentId]
```

**Key Takeaway**

You can create nested dynamic routes easily using folders with square brackets:

* `[blogId]` for dynamic segments
* `[commentId]` for nested dynamic segments
* This allows you to create complex URL structures without writing any additional routing logic.

---

### **Catch-all Segments**

Catch-all segments in Next.js allow you to handle dynamic routes with multiple path segments using just a **single file**. This is especially powerful for documentation sites, wikis, and other apps that require deeply nested or flexible routing structures.

* [**Documentation Site with Nested Routes**](#documentation-site-with-nested-routes)
* [**Use a Catch-all Route**](#use-a-catch-all-route)
* [**Optional Catch-all Segments**](#optional-catch-all-segments)
* [**Catch-all Segments Structure Summary**](#catch-all-segments-structure-summary)

---

#### **Documentation Site with Nested Routes**

Imagine building a documentation site where each feature contains several concepts, and each concept might have further nested examples. Example routes:

```
/docs/feature1/concept1  
/docs/feature1/concept2  
/docs/feature2/concept1/example1  
...
```

Now, if you had 20 features and each had 20 concepts, you'd be looking at **400+ different routes**. File-based routing would make this hard to scale—unless we use **dynamic** and **catch-all segments**.

---

#### **Use a Catch-all Route**

We can simplify this setup to just **one** route handler using a catch-all segment.

* [**Step 1 Create the Catch-all Folder**](#step-1-create-the-catch-all-folder)
* [**Step 2 Implement the Component**](#step-2-implement-the-component)

##### **Step 1 Create the Catch-all Folder**

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

##### **Step 2 Implement the Component**

Here’s a simple example of how to access and display the segments:

```tsx
// app/docs/[...slug]/page.tsx

type Params = {
    params: Promise<{
      slug?: string[];
    }>;
  };
  
  export default async function DocsPage({ params }: Params) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug ?? [];

    if (slug.length === 2) {
      return <h1>Viewing docs for feature { slug[0] } and concept { slug[1]}</h1>;
    }
  
    if (slug.length === 1) {
      return <h1>Viewing docs for feature { slug[0]}</h1>;
    }
  
    return <h1>Docs homepage</h1>;
  }
```

Now try visiting these routes:

* `/docs/routing` → Viewing docs for feature **routing**

* `/docs/routing/catch-all-segments` → Viewing docs for feature **routing** and concept **catch-all-segments**

* `/docs` → You’ll see a **404** error (but we’ll fix that next!)

---

#### **Optional Catch-all Segments**

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

#### **Catch-all Segments Structure Summary**

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

### **Not Found Page**

Next.js makes it simple to define a **custom 404 page** using the App Router. This allows you to provide a more branded and user-friendly experience when users navigate to a route that doesn’t exist.

By default, visiting an unknown route (e.g. `http://localhost:3000/building`) will display a generic Next.js 404 page, which is fine for development but insufficient for production environments.

* [**Step 1 Create a Global Not Found Page**](#step-1-create-a-global-not-found-page)
* [**Triggering Not Found Programmatically**](#triggering-not-found-programmatically)
* [**Route-Specific Not Found**](#route-specific-not-found)

---

#### **Step 1 Create a Global Not Found Page**

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

#### **Triggering Not Found Programmatically**

Sometimes you want to manually show a 404 page from within a page. For example, if your post comment system should not show comments above ID 1000, use the `notFound()` function:

```tsx
// app/blog/[blogId]/comments/[commentId]/page.tsx
import { notFound } from 'next/navigation';

export default async function BlogComment({ params }: { params: Promise<{ commentId: string }> }) {
  const awaitedParams = await params;
  const commentId = parseInt(awaitedParams.commentId);

  if (commentId > 1000) {
    notFound();
  }

  return <h1>Comment ID: {commentId}</h1>;
}
```

---

#### **Route-Specific Not Found**

You can also create **section-specific** not-found pages by adding `not-found.tsx` within route folders. Next.js will use the **closest** matching `not-found.tsx`.

For example:

```
src/
└── app/
    ├── not-found.tsx
    └── blog/
        ├── not-found.tsx
        └── [blogId]/
            └── comments/
                └── [commentId]/
                    └── not-found.tsx
```

```tsx
// app/blog/[blogId]/comments/[commentId]/not-found.tsx

'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split('/');

  const blogId = segments[2];
  const commentId = segments[4];

    return (
        <div>
        <h2>Comment Not Found</h2>
        <p>Could not find comment {commentId} for blog {blogId}.</p>
        </div>
    );
}
```

> **Note:** Since you're using the `usePathname()` hook, mark this file as a **client component** with `'use client'`.

---

### **File Colocation**

While Next.js follows a **file-system based routing** convention, it’s also **flexible** about how you organize your files and folders. This concept is known as **file colocation**, and it plays a key role in keeping your project maintainable and scalable.

* [**Understanding File Colocation**](#understanding-file-colocation)
* [**Special Files in Next.js App Router**](#special-files-in-next.js-app-router)
* [**Organizing Your Project**](#organizing-your-project)

---

#### **Understanding File Colocation**

Each folder in the `app/` directory represents a **route segment** that maps directly to a URL path. But **a route only becomes accessible if a `page.tsx` file exists within that folder**.

* [**Example Creating a Route**](#example-creating-a-route)
* [**Making the Route Public**](#making-the-route-public)

---

##### **Example Creating a Route**

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

##### **Making the Route Public**

Now add a `page.tsx` file:

```tsx
// app/dashboard/page.tsx
import LineChart from './LineChart';
 
export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart />
        </div>
    );
}
```

Now `/dashboard` will render correctly in the browser, showing the "Dashboard" heading.


> * Only files named `page.tsx` (or `layout.tsx`, `loading.tsx`, etc.) are **treated as special** by the router.
>
> * Any other file (e.g. `BarChart.tsx`, `utils.ts`) **can be safely colocated** inside the same folder without making it a route.
> 
> * These files won't be publicly accessible or interfere with routing, unless explicitly used by a `page.tsx` or another component.

In **Next.js (App Router)**, certain file names are treated as **special** because they define specific routing behaviors, layouts, or UI states.

Here's a list of all the **special file names** used in the `app/` directory:

---

#### **Special Files in Next.js App Router**

| File Name                         | Purpose                                                                   |
| --------------------------------- | ------------------------------------------------------------------------- |
| `page.tsx` / `page.jsx`           | Defines the actual page content rendered at the route.                    |
| `layout.tsx` / `layout.jsx`       | Defines persistent UI (e.g., headers, sidebars) shared across routes.     |
| `loading.tsx` / `loading.jsx`     | UI shown while loading data or lazily loading a route.                    |
| `error.tsx` / `error.jsx`         | Handles runtime errors within a route segment.                            |
| `not-found.tsx` / `not-found.jsx` | Renders custom 404 UI for a route if a page is not found.                 |
| `template.tsx` / `template.jsx`   | Like `layout`, but re-renders on navigation (not cached like layout).     |
| `route.ts` / `route.js`           | Defines an API endpoint within the `app` directory.                       |
| `default.tsx` / `default.jsx`     | Used inside parallel routes (`@slot`) to provide a fallback route.        |
| `head.tsx` / `head.jsx`           | Customizes `<head>` content (title, meta) for a route segment.            |
| `favicon.ico`, `icon.png`, etc.   | Special static metadata files placed in `app/` or `public/` for favicons. |

---

#### **Organizing Your Project**

Next.js allows flexibility in how you organize supporting files:

* You **can colocate** components, helpers, and modules inside the `app/` route folders for tight cohesion.
* Alternatively, you **can separate** UI components into a dedicated `components/` or `src/` folder outside of `app/`, which is a common pattern in many large-scale projects.

> Example: The `shadcn/ui` library follows the separate `components/` structure for clean separation of concerns.

---

### **Private Folders**

As we just explored file collocation, let’s now dive into a **Next.js-exclusive organizational feature** called **private folders**. This pattern helps keep your project clean and focused by **excluding internal folders from routing**.

* [**What is a Private Folder?**](#what-is-a-private-folder?)
* [**Example Creating a Private Folder**](#example-creating-a-private-folder)
* [**Why Use Private Folders?**](#why-use-private-folders?)

---

#### **What is a Private Folder?**

A **private folder** in Next.js is any folder **prefixed with an underscore (`_`)**. These folders and their contents are **ignored by the routing system**.

> Useful for keeping internal utilities, helpers, or non-UI logic separate from your app’s public routing structure.

---

#### **Example Creating a Private Folder**

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

#### **Why Use Private Folders?**

Private folders are a great way to:

* **Keep routing logic clean** by isolating internal logic.
* **Avoid naming conflicts** with future Next.js reserved filenames.
* **Group utilities and internal components** for easier navigation in editors.
* **Maintain a consistent project structure** for teams and large projects.

---

### **Route Groups**

**Route Groups** are a powerful way to **organize your project’s routing structure without affecting the URL paths**. They help teams manage complex apps while keeping URLs clean and intuitive.

* [**What Are Route Groups?**](#what-are-route-groups?)
* [**Scenario Organizing Auth Routes**](#scenario-organizing-auth-routes)
* [**Grouping Auth Routes**](#grouping-auth-routes)

---

#### **What Are Route Groups?**

* A **route group** is a folder wrapped in parentheses like `(group-name)` inside the `app/` directory.
* Files inside a route group behave **exactly the same** as regular routes.
* The **folder name is excluded from the URL**.

> Route groups are also the **only way to share layouts** between multiple routes **without changing the URL structure**.

---

#### **Scenario Organizing Auth Routes**

Let’s say we are building the following auth routes:

* `/register`
* `/login`
* `/forgot-password`

First, create individual folders for each:

```
app/
├── register/
│   └── page.tsx     → /register    
├── login/
│   └── page.tsx     → /login
└── forgot-password/
    └── page.tsx     → /forgot-password
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

#### **Grouping Auth Routes**

To improve structure, let’s move these into a logical group:

```
app/
└── (auth)/
    ├── register/        
    │   └── page.tsx    → /register
    ├── login/
    │   └── page.tsx    → /login
    └── forgot-password/
        └── page.tsx    → /forgot-password
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

### **Linking Component Navigation**

So far, we’ve tested our routes by typing URLs directly in the browser, but that's not how users interact with a website. In a real-world application, users navigate using links. Let’s explore how to enable smooth **client-side navigation** using the `Link` component provided by **Next.js**.

---

#### **Basic Navigation with the `Link` Component**

The `Link` component is the primary way to navigate between routes in a Next.js app. It enhances the native anchor element (`<a>`) and supports **client-side transitions** without a full page reload.

**Syntax:**

```tsx
import Link from 'next/link';

<Link href="/about">About</Link>
```

---

#### **Adding Links to the Home Page**

Let’s add navigation links from the homepage:

**File**: `app/page.tsx`

```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/profile">Profile</Link>
    </>
  );
}
```

* Clicking **Blog** takes you to `/blog`
* Clicking **Profile** takes you to `/profile`

---

#### **Adding a "Home" Link on Other Pages**

In `app/blog/page.tsx`, import the `Link` component and add a "Home" button:

```tsx
import Link from 'next/link';

export default function BlogList() {
  return (
    <>
      <h1>Blog List</h1>
      <Link href="/">Home</Link>
    </>
  );
}
```

This provides users a way to return to the homepage.

---

#### **Dynamic Links for Products**

Let’s turn each product heading into a link to its detail page.

Assuming product routes follow this pattern: `/blog/1`, `/blog/2`, etc.

```tsx
<Link href={`/blog/${blog.id}`}>{blog.title}</Link>
```

Example hardcoded version:

update `app/blog/[blogId]/page.tsx`:

```tsx
export default async function BlogDetails({ params } : { params : Promise<{ blogId: string }>} ) {
  const { blogId } = await params;
  return <h1>Details about Blog {blogId}</h1>;
}
```

And in `app/page.tsx`, add links to each blog post:

```tsx
// File: app/page.tsx

<h2>
  <Link href="/blog/1">Blog 1</Link>
</h2>
<h2>
  <Link href="/blog/2">Blog 2</Link>
</h2>
<h2>
  <Link href="/blog/3">Blog 3</Link>
</h2>
```

Or using a dynamic ID from a variable:

```tsx
// File: app/page.tsx
const blogId = 100;

<Link href={`/blog/${blogId}`}>Blog 100</Link>
```

---

#### **Using the `replace` Prop**

The `replace` prop controls how the browser's history is updated.

```tsx
<Link href="/blog/3" replace>Blog 3</Link>
```

* **Without `replace`**: Each navigation adds a new history entry.
* **With `replace`**: Replaces the current entry instead of adding a new one.

**Example:**

1. Navigate to Blog List
2. Click on Blog 3 (with `replace`)
3. Press browser back button → goes **back to home**, **skipping** the blog list page

---

### **Active Links**

Styling **active navigation links** improves UX by showing users where they are in the app. Let’s walk through how to highlight the **current route** using Tailwind CSS and the `usePathname()` hook.

---

#### **Example Setup**

In our `(auth)` route group, we have a `layout.tsx` file that renders a simple navigation bar:

```tsx
// File: app/(auth)/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
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

#### **Breakdown**

| Concept          | Explanation                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `usePathname()`  | Hook from `next/navigation` to get the current URL                 |
| `use client`     | Needed because hooks are not allowed in server components          |
| `isActive` logic | Compares `pathname` to the link's `href`                           |
| Tailwind classes | `font-bold` (active), `text-blue-500` (inactive), `mr-4` (spacing) |

---

#### **Add Tailwind Styling**

If you don’t already have global styles set up, create a local `styles.css` file:

**File**: `app/global.css`

```css
@import "tailwindcss";
```

Then import it into `layout.tsx` of root `app` directory:

```tsx
import './styles.css';
```

---

#### **Try It Out**

1. Navigate to `/register`
2. You’ll see **Register** link is bold; others are blue
3. Click **Login** → Login becomes bold
4. Works dynamically without page reload

---

### **`params` and `searchParams`**

In Next.js App Router, dynamic route parameters and query strings are handled through **`params`** and **`searchParams`** respectively. Let’s explore how to use them in both **server** and **client** components.

* [**What Are `params` and `searchParams`?**](#what-are-params-and-searchparams?)
* [**Example Multilingual News Article Page**](#example-multilingual-news-article-page)
* [**Using `params` and `searchParams` in Client Components**](#using-params-and-searchparams-in-client-components)
* [**Important Notes**](#important-notes)

---

#### **What Are `params` and `searchParams`?**

| Feature        | Description                                               |
| -------------- | --------------------------------------------------------- |
| `params`       | Object that holds **dynamic segments** in the route URL   |
| `searchParams` | Object for **query parameters** from the URL (`?lang=en`) |

---

#### **Example Multilingual News Article Page**

* [**Step 1 Define Links**](#step-1-define-links)
* [**Step 2 Create Dynamic Route**](#step-2-create-dynamic-route)
* [**Step 3 Use `params` and `searchParams` in a Server Component**](#step-3-use-params-and-searchparams-in-a-server-component)


##### **Step 1 Define Links**

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

##### **Step 2 Create Dynamic Route**

Create the file structure:

```
app/
└── articles/
    └── [articleId]/
        └── page.tsx
```

---

##### **Step 3 Use `params` and `searchParams` in a Server Component**

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
  const { articleId } = await params;
  const language = (await searchParams)?.language || 'English';

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

#### **Using `params` and `searchParams` in Client Components**

1. **Server components** allow async/await on props.
2. **Client components** must use the `useParams()` and `useSearchParams()` hooks from `next/navigation`.

```tsx
// File: app/articles/[articleId]/page.tsx
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

#### **Important Notes**

| Limitation                | Explanation                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `searchParams` in layouts | Not supported—**only `params`** are accessible in `layout.tsx` |
| Server components         | Can use async/await directly on props                          |
| Client components         | Must use `useParams()` and `useSearchParams()` hooks           |

---

### **Navigating Programmatically**

While links (`<Link>`) are great for typical navigation, sometimes you need to **navigate based on logic**—such as after a form submission or conditionally based on user input. That’s where **programmatic navigation** comes in.

* [**Example Navigate Programmatically**](#example-navigate-programmatically)
* [**Router Methods**](#router-methods)
* [**Example Redirect in Server Component**](#example-redirect-in-server-component)

---

#### **Example Navigate Programmatically**

We’ll simulate a product order flow: clicking a **“Navigate Programmatically”** button takes the user to the homepage.

* [**Step 1 Create the Route**](#step-1-create-the-route)
* [**Step 2 Implement Client-Side Navigation**](#step-2-implement-client-side-navigation)

---

##### **Step 1 Create the Route**

Create a folder and file for the new route:

```
app/
└── navigating-programmatically/
    └── page.tsx
```

---

##### **Step 2 Implement Client-Side Navigation**

```tsx
// File: app/navigating-programmatically/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function NavigateProgrammatically() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Navigating...');
    router.push('/'); // Navigate to homepage
  };

  return (
    <>
      <button onClick={handleClick}>Navigate Programmatically</button>
    </>
  );
}
```

> Don't forget the `'use client'` directive—`useRouter()` only works in **client components**.

---

#### **Router Methods**

| Method             | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `router.push()`    | Navigate to a new route (adds to browser history)                          |
| `router.replace()` | Navigate and replace the current entry in browser history (no back button) |
| `router.back()`    | Navigate to the **previous page**                                          |
| `router.forward()` | Move forward in browser history                                            |

---

#### **Example Redirect in Server Component**

Sometimes, you want to **redirect in server logic**. For example, redirect users with invalid IDs.

```tsx
// File: app/blog/[blogId]/comments/[commentId]/page.tsx
import { redirect } from 'next/navigation';

export default async function BlogComment({
  params,
}: {
   params: Promise< { blogId: string; commentId: string }>;
}) {
  const awaitedParams = await params;
  const commentId = parseInt(awaitedParams.commentId);

  if (commentId > 100) {
    // Instead of showing a not-found page, redirect to blog list
    redirect('/blog');
  }

  return (
    <>
      <h1>Blog Comment</h1>
      <p>Comment ID: {commentId}</p>
    </>
  );
}
```

> This only works in **server components**—the `redirect()` function is not available in client code.

---

### **Templates**

In the App Router, `layout.tsx` is commonly used to share UI across routes. But sometimes, you need the **UI to reset completely** between route changes. That’s where `template.tsx` comes in.

* [**The Problem with Layout State Persistence**](#the-problem-with-layout-state-persistence)
* [**When You Need State Reset**](#when-you-need-state-reset)
* [**How to Use Templates**](#how-to-use-templates)
* [**Template vs Layout**](#template-vs-layout)

---

#### **The Problem with Layout State Persistence**

By design, layouts in Next.js **persist state** across route changes. Consider this structure:

```
app/
└── (auth)/
    ├── layout.tsx   ← Shared layout
    ├── register/
    ├── login/
    └── forgot-password/
```

If you add an input in `layout.tsx` with a React state:

```tsx
'use client';
import { useState } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
    </>
  );
}
```

Typing in the input, then navigating from `/register` to `/login`, **retains the input value**. This is expected behavior—**shared layouts aren’t remounted**.

---

#### **When You Need State Reset**

In some cases, you **want a fresh render** on every navigation—for example:

* Resetting input fields
* Triggering animations
* Rerunning `useEffect` logic on route change

This is where **`template.tsx`** files are useful.

---

#### **How to Use Templates**

1. Rename `layout.tsx` → `template.tsx` inside your route group.

```bash
app/
└── (auth)/
    └── template.tsx
```

2. `template.tsx` works just like a layout but **remounts** on each route change.

```tsx
'use client';
import { useState } from 'react';

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
    </>
  );
}
```

3. Navigate from `/register` → `/login` → `/forgot-password`, and the input field will **reset** each time.

---

#### **Template vs Layout**

| Feature                      | `layout.tsx` | `template.tsx`           |
| ---------------------------- | ------------ | ------------------------ |
| Shared UI                    | ✅            | ✅                        |
| State persists across routes | ✅            | ❌                        |
| DOM elements reused          | ✅            | ❌                        |
| `useEffect` re-runs on nav   | ❌            | ✅                        |
| Good for animations / resets | ❌            | ✅                        |
| Common default for shared UI | ✅            | ❌ (only use when needed) |

> You can use both `layout.tsx` and `template.tsx` **together**. In this case, the layout wraps the page, and the template renders fresh content per route.

---

### **Loading UI**

In the App Router, Next.js provides a special file called `loading.tsx` that helps show **instant feedback** when navigating between pages. This is useful for improving **user experience** during **data fetching delays**.

* [**How It Works**](#how-it-works)
* [**Basic Setup**](#basic-setup)
* [**Simulate a Delay**](#simulate-a-delay)
* [**Make It Beautiful**](#make-it-beautiful)
* [**Benefits of `loading.tsx`**](#benefits-of-loading.tsx)

---

#### **How It Works**

When you add a `loading.tsx` file inside a route segment, Next.js:

* **Wraps your `page.tsx` and children in a `React.Suspense` boundary**
* Automatically displays your `loading.tsx` component **while the page content is being fetched or rendered**

---

#### **Basic Setup**

Let’s add a loading UI to the blog page.

```bash
app/
└── blog/
    ├── page.tsx
    └── loading.tsx
```

**`loading.tsx`**:

```tsx
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

If the `page.tsx` loads quickly, you might not even notice the loading state. Let’s simulate a delay.

---

#### **Simulate a Delay**

**`page.tsx`** with an artificial delay:

```tsx
export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 sec delay
  return <h1>Blog Page Content</h1>;
}
```

Now, reload the `/blog` route. You’ll see:

1. `"Loading..."` for 2 seconds
2. Then `"Blog Page Content"`

---

#### **Benefits of `loading.tsx`**

| Feature                 | Benefit                                                     |
| ----------------------- | ----------------------------------------------------------- |
| Instant feedback        | Lets users know their action triggered navigation           |
| Smarter UX              | Keeps shared layouts (e.g., navigation/sidebar) interactive |
| Suspense integration    | Simplifies async transitions and data fetching              |

---

### **Error Handling**

In real-world apps, **errors are inevitable** — network issues, data unavailability, or unexpected edge cases. Thankfully, the **App Router** in Next.js makes it easy to **gracefully handle runtime errors** using the special file: `error.tsx`.

* [**Simulating an Error**](#simulating-an-error)
* [**Adding an `error.tsx` Component**](#adding-an-error.tsx-component)
* [**Why Use `error.tsx`?**](#why-use-error.tsx?)
* [**Component Hierarchy Recap**](#component-hierarchy-recap)

---

#### **Simulating an Error**

Let’s simulate an error in our `comments/[commentId]/page.tsx` to see how it behaves:

```tsx
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function CommentPage() {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading comment");
  }

  return <h1>Comment Page</h1>;
}
```

On refresh, you’ll **occasionally see an unhandled error** in development. In production (`npm run build` + `npm run start`), it shows:

> "A server-side exception has occurred"

That’s **not user-friendly**, and worse — **it breaks the entire application**.

---

#### **Adding an `error.tsx` Component**

Let’s fix this by isolating the error using a route-specific error boundary.

1. Create an `error.tsx` in the same folder as `page.tsx`:

```bash
app/
└── blog/
    └── [blogId]/
        └── comments/
            └── [commentId]/
                ├── page.tsx
                └── error.tsx
```

2. Create the component:

**`error.tsx`**:

```tsx
"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <div className="text-red-600 p-4">
      <h2>Error loading comment:</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="mt-2 text-blue-600 underline">
        Try again
      </button>
    </div>
  );
}
```

> `error.tsx` **must** be a **Client Component** (`"use client"` is required)

---

#### **Why Use `error.tsx`?**

| Feature              | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| Scoped boundaries    | Errors are **isolated to specific segments** — rest of the app still works      |
| Recovery support     | Built-in `reset()` function allows users to retry                               |
| Enhanced UX          | Display **helpful, user-friendly error messages** instead of blank or broken UI |
| Integrated           | Automatically wraps the segment with a **React error boundary**                 |

---

#### **Component Hierarchy Recap**

Here's how the App Router handles fallback and errors:

```
layout.tsx
└── template.tsx (optional)
    └── error.tsx (runtime errors)
        └── loading.tsx (suspense fallback)
            └── not-found.tsx (404 handling)
                └── page.tsx (core content)
```

Each file provides **isolation and control** for a better user experience and developer ergonomics.

---

### **Recovering from Errors**

In the previous section, we learned how to catch and display runtime errors using `error.tsx`. But not all errors are fatal — some might be **temporary** (like a failed fetch), and can be retried. Let’s improve our error handling with **error recovery**.

* [**The `reset` Function**](#the-reset-function)
* [**Problem Retry Keeps Failing**](#problem-retry-keeps-failing)
* [**Solution Trigger Server-Side Recovery**](#solution-trigger-server-side-recovery)
* [**Why Use `startTransition`?**](#why-use-starttransition?)

---

#### **The `reset` Function**

The `error.tsx` component automatically receives a `reset` function in addition to the `error` object.

**Basic Retry Example**

```tsx
// File: app/blog/[blogId]/comments/[commentId]/error.tsx
"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <div className="text-red-600 p-4">
      <p>{error.message}</p>
      <button onClick={reset} className="mt-2 text-blue-600 underline">
        Try again
      </button>
    </div>
  );
}
```

This enables **client-side recovery**. However, this may not be enough when the data fetching logic resides on the server (like in Server Components).

---

#### **Problem Retry Keeps Failing**

If you simulate an error that returns randomly, hitting the "Try Again" button repeatedly will still show the error most of the time. Why?

> Because `reset()` only retries the rendering **on the client** — without re-fetching server data.

---

#### **Solution Trigger Server-Side Recovery**

To re-fetch data on retry, we need to force a **server-side render** by refreshing the route.

**Updated Error Component with Server Recovery**

```tsx
// File: app/blog/[blogId]/comments/[commentId]/error.tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="text-red-600 p-4">
      <p>{error.message}</p>
      <button onClick={handleRetry} className="mt-2 text-blue-600 underline">
        Try again
      </button>
    </div>
  );
}
```

---

#### **Why Use `startTransition`?**

* **`router.refresh()`** reloads the data for the current route segment (server-side).
* **`startTransition()`** defers the refresh to the next render cycle to avoid blocking UI updates.
* **`reset()`** re-attempts the error boundary rendering.

This combination ensures a **complete retry cycle**, both server and client-side.

**Testing It**

1. Refresh the page until you see the simulated error.
2. Click **Try Again**.
3. If the random number check passes, the component will recover and render successfully.

---

### **Handling Errors in Nested Routes**

Error handling in the App Router isn’t just about catching failures — it’s about **where** you catch them.

The placement of the `error.tsx` file **directly impacts which parts of your app are affected** when an error occurs. Let’s understand how errors bubble in a nested route hierarchy.

* [**Route Structure Example**](#route-structure-example)
* [**Case 1 `error.tsx` in `blog/`**](#case-1-error.tsx-in-blog/)
* [**Case 2 `error.tsx` in `commentId/`**](#case-2-error.tsx-in-commentid/)
* [**Key Concept Error Bubbling**](#key-concept-error-bubbling)

---

#### **Route Structure Example**

```
/blog
  ├─ layout.tsx
  ├─ error.tsx         (affects all child segments)
  └─ [blogId]
       └─ [commentId]
            └─ page.tsx (where error is simulated)
```

If an error occurs in the `commentId/page.tsx`, **Next.js will look up the directory tree** for the nearest `error.tsx` to handle it.

---

#### **Case 1 `error.tsx` in `blog/`**

* Placing `error.tsx` in the `blog` folder handles **all errors** in:

  * `[blogId]`
  * `[commentId]`
* An error in `commentId/page.tsx` will **replace the entire `/blog` layout** with the fallback UI.
* This is a **broad** catch — useful for generic blog-level error handling.

**Result**

The **entire UI under `/blog`** is replaced on error.

---

#### **Case 2 `error.tsx` in `commentId/`**

* By moving `error.tsx` into the `[commentId]` folder:

  * Only **that route segment** is replaced on error.
  * The **rest of the page (header, blog layout, etc.) remains intact**.
* This gives users a more **granular** and **targeted error experience**.

**Result**

Only the **comment component** is replaced when it fails — the rest of the app still works.

---

#### **Key Concept Error Bubbling**

> Errors bubble up the route hierarchy to the nearest available `error.tsx`.

* You can **scope** your error boundaries by placing `error.tsx` at the right level.
* Each boundary **isolates errors** to just its segment and prevents them from crashing the entire app.

---

### **Handling Errors in Layouts**

After mastering error handling in nested routes, it’s time to look at a **tricky but important scenario**: handling **errors inside `layout.tsx`** files.

* [**Behavior**](#behavior)
* [**Example Scenario**](#example-scenario)
* [**The Fix Move `error.tsx` to the Parent**](#the-fix-move-error.tsx-to-the-parent)
* [**Visual Hierarchy**](#visual-hierarchy)

---

#### **Behavior**

Unlike `page.tsx`, if an error occurs **inside a `layout.tsx` file**, the `error.tsx` file in the **same segment** **will not** catch it.

This is due to the **component hierarchy**:

> In the App Router, `layout.tsx` is rendered **above** `error.tsx`.
> Therefore, errors thrown in a layout file bypass its own segment’s `error.tsx`.

---

#### **Example Scenario**

Assume the following structure:

```
/blog
  ├─ layout.tsx
  ├─ error.tsx
  └─ [blogId]
       ├─ layout.tsx (throws an error)
       ├─ error.tsx
       └─ [commentId]
            └─ page.tsx
```

If the `blogId/layout.tsx` throws an error — for instance:

```tsx
// Simulate random failure
// File: app/blog/[blogId]/layout.tsx
if (Math.random() < 0.5) {
  throw new Error("Error loading blog");
}
```

You might expect the `[blogId]/error.tsx` to catch it. But:

> It won’t work — the error breaks the app because the layout renders **before** the error boundary.

---

#### **The Fix Move `error.tsx` to the Parent**

To properly handle layout errors:

* **Move `error.tsx` up to the parent segment** — in this case, to the `blog/` folder.
* That way, the error in `blogId/layout.tsx` bubbles up and is caught by `blog/error.tsx`.

---

#### **Visual Hierarchy**

```
App Root
 └── blog/layout.tsx
      └── blog/error.tsx        Catches layout errors
           └── [blogId]/layout.tsx    Bypasses [blogId]/error.tsx
                └── [commentId]/error.tsx (only catches page/comment errors)
```

**Result**

With the `error.tsx` file placed at the **`blog/` level**:

* Errors in `[commentId]/layout.tsx` are **caught cleanly**.
* The UI gracefully degrades — e.g., shows "Error loading comment" — while keeping the global layout (header/footer) intact.

---

### **Handling Global Errors**

We’ve already explored error handling at the **segment** and **layout** level — but what happens when things go wrong at the **very top** of your application?

This is where **global error boundaries** come in.

* [**The Global `error.tsx` File**](#the-global-error.tsx-file)
* [**Simulating a Root Layout Error**](#simulating-a-root-layout-error)
* [**Important Notes Global Error**](#important-notes-global-error)
* [**Testing the Global Error UI**](#testing-the-global-error-ui)

---

#### **The Global `error.tsx` File**

* Next.js provides a special file: **`app/global-error.tsx`**
* This is your **last line of defense** — it catches **uncaught runtime errors** in the **root layout** or anywhere else that doesn’t have an error boundary.

---

#### **Simulating a Root Layout Error**

To test global error handling, let’s intentionally cause an error in the root layout:

* [**Create an `ErrorWrapper` component**](#create-an-errorwrapper-component)
* [**Wrap Root Layout in the `ErrorWrapper`**](#wrap-root-layout-in-the-errorwrapper)
* [**Create `global-error.tsx`**](#create-global-error.tsx)

#### **Create an `ErrorWrapper` component**

`app/ErrorWrapper.tsx`

```tsx
// File: app/ErrorWrapper.tsx
"use client";
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
```

---

##### **Wrap Root Layout in the `ErrorWrapper`**

In your `app/layout.tsx`, import and wrap the layout:

```tsx
// File: app/layout.tsx

import './globals.css';
import { ErrorWrapper }  from './ErrorWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
      </body>
    </html>
  );
}
```

---

##### **Create `global-error.tsx`**

**`app/global-error.tsx`**

```tsx
/// File: app/global-error.tsx

"use client"; // Error boundaries must be Client Components

import "./globals.css";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => {
              // refresh the page
              window.location.reload();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
```

---

#### **Important Notes Global Error**

* The `global-error.tsx` **must include** its own `<html>` and `<body>` tags. It **replaces** your root layout entirely on failure.
* It **only works in production mode**. In development (`npm run dev`), Next.js will show the standard red error overlay.
* Keep the global error boundary **minimal** — don’t introduce more points of failure here.

---

#### **Testing the Global Error UI**

```bash
# Stop dev server
Ctrl + C

# Build the app
npm run build

# Start production server
npm start
```

* Now simulate the error using the button from the `ErrorWrapper`.
* You should see your **custom global error UI** with the message and a refresh button.

---

### **Parallel Routes**

Parallel routes allow us to render multiple parts of a page simultaneously, improving modularity and user experience. They are especially useful for **complex dashboards**, **split view interfaces**, and **multi-pane layouts** where you need to manage multiple independent sections at once.

* [**What Are Parallel Routes?**](#what-are-parallel-routes?)
* [**Setting Up Parallel Routes**](#setting-up-parallel-routes)
* [**Key Features of Parallel Routes**](#key-features-of-parallel-routes)

#### **What Are Parallel Routes?**

Parallel routes in Next.js are a way to render multiple UI sections (like a complex dashboard) simultaneously within the same layout. These sections are rendered independently and can have their own loading and error states. Let's walk through the process of setting up parallel routes in your Next.js application.

---

#### **Setting Up Parallel Routes**

We will use the **slots** feature in Next.js to create parallel routes. Slots allow us to break down the content into independent, reusable pieces within the same layout.

* [**Step 1 Create a Complex Dashboard Layout**](#step-1-create-a-complex-dashboard-layout)
* [**Step 2 Create Individual Slots**](#step-2-create-individual-slots)
* [**Step 3 Update Layout to Include Slots**](#step-3-update-layout-to-include-slots)
* [**Step 4 Add a Card Component**](#step-4-add-a-card-component)
* [**Step 5 View the Dashboard**](#step-5-view-the-dashboard)

##### **Step 1 Create a Complex Dashboard Layout**

In your `app` directory, create a new folder for the complex dashboard:

```
app/complex-dashboard/layout.tsx
```

Inside the `complex-dashboard` folder, define the layout that will display three sections: **User Analytics**, **Revenue Metrics**, and **Notifications**.

##### **Step 2 Create Individual Slots**

Inside the `complex-dashboard` folder, create separate subfolders for each of the sections:

**1. User Analytics**:

`app/complex-dashboard/@users/page.tsx`

```tsx
// File: app/complex-dashboard/@users/page.tsx

export default function UserAnalytics() {
  return <div>User Analytics</div>;
}
```

**2. Revenue Metrics**:

`app/complex-dashboard/@revenue/page.tsx`

```tsx
// File: app/complex-dashboard/@revenue/page.tsx

export default function RevenueMetrics() {
  return <div>Revenue Metrics</div>;
}
```

**3. Notifications**:

`app/complex-dashboard/@notifications/page.tsx`

```tsx
// File: app/complex-dashboard/@notifications/page.tsx

export default function Notifications() {
  return <div>Notifications</div>;
}
```

##### **Step 3 Update Layout to Include Slots**

Now, update the `layout.tsx` file for the **complex-dashboard** to make use of these slots. You’ll reference the slots by using the folder naming convention with the `@` symbol, and each slot will be passed as props automatically.

**`app/complex-dashboard/layout.tsx`**

```tsx
// File: app/complex-dashboard/layout.tsx

export default function ComplexDashboard({
  users,
  revenue,
  notifications,
}: {
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notifications}</div>
      </div>
    </div>
  );
}
```

This layout will render the **User Analytics**, **Revenue Metrics**, and **Notifications** sections as separate components.

##### **Step 4 Add a Card Component**

To make the UI more appealing, create a reusable **Card component** to wrap each section.

**`app/components/Card.tsx`**

```tsx
// File: app/components/Card.tsx

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {children}
    </div>
  );
}
```

Now, wrap each slot in the `Card` component in the `layout.tsx`:

```tsx
// File: app/complex-dashboard/layout.tsx

import Card from '../components/Card';

export default function ComplexDashboard({
  users,
  revenue,
  notifications,
}: {
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card>{users}</Card>
        <Card>{revenue}</Card>
        <Card>{notifications}</Card>
      </div>
    </div>
  );
}
```

##### **Step 5 View the Dashboard**

When you visit `/complex-dashboard`, you will see your dashboard with three sections: **User Analytics**, **Revenue Metrics**, and **Notifications**.

---

#### **Key Features of Parallel Routes**

**1. Independent Route Handling**:

- Each section (slot) can have its own **loading state**, **error state**, and **content**. This is particularly helpful in cases where different sections of the page take varying times to load or face different errors.

- Example: If **User Analytics** takes longer to load, the other sections like **Revenue Metrics** can remain interactive without showing a loading spinner.

**2. Subnavigation**:

- Parallel routes allow for **independent subnavigation** within each section. For example, users can filter data in **Revenue Metrics** while still being able to view notifications or user analytics. Each section can handle its own state and navigation without affecting others.

- Example: In the **Notifications** section, users can switch between **default** and **archived** views, and the URL will update to reflect the change.

---

### **Handling Unmatched Routes**

When using **parallel routes** with subnavigation, it's common to encounter scenarios where only some slots match the current URL. In such cases, **unmatched routes** must be handled properly to avoid rendering issues or 404 errors.

Let's explore how to handle **unmatched slots** using `default.tsx` and ensure your application remains stable across navigation and reloads.

* [**Subnavigation in Slots**](#subnavigation-in-slots)
* [**What Are Unmatched Routes?**](#what-are-unmatched-routes?)
* [**Fixing with `default.tsx`**](#fixing-with-default.tsx)
* [**Add `default.tsx` for All Unmatched Slots**](#add-default.tsx-for-all-unmatched-slots)

---

#### **Subnavigation in Slots**

One benefit of parallel routing is that each slot can have its **own navigation** and behave independently.

**Add Subnavigation to Notifications**

We’ll add subnavigation in the `@notifications` slot to switch between default and archived views.

`app/complex-dashboard/@notifications/page.tsx`

```tsx
import Link from 'next/link';

export default function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
      <Link href="/complex-dashboard/archived">Go to Archived</Link>
    </div>
  );
}
```

Then create the **archived view**:

`app/complex-dashboard/@notifications/archived/page.tsx`

```tsx
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <div>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard">Back to Notifications</Link>
    </div>
  );
}
```

Now visiting:

* `/complex-dashboard` shows the **default notifications view**
* `/complex-dashboard/archived` shows the **archived notifications view**

The **rest of the dashboard** (users, revenue, etc.) remains unchanged during this navigation — a major strength of parallel routing.

---

#### **What Are Unmatched Routes?**

When you navigate to a sub-path like `/complex-dashboard/archived`, only the `@notifications` slot matches the route.

The other slots — `@users`, `@revenue`, and even `children` — do **not** match this new route.

**What Happens on Navigation vs Reload?**

* **When Navigating via Links**:

  * Next.js **retains the previous content** of unmatched slots.
  * Only the slot that matches the new URL is re-rendered (e.g., `@notifications`).

* **When Reloading the Page**:

  * Next.js attempts to load all slot content for the current URL.
  * Slots without matching content result in a `404 - Not Found`.

---

#### **Fixing with `default.tsx`**

To prevent 404 errors during reloads or deep links, we must define a `default.tsx` file in **every unmatched slot**.

The `default.tsx` acts as a **fallback** component when a slot has no matching route segment in the URL.

---

#### **Add `default.tsx` for All Unmatched Slots**

* [**Children Slot**](#children-slot)
* [**Users Slot**](#users-slot)
* [**Revenue Slot**](#revenue-slot)

##### **Children Slot**

`app/complex-dashboard/default.tsx`

```tsx
export default function DashboardDefault() {
  return <h2>Complex Dashboard Default</h2>;
}
```

##### **Users Slot**

`app/complex-dashboard/@users/default.tsx`

```tsx
export default function UsersDefault() {
  return <div>User Analytics Default Content</div>;
}
```

##### **Revenue Slot**

`app/complex-dashboard/@revenue/default.tsx`

```tsx
export default function RevenueDefault() {
  return <div>Revenue Metrics</div>;
}
```

Now, when visiting `/complex-dashboard/archived` directly or reloading it:

* `@notifications` renders `archived/page.tsx`
* Other slots render their respective `default.tsx`

> This avoids any 404 errors and gives you full control over fallback content.

---

### **Conditional Routes**

One of the most compelling use cases for **parallel routing** in Next.js is **conditional UI rendering** based on application state — like **authentication**.

With **conditional routes**, you can render completely separate components under the **same URL** based on dynamic conditions, such as whether a user is logged in or not. This keeps your logic **clean** and **declarative**, without complex if/else rendering in your components.

* [**Scenario Authenticated vs Unauthenticated Users**](#scenario-authenticated-vs-unauthenticated-users)
* [**Step 1 Create a `@login` Slot**](#step-1-create-a-@login-slot)
* [**Step 2 Update the Layout to Conditionally Render**](#step-2-update-the-layout-to-conditionally-render)
* [**Benefits of Conditional Routes**](#benefits-of-conditional-routes)
* [**Extendability**](#extendability)

---

#### **Scenario Authenticated vs Unauthenticated Users**

We’ll implement a basic authentication check that determines whether to show:

* A dashboard (for authenticated users), or
* A login page (for unauthenticated users)
  All at the **same route**: `/complex-dashboard`

---

#### **Step 1 Create a `@login` Slot**

`app/complex-dashboard/@login/page.tsx`

```tsx
export default function Login() {
  return (
    <div className="card">
      <h2>Please log in to continue</h2>
    </div>
  );
}
```

> In a real app, this would include a form and login logic. For demo purposes, this static message is enough.

---

#### **Step 2 Update the Layout to Conditionally Render**

`app/complex-dashboard/layout.tsx`

Update the layout file to accept the `login` slot and conditionally render it based on a fake `isLoggedIn` flag.

```tsx
// File: app/complex-dashboard/layout.tsx

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: Props) {
  const isLoggedIn = false; // simulate login check

  if (!isLoggedIn) {
    return <>{login}</>; // Show login slot
  }

  return (
    <div className="dashboard">
      <h1>Complex Dashboard</h1>
      <div className="cards">
        {children}
        {users}
        {revenue}
        {notifications}
      </div>
    </div>
  );
}
```

- Now, when `isLoggedIn` is `false`, only the login page is rendered — at the same `/complex-dashboard` URL. 
- If you switch `isLoggedIn` to `true`, your dashboard content (users, revenue, notifications, and main page) will render as expected.

---

#### **Benefits of Conditional Routes**

| Feature                         | Description                                                                |
| ------------------------------- | -------------------------------------------------------------------------- |
| Seamless Switching              | Render different UIs under the same URL based on dynamic logic             |
| Slot Isolation                  | Each view is fully isolated — no shared code required between slots        |
| Fine-Grained Control            | Each slot still gets its own loading/error handling and subnavigation      |
| Clean Separation of Concerns    | No spaghetti conditional rendering logic inside one giant layout component |

---

#### **Extendability**

You could extend this pattern for:

* Role-based dashboards (admin vs user views)
* A/B testing different UI components
* Conditional onboarding experiences
* Multi-tenant interfaces

---

> **Pro Tip:** In a real-world app, use `getServerSession()` from **auth.js** or a custom auth hook to determine `isLoggedIn`.

---

### **Intercepting Routes**

**Intercepting Routes** are an advanced feature of the App Router in Next.js that let you display content from another part of your app **within the current layout context**, while still updating the **URL**. This is perfect for features like **modals**, **previews**, or **lightboxes**, where you want users to stay in context.

* [**Real-world Examples**](#real-world-examples)
* [**How Intercepting Routes Work**](#how-intercepting-routes-work)
* [**Examples**](#examples)
* [**Intercepting Routes Cheat Sheet**](#intercepting-routes-cheat-sheet)
* [**Why Use Intercepting Routes**](#why-use-intercepting-routes)

---

#### **Real-world Examples**

* Clicking "Login" opens a **modal**, but the URL becomes `/login`. Refreshing this URL loads the **full login page**.
* Clicking a photo in a gallery opens an **overlay with details**, but visiting the photo URL directly shows the **full photo page**.

---

#### **How Intercepting Routes Work**

Intercepting Routes are based on **folder naming conventions** that tell Next.js to intercept navigation based on relative path **level differences**.

**Folder Setup Basics**

We’ll walk through four routing levels:

| Convention    | Prefix Syntax                | When to Use                          |
| ------------- | ---------------------------- | ------------------------------------ |
| Same level    | `(.)`                        | Intercept sibling routes             |
| One level up  | `(..)`                       | Intercept parent-level routes        |
| Two levels up | `(../..)` (i.e., `(..)(..)`) | Intercept grandparent-level routes   |
| From app root | `(...)`                      | Intercept any route relative to root |

---

#### **Examples**

* [**Intercepting Same-Level Routes**](#intercepting-same-level-routes)
* [**Intercepting One Level Up**](#intercepting-one-level-up)
* [**Intercepting Two Levels Up**](#intercepting-two-levels-up)
* [**Intercepting From Root**](#intercepting-from-root)

---

##### **Intercepting Same-Level Routes**

**Goal Intercept `f1/f2` when navigating from `f1`**

```
app/
  f1/
    page.tsx
    f2/            ← target route
      page.tsx
    (.)f2/         ← intercepting route
      page.tsx
```

* Add a `Link` to `/f1/f2` inside `f1/page.tsx`.
* Inside `(.)f2/page.tsx`, show an alternate layout: e.g. modal or lightbox.
* Visiting `/f1/f2` via `Link` from `f1` → shows intercepted route.
* Refreshing `/f1/f2` → shows original `f2` page.

---

##### **Intercepting One Level Up**

**Goal: Intercept `/f3` when navigating from `/f1`**

```
app/
  f1/
    page.tsx
    (..)/f3/        ← intercepting route
      page.tsx
  f3/
    page.tsx        ← target
```

* Add a `Link` to `/f3` inside `f1/page.tsx`.
* Inside `(..)/f3/page.tsx`, return alternate content.
* Refreshing `/f3` still loads `f3/page.tsx`.

---

##### **Intercepting Two Levels Up**

**Goal: Intercept `/f4` when navigating from `/f1/f2`**

```
app/
  f1/
    f2/
      page.tsx
      (..)(..)/f4/   ← intercepting route
        page.tsx
  f4/
    page.tsx         ← target
```

* Add a `Link` to `/f4` in `f1/f2/page.tsx`.
* `(..)(..)/f4/page.tsx` handles intercepted view.
* URL updates, context stays, full page on refresh.

---

##### **Intercepting From Root**

**Goal: Intercept `/f5` from `/f1/f2/inner-f2`**

```
app/
  f1/
    f2/
      inner-f2/
        page.tsx
        (...)f5/     ← intercepting route
          page.tsx
  f5/
    page.tsx         ← target
```

* Use `(...)` to intercept from anywhere in app back to root route.
* Add a `Link` to `/f5` in `inner-f2/page.tsx`.
* Shows intercepted view on click, real route on refresh.

---

#### **Intercepting Routes Cheat Sheet**

| Use Case                 | Folder Prefix | Notes                     |
| ------------------------ | ------------- | ------------------------- |
| Intercept sibling routes | `(.)`         | Same folder level         |
| Intercept parent folder  | `(..)`        | One level above           |
| Intercept grandparent    | `(..)(..)`    | Two levels up             |
| Intercept from app root  | `(...)`       | Any route from root level |

---

#### **Why Use Intercepting Routes**

* Preserve user context (e.g., modal overlays)
* URL remains shareable and refresh-safe
* Clean UX for modals, previews, and nested views
* Keeps layouts and route logic clean and modular

---

### **Parallel Intercepting Routes**

Combine **parallel** and **intercepting** routes for modals with persistent layout.

#### **Demo**

At `/photo-feed`, you see a photo grid.

Clicking a photo updates the URL to `/photo-feed/[id]` and opens a **modal** (instead of navigating away). The background (feed) remains visible.

> **Benefits**: Shareable URLs, refresh support, browser back/forward works as expected.

* [**Step 1 Add Images**](#step-1-add-images)
* [**Step 2 Create Metadata**](#step-2-create-metadata)
* [**Step 3 Create Photo Feed Page**](#step-3-create-photo-feed-page)
* [**Step 4 Create Dynamic ID Page**](#step-4-create-dynamic-id-page)
* [**Step 5 Create Modal Parallel Route**](#step-5-create-modal-parallel-route)
* [**Step 6 Add Default for Modal**](#step-6-add-default-for-modal)

---

##### **Step 1 Add Images**

Store photos in `app/photo-feed/photos`.

##### **Step 2 Create Metadata**

`wonders.ts`

```ts
// app/photo-feed/wonders.ts
import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/1.png";
import photo3 from "./photos/1.png";
import photo4 from "./photos/1.png";
import photo5 from "./photos/1.png";
import photo6 from "./photos/1.png";
import photo7 from "./photos/1.png";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];

export default wondersImages;
```

##### **Step 3 Create Photo Feed Page**

```tsx
// app/photo-feed/page.tsx
import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
```

##### **Step 4 Create Dynamic ID Page**

```tsx
// app/photo-feed/[id]/page.tsx
import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
```

##### **Step 5 Create Modal Parallel Route**

```tsx
// app/photo-feed/@modal/(.)[id]/page.tsx
import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
```

In `photo-feed/layout.tsx`, receive parallel routes:

```tsx
export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
```

##### **Step 6 Add Default for Modal**

```tsx
// app/photo-feed/@modal/default.tsx
export default function Default() {
  return null // Modal starts empty
}
```

go to `/photo-feed` and click on a photo. The modal opens with the photo details, and the URL updates to `/photo-feed/[id]`. Refreshing this URL shows the full photo page.

---

## **6. Route Handlers**

Next.js Route Handlers let you build **custom RESTful API endpoints** directly inside your app—no need for Express or a separate server. They are a powerful alternative to `pages/api` in the old Pages Router and work seamlessly within the App Router structure.

* [**What Are Route Handlers**](#what-are-route-handlers)
* [**Benefits of Route Handlers**](#benefits-of-route-handlers)
* [**Getting Started Your First Route Handler**](#getting-started-your-first-route-handler)
* [**Folder Organization**](#folder-organization)
* [**Avoid Route Handler Conflicts**](#avoid-route-handler-conflicts)
* [**GET Requests**](#get-requests)
* [**POST Requests**](#post-requests)
* [**Dynamic Route Handlers**](#dynamic-route-handlers)
* [**PATCH Request**](#patch-request)
* [**DELETE Request**](#delete-request)

---

### **What Are Route Handlers**

* **Defined in**: `route.ts` (or `route.js`)
* **Located in**: Any folder inside `/app`
* **Purpose**: Handle HTTP requests like GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
* **Use Cases**:

  * CRUD operations with a database
  * Calling third-party APIs
  * Securing server-side logic like secret keys

---

### **Benefits of Route Handlers**

- Fully integrated—no need for a separate backend
- Keeps secrets server-side (e.g., API keys)
- Supports RESTful conventions out of the box
- Share folder structure with page routes (but no conflicts!)

---

### **Getting Started Your First Route Handler**

* [**Create a Simple GET Handler**](#create-a-simple-get-handler)
* [**Test It**](#test-it)

#### **Create a Simple GET Handler**

```bash
mkdir app/hello
touch app/hello/route.ts
```

```ts
// app/hello/route.ts
export async function GET() {
  return new Response("Hello World")
}
```

#### **Test It**

Visit: [http://localhost:3000/hello](http://localhost:3000/hello)

- You should see: `Hello World`

---

### **Folder Organization**

Route handlers can be nested just like page routes:

```bash
app/
├── hello/
│   └── route.ts       # GET /hello
├── dashboard/
│   └── route.ts       # GET /dashboard
│   └── users/
│       └── route.ts   # GET /dashboard/users
```

**Example**

```ts
// app/dashboard/route.ts
export async function GET() {
  return new Response("Dashboard data")
}
```

```ts
// app/dashboard/users/route.ts
export async function GET() {
  return new Response("User data")
}
```

---

### **Avoid Route Handler Conflicts**

If you define both a `page.tsx` and a `route.ts` in the same folder, the **route handler will take precedence**.

* [**Conflict Example**](#conflict-example)
* [**Fix Use an `api` Subfolder**](#fix-use-an-api-subfolder)

#### **Conflict Example**

```
app/
└── profile/
    ├── page.tsx       # Won't be used
    └── route.ts       # Takes over
```

#### **Fix Use an `api` Subfolder**

```bash
mkdir app/profile/api
mv app/profile/route.ts app/profile/api/route.ts
```

Now:

* `/profile` renders your page.
* `/profile/api` handles API requests.

---

### **GET Requests**

In this section, we'll explore how to handle `GET` requests using **Route Handlers** in the **App Router**. Rather than building a UI, we’ll use **Postman**, a REST API client for VS Code, to test our endpoints.

* [**Setup Install Postman**](#setup-install-postman)
* [**Step 1 Create Sample Data**](#step-1-create-sample-data)
* [**Step 2 Create the GET Route Handler**](#step-2-create-the-get-route-handler)
* [**Step 3 Test with Postman**](#step-3-test-with-postman)

---

#### **Setup Install Postman**

Install the [Postman](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode/) application if you haven't already. It allows you to quickly send requests to your local server for testing API endpoints.

---

#### **Step 1 Create Sample Data**

Create a folder for storing comments:

```bash
mkdir api/comments
touch api/comments/data.ts
```

Add some sample data in `data.ts`:

```ts
// api/comments/data.ts
export const comments = [
  { id: 1, text: "First comment" },
  { id: 2, text: "Second comment" },
  { id: 3, text: "Third comment" },
];
```

> These comments are stored in memory. They will reset every time the app restarts or reloads—which is fine for learning purposes.

---

#### **Step 2 Create the GET Route Handler**

Create the route handler file:

```bash
touch api/comments/route.ts
```

Then define the `GET` handler:

```ts
// api/comments/route.ts
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}
```

> `Response.json(data)` is a shortcut for returning a JSON-formatted HTTP response in Next.js.

---

#### **Step 3 Test with Postman**

1. Open the Postman tab in VS Code.
2. Click **New Request**.
3. Set method to `GET`.
4. Enter the URL: `http://localhost:3000/api/comments`.
5. Click **Send**.

You should see:

```json
[
  { "id": 1, "text": "First comment" },
  { "id": 2, "text": "Second comment" },
  { "id": 3, "text": "Third comment" }
]
```

>  Response status: **200 OK**
>  Your GET route handler is working as expected!

---

### **POST Requests**

In this section, we'll learn how to create and test a **POST request** using Route Handlers in the App Router. We’ll continue using **Postman** to simulate API calls.

* [**Step 1 Prepare Your POST Request in Postman**](#step-1-prepare-your-post-request-in-postman)
* [**Step 2 Define the POST Handler**](#step-2-define-the-post-handler)
* [**Step 3 Test POST Request**](#step-3-test-post-request)
* [**Step 4 Verify with GET**](#step-4-verify-with-get)

---

#### **Step 1 Prepare Your POST Request in Postman**

1. Open Postman in VS Code.
2. Create a **New Request**.
3. Set **HTTP Method** to `POST`.
4. Set the **URL** to: `http://localhost:3000/api/comments`.
5. Switch to the **Body** tab, select `JSON`, and enter:

```json
{
  "text": "New comment"
}
```

> At this point, if you hit **Send**, you’ll get a `405 Method Not Allowed` error — because we haven’t defined a `POST` handler yet.

---

#### **Step 2 Define the POST Handler**

Open the `api/comments/route.ts` file, and add a `POST` handler:

```ts
// api/comments/route.ts
import { comments } from "./data";

// GET handler (already defined)
export async function GET() {
  return Response.json(comments);
}

// POST handler
export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
```

> The function name **must match** the HTTP verb (`POST`).
> We use `Response` to return a proper JSON response with status `201 Created`.

---

#### **Step 3 Test POST Request**

1. Go back to your POST request in Postman.
2. Click **Send**.

You should get a response like:

```json
{
  "id": 4,
  "text": "New comment"
}
```

> Status: **201 Created**

---

#### **Step 4 Verify with GET**

1. Switch back to your earlier `GET` request tab.
2. Click **Send** again.

You should now see the fourth comment appended to the list:

```json
[
  { "id": 1, "text": "First comment" },
  { "id": 2, "text": "Second comment" },
  { "id": 3, "text": "Third comment" },
  { "id": 4, "text": "New comment" }
]
```

---

### **Dynamic Route Handlers**

We’ve already handled `GET` and `POST` requests for our `/api/comments` endpoint. Now, let’s explore **dynamic route handlers** — a necessary step before implementing `PATCH` and `DELETE` requests, which operate on **individual comments by ID**.

* [**Why Dynamic Routes**](#why-dynamic-routes)
* [**Step 1 Set Up the Dynamic Route Folder**](#step-1-set-up-the-dynamic-route-folder)
* [**Step 2 Create the GET Handler for a Specific Comment**](#step-2-create-the-get-handler-for-a-specific-comment)
* [**Step 3 Test with Postman Dynamic Route**](#step-3-test-with-postman-dynamic-route)

---

#### **Why Dynamic Routes**

To update or delete a specific comment (e.g., comment with ID `1`), the request must target a route like:

```
/api/comments/1
/api/comments/2
```

Each `ID` is a **dynamic segment**, and we handle this in Next.js just like dynamic pages — using `[id]` in the folder name.

---

#### **Step 1 Set Up the Dynamic Route Folder**

Within the `api/comments` directory:

1. Create a folder named `[id]` (square brackets indicate dynamic route).
2. Inside `[id]`, create a file named `route.ts`.

The structure should look like:

```
api/
  comments/
    [id]/
      route.ts
```

---

#### **Step 2 Create the GET Handler for a Specific Comment**

Edit `api/comments/[id]/route.ts`:

```ts
// api/comments/[id]/route.ts
import { comments } from "../data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const comment = comments.find(c => c.id === parseInt(id));

  return Response.json(comment);
}
```

> `context.params.id` provides the dynamic segment from the URL.
> We use `parseInt(id)` because comment IDs are numbers.

---

#### **Step 3 Test with Postman Dynamic Route**

1. Open your `GET` request in Postman.
2. Update the URL to: `http://localhost:3000/api/comments/1`
3. Click **Send**.

> You should see:

```json
{
  "id": 1,
  "text": "First comment"
}
```

Try `.../2` and `.../3` as well — each should return the corresponding comment.

---

### **PATCH Request**

Now that we can fetch a single comment using dynamic routes, let’s learn how to **update** one using the `PATCH` method. This is useful for making **partial changes**—like updating just the `text` of a comment.

* [**Step 1 Test a PATCH Request in Postman**](#step-1-test-a-patch-request-in-postman)
* [**Step 2 Add PATCH Handler**](#step-2-add-patch-handler)
* [**Step 3 Re-Test in Postman**](#step-3-re-test-in-postman)

---

#### **Step 1 Test a PATCH Request in Postman**

1. Open Postman and create a **new request**.

2. Set the HTTP method to `PATCH`.

3. Use this URL:

   ```
   http://localhost:3000/api/comments/3
   ```

4. Go to the **Body** tab → Select `JSON`, and paste:

   ```json
   {
     "text": "Updated comment"
   }
   ```

5. Click **Send** — you’ll see a `405 Method Not Allowed` error for now.

Let’s fix that.

---

#### **Step 2 Add PATCH Handler**

In `api/comments/[id]/route.ts`, add the following handler:

```ts
import { comments } from "../data";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  comments[index].text = text;

  return Response.json(comments[index]);
}
```

---

**Happening Here**

* We extract the `id` from the dynamic route using `context.params.id`.
* We parse the request body to get the new `text`.
* We locate the comment’s **index** using `findIndex()`.
* If the comment exists, we update its text and return it in the response.
* If it doesn’t exist, we return a `404 Not Found`.

---

#### **Step 3 Re-Test in Postman**

* Send the `PATCH` request again with the new text.
* You’ll receive a `200 OK` response and see:

```json
{
  "id": 3,
  "text": "Updated comment"
}
```

* Switch to your `GET /api/comments` tab and hit **Send**:

  * You’ll see the updated text reflected for comment ID `3`.

---

### **DELETE Request**

A `DELETE` request allows us to **remove a resource**, in this case, a comment by its ID. Let’s walk through the setup and test it using Postman.

* [**Step 1 Test a DELETE Request in Postman**](#step-1-test-a-delete-request-in-postman)
* [**Step 2 Add DELETE Handler**](#step-2-add-delete-handler)
* [**Step 3 Re-Test the Request**](#step-3-re-test-the-request)

---

#### **Step 1 Test a DELETE Request in Postman**

1. Open the Postman tab where you're testing the dynamic comment route.
2. Change the HTTP method to `DELETE`.
3. Use this URL:

   ```
   http://localhost:3000/api/comments/3
   ```

4. No need to add anything in the body.
5. Click **Send**. You’ll see a `405 Method Not Allowed` error — let’s fix that.

---

#### **Step 2 Add DELETE Handler**

In the same file: `api/comments/[id]/route.ts`, add the following function:

```ts
import { comments } from "../data";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = comments.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return Response.json(deletedComment);
}
```

---

**What’s Happening Here**

* We extract the comment `id` from the URL.
* Use `findIndex()` to locate the comment’s position.
* If it exists, we store it in a variable, remove it from the array using `splice()`, and return it.
* If it’s not found, we respond with a `404 Not Found`.

---

#### **Step 3 Re-Test the Request**

* Click **Send** on the `DELETE` request again.
* You’ll receive a `200 OK` response with the deleted comment:

```json
{
  "id": 3,
  "text": "Updated comment"
}
```

* Now switch to the `GET /api/comments` request and send it — you should now see only two comments left.

---

## **7. Using TypeScript in Next.js 15**

💡 *Goal: Achieve full type-safety across pages, API routes, server components, and client components.*

**What We’ll Cover**

- Typing props for pages, layouts, components
- Typing `params` for dynamic routes
- Typing API route handlers (Request, Response)
- Using utility types (generics, conditional types)
- Aliasing paths (`@/lib`, `@/components`) in `tsconfig.json`

---

### **1. Typing Page Props**

In **dynamic routes** like `app/blog/[id]/page.tsx`, you get `params` injected automatically.

**Typing `params`**

```tsx
type PageProps = {
  params: { id: string };
};

export default function BlogPostPage({ params }: PageProps) {
  const { id } = params;
  return <div>Blog Post ID: {id}</div>;
}

```

✅ **Tip:** Always name it `params`, as Next.js expects that.

---

### **2. Typing API Route Handlers**

Let’s correctly type our API handlers too:

`app/api/posts/[id]/route.ts`

```tsx
import { NextResponse } from 'next/server';

type Context = {
  params: { id: string };
};

export async function GET(req: Request, { params }: Context) {
  const { id } = params;
  return NextResponse.json({ id });
}

```

✅ **Why?**

- You avoid typos (`params.idd ❌`)
- VSCode gives you autocomplete
- Future-proof against API changes

---

### **3. Typing Server-Side Helpers**

Remember our `lib/fake-db.ts`?

Make all functions typed cleanly:

```
export type Post = {
  id: number;
  title: string;
  body: string;
};

export function getPosts(): Post[] { ... }

export function getPostById(id: number): Post | undefined { ... }

export function addPost(post: Omit<Post, 'id'>): Post { ... }

```

✅ **Using `Omit<Type, 'field'>`** is a **best practice** when you want to avoid manually redefining types.

---

### **4. Typing Client Components**

For client components like `NewPostForm.tsx`:

✅ Type your `useState` hooks properly:

```tsx
const [title, setTitle] = useState<string>('');
const [body, setBody] = useState<string>('');

```

✅ Type event handlers too:

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setTitle(e.target.value);
}

```

✅ Type submit event:

```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { ... }

```

✅ Why bother?

- You prevent wrong access like `e.target.value` on non-inputs.
- You get **instant IntelliSense** while typing!

---

### **5. Tsconfig Aliased Paths**

✅ Let’s make your imports cleaner:
Instead of ugly:

```tsx
import { getPosts } from '../../../lib/fake-db';

```

We want:

```tsx
import { getPosts } from '@/lib/fake-db';

```

---

### **Update `tsconfig.json`**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}

```

> Now, @/lib, @/components, etc., will auto-resolve anywhere.

---

### **Strict TypeScript**

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true
  }
}

```

✅ These flags:

- Catch bugs at compile time
- Enforce best practices
- Make collaboration smoother in big teams

---

### **TypeScript Recap**

| Area | Type |
| --- | --- |
| Page props (`params`) | `type PageProps = { params: { slug: string } }` |
| API Route Context | `type Context = { params: { id: string } }` |
| Server-side data helpers | Use `Post` model |
| Client-side event handlers | `ChangeEvent`, `FormEvent` |
| Path Aliasing | `@/lib`, `@/components` |

---

## **8. Middleware**

**Middleware** in Next.js allows you to **intercept and control** incoming requests **before they reach the route handler or page**. This is powerful for:

* Authentication and authorization
* URL rewrites and redirects
* Cookie and header manipulation
* Localization and personalization

---

### **Creating Middleware**

Create a `middleware.ts` file in the root of your project (at the same level as `app/`):

```bash
project-root/
├── app/
├── public/
├── middleware.ts
```

---

### **Basic Redirect Using Matcher**

**Redirect `/profile` to `/`** (the homepage):

```ts
// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/profile", // Only apply middleware to this route
};
```

* On visiting `/profile`, the browser will redirect to `/`.

---

### **Conditional Logic Without Matcher**

You can also apply logic programmatically instead of using `matcher`:

```ts
// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }

  return NextResponse.next(); // Proceed as normal for other routes
}
```

* Navigating to `/profile` will **redirect to `/hello`**.
* This approach gives you **more flexibility**.

---

### **URL Rewrites**

Instead of changing the visible URL, you can **serve different content** while **keeping the original URL**.

```ts
if (pathname === "/profile") {
  return NextResponse.rewrite(new URL("/hello", request.url));
}
```

* You see `/hello` content at `/profile`, **without the URL changing**.
* Useful for **legacy URLs or SEO optimizations**.

---

### **Handling Cookies in Middleware**

You can set or read cookies easily:

```ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme");

  // If theme cookie doesn't exist, set it
  if (!theme) {
    const response = NextResponse.next();
    response.cookies.set("theme", "dark");
    return response;
  }

  // If theme cookie exists, just continue
  return NextResponse.next();
}
```

**here's how you can test it:**

**1.** **Open DevTools** in the browser.

**2.** Go to the **Network tab**, refresh the page.

**3.** Click on the request (e.g., to `/`) and inspect the **Response Headers → Set-Cookie**.

**4.** You should see something like:

```
Set-Cookie: theme=dark; Path=/; ...
```

> * If the `theme` cookie doesn’t exist, it will be set to `"dark"`.
> 
> * Cookies can persist across requests and personalize user experiences.

---

### **Adding Custom Headers**

```ts
import { NextResponse } from "next/server";

export function middleware() {

  const response = NextResponse.next();

  response.headers.set("x-custom-header", "custom-value");

  return response;
}
```

* View it under **Network → Response Headers** in browser DevTools.

---

### **Testing Middleware**

Run your dev server:

```bash
npm run dev
```

And test the routes like `/profile` or `/hello`. You can:

* Check redirection or rewrites in the **browser address bar**
* View **cookies in Application tab**
* Inspect **custom headers in Network tab**

---

## **9. Rendering**

* [**Introduction to Rendering**](#introduction-to-rendering)
* [**Client-side Rendering**](#client-side-rendering)
* [**Server-side Rendering**](#server-side-rendering)
* [**Suspense SSR**](#suspense-ssr)
* [**React Server Components**](#react-server-components)
* [**Server and Client Components**](#server-and-client-components)
* [**Rendering Lifecycle in React Server Components**](#rendering-lifecycle-in-react-server-components)

### **Introduction to Rendering**

After exploring the ins and outs of Next.js routing in the previous section, we are now ready to tackle something equally important: **Rendering**.

Rendering might sound complex, but it is actually pretty straightforward. At its core, rendering is the process of transforming the component code you write into user interfaces that users can see and interact with.

---

#### **The Challenge of Rendering**

While rendering itself is simple, building a performant application requires understanding **when** and **where** this transformation should happen. You may have come across terms like:

* **CSR** (Client-Side Rendering)
* **SSR** (Server-Side Rendering)
* **SSG** (Static Site Generation)

These terms can often be confusing at first, but they each refer to different rendering strategies that you can choose based on your application's needs.

---

### **Client-side Rendering**

To fully understand how rendering works in Next.js, it's important to first see how React's rendering strategies have evolved over the past decade.

React initially rose to popularity through its use in **Single Page Applications (SPAs)**. In this model, when a client visits the site, the server sends back a single HTML file. This HTML file is typically minimal—usually just a `<div>` element and a reference to a JavaScript file.

For example, using tools like **Create React App**, you would receive an HTML file with:

* An empty `<div>` tag as the root
* A reference to `bundle.js`, which contains:

  * The React library
  * Your application’s logic
  * Everything required to render your app

Once the browser downloads the JavaScript file, it begins generating the UI directly in the browser—injecting HTML into the DOM under that root div. Only at this point does the user interface become visible.

---

#### **Verifying CSR Behavior**

You can confirm this behavior using browser tools:

* In the **DOM inspector**, you will see the rendered elements like `<header>`, `<h1>`, and `<p>`.
* But if you **view the page source**, you'll only see the initial, barebones HTML from the server.

This process of transforming React components into UI within the browser is known as **Client-side Rendering (CSR)**.

---

#### **Advantages and Limitations of CSR**

While CSR was revolutionary for building interactive SPAs, it has notable limitations:

**SEO Challenges**

Search engines primarily index HTML content. But with CSR, the server delivers mostly an empty HTML shell. If meaningful content is rendered via JavaScript, search engines might miss it—especially if the content loads slowly due to API calls or nested components.

**Performance and User Experience**

With CSR, the browser must:

* Fetch all JavaScript
* Execute the application logic
* Fetch data
* Render the UI
* Attach interactivity

This workload can lead to blank screens or loading spinners during page load. As the JavaScript bundle grows with new features, so does the load time—especially noticeable for users on slow connections.

---

### **Server-side Rendering**

Having just covered **Client-side Rendering (CSR)** and its drawbacks, such as SEO and user experience issues, we now turn our attention to **Server-side Rendering (SSR)** as a solution to these problems.

---

#### **How SSR Improves Content Delivery**

In traditional CSR, the server delivers a minimal HTML file that requires JavaScript to render the content on the client-side. In contrast, SSR involves the server rendering the full HTML content before sending it to the browser. This fully-formed HTML document allows the browser to quickly parse and display the content, improving initial page load times.

SSR tackles both the SEO and user experience issues:

* **SEO Improvement**: Since the content is already rendered on the server, search engines can easily index the content, solving the SEO issue.
* **User Experience**: Users see meaningful HTML content right away, rather than staring at a blank screen or loading spinner.

However, there are some complexities introduced by SSR, especially when it comes to interactivity.

---

#### **Hydration Making Pages Interactive**

The initial page served by the server is static HTML. For the page to become fully interactive, the browser needs to download and execute the JavaScript bundle, which includes both React and your application's code. This phase is called **hydration**. During hydration, React takes over the static HTML and turns it into a fully interactive page.

Hydration involves:

* **Mapping out interactive elements**: React reconstructs the component tree in memory, using the server-rendered HTML as a blueprint.
* **Initializing interactivity**: React sets up application state, event handlers, and dynamic features needed for a complete user experience.

Understanding hydration is key to understanding how SSR operates in real-world applications.

---

#### **Static Site Generation (SSG) vs. SSR**

There are two main server-side strategies in rendering:

1. **Static Site Generation (SSG)**: This happens at build time, meaning the pages are pre-rendered and ready to serve when deployed. SSG works best for content that remains relatively stable, such as blog posts.
2. **Server-side Rendering (SSR)**: With SSR, the page is rendered on-demand, based on the specific request. SSR is ideal for dynamic content that changes frequently, like social media feeds or personalized data.

Although SSG and SSR are both categorized as server-side solutions, they differ in when and how the content is generated.

---

#### **Challenges with SSR**

While SSR improves SEO and performance over CSR, it introduces several challenges:

1. **Data Fetching**: If a component requires data from an API or database, this data must be fetched before the server can render the page. This could delay the server's response time since all necessary data must be collected before any HTML is sent to the client.

2. **Hydration Matching**: For successful hydration, the component tree in the browser must exactly match the server-rendered HTML. This means that the entire JavaScript bundle for the page must be loaded on the client before hydration can begin.

3. **Waterfall Problem**: React hydrates the component tree in a single pass, meaning it must complete the entire hydration process before any part of the page becomes interactive. This leads to an all-or-nothing process where the entire page has to load, and the JavaScript must be executed, before any interaction can happen.

These challenges can lead to inefficient performance, especially when parts of the app are slower than others, which is common in real-world applications. This led the React team to develop an improved SSR architecture, which we will explore next.

---

### **Suspense SSR**

In our exploration of **Server-side Rendering (SSR)**, we identified several performance challenges:

1. We can't start rendering HTML until all data is fetched on the server.
2. We need to wait for all JavaScript to load before hydration can begin.
3. Every component needs to be hydrated before any of them become interactive.

These issues created an **All or Nothing** waterfall effect, which is inefficient, particularly when some parts of your application are slower than others. To address these performance drawbacks, React 18 introduced the **Suspense SSR** architecture. This new architecture unlocks two game-changing features:

* **HTML Streaming on the Server**
* **Selective Hydration on the Client**

---

#### **HTML Streaming with Suspense**

Traditionally, SSR involved rendering the entire HTML on the server and sending it to the client all at once. React 18 improves this by allowing HTML streaming. When you wrap your main content area in a **Suspense** component, you're telling React to **stream** the content. React will display a loading spinner for that section while it continues working on the rest of the page.

This feature allows users to see content even before React has finished loading the necessary JavaScript, which solves our first problem — you don't need to fetch everything before you can show anything. If a particular section is slow to load, it can be integrated into the stream once it's ready, without holding up the rest of the page.

---

#### **Selective Hydration**

While HTML streaming improves the delivery of content, we still face a challenge: we can't start hydration until all the JavaScript for the main section has been loaded. To address this, React 18 introduces **Selective Hydration**.

With selective hydration, you can hydrate parts of the page independently, even before the rest of the HTML and JavaScript has fully loaded. React will prioritize hydration based on which components the user is trying to interact with. For example, if a user clicks on the main content area while the side navigation is still waiting to be hydrated, React will immediately switch gears to hydrate the clicked component, making it interactive right away. The side navigation can then be hydrated later.

This approach solves the **All or Nothing** hydration problem, enabling users to interact with other parts of the page — like the header or navigation — even before the main content is fully interactive.

---

#### **Benefits of Suspense SSR**

The introduction of **Suspense SSR** addresses the three major drawbacks of traditional SSR:

* **Faster initial HTML delivery**: Content can be streamed in parts, allowing faster page loads.
* **Selective hydration**: Parts of the page can be made interactive as soon as they are ready, without waiting for the entire page to load.
* **Prioritized hydration**: React handles hydration intelligently, focusing on the parts of the page that users are interacting with first.

---

#### **Remaining Challenges**

Despite these improvements, there are still a few challenges to consider:

1. **JavaScript Bundle Size**: As more features are added, the JavaScript bundle grows, leading to longer download times. This raises the question: **Do users need to download so much data?**
2. **Hydrating Unnecessary Components**: React hydrates every component, even those that don't require interactivity. This can slow down load times and time to interactivity. **Should all components be hydrated?**
3. **Client-Side Workload**: While servers handle the heavy lifting, client devices still bear the bulk of the JavaScript work, which can slow down performance, especially on less powerful devices. **Should we offload more work to the server?**

These challenges point to the need for smarter ways to build fast applications, going beyond traditional rendering approaches. We will explore solutions to these issues in the next section.

---

### **React Server Components**

We’ve evolved from **Client-Side Rendering (CSR)** to **Server-Side Rendering (SSR)**, and then to **Suspense for SSR**. While each step brought improvements, they also introduced new challenges, such as large bundle sizes, unnecessary hydration, and heavy client-side processing. To tackle these challenges, React introduced **React Server Components (RSC)**, a new architecture designed to optimize efficiency, load times, and interactivity.

React Server Components (RSC) represent a **dual component model** that distinguishes between **client components** and **server components**. This distinction is based on the **execution environment** and the specific systems each component interacts with.

---

#### **Client Components**

Client components are the familiar React components that we've been using in previous rendering techniques. They are typically rendered on the client side but can also be rendered to HTML once on the server for an initial fast page load.

**Client components**:

* Operate on the client and can access **browser-exclusive APIs** like **geolocation**, **local storage**, and manage **state** and **event listeners**.
* They can be rendered server-side for optimization, but they still function mainly on the client side.
* These components handle interactive parts like click events and form inputs, just as we've done traditionally.

---

#### **Server Components**

Server components represent a new type of React component that **runs exclusively on the server**. The key difference is that the **code for server components never leaves the server**, meaning they are never downloaded to the client.

**Benefits of Server Components**:

1. **Smaller Bundle Sizes**: Since server components don’t require JavaScript to be sent to the client, the client downloads much less code. This is ideal for users on slower connections or with less powerful devices, leading to **faster load times** and **better performance**.

2. **Direct Access to Server Resources**: Server components can directly interact with databases, file systems, and other server-side resources, making data fetching more efficient.

3. **Improved Security**: Since server components never leave the server, sensitive data like API keys and tokens stay secure and don't get exposed to the client.

4. **Smarter Data Fetching**: Server components handle data fetching on the server, which reduces the time and number of requests needed to retrieve data from the client. This improves performance and decreases load times.

5. **Caching**: The server can cache the rendered content, reducing the need to re-render and refetch data for every user. This leads to **better performance** and **lower server costs**.

6. **Faster Initial Page Load**: By generating HTML on the server, users see content **immediately** without waiting for JavaScript to download and execute. This results in **better first contentful paint (FCP)**.

7. **Improved SEO**: Search engine bots can easily read the server-rendered HTML, making it more likely for pages to be indexed and improving your **SEO**.

8. **Streaming**: Server components can split the rendering process into chunks, which stream to the client as they become ready. This means users can start seeing content faster instead of waiting for the entire page to render on the server.

---

#### **How It Works The Dual Component Model**

* **Server Components**: Handle **data fetching** and **static rendering** on the server. They never get sent to the client, leading to reduced bundle sizes and improved load times.
* **Client Components**: Manage **interactivity** on the client-side (e.g., click events, typing). They handle dynamic UI elements and interactivity but can get an **initial render** from the server for faster page loads.

This architecture provides the best of both worlds by combining the efficiency of server-side rendering with the interactivity of client-side rendering, all while minimizing the drawbacks of each approach.

---

### **Server and Client Components**

In the React Server Components (RSC) architecture, we learned about the distinction between **server components** and **client components**. In this section, we’ll put that knowledge into practice by creating both types of components in a **Next.js** application.

* [**Understanding the Default Server Component**](#understanding-the-default-server-component)
* [**Creating a Client Component**](#creating-a-client-component)

---

#### **Understanding the Default Server Component**

In Next.js, every component defaults to being a **server component**. This includes the built-in root layout and root page that come with every new Next.js project.

* [**Creating a Server Component**](#creating-a-server-component)
* [**Server Component Limitations**](#server-component-limitations)

---

##### **Creating a Server Component**

Let’s create a simple **server component** by adding an **About page** to the app:

1. Inside the `app` folder, create a new folder called **about**.
2. In the **about** folder, create a file called `page.tsx`.

Add the following code:

```tsx
export default function AboutPage() {
    return <h1>About Page</h1>;
}
```

To verify this is a **server component**, add the following:

```tsx
// app/about/page.tsx
export default function About() {
  console.log("About Server Component");
  return <h1>About Me</h1>;
}
```

Now, when you navigate to the `about` page in the browser, you will see the console log message labeled with a **server tag** in both the browser and the terminal. This confirms the component is running as a server component.

---

##### **Server Component Limitations**

Server components have several advantages such as **zero bundle size**, **direct access to server resources**, **improved security**, and **better SEO**. However, they have some **limitations**:

* They cannot interact with **browser APIs** like `localStorage` or `geolocation`.
* They cannot maintain **state** using React hooks like `useState`.

For example, if we try to use `useState` in the **About page**:

```tsx
import { useState } from 'react';

export default function About() {
  const [name, setName] = useState('');
  console.log("About Server Component");
  return <h1>About Me</h1>;
}
```

We will get an error because `useState` requires a **client-side environment**.

---

#### **Creating a Client Component**

Next, let’s create a **client component**. We'll create a **Dashboard page** in the `app` folder that uses **state** to manage user input:

1. Inside the `app` folder, create a new file called `dashboard/page.tsx`.

Add the following code:

```tsx
// app/dashboard/page.tsx
import { useState } from 'react';

export default function DashboardPage() {
    const [name, setName] = useState('');

    return (
        <div>
            <h1>Dashboard</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <p>Hello, {name}</p>
        </div>
    );
}
```

This code will throw an error because `useState` is a **client-side** feature, and we are trying to use it in a **server component**.

---

##### **Using the `use client` Directive**

To make this a **client component**, we need to add the following directive at the top of the file:

```tsx
'use client';

import { useState } from 'react';

export default function DashboardPage() {
    const [name, setName] = useState('');

    return (
        <div>
            <h1>Dashboard</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <p>Hello, {name}</p>
        </div>
    );
}
```

This tells **Next.js** that this component, along with any imported components, should be executed on the client side. As a result, this component can handle **state** and **interactivity** using browser APIs.

---

##### **Navigating to the Client Component**

In the **Root Page**, add a link to the **Dashboard** page:

```tsx
// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/dashboard">Go to Dashboard</Link>
        </div>
    );
}
```

Now, when you visit the homepage and click on the **Dashboard** link, the **Dashboard page** will appear, and the state will function as expected, displaying "Hello" followed by the name entered.

---

##### **Observing the Client Component's Rendering Behavior**

To see the **client component’s rendering behavior**, add a console log to the **Dashboard page**:

```tsx
// app/dashboard/page.tsx
"use client";

import { useState } from 'react';

export default function DashboardPage() {
    const [name, setName] = useState('');
    console.log("Dashboard Client Component");

    return (
        <div>
            <h1>Dashboard</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <p>Hello, {name}</p>
        </div>
    );
}
```

1. When you click the **Dashboard** link, the log appears in the browser console, but without the **server tag**.
2. When you **reload the page**, the **Dashboard page** is rendered **on the server** initially to provide an immediate HTML response, and then again on the **client** during hydration.

The term **client component** can be confusing, but this behavior is part of the RSC architecture. In development mode, the log appears twice due to **Strict Mode**. This doesn’t happen in production.

---

### **Rendering Lifecycle in React Server Components**

Now that we've covered **Server** and **Client Components** in **Next.js**, let’s dive deeper into the **rendering lifecycle** of these components. Understanding this process isn’t mandatory for building Next.js apps, but it provides valuable insights into how the framework works under the hood, much like knowing the kitchen process before your food arrives at the table.

* [**Key Players in the Rendering Lifecycle**](#key-players-in-the-rendering-lifecycle)
* [**Initial Loading Sequence**](#initial-loading-sequence)
* [**Update Sequence-Refreshing UI**](#update-sequence-refreshing-ui)
* [**Rendering in Next.js Static, Dynamic, and Streaming**](#rendering-in-next.js-static,-dynamic,-and-streaming)

---

#### **Key Players in the Rendering Lifecycle**

There are three main components involved in the RSC rendering lifecycle:

1. **Your Browser** (the client)
2. **Next.js** (the framework)
3. **React** (the library)

Let’s break down the **initial loading** and **update sequences** step by step.

---

#### **Initial Loading Sequence**

1. **Browser Requests a Page**: When your browser makes a request for a page, **Next.js** matches the requested URL to the appropriate **server component**.

2. **React Renders Server Components**: **Next.js** tells **React** to render the corresponding **server component** and its child components (which are also server components). These components are rendered into a special JSON format known as the **RSC Payload**.

    * You can inspect this payload in the **Network Tab** of your browser's Developer Tools when navigating to a route.

3. **Suspense Handling**: If any **server component** is wrapped in **Suspense** (to handle asynchronous rendering), **React** will pause rendering that specific part of the tree and send a **placeholder value** instead.

4. **Preparing Client Components**: While the server components are being rendered, **React** also prepares instructions for **client components** that will be needed later in the process.

5. **Next.js Generates HTML**: **Next.js** takes the **RSC Payload** and the **client component instructions**, and then generates **HTML** on the server. This HTML is streamed to the browser right away, providing a quick, non-interactive preview of the route.

6. **Streaming the RSC Payload**: As **React** renders each UI element, **Next.js** streams the **RSC Payload** to the browser in chunks. This allows the content to be progressively loaded.

7. **Final Rendering**: Once the browser receives the HTML and the **RSC Payload**, **Next.js** processes everything. **React** uses this information to progressively render the UI.

8. **Hydration**: After the UI has been rendered, the **client components** undergo **hydration**, transforming the application from a static display into an interactive experience.

---

#### **Update Sequence-Refreshing UI**

When the user refreshes or triggers a UI update:

1. **Browser Requests UI Update**: The browser requests a refetch of a specific UI, such as a full route or a part of the page.

2. **Next.js Matches Request to Server Component**: **Next.js** processes the request and matches it to the corresponding **server component**.

3. **React Renders the Updated Component Tree**: **React** re-renders the component tree just like it did during the initial loading, but **no new HTML** is generated during this update phase.

4. **Progressive Streaming**: Instead of generating new HTML, **Next.js** streams the response data directly to the client. This response contains only the updated content, making the update process more efficient.

5. **React Reconciliation**: Once the updated content is received, **React** reconciles the new output with the existing UI. This means that **React** merges the updated component tree with the existing one, ensuring that important UI states (like user input or clicks) remain intact.

    * This is possible because **React** uses a special **JSON format** instead of raw HTML, allowing it to intelligently update only the parts of the UI that have changed, while preserving the state.

---

#### **Rendering in Next.js Static, Dynamic, and Streaming**

In **Next.js**, there are three different types of rendering strategies that can be applied to server components:

1. **Static Rendering** – The content is pre-rendered at build time.
2. **Dynamic Rendering** – The content is rendered on each request.
3. **Streaming Rendering** – The content is progressively streamed to the client.

Each rendering strategy has its use cases and trade-offs, and understanding how they fit into your app can help you make the best performance optimizations.

---

## **10. Rendering Strategies**

* [**Static Rendering**](#static-rendering)
* [**Dynamic Rendering**](#dynamic-rendering)
* [**`generateStaticParams`**](#generateStaticParams)
* [**`dynamicParams`**](#dynamicParams)
* [**Streaming**](#streaming)

### **Static Rendering**

* [**What is Static Rendering**](#what-is-static-rendering)
* [**How to Use Static Rendering**](#how-to-use-static-rendering)
* [**Building and Inspecting the Output**](#building-and-inspecting-the-output)
* [**Understanding the Build Output**](#understanding-the-build-output)
* [**Route Indicators**](#route-indicators)
* [**Exploring the `next` Folder**](#exploring-the-next-folder)
* [**Serving the Application**](#serving-the-application)
* [**Prefetching and Instant Navigation**](#prefetching-and-instant-navigation)
* [**Key Points About Static Rendering**](#key-points-about-static-rendering)

---

#### **What is Static Rendering**

Static rendering is a server-side rendering strategy where **HTML pages are generated at build time**. Think of it as preparing all the content in advance before any user visits your site. Once built, these pages can be cached by a **CDN** and served instantly to users.

The great thing about this approach is that the same pre-rendered page can be shared among different users, giving your app a significant performance boost. This makes static rendering perfect for content that doesn’t change often, such as:

* Blog posts
* E-commerce product listings
* Documentation
* Marketing pages

---

#### **How to Use Static Rendering**

Static rendering is **Next.js’s default behavior** for all routes. This means, out-of-the-box, every route is pre-rendered during the build process without any special setup required.

However, you might be wondering how this works during **development** since we haven't built the application yet. Let's explore the difference between **development** and **production** servers:

* **Production**: In production, Next.js creates one **optimized build** and deploys it. The pages are **pre-rendered once** during the build.
* **Development**: During development, we need flexibility. To reflect changes immediately in the browser without rebuilding, Next.js pre-renders pages **on every request**.

Next.js also displays a **static route indicator** during development to help you identify static routes. While it's useful to understand static rendering, the most important aspect is how it works when you build your app for **production**.

---

#### **Building and Inspecting the Output**

1. First, **stop the dev server** and clean up the generated Next.js files.

2. In the `app/page.tsx`, let's add a link to the **about page** in the root page (`index.tsx`).

    * Duplicate the dashboard link, change the `href`, and update the text accordingly.
    * Render the current time on the about page to demonstrate how content is static at build time (e.g., `new Date().toLocaleTimeString()`).

    ```tsx
    // app/page.tsx
    "use client";

    import Link from 'next/link';
    import { useState } from 'react';

    export default function HomePage() {
        const [time] = useState(new Date().toLocaleTimeString());
        return (
            <div>
                <h1>Home Page</h1>
                <Link href="/dashboard">Go to Dashboard</Link>
                <Link href="/about">Go to About</Link>
                <p>Current Time: {time}</p>
            </div>
        );
    }
    ```

3. In the terminal, run:

   ```bash
   npm run build
   ```

   This command creates an **optimized production build**. The output will be in the `next` folder, and it will differ significantly from the development setup.

---

#### **Understanding the Build Output**

Once the build is complete, check the terminal output. You'll see three columns:

1. **Route** – The specific page (e.g., `/about`, `/dashboard`).
2. **Size** – The amount of data to download when navigating to the route.
3. **First Load JS** – The JavaScript size needed to render the page for the first time.

For example:

* **Root page (`index.tsx`)**: 8.4 KB
* **Dashboard page**: 370 bytes

---

#### **Route Indicators**

In the terminal or build output, Next.js will show icons and a **legend** to indicate the rendering strategy for each route. A **hollow circle** indicates **static rendering**, meaning the page is pre-rendered during build time.

---

#### **Exploring the `next` Folder**

Within the `next` folder, the build output contains two important folders:

1. **Server Folder**: Contains HTML files for each route (`index.html`, `about.html`, etc.).
2. **Static Folder**: Contains JavaScript chunks necessary for client-side navigation and hydration (e.g., `dashboard.js`).

---

#### **Serving the Application**

Once you have the build, run:

```bash
npm run start
```

This starts the production server. Open your browser to **localhost:3000**, and with **Dev Tools open**, do a **hard reload**.

1. **HTML Files**: The browser will receive pre-rendered HTML, such as `index.html`, `about.html`, and `dashboard.html`.
2. **RSC Payloads**: Along with the HTML, **React Server Component** (RSC) payloads (in `.json` format) are sent. These contain the rendered result for server components and references for client components.

---

#### **Prefetching and Instant Navigation**

* **Prefetching**: Next.js **automatically prefetches routes** in the background as links appear in the viewport. This ensures that by the time you click a link (e.g., to navigate to `/about`), the page content is already preloaded, offering **instant navigation**.

* **Client-Side Navigation**: Once the initial load is complete, navigating between static routes will happen entirely on the client side, **without additional server requests**.

---

#### **Key Points About Static Rendering**

* **Pre-rendering at build time**: HTML pages, RSC payloads, and JavaScript chunks are created ahead of time.
* **Instant Navigation**: Client-side navigation between statically generated pages doesn’t require a round trip to the server, as everything needed is already in the browser.
* **Optimized Performance**: Static rendering is perfect for performance, especially for content that doesn’t change frequently, such as blogs, marketing pages, and documentation.

---

### **Dynamic Rendering**

* [**What is Dynamic Rendering**](#what-is-dynamic-rendering)
* [**How Does Dynamic Rendering Work**](#how-does-dynamic-rendering-work)
* [**Implementing Dynamic Rendering**](#implementing-dynamic-rendering)
* [**Dynamic Rendering Building and Inspecting the Output**](#dynamic-rendering-building-and-inspecting-the-output)
* [**Testing Dynamic Rendering**](#testing-dynamic-rendering)
* [**Key Points About Dynamic Rendering**](#key-points-about-dynamic-rendering)
* [**Forcing Dynamic Rendering**](#forcing-dynamic-rendering)

---

#### **What is Dynamic Rendering**

Dynamic rendering is a server-side rendering strategy where **routes are rendered uniquely for each user** when they make a request. This is particularly useful for showing **personalized data** or information that is only available at request time, such as cookies or URL search parameters.

Some examples where dynamic rendering is beneficial include:

* Personalized shopping pages
* News websites
* Social media feeds

---

#### **How Does Dynamic Rendering Work**

In Next.js, **dynamic rendering is enabled automatically** when the framework detects certain dynamic functions or APIs being used. These include:

* **Cookies**
* **Headers**
* **Connection drafts**
* **Search parameters**
* **Props**

When Next.js encounters any of these dynamic functions, it automatically switches to **dynamic rendering**, which means the route will be **server-rendered on demand** for each request.

---

#### **Implementing Dynamic Rendering**

Let's modify the **about component** to demonstrate dynamic rendering by utilizing the **cookies API**.

1. First, **import the cookies function** at the top of your component:

   ```js
   // app/about/page.tsx
   import { cookies } from 'next/headers';
   ```

2. Convert the component to an **async function**:

   ```js
   export default async function AboutPage() {
     const cookieStore = await cookies();
     const theme = cookieStore.get('theme');
     console.log(theme);
    return <h1>About Me</h1>; // Log the theme to verify the cookie's value
   }
   ```

   In this code, we use the `cookies` function to retrieve a cookie (in this case, the "theme" cookie), which triggers dynamic rendering for this route. We will log the cookie value to the console to confirm it's working.

---

#### **Dynamic Rendering Building and Inspecting the Output**

1. **Clear the `next` folder** (if previously generated).
2. Run the build command:

   ```bash
   npm run build
   ```

   After the build process is complete, check the terminal output for the routes generated. You’ll notice the **about route** has an **F** symbol next to it. This **F** stands for **Dynamic rendering** (server-rendered on demand).

**Build Output**

In the build process, **dynamic rendering** differs from static rendering in that there will be **no HTML file** generated for dynamically rendered pages. For example, after building the app, you will find HTML files for routes like `index.html`, `dashboard.html`, and `notfound.html`, but **no HTML file** for `about.html`.

---

#### **Testing Dynamic Rendering**

To see dynamic rendering in action:

1. Run the production server:

   ```bash
   npm run start
   ```

2. Open the browser and visit **/about**. Perform a **hard reload** (Ctrl + Shift + R).

   * On each refresh, you’ll notice the **HTML is generated on demand**, and the logged **cookie value** will appear (e.g., `theme: dark`).
   * In the network tab of the browser's DevTools, you’ll see the **response** containing the HTML each time you refresh.

Since we’re generating the page dynamically for each request, **no HTML file** is stored in the server output folder (`next/server/app/`).

---

#### **Key Points About Dynamic Rendering**

* **On-demand HTML generation**: HTML is generated dynamically when a request is made.
* **No HTML files stored**: Since the page is rendered on each request, there's no need to store pre-generated HTML files.
* **Automatic switching**: Next.js automatically enables dynamic rendering when it detects dynamic functions (like cookies or headers).
* **Personalized Content**: This rendering strategy is ideal for personalized content like user feeds, news sites, and shopping carts.

---

#### **Forcing Dynamic Rendering**

If you want to **force dynamic rendering** on a route, you can explicitly set the following at the top of the page:

```js
export const dynamic = 'force-dynamic';
```

This will ensure that Next.js renders the page dynamically, even if no dynamic functions are detected.

---

### **`generateStaticParams`**

* [**What is `generateStaticParams`**](#what-is-generatestaticparams)
* [**Practical Example Blog Listing and Comments Page**](#practical-example-blog-listing-and-comments-page)
* [**Inspecting the Build Output**](#inspecting-the-build-output)
* [**Pre-rendering Product Details Pages with `generateStaticParams`**](#pre-rendering-product-details-pages-with-generatestaticparams)

---

#### **What is `generateStaticParams`**

`generateStaticParams` is a powerful function in **Next.js** that works alongside **dynamic route segments** to generate **static routes** at **build time** instead of generating them on demand at **request time**. This feature significantly boosts the performance of the application by pre-rendering frequently accessed pages, making them available instantly when requested.

---

#### **Practical Example Blog Listing and Comments Page**

To understand how `generateStaticParams` works, let's walk through a practical example by building a **blog listing** and **blog post details page**.

1. First, create a new `blog` folder in the `app` directory. Inside, create a `page.tsx` file for displaying the featured blog posts:

   ```tsx
   // app/blog/page.tsx
   import Link from 'next/link';
   
   export default function BlogPage() {
     return (
       <div>
         <h1>Featured Blog Posts</h1>
         <ul>
           <li><Link href="/blog/1">Blog Post 1</Link></li>
           <li><Link href="/blog/2">Blog Post 2</Link></li>
           <li><Link href="/blog/3">Blog Post 3</Link></li>
         </ul>
       </div>
     );
   }
   ```

2. Next, create a **dynamic route** for individual blog post details by creating a folder `blog/[blogId]` and adding a `page.tsx` file:

   ```tsx
   // app/blog/[blogId]/page.tsx
   export default async function BlogPostPage({ params }) {
     const { blogId } = params;
     return <h1>Blog Post {blogId} Details</h1>;
   }
   ```

3. Now, if you build the app using `npm run build`, you’ll notice that **Next.js** handles the **Blog List** page as **static rendering**, while the **Blog Post Details** page is **dynamic**. This makes sense since Next.js cannot pre-render the blog post details page until it knows the specific blog post ID requested.

   * **Static Rendering**: The `BlogPage` will be pre-rendered.
   * **Dynamic Rendering**: The individual blog post pages will be rendered on demand when a specific blog post ID is requested.

---

#### **Inspecting the Build Output**

If you check the build folder (`next/server/app`), you will find the **static HTML file** for `blog.html`, but no HTML files for the individual blog post details pages (like `blog-1.html`, etc.).

When you start the app with `npm run start` and visit `/blog/1`, you will notice that the page is rendered **on demand** each time you refresh, as indicated by a **changing timestamp**.

---

#### **Pre-rendering Blog Post Details Pages with `generateStaticParams`**

Now, let’s improve this by pre-rendering the individual blog post details pages (`blog-1`, `blog-2`, `blog-3`) using `generateStaticParams`.

1. Modify the blog post details page (`app/blog/[blogId]/page.tsx`) to include the `generateStaticParams` function:

   ```tsx
   // app/blog/[blogId]/page.tsx
   export async function generateStaticParams() {
     return [
       { blogId: '1' },
       { blogId: '2' },
       { blogId: '3' },
     ];
   }
   
   export default async function BlogPostPage({ 
     params,
    }: { 
     params: Promise<{ blogId: string }>; 
   }) {
     const { blogId } = await params;
     return (
        <h1>Blog {blogId} details at {new Date().toLocaleTimeString()}</h1>
     );
   }
   ```

2. Now, when you rebuild the app with `npm run build`, Next.js will pre-render the blog post details pages for **blog post 1**, **blog post 2**, and **blog post 3** during build time. The output will indicate that these pages have been pre-rendered as **Static Site Generation (SSG)**.

   You’ll see the following in the terminal:

   * **Pre-rendered Routes**: Blog post details pages (`/blog/1`, `/blog/2`, `/blog/3`) are generated as static HTML.
   * **New Build Output**: The build folder (`next/server/app/blog/[blogId]`) will contain `1.html`, `2.html`, and `3.html`.

3. Start the application with `npm run start` and visit `/blog/1`. Notice how the **timestamp stays the same** upon refreshing because the page is now served as a **pre-rendered static page**.

---

### **`dynamicParams`**

* [**What is `dynamicParams`**](#what-is-dynamicparams)
* [**How `dynamicParams` Works**](#how-dynamicparams-works)
* [**Example Handling Dynamic Blog Post Pages**](#example-handling-dynamic-blog-post-pages)
* [**When to Use `dynamicParams true` vs `false`**](#when-to-use-dynamicparams-true-vs-false)

---

#### **What is `dynamicParams`**

In Next.js, the `dynamicParams` setting controls how **dynamic segments** (such as blog post IDs or categories) are handled when they are not included in the list returned by `generateStaticParams`. This gives you fine-grained control over whether to statically render these pages at runtime or return a **404 error** if the dynamic segment does not match any of the pre-rendered routes.

---

#### **How `dynamicParams` Works**

1. **Default Behavior**: By default, `dynamicParams` is set to **`true`**. This means Next.js will **statically render** pages at runtime for any dynamic segments not included in the `generateStaticParams` function.

   * For example, if you have pre-rendered blog post detail pages for posts with IDs `1`, `2`, and `3`, and someone visits `/blog/4`, Next.js will still serve the page, but it will generate the HTML at runtime. This is beneficial when you want to allow for dynamic content but still get the benefits of static rendering for your most popular pages.

2. **Rendering at Runtime**: If someone accesses a blog post page with an ID that’s not listed in the `generateStaticParams` (e.g., `/blog/4`), Next.js will generate the corresponding HTML at runtime and store it for future requests. The build folder will reflect this by adding a new file like `4.html` for that blog post.

3. **Changing the Behavior**: You can control this behavior by setting `dynamicParams` to **`false`**. When set to `false`, Next.js will return a **404 error** for any dynamic segments that aren't included in the `generateStaticParams` list.

   * For example, if you set `dynamicParams: false`, and someone tries to visit `/blog/4`, they will get a 404 error instead of seeing the page generated on demand.

---

#### **Example Handling Dynamic Blog Post Pages**

Let’s see this in action using the blog post pages example.

1. **With `dynamicParams` set to `true` (default)**:

   * You’ve pre-rendered blog post pages for IDs `1`, `2`, and `3` using `generateStaticParams`.
   * When you visit `/blog/4`, Next.js will generate the HTML at runtime for that page and serve it to the user.
   * If you inspect the build folder, you will see the HTML files for `1.html`, `2.html`, and `3.html`, and `4.html` will be generated when visited.

2. **With `dynamicParams` set to `false`**:

   * You’ve pre-rendered blog post pages for IDs `1`, `2`, and `3` using `generateStaticParams`.
   * If someone tries to visit `/blog/4`, Next.js will return a **404 error** since `4` was not included in the pre-rendered list.

---

#### **When to Use `dynamicParams true` vs `false`**

* **Use `dynamicParams: true`** when:

  * You have a larger number of dynamic pages, such as an **e-commerce website**, where you want to pre-render popular product pages for better performance but still allow access to less common ones. These will be rendered on demand.
  * You don't want to restrict access to dynamic content even if it hasn't been pre-rendered.

* **Use `dynamicParams: false`** when:

  * You have a **fixed set of pages**, such as a **blog** or a specific catalog, where you want to pre-render every page at build time. This will ensure that any dynamic route that’s not included in `generateStaticParams` results in a clean **404 error** instead of waiting for the page to be generated.

---

### **Streaming**

* [**What is Streaming**](#what-is-streaming)
* [**How Does Streaming Work**](#how-does-streaming-work)
* [**Example Implementing Streaming with Suspense**](#example-implementing-streaming-with-suspense)
* [**Benefits of Streaming**](#benefits-of-streaming)

---

#### **What is Streaming**

**Streaming** is a server rendering strategy that enables **progressive UI rendering**. This means that the server sends parts of the page to the client as soon as they are ready, instead of waiting for everything to load at once. As a result, users can see and interact with parts of the page right away, significantly improving the **initial page load time**.

This strategy is especially useful for rendering UI elements that depend on slower data fetches, which would normally block the entire route from rendering.

---

#### **How Does Streaming Work**

Streaming allows you to break down work into smaller chunks and send them progressively to the client. Here's how it works in Next.js with the **App Router**:

1. **Component-Level Suspense Boundaries**: You can wrap parts of your page in **Suspense** boundaries, which tell React to **wait for data** or **fetching** of certain components before they render.

2. **Progressive Rendering**: When components are wrapped in Suspense, Next.js will **render the static parts first**, and then stream the dynamic parts (like components fetching data) as they are ready.

---

#### **Example Implementing Streaming with Suspense**

Let's walk through an example. We’ll create a page that renders a product and its reviews, with intentional delays to simulate fetching data.

**1.** **Setting Up Delayed Components**: We have two components:

* `BlogComponent` (with a 2-second delay)
* `CommentComponent` (with a 4-second delay)

**2.** **The Problem**: Initially, if we visit the `/blog` route, the entire page will take a while to render because everything waits for the data to be fetched before being sent to the client. In the network tab, we can see the server response time is 6 seconds (sum of both delays).

**3.** **Improving with Streaming**: To improve this, we can use **Suspense**. By wrapping our slower components (`BlogComponent` and `CommentComponent`) with a `Suspense` boundary, we allow Next.js to stream the page progressively.

`src/components/BlogComponent.tsx`

```tsx
export const BlogComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  return <p>Blog post details...</p>;
}
```

`src/components/CommentComponent.tsx`

```tsx
export const CommentComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate a 4-second delay
  return <p>Comments...</p>;
}
```

`app/blog/page.tsx`

```tsx
// app/blog/page.tsx
import { Suspense } from 'react';
import { BlogComponent } from '@/components/BlogComponent';
import { CommentComponent } from '@/components/CommentComponent';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Post</h1>
      <Suspense fallback={<p>Loading blog post...</p>}>
        <BlogComponent />
      </Suspense>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentComponent />
      </Suspense>
    </div>
  );
}
```

* The `Suspense` component wraps each of the slower components.
* The `fallback` prop specifies what to show while each component is loading (e.g., `"Loading blog post..."`).

**4.** **Result**:

* The heading (`<h1>Blog Post</h1>`) appears instantly.
* After 2 seconds, the blog post details are rendered.
* After 4 seconds, the comments are rendered.
* During the loading phases, we see the fallback text: `"Loading blog post..."` and `"Loading comments..."`.

This is **Progressive Rendering in action**, where parts of the UI load as soon as they're available, significantly improving the **user experience**.

---

#### **Benefits of Streaming**

* **Faster Initial Load**: The page feels faster because users can see parts of the content immediately, without waiting for everything to load.
* **Better UX for Slow Data Fetches**: If parts of your page depend on slow data fetches (e.g., from an external API), you can improve the page's responsiveness by streaming data instead of blocking the entire page.
* **Built-in Support in Next.js**: Streaming is integrated with the **App Router**, which makes it easy to implement and doesn't require complex setup.

---

## **11. Component Composition Patterns and Code Boundaries**

* [**Server and Client Composition Patterns**](#server-and-client-composition-patterns)
* [**Server-only Code**](#server-only-code)
* [**Working with Third-Party Packages**](#working-with-third-party-packages)
* [**Working with Context Providers**](#working-with-context-providers)
* [**Client-only Code**](#client-only-code)
* [**Client Component Placement**](#client-component-placement)
* [**Interleaving Server and Client Components**](#interleaving-server-and-client-components)

### **Server and Client Composition Patterns**

* [**Foundation RSC and the Dual Component Model**](#foundation-rsc-and-the-dual-component-model)
* [**Server Components**](#server-components-1)
* [**Client Components**](#client-components)
* [**Composition Patterns Mixing Server and Client Components**](#composition-patterns-mixing-server-and-client-components)
* [**Best Practices for Server and Client Composition**](#best-practices-for-server-and-client-composition)

---

#### **Foundation RSC and the Dual Component Model**

In Next.js, **React Server Components (RSC)** allow you to compose your UI by deciding whether a component should be rendered on the server or the client. This dual component model is a key part of Next.js' performance and flexibility. By leveraging server and client components effectively, you can optimize your application for both performance and interactivity.

---

#### **Server Components**

**Server components** are the preferred choice for tasks that can be done on the server side, such as:

* **Fetching Data**: Server components can directly fetch data without involving client-side JavaScript, improving performance by avoiding unnecessary API calls on the client.
* **Accessing Server-Side Resources**: Server components can access server-side resources, like databases, without exposing sensitive information to the client.
* **Handling Large Dependencies**: Large packages or libraries that don’t need to be run on the client can be imported and run server-side, reducing the JavaScript bundle size sent to users.
* **Security**: Sensitive data can be securely handled server-side in server components, ensuring that it is not exposed to the client.

Server components are ideal for improving performance because they minimize the JavaScript load on the client side and leverage server-side rendering for tasks that don’t require interactivity.

---

#### **Client Components**

**Client components** are used when you need to add interactivity or perform tasks that rely on the browser's environment. These components are executed on the client-side and are useful for:

* **Interactivity**: Handling event listeners, managing UI updates based on user actions (e.g., clicks, form submissions), and updating the DOM in response to changes.
* **State Management**: Client components are responsible for managing local state using React’s `useState`, `useReducer`, or other state management hooks.
* **Lifecycle Effects**: Managing lifecycle events like `useEffect` for side-effects or `useLayoutEffect` for DOM updates specific to the client environment.
* **Browser-Specific APIs**: Interacting with browser APIs like `localStorage`, `sessionStorage`, or manipulating the DOM directly.
* **React Class Components**: Although function components are more commonly used, React class components can still be used on the client-side if needed.

---

#### **Composition Patterns Mixing Server and Client Components**

One of the powerful aspects of Next.js is how it enables mixing server and client components together in a seamless way. Here are a few strategies to compose server and client components effectively:

1. **Server-Side for Heavy Lifting**: Use server components to handle heavy tasks such as data fetching, processing, and preparing the UI. This will offload work from the client and ensure only the necessary components are hydrated on the client.

2. **Client-Side for Interactivity**: Any part of your app that requires user interaction, real-time updates, or relies on the browser’s environment should be handled by client components. This keeps the client-side responsive and user-friendly.

3. **Lazy Load Client Components**: To further optimize performance, you can **lazy load** client components using React’s `Suspense` or dynamic imports in Next.js, ensuring that the browser only loads client components when they are needed.

4. **Hybrid Approach**: A common pattern is to have the initial render handled by a server component, and then progressively enhance or hydrate specific parts of the UI with client components as needed.

---

#### **Best Practices for Server and Client Composition**

1. **Minimize Client-Side JavaScript**: Use server components for anything that doesn’t need interactivity. This reduces the overall size of JavaScript that needs to be sent to the client.
2. **Only Hydrate What’s Necessary**: Client components should only handle what’s necessary for interactivity. Don’t hydrate the entire page if only a small section requires client-side functionality.
3. **Use Suspense for Client Components**: To improve the loading experience, you can use React’s `Suspense` to wrap client components and display a fallback while they are loading.
4. **Optimize Data Fetching**: Keep data-fetching logic in server components to avoid sending unnecessary API requests from the client.

---

### **Server-only Code**

When building Next.js applications with server components, it’s critical to maintain a **clear separation between server-only and client-side code**. Some logic is intended to **run exclusively on the server**, and mistakenly exposing it to the client can result in:

* **Performance issues** due to unnecessarily large JavaScript bundles.
* **Security risks** such as exposing environment variables or sensitive business logic.
* **Runtime errors** if server-specific features are used in the browser.

#### **Common Use Cases for Server-only Code**

Examples of server-only logic include:

* Accessing environment variables (`process.env`)
* Making direct database calls
* Calling server-side APIs
* Performing secure calculations
* Using server-only packages

#### **Problem Accidental Client-side Import**

JavaScript modules can be imported from anywhere, which means **server-only utilities can accidentally be imported in client components**, leading to serious issues. Fortunately, Next.js developers can prevent this using a community package called **`server-only`**.

#### **Using the `server-only` Package**

This package throws a **build-time error** if a module marked as server-only is imported into a client component. Here’s how to implement and use it.

---

#### **Step-by-Step Setup of Server-only Code**

* [**Install the `server-only` Package**](#install-the-server-only-package)
* [**Create a Server-only Utility**](#create-a-server-only-utility)
* [**Use It in a Server Component**](#use-it-in-a-server-component)
* [**Try Importing in a Client Component**](#try-importing-in-a-client-component)

##### **Install the `server-only` Package**

```bash
npm install server-only
```

---

##### **Create a Server-only Utility**

Create a file `src/utils/server-utils.ts`:

```ts
// src/utils/server-utils.ts
import 'server-only';

export const serverSideFunction = () => {
  console.log('[server] This is a secure server-side function');
  return 'Server Result';
};
```

The line `import 'server-only';` ensures that this module **can only be used in server components**. If you try to import it in a client component, the build will fail.

---

##### **Use It in a Server Component**

Create a file `app/server-route/page.tsx`:

```tsx
// app/server-route/page.tsx
import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return <h1>Server Route - Result: {result}</h1>;
}
```

When visiting `/server-route` in your browser, you’ll see the log message in the **terminal**, and the result rendered on the page. This confirms the function is running **server-side**.

---

##### **Try Importing in a Client Component**

Create a file `app/client-route/page.tsx`:

```tsx
// app/client-route/page.tsx
'use client';

import { serverSideFunction } from '@/utils/server-utils'; //  This will fail the build

export default function ClientRoutePage() {
  const result = serverSideFunction();
  return <h1>Client Route - Result: {result}</h1>;
}
```

This will cause a **build-time error** like:

```
Error: Module "server-utils.ts" is marked as server-only but was imported in a client component.
```

This is exactly what we want — to **prevent accidental inclusion of server-side logic in client bundles**.

---

#### **Why Use `server-only`**

* Prevents security leaks (e.g., exposed environment variables)
* Reduces bundle size by eliminating server code from client bundles
* Catches import mistakes early, during build time
* Enforces clean architectural boundaries between server and client

---

### **Working with Third-Party Packages**

React Server Components have introduced exciting performance and architectural advantages. But not all third-party packages are compatible yet — especially those that rely on browser-only APIs.

Let’s walk through this with a real-world example using [`react-slick`](https://www.npmjs.com/package/react-slick), a popular carousel package.

* [**Step 1 Install `react-slick`**](#step-1-install-react-slick)
* [**Client-Side Carousel**](#client-side-carousel)
* [**Server Component Carousel**](#server-component-carousel)

---

#### **Step 1 Install `react-slick`**

Run the following command in your terminal:

```bash
npm install react-slick slick-carousel @types/react-slick --force 
```

> The --force flag is used to bypass peer dependency warnings if you're using React 19 or a newer version.

Add the necessary CSS from `slick-carousel` to your global stylesheet: **`app/globals.css`**:

```css
.image-slider-container {
  margin: 0 auto;
  width: 400px;
}

.image-slider-container .slick-prev:before,
.image-slider-container .slick-next:before {
  color: black;
}
```

---

#### **Client-Side Carousel**

Let’s first create a **client component** where everything works as expected.

**File**: `app/client-route/page.tsx`

```tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

> Go to `/client-route` — you’ll see the working carousel.

---

#### **Server Component Carousel**

Let’s try to use the **same carousel** in a **server component**.

**File**: `app/server-route/page.tsx`

```tsx
// This is a SERVER component — no "use client"
import { serverSideFunction } from '@/utils/server-utils';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
    <h1>Server Route {result}</h1>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

- Go to `/server-route` — you’ll get an error like:

> `window is not defined` or `react-slick must be used in a client component`

---

##### **Fixing the Error: Encapsulate in a Client Component**

We’ll move the carousel logic into a client component and **import it into our server route**.

---

##### **Step 1: Create a Client Wrapper Component**

**File**: `components/ImageSlider.tsx`

```tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServerRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

---

##### **Step 2: Use It in the Server Component**

**Update file**: `app/server-route/page.tsx`

```tsx
import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}
```

- Go back to `/server-route` — now the carousel works perfectly!

---

**Why This Works**

| Technique                     | Explanation                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `use client` in `ImageSlider` | Forces that component and its dependencies (like `react-slick`) to run on the client |
| Server page stays server      | Keeps access to server-side features like DB, secrets, etc.                          |
| Clean separation              | Client-side dependencies don’t pollute server-rendered logic                         |

---

### **Working with Context Providers**

In traditional React apps, **Context Providers** are used near the root of the component tree to manage and share global state like themes, authentication, or user settings. However, when working with the **React Server Components (RSC)** architecture in Next.js, there's an important caveat:

> **React context is not supported in server components.**

---

#### **The Problem**

If you attempt to create and use a context provider (via `createContext`) directly in a server component (like `app/layout.tsx`), you’ll encounter the following error:

```tsx
// File: app/layout.tsx

import './globals.css';
import { createContext } from 'react';


type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#666666',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeContext.Provider value={defaultTheme}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
```

```
Error: You're importing a component that needs createContext. This React hook only works in a client component.
```

Turning your entire layout into a client component is **not ideal**, because that forces the entire subtree to be client-side, losing all server component benefits like performance and security.

---

#### **The Solution Use a Client Component as the Provider**

To resolve this, you must:

* Create the context and its provider in a **dedicated client component**.
* Wrap your application tree with this client component at the appropriate level (like `layout.tsx`).

---

#### **Example Theme Context Provider**

* [**Create the Client Theme Provider**](#create-the-client-theme-provider)
* [**Wrap the App in `app/layout.tsx`**](#wrap-the-app-in-app/layout.tsx)
* [**Use the Theme in a Client Component**](#use-the-theme-in-a-client-component)

##### **Create the Client Theme Provider**

Create a file at `src/components/ThemeProvider.tsx`:

```tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#666666',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

---

##### **Wrap the App in `app/layout.tsx`**

```tsx
// File: app/layout.tsx

import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

> `ThemeProvider` is a client component, but the rest of the app can remain server components.

---

##### **Use the Theme in a Client Component**

Update `app/client-route/page.tsx`:

```tsx
'use client';

import { useTheme } from '@/components/ThemeProvider';

export default function ClientRoutePage() {
  const theme = useTheme();

  return (
    <h1 style={{ color: theme.colors.primary }}>
      Client Route Page
    </h1>
  );
}
```

In the browser, you'll see the heading styled with the primary theme color. Change it to `theme.colors.secondary`, and the color updates as expected.

---

### **Client-only Code**

Just like we need to isolate server-side logic (e.g., database access, secrets) to server components, it's **equally important** to isolate client-side functionality to **client components**.

* [**What is Client-only Code**](#what-is-client-only-code)
* [**How to Enforce Client-only Code Separation**](#how-to-enforce-client-only-code-separation)
* [**Example Client-only Utility**](#example-client-only-utility)

---

#### **What is Client-only Code**

Client-only code is code that:

* Interacts with the **DOM**
* Uses the **`window` object**
* Accesses **`localStorage`**, **`sessionStorage`**, or **browser APIs**

Such code **cannot run on the server**, and must be executed only on the browser/client.

---

#### **How to Enforce Client-only Code Separation**

To help ensure client-only code stays client-side, we can use the [**`client-only`**](https://www.npmjs.com/package/client-only) package. It creates a **build-time safety net**, preventing accidental server-side usage of client-side code.

---

#### **Example Client-only Utility**

* [**Install the `client-only` Package**](#install-the-client-only-package)
* [**Create a Client-side Function**](#create-a-client-side-function)
* [**Use in a Client Component**](#use-in-a-client-component)
* [**Misuse in a Server Component Instant Feedback**](#misuse-in-a-server-component-instant-feedback)

---

##### **Install the `client-only` Package**

Install the `client-only` package to help enforce client-only code separation:

```bash
npm install client-only --force
```

> The `--force` flag is used to bypass peer dependency warnings if you're using React 19 or a newer version.

---

##### **Create a Client-side Function**

Create a file `src/utils/client-utils.ts`:

```ts
import clientOnly from 'client-only';

export const clientSideFunction = clientOnly(() => {
  console.log('use window object');
  console.log('use local storage');
  return 'client result';
});
```

> `clientOnly()` ensures this function can **only be used in client components**.

---

##### **Use in a Client Component**

Update `app/client-route/page.tsx`:

```tsx
'use client';

import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
  const result = clientSideFunction();

  return (
    <p>{result}</p>
  );
}
```

When visiting `/client-route` in the browser, you’ll see:

* Logs in the developer console
* The result `"client result"` rendered

Everything runs **perfectly on the client**, as intended.

---

##### **Misuse in a Server Component Instant Feedback**

If you accidentally use this function in a **server component**, like `app/server-route/page.tsx`:

```tsx
import { clientSideFunction } from '@/utils/client-utils';

export default function ServerRoutePage() {
  const clientResult = clientSideFunction(); // Error

  return <h1>{clientResult}</h1>;
}
```

You’ll see this **build-time error**:

```
You're importing a component that imports client-only.
It only works in a client component, but none of its parents are marked with "use client".
```

> This safeguards you from runtime errors by **failing early** during development.

**Why This Matters**

By using the `client-only` package:

* You **catch client/server boundary issues early**.
* You **enforce best practices** for architecture.
* You **prevent runtime crashes** caused by client code running on the server.

---

### **Client Component Placement**

Not all components need to run on the client. Strategically **placing client components as low as possible** in the tree helps optimize your app’s performance.

* [**Example Structure for Client Component Placement**](#example-structure-for-client-component-placement)
* [**Problem Putting `use client` Too High**](#problem-putting-use-client-too-high)
* [**Solution Push State Lower**](#solution-push-state-lower)
* [**Debugging Tip**](#debugging-tip)

**Why This Matters**

In Next.js with React Server Components (RSC), we:

* Want most of the component tree to stay server-side (for performance)
* Only push components to the client when **state**, **interactivity**, or **browser-only APIs** are needed

> Marking a component with `'use client'` doesn't just affect that component — it affects **all of its children too**.

---

#### **Example Structure for Client Component Placement**

Let’s build a simplified layout for a **landing page**:

* `LandingPage` (server)

  * `Navbar` (server)

    * `NavLinks` (server)
    * `NavSearch` (needs client state)

```bash
app/
  landing-page/
    page.tsx         # LandingPage
components/
  Navbar.tsx         # Contains NavLinks & NavSearch
  nav-links.tsx       # Static links
  nav-search.tsx      # Search input (uses state)
```

---

#### **Problem Putting `use client` Too High**

If we add state in `Navbar`:

Add component `NavLinks` and `NavSearch`:

```tsx
// /src/components/nav-search.tsx
export const NavLinks = () => {
    console.log('NavLinks rendered');
    return (
        <div>
            List of Nav Search
        </div>
    );
}
```

```tsx
// /src/components/nav-search.tsx
"use client";

export const NavSearch = () => {
    console.log('NavSearch rendered');
    return (
        <div>
            Nav Search Input
        </div>
    );
}
```


```tsx
// /src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { NavLinks } from "./nav-links"; 
import { NavSearch } from "./nav-search";

export const Navbar = () => {
    console.log('Navbar rendered');

    const [search, setSearch] = useState("");

    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
};

```

Add page `app/landing-page/page.tsx`:

```tsx
import { Navbar } from "@/components/Navbar";

export default function LandingPage() {
return (
    <div>
    <Navbar />
    <main>
        <h1>Page Heading</h1>
    </main>
    </div>
);
}
```

Result:
* When you visit `/landing-page`, you’ll see:
* **Console logs** for `Navbar`, `NavLinks`, and `NavSearch`
* **All components** are rendered on the client

```bash
Navbar rendered
NavLinks rendered
NavSearch rendered
```

This is **not ideal** because:

* `NavLinks` is a **static component** that doesn’t need to run on the client
* `NavSearch` is the only component needing interactivity
* The entire `Navbar` component is forced into client-side rendering

---

#### **Solution Push State Lower**

Move the state logic and `'use client'` **into the `NavSearch` component**, which is the only part needing interactivity:

```tsx
// src/components/nav-search.tsx
"use client";

import { useState } from "react";

export const NavSearch = () => {
    console.log('NavSearch rendered');
     const [search, setSearch] = useState("");
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nav Search Input"
            />
        </div>
    );
}
```

Remove `'use client'` from `Navbar`:

```tsx
// src/components/Navbar.tsx
import { NavLinks } from "./nav-links"; 
import { NavSearch } from "./nav-search";

export const Navbar = () => {
    console.log('Navbar rendered');

    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
};
```

Now:

* `NavSearch` is a **leaf client component**
* `Navbar` and `NavLinks` stay as **server components**
* You get performance benefits of server components without sacrificing interactivity

---

#### **Debugging Tip**

Use `console.log()` statements to check where components render:

```ts
console.log('Navbar rendered');
```

* In dev tools, you'll see **\[server]** or **\[client]** tags in logs
* This helps confirm where the component is running

---

### **Interleaving Server and Client Components**

Understanding how **Server Components** and **Client Components** interact in a Next.js App Router project is critical. Let’s look at **which combinations are allowed** and **which are not** — along with the **workaround** for unsupported patterns.

* [**Setup Demo Components**](#setup-demo-components)
* [**Page Setup**](#page-setup)
* [**Valid Patterns**](#valid-patterns)
* [**Why Client ➝ Server Fails**](#why-client-➝-server-fails)

---

#### **Setup Demo Components**

We define four components to explore interleaving:

* [**Server Components**](#server-components-3)
* [**Client Components**](#client-components-3)

##### **Server Components**

```tsx
// src/components/ServerComponentOne.tsx
import fs from 'fs';
import { ServerComponentTwo } from './ServerComponentTwo';
// import ClientComponentOne from './ClientComponentOne';

export const ServerComponentOne = () => {
  fs.readFileSync('README.md', 'utf8');
  return (
    <div>

      <h1>Server Component One</h1>
      {/* Valid: Server inside Server */}
      <ServerComponentTwo />

      {/* Client inside Server */}
      {/* <ClientComponentOne /> */}
    </div>
  );
};



// src/components/ServerComponentTwo.tsx
import fs from 'fs';

export const ServerComponentTwo = () => {
  fs.readFileSync('README.md', 'utf8');
  return <h1>Server Component Two</h1>;
};
```

##### **Client Components**

```tsx
// src/components/ClientComponentOne.tsx
'use client';

import { useState } from 'react';
import ClientComponentTwo from './ClientComponentTwo';
// import { ServerComponentOne } from './ServerComponentOne';

export default function ClientComponentOne({ children }: { children?: React.ReactNode }) {
  const [name] = useState('Batman');
  return (
    <>
      <h1>Client Component One </h1>
      {/* Client Component inside Client Component */}


      <ClientComponentTwo />
      { /* Server Inside Client */ }
      {/* <ServerComponentOne /> */}
      {/* Server Component inside Client Component will throw an error, because server component renders 
      first and cannot be interleaved with client components */}

      
      {children}
    </>
  );
}




// src/components/ClientComponentTwo.tsx
'use client';

export default function ClientComponentTwo() {
  return <h1>Client Component Two</h1>;
}
```

---

#### **Page Setup**

```tsx
// app/interleaving/page.tsx
// import { ServerComponentOne } from '@/components/ServerComponentOne';
import ClientComponentOne from '@/components/ClientComponentOne';
 
export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>

      {/* Valid: Server inside Server */}
      {/* <ServerComponentOne /> */}

      {/* Valid: Client inside Client */}
      <ClientComponentOne />

    </>
  );
}
```

---

#### **Valid Patterns**

| Pattern              | Status        | Description                                                                            |
| -------------------- | ------------- | -------------------------------------------------------------------------------------- |
| **Server ➝ Server** | Supported     | Nesting server components works fine                                                   |
| **Client ➝ Client** | Supported     | Nesting client components is fully allowed                                             |
| **Server ➝ Client** | Supported     | Server components can render client components inside                                  |
| **Client ➝ Server** | Not Allowed   | Server component **cannot** be directly imported or rendered inside a client component |

---

#### **Why Client ➝ Server Fails**

When a server component is nested inside a client component:

* It **inherits** the client context
* **Runs on the client**
* Fails if it uses server-only features (e.g., `fs` or database queries)

```ts
// Results in error:
Module not found: Can't resolve 'fs'
```

---

## **12. Data Fetching**

💡 *Goal: Fetch blog posts dynamically and understand SSR, SSG, ISR, and caching strategies.*

* [**Data Fetching Introduction**](#data-fetching-introduction)
* [**Fetching Data in Client Components**](#fetching-data-in-client-components)
* [**Fetching Data in Server Components**](#fetching-data-in-server-components)
* [**Loading and Error States**](#loading-and-error-states)
* [**Sequential Data Fetching**](#sequential-data-fetching)
* [**Parallel Data Fetching**](#parallel-data-fetching)

---

### **Data Fetching Introduction**

Now that we've explored routing and rendering, it's time to dive into **data fetching** — one of the most essential aspects of real-world applications.

So far, we've worked with **hardcoded content**, but in production-grade apps, data is typically fetched from **external sources** such as APIs, databases, or file systems.

* [**Why Fetch Data in Server Components**](#why-fetch-data-in-server-components)

---

#### **Why Fetch Data in Server Components**

Next.js App Router is built on **React Server Components (RSC)**, which opens up multiple data fetching strategies. While you *can* fetch data on the client, **server components are the recommended place** for most data operations.

**Benefits of Using Server Components for Data Fetching**

* **Direct access** to file systems and databases
* **Better performance**: fetches happen closer to the data source
* **Smaller client bundles**: client components don't carry the data logic
* **Increased security**: API keys and sensitive logic stay on the server

---

### **Fetching Data in Client Components**

While the Next.js App Router encourages data fetching in server components for performance and security, there are still valid scenarios where client-side fetching is necessary — such as when the data depends on user interactions or needs real-time updates.

* [**Data Source JSONPlaceholder**](#data-source-jsonplaceholder)
* [**Setting Up the Route**](#setting-up-the-route)
* [**Define the User Type**](#define-the-user-type)
* [**Implement the Client Component**](#implement-the-client-component)
* [**When to Use Client-side Fetching**](#when-to-use-client-side-fetching)

---

#### **Data Source JSONPlaceholder**

We'll use [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), a free fake API that provides mock data. Specifically, we’ll be working with the `/users` endpoint, which returns an array of 10 user objects.

---

#### **Setting Up the Route**

Create a new route in your `app` directory:

```bash
/app/users-client/page.tsx
```

We’re calling this route `users-client` to reflect that the data is being fetched on the **client side**.

---

#### **Define the User Type**

Inside `page.tsx`, define a TypeScript type to represent the user:

```ts
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
```

---

#### **Implement the Client Component**

Now let’s create the client component that fetches and renders the users:

```tsx
'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-blue-600">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Client-side Users</h1>
      {users.map((user) => (
        <div key={user.id} className="border p-3 rounded shadow-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
```

---

#### **When to Use Client-side Fetching**

Use **client-side fetching only when necessary**, such as:

* Fetching data based on client-side interactions
* Handling real-time data updates
* Working with authenticated sessions in the browser

---

### **Fetching Data in Server Components**

The **React Server Components (RSC)** architecture in Next.js makes server-side data fetching incredibly simple. With built-in support for `async`/`await`, you can fetch data like regular JavaScript — no need for `useEffect`, `useState`, or prop drilling.

* [**Data Source JSONPlaceholder Fetching Data in Server Components**](#data-source-jsonplaceholder-fetching-data-in-server-components)
* [**Creating the Server Route**](#creating-the-server-route)
* [**Define the User Type for Server Component**](#define-the-user-type-for-server-component)
* [**Create the Async Server Component**](#create-the-async-server-component)

---

#### **Data Source JSONPlaceholder Fetching Data in Server Components**

We’ll continue using the `/users` endpoint from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), which provides an array of mock user data.

---

#### **Creating the Server Route**

In your `app` directory, create a new route:

```bash
/app/users-server/page.tsx
```

We name it `users-server` to indicate that the data fetching occurs in a **server component**.

---

#### **Define the User Type for Server Component**

Start by defining the same `User` type:

```ts
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
```

---

#### **Create the Async Server Component**

Now create a server component that fetches and displays users:

```tsx
// app/users-server/page.tsx
import React from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Server-side Users</h1>
      {users.map((user) => (
        <div key={user.id} className="border p-3 rounded shadow-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
```

> No `useState`, no `useEffect`, no hydration required — just clean, direct fetching logic.

---

### **Loading and Error States**

While client components require you to manually manage loading and error states via `useState` and conditional rendering, **server components** in Next.js simplify this using **convention-based files**:

* `loading.tsx` for loading state
* `error.tsx` for error state

Let’s see how to implement both.

* [**Setup Folder**](#setup-folder)
* [**`loading.tsx` Loading State**](#loading.tsx-loading-state)
* [**`error.tsx` Error State**](#error.tsx-error-state)
* [**Testing the Error UI**](#testing-the-error-ui)

---

#### **Setup Folder**

This assumes you’ve already created:

```
/app/users-server/page.tsx
```

---

#### **`loading.tsx` Loading State**

Create a file:

```
/app/users-server/loading.tsx
```

Then add a simple loading UI:

```tsx
// app/users-server/loading.tsx
export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      <span className="ml-4 text-gray-700 font-medium">Loading users...</span>
    </div>
  );
}
```

> To simulate a loading delay, add this inside `page.tsx` (just before the fetch call):

```ts
await new Promise((resolve) => setTimeout(resolve, 2000));
```

This artificial delay gives the loading spinner time to appear.

---

#### **`error.tsx` Error State**

Create a file:

```
/app/users-server/error.tsx
```

Add the following code:

```tsx
'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Error fetching users:', error);
  }, [error]);

  return (
    <div className="text-red-600 font-semibold p-4 border border-red-400 rounded bg-red-50">
      Error fetching users data.
    </div>
  );
}
```

> This file **must be a client component**, which is why we use the `'use client'` directive.

---

#### **Testing the Error UI**

To simulate an error, change the fetch URL in `page.tsx` to something invalid:

```ts
await fetch('https://jsonplaceholder.typicode.com/users123');
```

Reload the page in the browser, and you should see the red error message.

---

### **Sequential Data Fetching**

In some scenarios, fetching data in **sequential** order is necessary when one request depends on the result of another. This can lead to longer loading times, but it's a common pattern for certain use cases, such as fetching posts and then fetching their authors.

* [**Example Blog Page with Posts and Authors**](#example-blog-page-with-posts-and-authors)
* [**Setup Folder for Sequential Data Fetching**](#setup-folder-for-sequential-data-fetching)
* [**Typescript Type for Posts**](#typescript-type-for-posts)
* [**Fetching Posts Sequentially**](#fetching-posts-sequentially)
* [**Fetching the Author for Each Post**](#fetching-the-author-for-each-post)
* [**Integrating Author Component**](#integrating-author-component)
* [**Adding Suspense for Streaming**](#adding-suspense-for-streaming)

---

#### **Example Blog Page with Posts and Authors**

We’ll create a simple blog-like page by using the **Json Placeholder** API, fetching posts and their associated authors sequentially.

---

#### **Setup Folder for Sequential Data Fetching**

1. Inside your **`app`** folder, create a new folder:

   ```
   /app/posts-sequential
   ```

2. Add a `page.tsx` file inside this folder.

---

#### **Typescript Type for Posts**

Let’s start by defining the type for our posts:

```ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
```

---

#### **Fetching Posts Sequentially**

We will first fetch all the posts and then display each one. For each post, we'll later fetch the author based on the `userId` in the post.

```tsx
// app/posts-sequential/page.tsx
export default async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  
  // Filter to include only posts with an ID divisible by 10
  const filteredPosts = posts.filter(post => post.id % 10 === 0);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <div>Author: <span>Loading...</span></div> {/* Author will be rendered later */}
        </div>
      ))}
    </div>
  );
}
```

---

#### **Fetching the Author for Each Post**

Next, we will create a new **`author.tsx`** component to fetch the author of each post:

```tsx
// app/posts-sequential/author.tsx
type AuthorProps = {
  userId: number;
};

type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: AuthorProps) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const author: Author = await response.json();

  return <span>{author.name}</span>;
}
```

---

#### **Integrating Author Component**

In `page.tsx`, import the `Author` component and replace the placeholder "Loading..." text with the `Author` component.

```tsx
import Author from './author';

export default async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter(post => post.id % 10 === 0);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <div>
            Author: <Author userId={post.userId} />
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

#### **Adding Suspense for Streaming**

Instead of blocking the UI while fetching the author, we can use **React Suspense** to show the post first and then stream in the author name in the background.

1. Wrap the `Author` component in a `<Suspense>` boundary:

```tsx
import { Suspense } from 'react';
import Author from './author';

export default async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter(post => post.id % 10 === 0);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <div>
            Author: 
            <Suspense fallback={<span>Loading author...</span>}>
              <Author userId={post.userId} />
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
}
```

2. Add a 1-second artificial delay in the `Author` component to demonstrate Suspense:

```tsx
await new Promise(resolve => setTimeout(resolve, 1000));  // 1 second delay
```

Now, when you reload the page, the post content will show first, and after a short delay, the author name will appear.

---

### **Parallel Data Fetching**

Parallel data fetching is the process of initiating multiple requests simultaneously, reducing the total loading time when the requests don’t depend on each other. This pattern is useful when you need to fetch independent pieces of data and display them together.

* [**Example User Profile Page with Posts and Albums**](#example-user-profile-page-with-posts-and-albums)
* [**Setup Folder for Parallel Data Fetching**](#setup-folder-for-parallel-data-fetching)
* [**Typescript Types for Posts and Albums**](#typescript-types-for-posts-and-albums)
* [**Fetching Posts and Albums**](#fetching-posts-and-albums)
* [**Component for User Profile**](#component-for-user-profile)
* [**Adding a Loading State**](#adding-a-loading-state)
* [**Creating a Loading Spinner**](#creating-a-loading-spinner)
* [**Wrapping with Suspense**](#wrapping-with-suspense)

---

#### **Example User Profile Page with Posts and Albums**

In this example, we'll create a **user profile page** by fetching both the user's posts and albums concurrently using **Json Placeholder API**.

---

#### **Setup Folder for Parallel Data Fetching**

1. Inside your **`app`** folder, create a new folder:

   ```
   /app/user-parallel
   ```

2. Inside **`user-parallel`**, create a dynamic route folder:

   ```
   /app/user-parallel/[id]
   ```

3. Inside this folder, add a `page.tsx` file.

---

#### **Typescript Types for Posts and Albums**

We’ll define the types for the posts and albums. The `userId` is common across both types:

```ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};
```

---

#### **Fetching Posts and Albums**

We will create two functions to fetch the user's posts and albums. These functions will be defined outside the component to keep things clean.

1. **Fetching Posts**:

```ts
async function getUserPosts(userId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}
```

2. **Fetching Albums**:

```ts
async function getUserAlbums(userId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}
```

---

#### **Component for User Profile**

Now, let’s create the component that will fetch both posts and albums in parallel using `Promise.all`:

```tsx
// app/user-parallel/[id]/page.tsx
import { Suspense } from 'react';

export default async function UserProfile({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10); // Get user ID from route params

  // Fetch both posts and albums in parallel
  const [posts, albums] = await Promise.all([
    getUserPosts(userId),
    getUserAlbums(userId)
  ]);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="font-semibold">Posts</h2>
        {posts.map((post: Post) => (
          <div key={post.id} className="mb-4">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="font-semibold">Albums</h2>
        {albums.map((album: Album) => (
          <div key={album.id} className="mb-4">
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

#### **Adding a Loading State**

To simulate a loading state and show how both posts and albums are fetched simultaneously, let’s add a delay to the fetching functions:

```ts
async function getUserPosts(userId: number) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}

async function getUserAlbums(userId: number) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}
```

---

#### **Creating a Loading Spinner**

Create a new `loading.tsx` file in the same folder to show a loading spinner. This will be used while the data is being fetched:

```tsx
// app/user-parallel/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="spinner-border animate-spin border-4 border-t-4 border-gray-600 rounded-full w-12 h-12"></div>
    </div>
  );
}
```

---

#### **Wrapping with Suspense**

Wrap the `UserProfile` component with a `Suspense` boundary to show the loading spinner during data fetching:

```tsx
import { Suspense } from 'react';
import Loading from './loading';

export default function UserProfilePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <UserProfile params={params} />
    </Suspense>
  );
}
```

---

## **13. Metadata Management**

* [**Routing Metadata**](#routing-metadata)
* [**`title` Metadata**](#title-metadata)

### **Routing Metadata**

Next.js makes it easy to manage **SEO and social preview information** through the **metadata API**, which allows you to define page titles, descriptions, Open Graph tags, and more.

You can configure metadata in both:

* `layout.tsx` → metadata applies to **all nested pages**
* `page.tsx` → metadata applies **only to that specific page**

* [**Static Metadata**](#static-metadata)
* [**Dynamic Metadata with `generateMetadata`**](#dynamic-metadata-with-generatemetadata)
* [**Metadata and `use client`**](#metadata-and-use-client)

---

#### **Static Metadata**

The simplest way to define metadata is by exporting a static object.

* [**Example Root `layout.tsx`**](#example-root-layout.tsx)
* [**Example `about/page.tsx`**](#example-about/page.tsx)

##### **Example Root `layout.tsx`**

```tsx
// app/layout.tsx
export const metadata = {
  title: "Next.js App",
  description: "Generated by Next.js",
};
```

##### **Example `about/page.tsx`**

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

#### **Dynamic Metadata with `generateMetadata`**

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

#### **Metadata and `use client`**

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

##### **Correct Pattern for Client Components**

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

### **`title` Metadata**

The `title` field in metadata is essential for setting the browser tab title and optimizing search engine visibility. Next.js supports **two ways** to define it:

* [**Simple Title**](#simple-title)
* [**Advanced Title**](#advanced-title)

#### **Simple Title**

Set a title using a plain string:

```tsx
// page.tsx
export const metadata = {
  title: "About | Code Evolution",
};
```

> This directly renders the string into the `<title>` tag of the HTML document.

---

#### **Advanced Title**

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

##### **`default`**

* Acts as a **fallback** for any child routes that don’t specify their own title.
* Useful for global defaults.

```tsx
title: {
  default: "Next.js Tutorial – Code Evolution",
}
```

##### **`template`**

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

##### **`absolute`**

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

#### **Summary Choosing the Right Title Strategy**

| Use Case                      | Approach                        |
| ----------------------------- | ------------------------------- |
| Simple, static pages          | `title: "Static Title"`         |
| Consistent formatting needed  | `title.template` + child titles |
| Break template inheritance    | `title.absolute`                |
| Global fallback for all pages | `title.default`                 |

---