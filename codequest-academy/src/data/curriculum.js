const curriculum = [
  {
    id: 'world-1',
    name: 'The Foundation Forge',
    subtitle: 'Beginner HTML',
    icon: '⚒️',
    color: '#7C3AED',
    bgGradient: 'from-purple-900 to-indigo-900',
    description: 'Discover the building blocks of every website. Learn HTML tags — the magical spells that bring ideas to life on screen!',
    unlocked: true,
    modules: [
      {
        id: 'module-1-1',
        name: 'Welcome to the Web',
        icon: '🌐',
        lessons: [
          {
            id: 'lesson-1',
            title: 'What is a Website?',
            type: 'concept',
            xpReward: 50,
            description: 'Discover how websites work — from your browser to the world!',
            slides: [
              {
                title: 'The Web is Everywhere!',
                content: 'Every website you visit — YouTube, Google, Wikipedia — is built with code. Websites are just files stored on powerful computers called servers. When you type a web address (URL) into your browser, it sends a request across the internet to find those files and display them on your screen. Today, YOU start learning how to create those files!',
              },
              {
                title: 'How Websites Work',
                content: 'When you type a web address, your browser asks a server for files. The server sends back three types of files: HTML (the structure — like the skeleton), CSS (the style — like the clothes and colors), and JavaScript (the behavior — like the muscles that make things move). Together, they create everything you see on the web!',
              },
              {
                title: 'HTML = The Skeleton',
                content: 'HTML stands for HyperText Markup Language. It is NOT a programming language — it\'s a markup language that uses tags to describe content. Think of HTML as the skeleton of a website: it tells the browser WHAT to show — headings, paragraphs, images, links, tables, and forms. Without HTML, there would be no web!',
              },
              {
                title: 'HTML Elements & Tags',
                content: 'HTML uses "tags" to mark up content. Tags come in pairs: an opening tag <tagname> and a closing tag </tagname>. The content goes between them. For example: <h1>Hello!</h1> creates a big heading. Some tags are self-closing and don\'t need a partner, like <br> for line breaks and <img> for images. Every tag has a purpose!',
              },
            ],
            starterCode: '<!-- Welcome! This is a comment -->\n<!-- Comments are notes for coders -->\n<!-- They don\'t show on the page -->\n\nHello, World!',
            solution: 'Hello, World!',
            objectives: [
              { id: 'obj-1', text: 'Read through all the slides above', completed: false },
              { id: 'obj-2', text: 'Look at the code — see the comment?', completed: false },
              { id: 'obj-3', text: 'Click "Run Code" to see it in the preview!', completed: false },
            ],
            hints: ['Just click the Run button to see your first web page!', 'Comments start with <!-- and end with -->'],
          },
          {
            id: 'lesson-2',
            title: 'Meet Your Tools',
            type: 'concept',
            xpReward: 50,
            description: 'Get familiar with the code editor — your new superpower!',
            slides: [
              {
                title: 'Your Code Editor',
                content: 'A code editor is where developers write code. On the left side of your screen, you\'ll see the editor where you type code. On the right side, you\'ll see the live preview — a real-time display of what your code creates. Professional developers use editors like VS Code, but our built-in editor works the same way. It even color-codes your tags to help you read them!',
              },
              {
                title: 'How the Editor Works',
                content: 'The editor has line numbers on the left to help you find specific lines. It uses syntax highlighting — different colors for different parts of your code (tags are one color, text is another, attributes are another). This makes it much easier to spot mistakes. When you see colored text, that\'s the editor helping you understand your code structure!',
              },
              {
                title: 'Try It Yourself!',
                content: 'Type anything in the editor — your name, a message, a joke! Then click the "Run Code" button to see it appear in the preview panel. There are no wrong answers here. The preview shows exactly what a browser would show. This is how all websites start: someone types text and code, and the browser turns it into something visual!',
              },
            ],
            starterCode: '<!-- Type your name below this line! -->\n\n',
            solution: null,
            objectives: [
              { id: 'obj-1', text: 'Type your name in the editor', completed: false },
              { id: 'obj-2', text: 'Click "Run Code" to see it appear', completed: false },
            ],
            hints: ['Just type anything! There\'s no wrong answer here.'],
          },
          {
            id: 'lesson-3',
            title: 'Your First HTML File',
            type: 'guided',
            xpReward: 100,
            description: 'Write the magical DOCTYPE declaration and create your first real HTML file!',
            slides: [
              {
                title: 'The DOCTYPE Declaration',
                content: 'Every HTML file starts with a special declaration: <!DOCTYPE html>. This tells the browser "Hey, this is an HTML5 document!" Without it, the browser might try to render your page using older, quirky rules. Think of it as the magic spell that activates HTML5 mode. It\'s always the very first line — no exceptions!',
              },
              {
                title: 'The <html> Root Element',
                content: 'After DOCTYPE, everything goes inside <html> and </html> tags. This is the root element — the container for your entire webpage. You can also add a language attribute: <html lang="en"> tells the browser your page is in English. This helps screen readers and search engines understand your content better.',
              },
              {
                title: 'Putting It Together',
                content: 'Here\'s the pattern every HTML file follows:\n\n1. <!DOCTYPE html> — declares HTML5\n2. <html> — opens the root element\n3. (your content will go here)\n4. </html> — closes the root element\n\nThis is the foundation of every single webpage on the internet. Master this structure and you\'re on your way to building anything!',
              },
            ],
            starterCode: '<!-- Add the DOCTYPE declaration below -->\n\n<!-- Now add the html opening and closing tags -->\n',
            solution: '<!DOCTYPE html>\n<html>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add <!DOCTYPE html> at the top', completed: false },
              { id: 'obj-2', text: 'Add opening <html> tag', completed: false },
              { id: 'obj-3', text: 'Add closing </html> tag', completed: false },
            ],
            hints: [
              'Start with <!DOCTYPE html> on the first line',
              'Then add <html> on the next line',
              'Don\'t forget to close it with </html>',
            ],
            validation: (code) => {
              const hasDoctype = /<!DOCTYPE\s+html>/i.test(code);
              const hasHtmlOpen = /<html>/i.test(code);
              const hasHtmlClose = /<\/html>/i.test(code);
              return [hasDoctype, hasHtmlOpen, hasHtmlClose];
            },
          },
          {
            id: 'lesson-4',
            title: 'Head & Body',
            type: 'guided',
            xpReward: 100,
            description: 'Learn about the two main sections of every HTML page — the head and the body!',
            slides: [
              {
                title: 'Two Essential Sections',
                content: 'Inside <html>, there are exactly two sections: <head> and <body>. Think of it like a person: the head contains the brain (invisible information), and the body is everything you can see. The <head> holds metadata — information ABOUT the page that doesn\'t appear on screen. The <body> holds all visible content.',
              },
              {
                title: 'The <head> Section',
                content: 'The <head> contains metadata — information about your page that the browser needs but doesn\'t display. The most important element is <title>, which sets the text shown in the browser tab. You can also add <meta charset="UTF-8"> for character encoding and <meta name="viewport" content="width=device-width, initial-scale=1.0"> to make your page responsive on mobile devices.',
              },
              {
                title: 'The <body> Section',
                content: 'The <body> is where ALL visible content goes — every heading, paragraph, image, link, button, and form that users see and interact with. If it shows up on the screen, it lives in the <body>. The body comes after the closing </head> tag and before the closing </html> tag.',
              },
              {
                title: 'The Complete Structure',
                content: 'Every HTML page follows this exact structure:\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    Visible content here\n  </body>\n</html>\n\nThis is the skeleton you\'ll use for every single webpage you build. Memorize it — it becomes second nature!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n  <!-- Add head section with a title -->\n\n  <!-- Add body section with a greeting -->\n\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    Hello, World!\n  </body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add a <head> section inside <html>', completed: false },
              { id: 'obj-2', text: 'Add a <title> inside the head', completed: false },
              { id: 'obj-3', text: 'Add a <body> section', completed: false },
              { id: 'obj-4', text: 'Write something inside the body', completed: false },
            ],
            hints: [
              'The <head> goes right after <html>',
              'Put <title>My Page</title> inside the head',
              'The <body> comes after </head>',
            ],
            validation: (code) => {
              const hasHead = /<head>[\s\S]*<\/head>/i.test(code);
              const hasTitle = /<title>[\s\S]*<\/title>/i.test(code);
              const hasBody = /<body>[\s\S]*<\/body>/i.test(code);
              const hasContent = /<body>[\s\S]*\S+[\s\S]*<\/body>/i.test(code);
              return [hasHead, hasTitle, hasBody, hasContent];
            },
          },
          {
            id: 'lesson-5-cap',
            title: '⭐ Mini-Project: My Name Card',
            type: 'challenge',
            xpReward: 200,
            description: 'Build your very first complete webpage — a personal name card!',
            slides: [
              {
                title: '🏗️ Project: My Name Card',
                content: 'Time to put everything together! In this guided project, you\'ll create a complete HTML page from scratch — a personal name card that displays your name and a short bio. This is your first real webpage, and it uses everything you\'ve learned: DOCTYPE, html, head, title, body, headings, and paragraphs.',
              },
              {
                title: 'Step 1: The HTML Skeleton',
                content: 'Start with the basic structure you\'ve mastered:\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Name Card</title>\n  </head>\n  <body>\n    <!-- Your content goes here -->\n  </body>\n</html>\n\nThis is the foundation. Every webpage starts exactly like this!',
              },
              {
                title: 'Step 2: Add Your Name',
                content: 'Inside the <body>, add an <h1> heading with your name. The <h1> tag creates the biggest, most important heading on the page. It\'s perfect for your name since it\'s the main focus of your name card:\n\n<h1>Your Name Here</h1>\n\nReplace "Your Name Here" with your actual name!',
              },
              {
                title: 'Step 3: Add Your Bio',
                content: 'Below your name, add a <p> paragraph with a short description about yourself. Tell the world something interesting:\n\n<p>I am learning to code at CodeQuest Academy!</p>\n\nYou can write anything — your hobbies, your favorite subject, or what you want to build. This is YOUR name card!',
              },
              {
                title: 'Step 4: Run & Celebrate! 🎉',
                content: 'Click "Run Code" to see your name card come alive in the preview! You\'ve just built your first complete webpage. It has proper structure (DOCTYPE, html, head, body), a title in the browser tab, a heading with your name, and a paragraph about you. You\'re officially a web developer!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Name Card</title>\n  </head>\n  <body>\n    <!-- Add a heading with your name using <h1> -->\n\n    <!-- Add a paragraph about yourself using <p> -->\n\n  </body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Name Card</title>\n  </head>\n  <body>\n    <h1>My Name</h1>\n    <p>I am learning to code!</p>\n  </body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Create a complete HTML page structure', completed: false },
              { id: 'obj-2', text: 'Add an <h1> heading with your name', completed: false },
              { id: 'obj-3', text: 'Add a <p> paragraph about yourself', completed: false },
            ],
            hints: [
              'Use <h1>Your Name</h1> for the heading',
              'Use <p>Something about you</p> for the paragraph',
            ],
            validation: (code) => {
              const hasStructure = /<html>[\s\S]*<head>[\s\S]*<\/head>[\s\S]*<body>[\s\S]*<\/body>[\s\S]*<\/html>/i.test(code);
              const hasH1 = /<h1>[\s\S]*\S+[\s\S]*<\/h1>/i.test(code);
              const hasP = /<p>[\s\S]*\S+[\s\S]*<\/p>/i.test(code);
              return [hasStructure, hasH1, hasP];
            },
          },
        ],
      },
      {
        id: 'module-1-2',
        name: 'Text & Structure',
        icon: '📝',
        lessons: [
          {
            id: 'lesson-5',
            title: 'Headings h1 through h6',
            type: 'guided',
            xpReward: 100,
            description: 'Learn the six levels of headings — from the biggest to the smallest!',
            slides: [
              {
                title: 'The Heading Hierarchy',
                content: 'HTML provides six levels of headings, from <h1> (the biggest and most important) to <h6> (the smallest). Think of them like a book outline: <h1> is the book title, <h2> is a chapter title, <h3> is a section within a chapter, and so on. This hierarchy helps both humans and search engines understand your content structure.',
              },
              {
                title: 'Best Practices for Headings',
                content: 'Important rules for using headings:\n\n• Use only ONE <h1> per page — it\'s your main title\n• Don\'t skip levels (don\'t jump from <h1> to <h4>)\n• Headings help with SEO (Search Engine Optimization) — Google uses them to understand your page\n• Headings help with accessibility — screen readers use them to navigate\n• Use headings for structure, NOT just to make text big (that\'s CSS\'s job!)',
              },
              {
                title: 'Headings in Action',
                content: 'Here\'s how headings look in code:\n\n<h1>Main Title</h1>\n<h2>Chapter Title</h2>\n<h3>Section Title</h3>\n<h4>Sub-section</h4>\n<h5>Detail</h5>\n<h6>Fine Print</h6>\n\nEach level gets progressively smaller. The browser applies default sizes, but you can change them later with CSS!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <!-- Try all 6 heading levels! -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Main Title</h1>\n  <h2>Section</h2>\n  <h3>Sub-section</h3>\n  <h4>Detail</h4>\n  <h5>Small Detail</h5>\n  <h6>Tiny Detail</h6>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add an <h1> heading', completed: false },
              { id: 'obj-2', text: 'Add an <h2> heading', completed: false },
              { id: 'obj-3', text: 'Add at least one more heading level', completed: false },
            ],
            hints: ['Type <h1>Big Title</h1> and then try <h2>Smaller Title</h2>'],
            validation: (code) => {
              const hasH1 = /<h1>[\s\S]*<\/h1>/i.test(code);
              const hasH2 = /<h2>[\s\S]*<\/h2>/i.test(code);
              const hasH3Plus = /<h[3-6]>[\s\S]*<\/h[3-6]>/i.test(code);
              return [hasH1, hasH2, hasH3Plus];
            },
          },
          {
            id: 'lesson-6',
            title: 'Paragraphs & Line Breaks',
            type: 'guided',
            xpReward: 100,
            description: 'Master the art of writing text on the web with paragraphs and breaks!',
            slides: [
              {
                title: 'The <p> Paragraph Tag',
                content: 'The <p> tag defines a paragraph of text. Browsers automatically add vertical space (margin) before and after each paragraph, creating visual separation. Unlike a word processor, pressing Enter in your HTML code does NOT create a new line on the page — you must use tags to control layout. That\'s why <p> is so important!',
              },
              {
                title: 'Line Breaks with <br>',
                content: 'Need a new line without starting a new paragraph? Use the <br> tag! It\'s a self-closing tag (also called a void element) — it doesn\'t need a closing </br> tag. Use <br> for things like addresses, poems, or song lyrics where you want line breaks within the same block of text.',
              },
              {
                title: 'Horizontal Rules with <hr>',
                content: 'The <hr> tag creates a horizontal line across the page — a visual separator between sections. Like <br>, it\'s self-closing. It\'s great for separating different topics or sections of content:\n\n<p>Section one content</p>\n<hr>\n<p>Section two content</p>\n\nThe line helps readers know they\'re moving to a new topic.',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add two paragraphs and a line break -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <p>This is my first paragraph.</p>\n  <p>This is my second paragraph.<br>With a line break!</p>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add two <p> paragraphs', completed: false },
              { id: 'obj-2', text: 'Use a <br> line break somewhere', completed: false },
            ],
            hints: ['<p>First paragraph</p> then <p>Second paragraph</p>', 'Add <br> inside a paragraph for a line break'],
            validation: (code) => {
              const pCount = (code.match(/<p>/gi) || []).length;
              const hasBr = /<br\s*\/?>/i.test(code);
              return [pCount >= 2, hasBr];
            },
          },
          {
            id: 'lesson-7',
            title: 'Bold, Italic & Emphasis',
            type: 'guided',
            xpReward: 100,
            description: 'Make your text stand out with bold, italic, and emphasis tags!',
            slides: [
              {
                title: 'Semantic vs. Presentational Tags',
                content: 'HTML has two types of text formatting tags:\n\n• Semantic tags convey MEANING: <strong> means "this is important" and <em> means "this is emphasized"\n• Presentational tags are visual only: <b> makes text bold and <i> makes text italic\n\nAlways prefer <strong> over <b> and <em> over <i> because screen readers and search engines understand semantic tags!',
              },
              {
                title: 'More Text Formatting',
                content: 'HTML offers many text formatting options:\n\n• <strong>Bold & important</strong>\n• <em>Italic & emphasized</em>\n• <u>Underlined text</u>\n• <s>Strikethrough text</s>\n• <mark>Highlighted text</mark>\n• <small>Smaller text</small>\n• <sub>Subscript</sub> (like H₂O)\n• <sup>Superscript</sup> (like x²)\n\nYou can even combine them: <strong><em>bold AND italic!</em></strong>',
              },
              {
                title: 'When to Use Each',
                content: 'Use <strong> when the text is genuinely important — like a warning or key term. Use <em> when you want to stress a word — like "I really love coding." Use <mark> to highlight search results or key phrases. Use <small> for fine print or disclaimers. The right tag makes your HTML more meaningful and accessible!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <p>Make some words <!-- bold --> and some <!-- italic -->!</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <p>Make some words <strong>bold</strong> and some <em>italic</em>!</p>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Use <strong> to make text bold', completed: false },
              { id: 'obj-2', text: 'Use <em> to make text italic', completed: false },
            ],
            hints: ['Wrap a word with <strong>word</strong>', 'Wrap a word with <em>word</em>'],
            validation: (code) => {
              const hasStrong = /<strong>[\s\S]*<\/strong>/i.test(code);
              const hasEm = /<em>[\s\S]*<\/em>/i.test(code);
              return [hasStrong, hasEm];
            },
          },
          {
            id: 'lesson-8',
            title: 'Lists — Ordered & Unordered',
            type: 'guided',
            xpReward: 100,
            description: 'Create bullet points and numbered lists to organize information!',
            slides: [
              {
                title: 'Two Types of Lists',
                content: 'HTML has two main list types:\n\n• <ul> (Unordered List) — displays items with bullet points. Use for items where order doesn\'t matter (favorite foods, hobbies, features).\n\n• <ol> (Ordered List) — displays items with numbers. Use for items where order matters (steps in a recipe, rankings, instructions).\n\nEach item in both lists goes inside an <li> (list item) tag.',
              },
              {
                title: 'List Syntax & Nesting',
                content: 'Lists can be nested inside each other to create sub-lists:\n\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n  <li>Backend</li>\n</ul>\n\nOrdered lists can use different numbering with the type attribute: type="A" for letters, type="I" for Roman numerals, type="a" for lowercase letters.',
              },
              {
                title: 'Description Lists',
                content: 'There\'s also a third type: the description list <dl>, used for term-definition pairs:\n\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>\n\n<dt> is the term, <dd> is the description. Great for glossaries, FAQs, and metadata!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h2>My Favorite Things</h2>\n  <!-- Create an unordered list with 3 items -->\n\n  <h2>Steps to Make a Sandwich</h2>\n  <!-- Create an ordered list with 3 steps -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h2>My Favorite Things</h2>\n  <ul>\n    <li>Coding</li>\n    <li>Games</li>\n    <li>Pizza</li>\n  </ul>\n  <h2>Steps to Make a Sandwich</h2>\n  <ol>\n    <li>Get bread</li>\n    <li>Add filling</li>\n    <li>Enjoy!</li>\n  </ol>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Create an unordered list <ul> with items', completed: false },
              { id: 'obj-2', text: 'Create an ordered list <ol> with items', completed: false },
              { id: 'obj-3', text: 'Each list should have at least 3 <li> items', completed: false },
            ],
            hints: ['<ul><li>Item 1</li><li>Item 2</li></ul>', '<ol><li>Step 1</li></ol>'],
            validation: (code) => {
              const hasUl = /<ul>[\s\S]*<\/ul>/i.test(code);
              const hasOl = /<ol>[\s\S]*<\/ol>/i.test(code);
              const liCount = (code.match(/<li>/gi) || []).length;
              return [hasUl, hasOl, liCount >= 6];
            },
          },
        ],
      },
      {
        id: 'module-1-3',
        name: 'Links & Images',
        icon: '🔗',
        lessons: [
          {
            id: 'lesson-9',
            title: 'Anchor Tags & Navigation',
            type: 'guided',
            xpReward: 100,
            description: 'Learn to create clickable links that connect pages together!',
            slides: [
              {
                title: 'The <a> Anchor Tag',
                content: 'The <a> (anchor) tag creates hyperlinks — the clickable text that connects web pages together. The href attribute tells the browser WHERE to go:\n\n<a href="https://example.com">Click me!</a>\n\nLinks are what make the web a "web" — they connect billions of pages into one giant network. Without links, every page would be an island!',
              },
              {
                title: 'Types of Links',
                content: 'There are several types of links you can create:\n\n• External links: <a href="https://google.com">Google</a>\n• Open in new tab: <a href="url" target="_blank">Link</a>\n• Email links: <a href="mailto:info@example.com">Email Us</a>\n• Phone links: <a href="tel:+1234567890">Call Us</a>\n• Jump to section: <a href="#section2">Go to Section 2</a>\n\nThe target="_blank" attribute is especially useful — it opens the link in a new tab so users don\'t leave your page!',
              },
              {
                title: 'Anchor Links (Jump to Section)',
                content: 'You can create links that jump to a specific section on the same page using IDs:\n\n<a href="#about">Go to About</a>\n...\n<h2 id="about">About Section</h2>\n\nThe # symbol tells the browser to look for an element with that ID on the current page. This is how "table of contents" navigation works on long pages!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Links Page</h1>\n  <!-- Create a link to your favorite website -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Links Page</h1>\n  <a href="https://example.com">Visit Example</a>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Create an <a> tag with an href attribute', completed: false },
              { id: 'obj-2', text: 'Add text between the opening and closing tags', completed: false },
            ],
            hints: ['<a href="https://example.com">Click here!</a>'],
            validation: (code) => {
              const hasAnchor = /<a\s+href=["'][^"']+["']>[\s\S]*<\/a>/i.test(code);
              const hasText = /<a[^>]*>\s*\S+/i.test(code);
              return [hasAnchor, hasText];
            },
          },
          {
            id: 'lesson-10',
            title: 'Adding Images',
            type: 'guided',
            xpReward: 100,
            description: 'Bring your pages to life with images!',
            slides: [
              {
                title: 'The <img> Tag',
                content: 'The <img> tag embeds images into your page. It\'s a self-closing tag (no </img> needed) and requires two essential attributes:\n\n• src — the path or URL to the image file\n• alt — alternative text that describes the image\n\n<img src="photo.jpg" alt="A sunset over the ocean">\n\nThe alt text is crucial for accessibility — screen readers read it aloud for visually impaired users, and it shows if the image fails to load.',
              },
              {
                title: 'Image Attributes',
                content: 'You can control image size with width and height attributes:\n\n<img src="photo.jpg" alt="Sunset" width="600" height="400">\n\nYou can also make images clickable by wrapping them in an <a> tag:\n\n<a href="https://example.com">\n  <img src="logo.png" alt="Company Logo">\n</a>\n\nFor captions, use the <figure> and <figcaption> elements:\n\n<figure>\n  <img src="chart.png" alt="Sales Chart">\n  <figcaption>Annual Sales 2025</figcaption>\n</figure>',
              },
              {
                title: 'File Paths',
                content: 'The src attribute can use different types of paths:\n\n• Absolute URL: src="https://example.com/image.jpg" — full web address\n• Relative path: src="images/photo.jpg" — relative to your HTML file\n• Parent folder: src="../images/photo.jpg" — go up one folder first\n\nFor learning, we\'ll use placeholder URLs. In real projects, you\'d organize images in an "images" folder next to your HTML file.',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Gallery</h1>\n  <!-- Add an image with src and alt attributes -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Gallery</h1>\n  <img src="https://via.placeholder.com/300" alt="A placeholder image">\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add an <img> tag with a src attribute', completed: false },
              { id: 'obj-2', text: 'Include an alt attribute for accessibility', completed: false },
            ],
            hints: ['<img src="https://via.placeholder.com/300" alt="My image">'],
            validation: (code) => {
              const hasImg = /<img[^>]+src=["'][^"']+["']/i.test(code);
              const hasAlt = /<img[^>]+alt=["'][^"']*["']/i.test(code);
              return [hasImg, hasAlt];
            },
          },
        ],
      },
      {
        id: 'module-1-4',
        name: 'Tables & Forms',
        icon: '📋',
        lessons: [
          {
            id: 'lesson-13',
            title: 'Table Structure',
            type: 'guided',
            xpReward: 100,
            description: 'Organize data in rows and columns with HTML tables!',
            slides: [
              {
                title: 'Building Tables',
                content: 'HTML tables organize data into rows and columns. The key tags are:\n\n• <table> — wraps the entire table\n• <thead> — groups header rows\n• <tbody> — groups body rows\n• <tr> — creates a table row\n• <th> — creates a header cell (bold & centered by default)\n• <td> — creates a standard data cell\n\nTables are perfect for schedules, scores, comparisons, and any structured data!',
              },
              {
                title: 'Table Structure in Code',
                content: 'Here\'s a complete table example:\n\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>25</td>\n    </tr>\n  </tbody>\n</table>\n\nThe <thead> and <tbody> sections help organize your table and are important for accessibility and styling.',
              },
              {
                title: 'Spanning Rows & Columns',
                content: 'Cells can span multiple columns or rows:\n\n• colspan="2" — cell spans 2 columns\n• rowspan="2" — cell spans 2 rows\n\n<tr>\n  <th colspan="2">Full Name</th>\n</tr>\n\nThis is useful for creating complex table layouts like merged header cells or grouped data. Tables should only be used for tabular data — never for page layout (that\'s what CSS is for)!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Schedule</h1>\n  <!-- Create a table with headers and at least 2 rows -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Schedule</h1>\n  <table>\n    <tr>\n      <th>Day</th>\n      <th>Activity</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Coding</td>\n    </tr>\n    <tr>\n      <td>Tuesday</td>\n      <td>Art</td>\n    </tr>\n  </table>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Create a <table> with <tr> rows', completed: false },
              { id: 'obj-2', text: 'Add <th> header cells', completed: false },
              { id: 'obj-3', text: 'Add <td> data cells', completed: false },
            ],
            hints: ['Start with <table>, then add <tr> for each row'],
            validation: (code) => {
              const hasTable = /<table>[\s\S]*<\/table>/i.test(code);
              const hasTh = /<th>[\s\S]*<\/th>/i.test(code);
              const hasTd = /<td>[\s\S]*<\/td>/i.test(code);
              return [hasTable, hasTh, hasTd];
            },
          },
          {
            id: 'lesson-14',
            title: 'Form Elements',
            type: 'guided',
            xpReward: 100,
            description: 'Build interactive forms with inputs and buttons!',
            slides: [
              {
                title: 'HTML Forms',
                content: 'Forms are how users send data to websites — login pages, search bars, sign-up forms, and contact forms all use HTML forms. The key elements:\n\n• <form> — wraps all form elements; has action (where data goes) and method (GET or POST) attributes\n• <input> — creates text fields, checkboxes, radio buttons, etc.\n• <label> — describes what each input is for\n• <button> — creates clickable buttons\n• <textarea> — creates multi-line text areas\n• <select> — creates dropdown menus',
              },
              {
                title: 'Input Types',
                content: 'The <input> tag is incredibly versatile. The type attribute changes its behavior:\n\n• type="text" — regular text field\n• type="email" — email with validation\n• type="password" — hides characters\n• type="number" — numbers only\n• type="date" — date picker\n• type="checkbox" — checkboxes\n• type="radio" — radio buttons (pick one)\n• type="color" — color picker\n• type="range" — slider\n• type="file" — file upload\n\nEach type gives the browser hints about what kind of data to expect!',
              },
              {
                title: 'Labels & Accessibility',
                content: 'Always pair inputs with <label> tags using the for attribute:\n\n<label for="username">Username:</label>\n<input type="text" id="username" name="username">\n\nThe for attribute must match the input\'s id. This is essential for accessibility — screen readers read the label aloud, and clicking the label focuses the input. You can also add validation attributes like required, minlength, maxlength, min, max, and pattern.',
              },
              {
                title: 'Dropdowns & Textareas',
                content: 'For longer text, use <textarea>:\n\n<textarea rows="5" cols="40" placeholder="Your message..."></textarea>\n\nFor dropdown menus, use <select> with <option>:\n\n<select name="country">\n  <option value="">-- Select --</option>\n  <option value="us">United States</option>\n  <option value="uk">United Kingdom</option>\n</select>\n\nGroup related fields with <fieldset> and <legend> for better organization and accessibility.',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Sign Up</h1>\n  <!-- Create a form with name input, email input, and submit button -->\n\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Sign Up</h1>\n  <form>\n    <label>Name:</label>\n    <input type="text" placeholder="Your name">\n    <label>Email:</label>\n    <input type="email" placeholder="Your email">\n    <button type="submit">Sign Up!</button>\n  </form>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Create a <form> element', completed: false },
              { id: 'obj-2', text: 'Add at least 2 <input> fields', completed: false },
              { id: 'obj-3', text: 'Add a <button>', completed: false },
            ],
            hints: ['<form><input type="text"><button>Submit</button></form>'],
            validation: (code) => {
              const hasForm = /<form>[\s\S]*<\/form>/i.test(code);
              const inputCount = (code.match(/<input/gi) || []).length;
              const hasButton = /<button[\s\S]*>[\s\S]*<\/button>/i.test(code);
              return [hasForm, inputCount >= 2, hasButton];
            },
          },
        ],
      },
    ],
    capstone: {
      id: 'capstone-1',
      title: 'My Personal Homepage',
      description: 'Build a complete single-page site with navigation, images, lists, and a contact form!',
      xpReward: 500,
      badge: 'foundation-forger',
    },
  },
  {
    id: 'world-2',
    name: 'The Style Sanctum',
    subtitle: 'Beginner CSS',
    icon: '🎨',
    color: '#06D6A0',
    bgGradient: 'from-emerald-900 to-teal-900',
    description: 'Enter the realm of style! Learn CSS to transform plain HTML into beautiful, colorful designs.',
    unlocked: false,
    modules: [
      {
        id: 'module-2-1',
        name: 'CSS Basics',
        icon: '🎨',
        lessons: [
          {
            id: 'lesson-16',
            title: 'What is CSS?',
            type: 'guided',
            xpReward: 100,
            description: 'Discover the power of CSS — the language that makes websites beautiful!',
            slides: [
              {
                title: 'CSS = Cascading Style Sheets',
                content: 'CSS stands for Cascading Style Sheets. It controls how HTML elements LOOK — colors, fonts, sizes, spacing, layouts, and animations. CSS separates content (HTML) from design (CSS), making websites easier to maintain. Without CSS, every website would look like a plain text document from the 1990s!',
              },
              {
                title: 'Three Ways to Add CSS',
                content: 'There are three ways to add CSS to HTML:\n\n1. Inline CSS — style attribute directly on an element:\n   <p style="color: blue;">Blue text</p>\n\n2. Internal CSS — <style> tag in the <head>:\n   <style> p { color: blue; } </style>\n\n3. External CSS — separate .css file (BEST practice!):\n   <link rel="stylesheet" href="styles.css">\n\nExternal CSS is preferred because it keeps your code organized and lets you reuse styles across multiple pages.',
              },
              {
                title: 'CSS Syntax',
                content: 'CSS follows a simple pattern:\n\nselector {\n  property: value;\n  property: value;\n}\n\nThe selector targets which HTML elements to style. The property is what you want to change (color, font-size, etc.). The value is what you want to set it to. Each declaration ends with a semicolon. The whole block is wrapped in curly braces { }.',
              },
              {
                title: 'Your First CSS Rule',
                content: 'Let\'s write a CSS rule that changes the color of all <h1> elements to purple:\n\nh1 {\n  color: purple;\n  font-size: 36px;\n  text-align: center;\n}\n\nThis rule says: "Find every <h1> element, make its text purple, set the font size to 36 pixels, and center it." Simple, powerful, and beautiful!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Add your CSS here */\n\n  </style>\n</head>\n<body>\n  <h1>Style Me!</h1>\n  <p>Make me colorful!</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    h1 {\n      color: purple;\n    }\n    p {\n      color: blue;\n    }\n  </style>\n</head>\n<body>\n  <h1>Style Me!</h1>\n  <p>Make me colorful!</p>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add a CSS rule for the h1 element', completed: false },
              { id: 'obj-2', text: 'Change the color of the paragraph', completed: false },
            ],
            hints: ['Inside <style>, write: h1 { color: purple; }'],
            validation: (code) => {
              const hasH1Rule = /h1\s*\{[^}]*color\s*:/i.test(code);
              const hasPRule = /p\s*\{[^}]*color\s*:/i.test(code);
              return [hasH1Rule, hasPRule];
            },
          },
          {
            id: 'lesson-17',
            title: 'Selectors',
            type: 'guided',
            xpReward: 100,
            description: 'Learn to target specific elements with CSS selectors!',
            slides: [
              {
                title: 'CSS Selectors',
                content: 'Selectors determine WHICH elements your CSS rules apply to. The three basic selectors are:\n\n• Element selector: h1 { } — targets ALL h1 elements\n• Class selector: .highlight { } — targets elements with class="highlight" (reusable!)\n• ID selector: #special { } — targets the ONE element with id="special" (unique!)\n\nClasses are the most commonly used because they\'re reusable across multiple elements.',
              },
              {
                title: 'Grouping & Combining Selectors',
                content: 'You can group selectors to apply the same styles:\n\nh1, h2, h3 { color: navy; }\n\nYou can also combine selectors:\n\n• Descendant: div p { } — all <p> inside <div>\n• Child: div > p { } — direct <p> children of <div>\n• Adjacent sibling: h2 + p { } — <p> right after <h2>\n\nThe universal selector * { } targets ALL elements — useful for CSS resets.',
              },
              {
                title: 'Specificity: Which Rule Wins?',
                content: 'When multiple rules target the same element, specificity determines which wins:\n\n1. Element selectors (p, h1) — lowest specificity\n2. Class selectors (.highlight) — medium specificity\n3. ID selectors (#special) — high specificity\n4. Inline styles (style="...") — highest specificity\n\nIf specificity is equal, the LAST rule in the CSS file wins. This is the "Cascading" part of Cascading Style Sheets!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Style the class "highlight" */\n\n    /* Style the id "special" */\n\n  </style>\n</head>\n<body>\n  <p class="highlight">I have a class!</p>\n  <p id="special">I have an ID!</p>\n  <p class="highlight">I also have the class!</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .highlight {\n      color: orange;\n      font-weight: bold;\n    }\n    #special {\n      color: red;\n      font-size: 24px;\n    }\n  </style>\n</head>\n<body>\n  <p class="highlight">I have a class!</p>\n  <p id="special">I have an ID!</p>\n  <p class="highlight">I also have the class!</p>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Style elements with class "highlight" using .highlight', completed: false },
              { id: 'obj-2', text: 'Style the element with id "special" using #special', completed: false },
            ],
            hints: ['.highlight { color: orange; }', '#special { color: red; }'],
            validation: (code) => {
              const hasClass = /\.highlight\s*\{/i.test(code);
              const hasId = /#special\s*\{/i.test(code);
              return [hasClass, hasId];
            },
          },
          {
            id: 'lesson-18',
            title: 'Colors',
            type: 'guided',
            xpReward: 100,
            description: 'Explore the rainbow of CSS colors — names, hex, RGB, and HSL!',
            slides: [
              {
                title: 'Color Formats in CSS',
                content: 'CSS supports multiple ways to define colors:\n\n• Named colors: red, blue, coral, tomato (147 named colors!)\n• Hexadecimal: #FF0000 (red), #00FF00 (green), #0000FF (blue)\n• RGB: rgb(255, 0, 0) — Red, Green, Blue values from 0-255\n• RGBA: rgba(255, 0, 0, 0.5) — RGB with transparency (alpha)\n• HSL: hsl(0, 100%, 50%) — Hue, Saturation, Lightness\n\nHex and RGB are the most commonly used in professional development.',
              },
              {
                title: 'Understanding Hex Colors',
                content: 'Hex colors use a # followed by 6 characters (0-9 and A-F):\n\n#RRGGBB — two digits each for Red, Green, Blue\n\n• #FF0000 = pure red (FF red, 00 green, 00 blue)\n• #00FF00 = pure green\n• #0000FF = pure blue\n• #FFFFFF = white (all colors at max)\n• #000000 = black (no colors)\n• #333333 = dark gray (shorthand: #333)\n\nYou can use 3-digit shorthand: #F00 = #FF0000',
              },
              {
                title: 'Background Colors & Gradients',
                content: 'Colors aren\'t just for text! You can color backgrounds too:\n\nbackground-color: #f0f0f0;\n\nCSS also supports beautiful gradients:\n\nbackground: linear-gradient(to right, #ff7e5f, #feb47b);\nbackground: radial-gradient(circle, #ff7e5f, #feb47b);\n\nGradients blend two or more colors together smoothly. They\'re perfect for creating eye-catching headers and buttons!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .named { color: /* use a color name */; }\n    .hex { color: /* use a hex color */; }\n    .rgb { color: /* use rgb() */; }\n  </style>\n</head>\n<body>\n  <p class="named">Named color</p>\n  <p class="hex">Hex color</p>\n  <p class="rgb">RGB color</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .named { color: coral; }\n    .hex { color: #7C3AED; }\n    .rgb { color: rgb(6, 214, 160); }\n  </style>\n</head>\n<body>\n  <p class="named">Named color</p>\n  <p class="hex">Hex color</p>\n  <p class="rgb">RGB color</p>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Use a named color (like "coral" or "blue")', completed: false },
              { id: 'obj-2', text: 'Use a hex color (like #FF5733)', completed: false },
              { id: 'obj-3', text: 'Use an rgb() color', completed: false },
            ],
            hints: ['color: coral;', 'color: #FF5733;', 'color: rgb(255, 87, 51);'],
            validation: (code) => {
              const hasNamed = /\.named\s*\{[^}]*color\s*:\s*[a-zA-Z]+\s*;/i.test(code);
              const hasHex = /#[0-9a-fA-F]{3,8}/i.test(code);
              const hasRgb = /rgb\s*\(/i.test(code);
              return [hasNamed, hasHex, hasRgb];
            },
          },
        ],
      },
      {
        id: 'module-2-2',
        name: 'The Box Model',
        icon: '📦',
        lessons: [
          {
            id: 'lesson-20',
            title: 'Content, Padding, Border, Margin',
            type: 'guided',
            xpReward: 150,
            description: 'Understand the box model — the foundation of all CSS layouts!',
            slides: [
              {
                title: 'Every Element is a Box',
                content: 'In CSS, every HTML element is treated as a rectangular box. The CSS Box Model describes the space around every element with four layers:\n\n1. Content — the actual text, image, or content inside\n2. Padding — space between the content and the border (inside space)\n3. Border — the edge around the padding\n4. Margin — space outside the border (between elements)\n\nUnderstanding the box model is THE most important CSS concept!',
              },
              {
                title: 'Box Model Properties',
                content: 'Each layer has its own CSS properties:\n\n• padding: 20px; — all sides\n• padding: 10px 20px; — top/bottom, left/right\n• padding: 10px 20px 15px 25px; — top, right, bottom, left (clockwise!)\n\nThe same pattern works for margin and border. You can also set individual sides:\n\npadding-top: 10px;\nmargin-left: 20px;\nborder-bottom: 2px solid black;',
              },
              {
                title: 'Box Sizing',
                content: 'By default, width and height only apply to the content area. Padding and border are ADDED on top:\n\nwidth: 300px + padding: 20px + border: 2px = 344px total!\n\nThis is confusing! Fix it with box-sizing: border-box — this makes width include padding and border:\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nMost developers add this to every project. It makes sizing much more intuitive!',
              },
              {
                title: 'Borders & Border Radius',
                content: 'Borders have three properties: width, style, and color:\n\nborder: 2px solid #333;\n\nBorder styles include: solid, dashed, dotted, double, groove, ridge, and none.\n\nThe border-radius property rounds corners:\n\nborder-radius: 10px; — slightly rounded\nborder-radius: 50%; — perfect circle (on a square element)\n\nCombine with box-shadow for depth:\nbox-shadow: 0 4px 6px rgba(0,0,0,0.1);',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box {\n      background: #7C3AED;\n      color: white;\n      /* Add padding, border, and margin */\n\n    }\n  </style>\n</head>\n<body>\n  <div class="box">I am a box!</div>\n  <div class="box">I am another box!</div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box {\n      background: #7C3AED;\n      color: white;\n      padding: 20px;\n      border: 3px solid #06D6A0;\n      margin: 10px;\n    }\n  </style>\n</head>\n<body>\n  <div class="box">I am a box!</div>\n  <div class="box">I am another box!</div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add padding to the box', completed: false },
              { id: 'obj-2', text: 'Add a border', completed: false },
              { id: 'obj-3', text: 'Add margin between boxes', completed: false },
            ],
            hints: ['padding: 20px;', 'border: 2px solid green;', 'margin: 10px;'],
            validation: (code) => {
              const hasPadding = /padding\s*:/i.test(code);
              const hasBorder = /border\s*:/i.test(code);
              const hasMargin = /margin\s*:/i.test(code);
              return [hasPadding, hasBorder, hasMargin];
            },
          },
        ],
      },
    ],
    capstone: {
      id: 'capstone-2',
      title: 'My Styled Portfolio',
      description: 'Restyle your personal homepage with a complete CSS theme!',
      xpReward: 500,
      badge: 'style-sorcerer',
    },
  },
  {
    id: 'world-3',
    name: 'The Layout Labyrinth',
    subtitle: 'Intermediate Layout',
    icon: '🏛️',
    color: '#FFD166',
    bgGradient: 'from-yellow-900 to-amber-900',
    description: 'Master the art of layout! Flexbox and Grid will give you the power to arrange anything on screen.',
    unlocked: false,
    modules: [
      {
        id: 'module-3-1',
        name: 'Flexbox',
        icon: '💪',
        lessons: [
          {
            id: 'lesson-29',
            title: 'Flex Container & Items',
            type: 'guided',
            xpReward: 150,
            description: 'Enter the world of Flexbox — the most powerful layout tool!',
            slides: [
              {
                title: 'What is Flexbox?',
                content: 'Flexbox (Flexible Box Layout) is a one-dimensional layout system for arranging items in rows or columns. Before Flexbox, centering things in CSS was notoriously difficult. Now it\'s just three lines:\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\nAdd display: flex to a container, and its children become flex items that line up in a row by default!',
              },
              {
                title: 'Flex Container Properties',
                content: 'The container (parent) controls the layout:\n\n• flex-direction: row | column — direction of items\n• justify-content — alignment along the MAIN axis:\n  flex-start, flex-end, center, space-between, space-around, space-evenly\n• align-items — alignment along the CROSS axis:\n  flex-start, flex-end, center, stretch, baseline\n• flex-wrap: wrap — allow items to wrap to next line\n• gap: 20px — space between items',
              },
              {
                title: 'Flex Item Properties',
                content: 'Individual items can also be controlled:\n\n• flex-grow: 1 — how much the item should grow\n• flex-shrink: 0 — how much it should shrink\n• flex-basis: 200px — initial size before growing/shrinking\n• flex: 1 — shorthand for grow:1, shrink:1, basis:0\n• align-self: flex-end — override alignment for one item\n• order: 2 — change visual order (default is 0)\n\nThe flex shorthand is the most commonly used: flex: 1 makes items share space equally.',
              },
              {
                title: 'Common Flexbox Patterns',
                content: 'Flexbox solves many common layout problems:\n\n• Centering: display:flex; justify-content:center; align-items:center;\n• Navigation bar: display:flex; justify-content:space-between;\n• Equal columns: display:flex; with flex:1 on each child\n• Footer at bottom: display:flex; flex-direction:column; min-height:100vh; with flex-grow:1 on main content\n\nFlexbox is your go-to for most layout needs!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .container {\n      /* Make this a flex container */\n\n    }\n    .item {\n      background: #7C3AED;\n      color: white;\n      padding: 20px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n    <div class="item">Item 3</div>\n  </div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .container {\n      display: flex;\n      gap: 10px;\n    }\n    .item {\n      background: #7C3AED;\n      color: white;\n      padding: 20px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n    <div class="item">Item 3</div>\n  </div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add display: flex to the container', completed: false },
            ],
            hints: ['Add display: flex; inside .container { }'],
            validation: (code) => {
              const hasFlex = /display\s*:\s*flex/i.test(code);
              return [hasFlex];
            },
          },
        ],
      },
      {
        id: 'module-3-2',
        name: 'CSS Grid',
        icon: '📐',
        lessons: [
          {
            id: 'lesson-34',
            title: 'Grid Container & Items',
            type: 'guided',
            xpReward: 150,
            description: 'Discover CSS Grid — create complex layouts with rows and columns!',
            slides: [
              {
                title: 'What is CSS Grid?',
                content: 'CSS Grid is a two-dimensional layout system — it handles both rows AND columns simultaneously. While Flexbox is great for one-dimensional layouts (a row OR a column), Grid excels at creating complex page layouts with multiple rows and columns at once.\n\ndisplay: grid creates a grid container. Use grid-template-columns to define your column structure!',
              },
              {
                title: 'Defining Grid Columns & Rows',
                content: 'Grid uses template properties to define structure:\n\n• grid-template-columns: 200px 200px 200px; — three 200px columns\n• grid-template-columns: 1fr 1fr 1fr; — three equal fractions\n• grid-template-columns: repeat(3, 1fr); — shorthand for above\n• grid-template-columns: 200px 1fr 2fr; — mixed sizes\n• grid-template-rows: 100px auto 200px; — row heights\n\nThe fr unit means "fraction of available space" — it\'s the most useful Grid unit!',
              },
              {
                title: 'Grid Template Areas',
                content: 'Grid has a powerful feature called template areas that lets you name sections:\n\ngrid-template-areas:\n  "header header header"\n  "sidebar main aside"\n  "footer footer footer";\n\nThen assign elements: .header { grid-area: header; }\n\nThis creates a visual map of your layout right in your CSS! It\'s incredibly intuitive for building page layouts.',
              },
              {
                title: 'Responsive Grid',
                content: 'Grid can be made responsive with auto-fit and minmax:\n\ngrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\nThis creates as many columns as will fit, each at least 300px wide, expanding to fill available space. No media queries needed!\n\n• auto-fit — fits columns and expands items\n• auto-fill — fits columns but doesn\'t expand\n• minmax(min, max) — sets size range\n\nThis one line creates a fully responsive grid!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .grid {\n      /* Make this a grid with 3 columns */\n\n      gap: 10px;\n    }\n    .cell {\n      background: #06D6A0;\n      color: #0F0E2E;\n      padding: 20px;\n      text-align: center;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class="grid">\n    <div class="cell">1</div>\n    <div class="cell">2</div>\n    <div class="cell">3</div>\n    <div class="cell">4</div>\n    <div class="cell">5</div>\n    <div class="cell">6</div>\n  </div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      gap: 10px;\n    }\n    .cell {\n      background: #06D6A0;\n      color: #0F0E2E;\n      padding: 20px;\n      text-align: center;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class="grid">\n    <div class="cell">1</div>\n    <div class="cell">2</div>\n    <div class="cell">3</div>\n    <div class="cell">4</div>\n    <div class="cell">5</div>\n    <div class="cell">6</div>\n  </div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add display: grid to the container', completed: false },
              { id: 'obj-2', text: 'Define 3 columns with grid-template-columns', completed: false },
            ],
            hints: ['display: grid;', 'grid-template-columns: 1fr 1fr 1fr;'],
            validation: (code) => {
              const hasGrid = /display\s*:\s*grid/i.test(code);
              const hasCols = /grid-template-columns\s*:/i.test(code);
              return [hasGrid, hasCols];
            },
          },
        ],
      },
    ],
    capstone: {
      id: 'capstone-3',
      title: "The Dragon's Lair",
      description: 'Design a themed multi-section landing page using Grid + Flexbox!',
      xpReward: 750,
      badge: 'layout-legend',
    },
  },
  {
    id: 'world-4',
    name: 'The Responsive Realm',
    subtitle: 'Responsive & Animation',
    icon: '📱',
    color: '#EF476F',
    bgGradient: 'from-rose-900 to-pink-900',
    description: 'Make your websites work on every screen size and add stunning animations!',
    unlocked: false,
    modules: [
      {
        id: 'module-4-1',
        name: 'Responsive Design',
        icon: '📱',
        lessons: [
          {
            id: 'lesson-42',
            title: 'Media Queries',
            type: 'guided',
            xpReward: 150,
            description: 'Make your designs adapt to any screen size with media queries!',
            slides: [
              {
                title: 'What is Responsive Design?',
                content: 'Responsive web design makes pages look good on ALL devices — phones, tablets, laptops, and desktops. It uses flexible layouts, flexible images, and CSS media queries. The viewport meta tag is essential:\n\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\nThis tells the browser to set the page width to the device width. Without it, mobile browsers zoom out to show the desktop version!',
              },
              {
                title: 'Media Queries',
                content: 'Media queries let you apply different CSS rules based on screen size:\n\n@media (min-width: 768px) {\n  .container { width: 750px; }\n}\n\n@media (min-width: 1024px) {\n  .container { width: 960px; }\n}\n\nCommon breakpoints:\n• Phones: < 576px\n• Tablets: ≥ 768px\n• Desktops: ≥ 992px\n• Large desktops: ≥ 1200px',
              },
              {
                title: 'Mobile-First Approach',
                content: 'The mobile-first approach means writing base styles for mobile, then using min-width queries to add styles for larger screens. This is best practice because:\n\n• Mobile has more constraints (smaller screen, slower connection)\n• Forces you to prioritize content\n• Results in cleaner, more maintainable CSS\n• Progressive enhancement — start simple, add complexity\n\nAlways design for the smallest screen first, then scale up!',
              },
              {
                title: 'Responsive Typography & Images',
                content: 'Make text and images responsive too:\n\n/* Responsive images */\nimg { max-width: 100%; height: auto; }\n\n/* Fluid typography with clamp() */\nh1 { font-size: clamp(1.5rem, 4vw, 3rem); }\n\nclamp(min, preferred, max) sets a font size that scales with the viewport but never goes below min or above max. The vw unit means "viewport width" — 4vw = 4% of the screen width.',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box {\n      background: #7C3AED;\n      color: white;\n      padding: 20px;\n      text-align: center;\n    }\n    /* Add a media query for screens wider than 600px */\n\n  </style>\n</head>\n<body>\n  <div class="box">Resize me!</div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box {\n      background: #7C3AED;\n      color: white;\n      padding: 20px;\n      text-align: center;\n    }\n    @media (min-width: 600px) {\n      .box {\n        background: #06D6A0;\n        font-size: 24px;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class="box">Resize me!</div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add a @media query for min-width: 600px', completed: false },
              { id: 'obj-2', text: 'Change a style inside the media query', completed: false },
            ],
            hints: ['@media (min-width: 600px) { .box { background: green; } }'],
            validation: (code) => {
              const hasMedia = /@media/i.test(code);
              const hasMinWidth = /min-width/i.test(code);
              return [hasMedia, hasMinWidth];
            },
          },
        ],
      },
      {
        id: 'module-4-2',
        name: 'Animations',
        icon: '✨',
        lessons: [
          {
            id: 'lesson-46',
            title: 'CSS Transitions',
            type: 'guided',
            xpReward: 150,
            description: 'Add smooth transitions to make your elements come alive!',
            slides: [
              {
                title: 'CSS Transitions',
                content: 'Transitions smoothly animate changes between CSS states. Instead of an instant change, the property gradually shifts over time:\n\ntransition: property duration timing-function delay;\n\nExample:\ntransition: background-color 0.3s ease;\n\nOr animate everything:\ntransition: all 0.3s ease;\n\nTransitions need a trigger (like :hover) to activate. They animate FROM the current state TO the new state.',
              },
              {
                title: 'Timing Functions',
                content: 'Timing functions control the speed curve of the animation:\n\n• ease — slow start, fast middle, slow end (default)\n• linear — constant speed throughout\n• ease-in — starts slow, ends fast\n• ease-out — starts fast, ends slow\n• ease-in-out — slow at both ends\n• cubic-bezier(n,n,n,n) — custom curve\n\nFor most UI interactions, ease or ease-out feels the most natural. Use 0.2s-0.4s duration for snappy, responsive animations.',
              },
              {
                title: 'CSS Transform',
                content: 'The transform property lets you move, scale, rotate, and skew elements:\n\n• translate(50px, 100px) — move element\n• scale(1.5) — make 1.5x bigger\n• rotate(45deg) — rotate 45 degrees\n• skew(10deg) — slant the element\n\nCombine multiple transforms:\ntransform: translate(50px, 0) rotate(45deg) scale(1.2);\n\nTransforms are GPU-accelerated, making them the most performant way to animate!',
              },
              {
                title: 'Keyframe Animations',
                content: 'For complex, multi-step animations, use @keyframes:\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.element {\n  animation: fadeIn 1s ease-out forwards;\n}\n\nYou can define multiple steps with percentages:\n\n@keyframes bounce {\n  0% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n  100% { transform: translateY(0); }\n}\n\nUse animation-iteration-count: infinite for looping!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .magic-box {\n      width: 100px;\n      height: 100px;\n      background: #7C3AED;\n      /* Add a transition */\n\n    }\n    .magic-box:hover {\n      /* Change something on hover */\n\n    }\n  </style>\n</head>\n<body>\n  <div class="magic-box"></div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .magic-box {\n      width: 100px;\n      height: 100px;\n      background: #7C3AED;\n      transition: all 0.3s ease;\n    }\n    .magic-box:hover {\n      background: #06D6A0;\n      transform: scale(1.2);\n      border-radius: 50%;\n    }\n  </style>\n</head>\n<body>\n  <div class="magic-box"></div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Add a transition property', completed: false },
              { id: 'obj-2', text: 'Add a :hover state with changed properties', completed: false },
            ],
            hints: ['transition: all 0.3s ease;', '.magic-box:hover { background: green; }'],
            validation: (code) => {
              const hasTransition = /transition\s*:/i.test(code);
              const hasHover = /:hover/i.test(code);
              return [hasTransition, hasHover];
            },
          },
        ],
      },
    ],
    capstone: {
      id: 'capstone-4',
      title: 'The Responsive Portfolio',
      description: 'Build a fully responsive, animated personal portfolio!',
      xpReward: 750,
      badge: 'responsive-ranger',
    },
  },
  {
    id: 'world-5',
    name: "The Wizard's Tower",
    subtitle: 'Advanced CSS',
    icon: '🧙',
    color: '#8B5CF6',
    bgGradient: 'from-violet-900 to-purple-900',
    description: 'Reach the pinnacle of CSS mastery! Variables, architecture, and advanced techniques await.',
    unlocked: false,
    modules: [
      {
        id: 'module-5-1',
        name: 'CSS Variables & Architecture',
        icon: '🏗️',
        lessons: [
          {
            id: 'lesson-53',
            title: 'Custom Properties',
            type: 'guided',
            xpReward: 200,
            description: 'Harness the power of CSS variables for dynamic, maintainable styles!',
            slides: [
              {
                title: 'CSS Custom Properties (Variables)',
                content: 'CSS variables let you define reusable values that can be used throughout your stylesheet. Define them in :root for global scope:\n\n:root {\n  --primary-color: #3498db;\n  --spacing-md: 16px;\n  --border-radius: 8px;\n  --shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\nUse them with var():\nbackground: var(--primary-color);\npadding: var(--spacing-md);\n\nChange the variable once, and it updates everywhere!',
              },
              {
                title: 'Dark Mode with Variables',
                content: 'CSS variables make theming incredibly easy:\n\n:root {\n  --bg-color: #ffffff;\n  --text-color: #333333;\n  --card-bg: #f8f9fa;\n}\n\n[data-theme="dark"] {\n  --bg-color: #1a1a2e;\n  --text-color: #e0e0e0;\n  --card-bg: #16213e;\n}\n\nbody {\n  background: var(--bg-color);\n  color: var(--text-color);\n}\n\nToggle the data-theme attribute with JavaScript, and the entire site switches themes instantly!',
              },
              {
                title: 'Fallback Values & Scope',
                content: 'Variables can have fallback values:\ncolor: var(--undefined-color, #000000);\n\nVariables can be scoped to specific elements:\n\n.card {\n  --card-padding: 20px;\n  padding: var(--card-padding);\n}\n\n.card.compact {\n  --card-padding: 10px;\n  /* Automatically uses 10px! */\n}\n\nThis scoping makes components self-contained and customizable. It\'s the foundation of modern CSS architecture!',
              },
              {
                title: 'BEM Naming Convention',
                content: 'BEM (Block Element Modifier) is a naming convention that makes CSS more readable:\n\n/* Block */\n.card { }\n\n/* Element (part of block) */\n.card__title { }\n.card__image { }\n.card__body { }\n\n/* Modifier (variation) */\n.card--featured { }\n.card--dark { }\n.card__title--large { }\n\nBEM prevents naming conflicts and makes your CSS self-documenting. Combined with CSS variables, it creates a powerful, maintainable architecture!',
              },
            ],
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    :root {\n      /* Define CSS variables here */\n\n    }\n    .card {\n      /* Use your variables */\n      padding: 20px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class="card">Themed Card</div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    :root {\n      --primary: #7C3AED;\n      --text: white;\n      --radius: 12px;\n    }\n    .card {\n      background: var(--primary);\n      color: var(--text);\n      padding: 20px;\n      border-radius: var(--radius);\n    }\n  </style>\n</head>\n<body>\n  <div class="card">Themed Card</div>\n</body>\n</html>',
            objectives: [
              { id: 'obj-1', text: 'Define at least 2 CSS variables in :root', completed: false },
              { id: 'obj-2', text: 'Use var() to apply them', completed: false },
            ],
            hints: [':root { --primary: #7C3AED; }', 'background: var(--primary);'],
            validation: (code) => {
              const hasVarDef = /--[\w-]+\s*:/i.test(code);
              const hasVarUse = /var\s*\(--/i.test(code);
              return [hasVarDef, hasVarUse];
            },
          },
        ],
      },
    ],
    capstone: {
      id: 'capstone-5',
      title: 'The Ultimate Portfolio',
      description: 'Build a professional-grade portfolio with advanced CSS techniques!',
      xpReward: 1000,
      badge: 'web-wizard',
    },
  },
];

export default curriculum;
