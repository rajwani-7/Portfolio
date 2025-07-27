# Terminal Portfolio - Harsh Rajwani

A hacker-themed, terminal-style interactive portfolio website built with Next.js and React.

## 🚀 Features

- **Terminal Interface**: Interactive command-line style portfolio
- **3D ID Card**: Hanging ID card with tilt effects and personal photo
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Hacker Theme**: Dark background with terminal green colors
- **Interactive Commands**: Type commands to explore portfolio sections

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Fira Code (monospace)
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📋 Available Commands

Type these commands in the terminal:

- `help` - Show all available commands
- `about` - Learn about Harsh Rajwani
- `projects` - View featured projects
- `skills` - See technical skills
- `experience` - Check work experience
- `education` - View educational background
- `contact` - Get contact information
- `certifications` - See certifications
- `leadership` - View leadership experience
- `resume` - Download resume
- `clear` - Clear the terminal
- `sudo` - Try it and see... 😄

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding Your Photo
1. Place your profile image in the `public` directory
2. Update the image path in `app/components/IDCard.tsx`:
   ```tsx
   src="./your-image-name.jpg"
   ```

### Updating Content
- Edit personal information in `app/components/Terminal.tsx`
- Modify the `commands` object to update portfolio content
- Update colors in `tailwind.config.js` if needed

## 📱 Responsive Design

- **Desktop**: Split layout with ID card on left, terminal on right
- **Mobile/Tablet**: Stacked layout with card on top, terminal below
- **All devices**: Fully functional terminal interface

## 🎯 Project Structure

```
portfolio1/
├── app/
│   ├── components/
│   │   ├── IDCard.tsx      # 3D ID card component
│   │   └── Terminal.tsx    # Interactive terminal
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Main page
├── public/                 # Static assets
├── package.json           # Dependencies
└── tailwind.config.js     # Tailwind configuration
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### GitHub Pages
1. Build: `npm run build`
2. Deploy the `out` folder to gh-pages branch

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ by Harsh Rajwani
