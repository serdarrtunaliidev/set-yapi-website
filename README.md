# Sitee Construction Website

A modern, responsive architecture and construction website built with React and Tailwind CSS, inspired by Features smooth animations, modern design, and comprehensive sections for showcasing construction services and projects.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Animations**: Smooth animations using Framer Motion
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Project Portfolio**: Filterable project showcase
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with optimized assets

## 📋 Sections

1. **Hero Section**: Compelling landing with animated background and call-to-action
2. **About Us**: Company information, values, and team highlights
3. **Services**: Comprehensive service offerings with detailed descriptions
4. **Projects**: Portfolio showcase with filtering capabilities
5. **Contact**: Contact form and company information
6. **Footer**: Links, social media, and newsletter signup

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent iconography
- **React Intersection Observer**: For scroll-based animations

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sitee
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Services.js        # Services section
│   ├── Projects.js        # Projects portfolio
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue theme
- Secondary colors: Gray scale
- Accent colors: Yellow/Orange theme

### Content
- Update text content in each component
- Replace placeholder images with actual project photos
- Modify contact information in the Contact component

### Styling
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles use Tailwind utility classes
- Animations are configured in `tailwind.config.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Placeholder images with proper sizing
- **Smooth Scrolling**: CSS scroll-behavior for smooth navigation
- **Minimal Dependencies**: Only essential packages included

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.js`
3. Add navigation link in `Navbar.js`

### Styling Guidelines
- Use Tailwind utility classes for styling
- Create custom classes in `src/index.css` for reusable styles
- Follow the established color scheme and spacing patterns

### Animation Guidelines
- Use Framer Motion for complex animations
- Keep animations subtle and purposeful
- Ensure animations don't interfere with usability

## 📞 Support

For questions or support, please contact:
- Email: info@sitee.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Sitee Construction Team** 
