#!/bin/bash

echo "🧹 Starting comprehensive website cleanup..."

# Remove unused library directories
echo "📦 Removing unused libraries..."
rm -rf lib/easing/
rm -rf lib/flaticon/
rm -rf lib/isotope/
rm -rf lib/lightbox/
rm -rf lib/owlcarousel/
rm -rf lib/tempusdominus/

# Remove unused CSS files
echo "🎨 Removing unused CSS files..."
rm -f css/style.min.css
rm -f css/optimized-style.css

# Remove unused JavaScript files
echo "⚡ Removing unused JavaScript files..."
rm -f js/optimized-main.js

# Remove unused HTML files (keeping only essential ones)
echo "📄 Removing unused HTML files..."
rm -f annual-report.html
rm -f directors-message.html
rm -f mandatory-disclosure.html
rm -f patrons-message.html

# Remove unused images
echo "🖼️ Removing unused images..."
rm -f img/about-1.jpg
rm -f img/about-2.jpg
rm -f img/blog-1.jpg
rm -f img/blog-2.jpg
rm -f img/blog-3.jpg
rm -f img/class-1.jpg
rm -f img/class-2.jpg
rm -f img/class-3.jpg
rm -f img/detail.jpg
rm -f img/header.png
rm -f img/portfolio-1.jpg
rm -f img/portfolio-2.jpg
rm -f img/portfolio-3.jpg
rm -f img/portfolio-4.jpg
rm -f img/portfolio-5.jpg
rm -f img/portfolio-6.jpg
rm -f img/post-1.jpg
rm -f img/post-2.jpg
rm -f img/post-3.jpg
rm -f img/team-1.jpg
rm -f img/team-2.jpg
rm -f img/team-3.jpg
rm -f img/team-4.jpg
rm -f img/testimonial-1.jpg
rm -f img/testimonial-2.jpg
rm -f img/testimonial-3.jpg
rm -f img/testimonial-4.jpg
rm -f img/user.jpg

# Remove unused SCSS files
echo "🎨 Removing unused SCSS files..."
rm -rf scss/

# Remove unused mail files
echo "📧 Removing unused mail files..."
rm -rf mail/

# Remove unused documentation files
echo "📚 Removing unused documentation files..."
rm -f FORM_SETUP_GUIDE.md
rm -f NAVBAR_UNIFICATION_SUMMARY.md
rm -f OPTIMIZATION_GUIDE.md
rm -f OPTIMIZATION_SUMMARY.md
rm -f README.md

# Remove unused scripts
echo "🔧 Removing unused scripts..."
rm -f update-navbar.sh

echo "✅ Cleanup completed! Website has been optimized."
echo "📊 Removed:"
echo "   - 6 library directories"
echo "   - 2 CSS files"
echo "   - 1 JavaScript file"
echo "   - 4 HTML files"
echo "   - 25+ unused images"
echo "   - SCSS directory"
echo "   - Mail directory"
echo "   - Documentation files"
echo "   - Unused scripts" 