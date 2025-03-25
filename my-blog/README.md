# Modern Blog

A clean and modern blog website with a minimalistic design.

![Modern Blog Screenshot](https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## Features

- Clean, minimalistic design with subtle white and light blue accents
- Responsive layout for desktop and mobile devices
- User-friendly navigation
- Featured blog posts section on the homepage
- Comprehensive blog listing page
- Individual blog post pages with a beautiful reading experience
- About and Contact pages
- Newsletter subscription form
- Social media integration

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-blog.git
cd modern-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

## Project Structure

```
modern-blog/
├── components/        # Reusable React components
├── pages/             # Next.js pages
│   ├── blog/          # Blog-related pages
│   ├── _app.tsx       # Main app component
│   ├── index.tsx      # Home page
│   ├── about.tsx      # About page
│   └── contact.tsx    # Contact page
├── public/            # Static files like images
├── styles/            # Global styles
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

### Changing Colors

You can modify the color scheme by editing the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      'accent-blue': '#e6f0ff', // Change this to your preferred light blue
      'accent-gray': '#f0f0f0', // Change this to your preferred light gray
    },
  },
},
```

### Adding New Pages

Create a new file in the `pages` directory. For example, to add a "Services" page, create `pages/services.tsx`.

### Adding Blog Posts

In a real application, you'd typically fetch blog posts from a CMS or API. For this demo, blog posts are stored as sample data within the components.

## Deployment

The application can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
```

Then follow the instructions for your preferred hosting provider.

## License

This project is licensed under the ISC License. 