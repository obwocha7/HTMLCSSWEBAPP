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
              { title: 'The Web is Everywhere!', content: 'Every website you visit — from YouTube to Google — is built with code. And today, YOU start learning how to build them!' },
              { title: 'How Websites Work', content: 'When you type a web address, your browser asks a server for files. Those files contain HTML (the structure), CSS (the style), and JavaScript (the behavior).' },
              { title: 'HTML = The Skeleton', content: 'HTML is like the skeleton of a website. It tells the browser WHAT to show — headings, paragraphs, images, links, and more!' },
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
              { title: 'Your Code Editor', content: 'On the left, you write code. On the right, you see the result. It\'s like magic — type something and watch it appear!' },
              { title: 'Try It!', content: 'Type anything in the editor. Your name, a message, anything! Then click Run to see it appear in the preview.' },
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
              { title: 'The DOCTYPE Spell', content: 'Every HTML file starts with a special declaration: <!DOCTYPE html>. This tells the browser "Hey, this is an HTML5 document!"' },
              { title: 'The HTML Tag', content: 'After DOCTYPE, everything goes inside <html> and </html> tags. Think of it as the container for your entire webpage.' },
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
              { title: 'Two Sections', content: 'Inside <html>, there are two sections: <head> (invisible info like the page title) and <body> (everything you see on the page).' },
              { title: 'The Head', content: 'The <head> contains metadata — information ABOUT the page. The most common is <title>, which sets the text in the browser tab.' },
              { title: 'The Body', content: 'The <body> is where all the visible content goes — text, images, links, everything the user sees!' },
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
            title: 'Mini-Project: My Name Card',
            type: 'challenge',
            xpReward: 200,
            description: 'Build your very first complete webpage — a personal name card!',
            slides: [
              { title: 'Your First Project!', content: 'Time to put it all together! Create a complete HTML page with a heading that shows your name and a paragraph about yourself.' },
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
              { title: 'Heading Hierarchy', content: 'HTML has 6 heading levels: <h1> is the biggest and most important, <h6> is the smallest. Think of them like a book outline!' },
              { title: 'When to Use Each', content: '<h1> = Main title (use only once per page), <h2> = Section titles, <h3> = Sub-sections, and so on.' },
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
              { title: 'Paragraphs', content: 'The <p> tag creates a paragraph. Browsers automatically add space between paragraphs.' },
              { title: 'Line Breaks', content: 'Need a new line without a new paragraph? Use <br> — it\'s a self-closing tag (no </br> needed)!' },
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
              { title: 'Making Text Stand Out', content: '<strong> makes text bold (important), <em> makes text italic (emphasized). There\'s also <b> and <i> for visual-only styling.' },
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
              { title: 'Two Types of Lists', content: '<ul> creates bullet points (unordered list), <ol> creates numbered lists (ordered list). Each item goes in an <li> tag.' },
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
              { title: 'The Anchor Tag', content: 'The <a> tag creates links. The href attribute tells the browser WHERE to go: <a href="url">Click me</a>' },
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
              { title: 'The Image Tag', content: '<img> is a self-closing tag. It needs src (the image URL) and alt (description for accessibility): <img src="url" alt="description">' },
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
              { title: 'Building Tables', content: '<table> wraps the whole table. <tr> creates a row. <th> creates a header cell. <td> creates a data cell.' },
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
              { title: 'Forms', content: '<form> wraps form elements. <input> creates text fields, checkboxes, etc. <button> creates clickable buttons. <label> describes each input.' },
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
              { title: 'CSS = Style', content: 'CSS (Cascading Style Sheets) controls how HTML looks. Colors, fonts, sizes, spacing — all CSS!' },
              { title: 'Three Ways to Add CSS', content: 'Inline: style attribute. Internal: <style> tag in head. External: separate .css file (best practice!).' },
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
              { title: 'CSS Selectors', content: 'Element selector: h1 { }. Class selector: .myclass { }. ID selector: #myid { }. Classes are reusable, IDs are unique!' },
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
              { title: 'Color Formats', content: 'CSS supports: color names (red, blue), hex (#FF0000), RGB (rgb(255,0,0)), and HSL (hsl(0,100%,50%)).' },
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
              { title: 'Every Element is a Box', content: 'Content → Padding (space inside) → Border (the edge) → Margin (space outside). This is the CSS Box Model!' },
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
              { title: 'Flexbox', content: 'Add display: flex to a container, and its children become flex items. They line up in a row by default!' },
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
              { title: 'CSS Grid', content: 'display: grid creates a grid container. Use grid-template-columns to define columns!' },
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
              { title: 'Responsive Design', content: '@media queries let you apply different styles based on screen size. Mobile-first means starting with small screens!' },
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
              { title: 'Transitions', content: 'The transition property smoothly animates changes. Add it to an element, then change a property on :hover!' },
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
              { title: 'CSS Variables', content: 'Define with --name: value in :root. Use with var(--name). Change once, update everywhere!' },
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
