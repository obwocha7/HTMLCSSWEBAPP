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
              {
                title: 'The Browser\'s Job',
                content: 'Your browser (Chrome, Firefox, Safari, Edge) is like a translator. It reads the HTML code and converts it into the visual page you see. This process is called "rendering." The browser reads your code from top to bottom, building the page as it goes. If it finds an error, it tries its best to fix it — browsers are very forgiving! But writing clean, correct HTML is still important for accessibility and SEO.',
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
                title: 'Common Editor Features',
                content: 'Professional code editors have powerful features:\n\n• Auto-completion — suggests tags as you type\n• Bracket matching — highlights matching opening/closing tags\n• Error highlighting — underlines mistakes in red\n• Indentation — keeps your code organized and readable\n• Multi-cursor — edit multiple lines at once\n\nOur editor has syntax highlighting and line numbers. As you grow, you\'ll use VS Code with even more features!',
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
                title: 'Why Structure Matters',
                content: 'HTML is all about structure. Just like a house needs a foundation before walls and a roof, your webpage needs proper structure before content. The DOCTYPE and <html> tags are that foundation. Every professional website — from Google to Netflix — starts with these exact same lines. You\'re learning the same skills that real developers use every day!',
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
              {
                title: 'Pro Tips for the Head',
                content: 'Here are essential <head> elements every page should have:\n\n• <meta charset="UTF-8"> — supports all characters (emojis too! 🎉)\n• <meta name="viewport" ...> — makes your page mobile-friendly\n• <title>Page Title</title> — shows in the browser tab and search results\n• <meta name="description" content="..."> — helps with SEO\n• <link rel="stylesheet" href="styles.css"> — connects CSS files\n\nThink of the <head> as the backstage crew — invisible but essential!',
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
              {
                title: 'Real-World Heading Example',
                content: 'Here\'s how a real blog post might use headings:\n\n<h1>How to Build a Website</h1>\n<h2>Chapter 1: Getting Started</h2>\n<h3>Installing Your Tools</h3>\n<h3>Creating Your First File</h3>\n<h2>Chapter 2: HTML Basics</h2>\n<h3>Tags and Elements</h3>\n<h3>Attributes</h3>\n\nNotice how the hierarchy creates a clear outline. Screen readers let users jump between headings to navigate quickly!',
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
                title: 'White Space Collapsing',
                content: 'HTML collapses white space — multiple spaces, tabs, and line breaks in your code are all treated as a single space in the browser. This means:\n\n"Hello     World" displays as "Hello World"\n\nThis is actually useful! It means you can format your code however you like for readability without affecting the output. To control spacing on the page, you use HTML tags and CSS.',
              },
              {
                title: 'Line Breaks with <br>',
                content: 'Need a new line without starting a new paragraph? Use the <br> tag! It\'s a self-closing tag (also called a void element) — it doesn\'t need a closing </br> tag. Use <br> for things like addresses, poems, or song lyrics where you want line breaks within the same block of text.',
              },
              {
                title: 'Horizontal Rules with <hr>',
                content: 'The <hr> tag creates a horizontal line across the page — a visual separator between sections. Like <br>, it\'s self-closing. It\'s great for separating different topics or sections of content:\n\n<p>Section one content</p>\n<hr>\n<p>Section two content</p>\n\nThe line helps readers know they\'re moving to a new topic.',
              },
              {
                title: 'Preformatted Text with <pre>',
                content: 'The <pre> tag preserves ALL white space and line breaks exactly as written in the code. It\'s perfect for displaying code snippets, ASCII art, or any text where spacing matters:\n\n<pre>\n  *\n ***\n*****\n ***\n  *\n</pre>\n\nText inside <pre> uses a monospace font by default. Combine with <code> for code blocks: <pre><code>your code here</code></pre>',
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
              {
                title: 'Inline vs. Block Elements',
                content: 'Text formatting tags are "inline" elements — they flow within a line of text without creating a new line. Block elements like <p>, <h1>, and <div> take up the full width and start on a new line.\n\nInline: <strong>, <em>, <a>, <span>, <img>\nBlock: <p>, <h1>-<h6>, <div>, <ul>, <table>\n\nUnderstanding this difference is key to controlling your page layout!',
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
              {
                title: 'Lists in the Real World',
                content: 'Lists are everywhere on the web:\n\n• Navigation menus are <ul> lists styled with CSS\n• Step-by-step tutorials use <ol> lists\n• Product features use <ul> lists\n• FAQ pages use <dl> description lists\n• Breadcrumbs are <ol> lists\n\nMastering lists is essential because they\'re one of the most commonly used HTML elements. CSS can transform a plain list into a beautiful navigation bar!',
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
              {
                title: 'Link Best Practices',
                content: 'Tips for creating great links:\n\n• Use descriptive text: "Read our guide" is better than "Click here"\n• Add rel="noopener noreferrer" with target="_blank" for security\n• Style visited links differently so users know where they\'ve been\n• Make sure links are keyboard-accessible (they are by default!)\n• Use title attribute for extra context on hover\n\nGood link text helps both users and search engines understand where the link goes.',
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
                title: 'Image Formats',
                content: 'Common image formats for the web:\n\n• JPEG (.jpg) — best for photographs, supports millions of colors, lossy compression\n• PNG (.png) — best for graphics with transparency, lossless compression\n• GIF (.gif) — supports animation, limited to 256 colors\n• SVG (.svg) — vector graphics that scale perfectly at any size\n• WebP (.webp) — modern format with better compression than JPEG/PNG\n\nChoose the right format for the job: photos → JPEG, logos → SVG or PNG, animations → GIF or video.',
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
              {
                title: 'Table Accessibility',
                content: 'Make tables accessible with these practices:\n\n• Always use <th> for header cells — screen readers announce them\n• Add scope="col" or scope="row" to <th> for clarity\n• Use <caption> to give the table a title\n• Keep tables simple — complex nested tables are hard to navigate\n• Add a summary for complex data tables\n\n<table>\n  <caption>Student Grades</caption>\n  <tr><th scope="col">Name</th><th scope="col">Grade</th></tr>\n</table>',
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
              {
                title: 'Form Validation',
                content: 'HTML5 has built-in form validation — no JavaScript needed!\n\n• required — field must be filled\n• minlength="3" — minimum characters\n• maxlength="100" — maximum characters\n• min="0" max="100" — number range\n• pattern="[A-Za-z]+" — regex pattern\n• type="email" — validates email format\n\n<input type="email" required placeholder="your@email.com">\n\nThe browser shows error messages automatically when validation fails. This improves user experience and data quality!',
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
      slides: [
        {
          title: '🏆 Capstone: My Personal Homepage',
          content: 'Welcome to your first capstone project! You\'ll build a complete personal homepage from scratch using everything you\'ve learned in World 1. This page will have a navigation menu, an about section with headings and paragraphs, an image, a list of your skills/hobbies, and a contact form. Let\'s build it step by step!',
        },
        {
          title: 'Step 1: Page Structure',
          content: 'Start with the complete HTML skeleton:\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Homepage</title>\n</head>\n<body>\n  <!-- Navigation will go here -->\n  <!-- About section -->\n  <!-- Skills list -->\n  <!-- Contact form -->\n</body>\n</html>\n\nThis is your foundation. Every section will be added inside the <body>.',
        },
        {
          title: 'Step 2: Navigation & About',
          content: 'Add a navigation section with anchor links, then your about section:\n\n<h1>Welcome to My Homepage!</h1>\n<nav>\n  <a href="#about">About</a> |\n  <a href="#skills">Skills</a> |\n  <a href="#contact">Contact</a>\n</nav>\n<hr>\n<h2 id="about">About Me</h2>\n<p>Write a paragraph about yourself — who you are, what you love, and what you\'re learning!</p>\n<img src="https://via.placeholder.com/300x200" alt="My photo">',
        },
        {
          title: 'Step 3: Skills List & Contact Form',
          content: 'Add your skills as a list and a contact form:\n\n<h2 id="skills">My Skills</h2>\n<ul>\n  <li>HTML</li>\n  <li>Problem Solving</li>\n  <li>Creativity</li>\n</ul>\n\n<h2 id="contact">Contact Me</h2>\n<form>\n  <label for="name">Name:</label><br>\n  <input type="text" id="name" required><br>\n  <label for="email">Email:</label><br>\n  <input type="email" id="email" required><br>\n  <label for="msg">Message:</label><br>\n  <textarea id="msg" rows="4"></textarea><br>\n  <button type="submit">Send</button>\n</form>',
        },
        {
          title: 'Step 4: Polish & Submit! 🎉',
          content: 'Review your page and make sure it has:\n\n✅ Proper HTML structure (DOCTYPE, html, head, body)\n✅ A title in the <head>\n✅ Navigation links that jump to sections\n✅ An about section with heading, paragraph, and image\n✅ A skills list (ordered or unordered)\n✅ A contact form with inputs and a button\n\nClick "Run Code" to see your complete homepage! You\'ve mastered HTML fundamentals — you\'re ready for CSS!',
        },
      ],
      starterCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Homepage</title>\n</head>\n<body>\n  <!-- Build your personal homepage here! -->\n  <!-- Include: navigation, about section, skills list, contact form -->\n\n</body>\n</html>',
      solution: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Homepage</title>\n</head>\n<body>\n  <h1>My Homepage</h1>\n  <nav>\n    <a href="#about">About</a> |\n    <a href="#skills">Skills</a> |\n    <a href="#contact">Contact</a>\n  </nav>\n  <hr>\n  <h2 id="about">About Me</h2>\n  <p>I am learning web development at CodeQuest Academy!</p>\n  <img src="https://via.placeholder.com/300x200" alt="My photo">\n  <h2 id="skills">My Skills</h2>\n  <ul>\n    <li>HTML</li>\n    <li>Problem Solving</li>\n    <li>Creativity</li>\n  </ul>\n  <h2 id="contact">Contact Me</h2>\n  <form>\n    <label for="name">Name:</label><br>\n    <input type="text" id="name"><br>\n    <label for="email">Email:</label><br>\n    <input type="email" id="email"><br>\n    <button type="submit">Send</button>\n  </form>\n</body>\n</html>',
      objectives: [
        { id: 'obj-1', text: 'Create navigation with anchor links', completed: false },
        { id: 'obj-2', text: 'Add an about section with heading, paragraph, and image', completed: false },
        { id: 'obj-3', text: 'Add a skills list', completed: false },
        { id: 'obj-4', text: 'Add a contact form with inputs', completed: false },
      ],
      validation: (code) => {
        const hasNav = /<a[^>]+href=["']#/i.test(code);
        const hasAbout = /<h[1-6][^>]*>[\s\S]*<\/h[1-6]>[\s\S]*<p>/i.test(code);
        const hasList = /<[uo]l>[\s\S]*<li>/i.test(code);
        const hasForm = /<form>[\s\S]*<input/i.test(code);
        return [hasNav, hasAbout, hasList, hasForm];
      },
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
                title: 'The Cascade Explained',
                content: 'The "Cascading" in CSS means styles flow downward and can be overridden. When multiple rules target the same element, the browser uses these rules to decide which wins:\n\n1. Importance (!important — avoid using this)\n2. Specificity (ID > Class > Element)\n3. Source order (last rule wins if specificity is equal)\n\nThis cascade is what makes CSS powerful — you can set general styles and then override specific ones as needed.',
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
                title: 'Pseudo-classes',
                content: 'Pseudo-classes target elements in a specific STATE:\n\n• :hover — when mouse is over the element\n• :focus — when element is focused (clicked/tabbed)\n• :first-child — first child of its parent\n• :last-child — last child of its parent\n• :nth-child(2) — second child\n• :nth-child(odd) — odd-numbered children\n\na:hover { color: red; }\ninput:focus { border-color: blue; }\n\nThese are essential for interactive, dynamic-feeling designs!',
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
                title: 'HSL — The Designer\'s Choice',
                content: 'HSL stands for Hue, Saturation, Lightness:\n\n• Hue: 0-360 degrees on the color wheel (0=red, 120=green, 240=blue)\n• Saturation: 0%-100% (0%=gray, 100%=vivid)\n• Lightness: 0%-100% (0%=black, 50%=normal, 100%=white)\n\nhsl(270, 80%, 50%) = vivid purple\n\nHSL is intuitive for designers because you can easily create color variations by adjusting just one value. Want a lighter shade? Increase lightness. Want a muted tone? Decrease saturation.',
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
              {
                title: 'Display Property',
                content: 'The display property controls how an element behaves in the layout:\n\n• display: block — takes full width, starts on new line (div, p, h1)\n• display: inline — flows with text, no width/height (span, a, strong)\n• display: inline-block — inline but accepts width/height\n• display: none — completely hidden\n\nUnderstanding display is crucial for controlling layout. Later you\'ll learn display: flex and display: grid — the most powerful layout tools!',
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
      slides: [
        {
          title: '🎨 Capstone: My Styled Portfolio',
          content: 'Time to make your homepage beautiful! In this capstone, you\'ll take a plain HTML page and transform it with CSS. You\'ll apply colors, fonts, spacing, borders, and backgrounds to create a professional-looking portfolio page. This project uses everything from World 2!',
        },
        {
          title: 'Step 1: Base Styles',
          content: 'Start by setting up your base styles in a <style> tag:\n\n<style>\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body {\n    font-family: Arial, sans-serif;\n    background-color: #1a1a2e;\n    color: #e0e0e0;\n    line-height: 1.6;\n    padding: 20px;\n  }\n</style>\n\nThis CSS reset removes default margins and sets a dark theme with readable text.',
        },
        {
          title: 'Step 2: Style the Header & Navigation',
          content: 'Make your header stand out with a gradient and styled navigation:\n\nh1 {\n  color: #7C3AED;\n  text-align: center;\n  font-size: 2.5em;\n  margin-bottom: 10px;\n}\nnav {\n  text-align: center;\n  padding: 10px;\n  background: #16213e;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\nnav a {\n  color: #06D6A0;\n  text-decoration: none;\n  margin: 0 15px;\n}\nnav a:hover { color: #FFD166; }',
        },
        {
          title: 'Step 3: Style Sections & Form',
          content: 'Add card-like styling to your sections:\n\n.section {\n  background: #16213e;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #333;\n  margin-bottom: 20px;\n}\n\nStyle your form inputs:\n\ninput, textarea {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0;\n  background: #1a1a2e;\n  border: 1px solid #444;\n  border-radius: 6px;\n  color: white;\n}\nbutton {\n  background: #7C3AED;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\nbutton:hover { background: #6D28D9; }',
        },
        {
          title: 'Step 4: Final Touches! ✨',
          content: 'Add finishing touches:\n\n✅ Consistent color scheme (use 3-4 colors max)\n✅ Proper spacing with padding and margin\n✅ Rounded corners with border-radius\n✅ Hover effects on links and buttons\n✅ A dark or light theme that looks professional\n\nYour portfolio should look polished and intentional. Every CSS property you\'ve learned comes together here. You\'re now a CSS stylist!',
        },
      ],
      starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Add your CSS theme here */\n\n  </style>\n</head>\n<body>\n  <h1>My Portfolio</h1>\n  <nav>\n    <a href="#about">About</a>\n    <a href="#skills">Skills</a>\n    <a href="#contact">Contact</a>\n  </nav>\n  <h2 id="about">About Me</h2>\n  <p>I am a web developer in training!</p>\n  <h2 id="skills">Skills</h2>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n  </ul>\n  <h2 id="contact">Contact</h2>\n  <form>\n    <input type="text" placeholder="Name">\n    <input type="email" placeholder="Email">\n    <button>Send</button>\n  </form>\n</body>\n</html>',
      solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; }\n    body { font-family: Arial, sans-serif; background: #1a1a2e; color: #e0e0e0; padding: 20px; }\n    h1 { color: #7C3AED; text-align: center; }\n    nav { text-align: center; padding: 10px; background: #16213e; border-radius: 8px; margin: 10px 0; }\n    nav a { color: #06D6A0; text-decoration: none; margin: 0 10px; }\n    h2 { color: #06D6A0; border-bottom: 2px solid #333; padding-bottom: 5px; margin: 20px 0 10px; }\n    input, textarea { width: 100%; padding: 8px; margin: 5px 0; background: #16213e; border: 1px solid #444; border-radius: 6px; color: white; }\n    button { background: #7C3AED; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <h1>My Portfolio</h1>\n  <nav><a href="#about">About</a> <a href="#skills">Skills</a> <a href="#contact">Contact</a></nav>\n  <h2 id="about">About Me</h2>\n  <p>I am a web developer in training!</p>\n  <h2 id="skills">Skills</h2>\n  <ul><li>HTML</li><li>CSS</li></ul>\n  <h2 id="contact">Contact</h2>\n  <form><input type="text" placeholder="Name"><input type="email" placeholder="Email"><button>Send</button></form>\n</body>\n</html>',
      objectives: [
        { id: 'obj-1', text: 'Style the body with background color and font', completed: false },
        { id: 'obj-2', text: 'Style headings and navigation links', completed: false },
        { id: 'obj-3', text: 'Style form inputs and button', completed: false },
      ],
      validation: (code) => {
        const hasBodyStyle = /body\s*\{[^}]*background/i.test(code);
        const hasHeadingStyle = /h[12]\s*\{[^}]*color/i.test(code);
        const hasInputStyle = /input[^{]*\{[^}]*padding/i.test(code);
        return [hasBodyStyle, hasHeadingStyle, hasInputStyle];
      },
    },
  },
