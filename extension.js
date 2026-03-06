const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    // Command: Insert Full HTML5 with Social Meta & Schema
    const insertHTMLDisposable = vscode.commands.registerCommand('HTML5.insertHTML', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const snippet = new vscode.SnippetString(`<!DOCTYPE html>
<html lang="\${1:en}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>\${2:Page Title}</title>
    <meta name="title" content="\${2:Page Title}">
    <meta name="description" content="\${3:150 words description}">
    <meta name="keywords" content="\${4:keywords, here}">
    <meta name="author" content="\${5:Your Name}">

    <meta property="og:type" content="website">
    <meta property="og:url" content="\${6:https://website.com/}">
    <meta property="og:title" content="\${2:Page Title}">
    <meta property="og:description" content="\${3:150 words description}">
    <meta property="og:image" content="\${7:https://website.com/image.png}">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="\${6:https://website.com/}">
    <meta property="twitter:title" content="\${2:Page Title}">
    <meta property="twitter:description" content="\${3:150 words description}">
    <meta property="twitter:image" content="\${7:https://website.com/image.png}">

    <script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": "\${2:Page Title}",
        "url": "\${6:https://website.com/}",
        "description": "\${3:150 words description}"
    }
    </script>
</head>
<body>
    $0
</body>
</html>`);
            editor.insertSnippet(snippet);
        }
    });

    // Command: Insert Blog Page with Article Schema
    const insertBlogPageDisposable = vscode.commands.registerCommand('HTML5.insertBlogPage', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const snippet = new vscode.SnippetString(`<!DOCTYPE html>
<html lang="\${1:en}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>\${2:Blog Post Title}</title>
    <meta name="description" content="\${3:Blog summary}">

    <meta property="og:title" content="\${2:Blog Post Title}">
    <meta property="og:description" content="\${3:Blog summary}">
    <meta property="twitter:title" content="\${2:Blog Post Title}">

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "\${2:Blog Post Title}",
        "image": "\${4:https://website.com/blog-image.png}",
        "author": {
            "@type": "Person",
            "name": "\${5:Author Name}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "\${6:Publisher Name}"
        },
        "datePublished": "\${CURRENT_YEAR}-\${CURRENT_MONTH}-\${CURRENT_DATE}"
    }
    </script>
</head>
<body>
    <h1>\${2:Blog Post Title}</h1>
    <p>By \${5:Author Name}</p>
    $0
</body>
</html>`);
            editor.insertSnippet(snippet);
        }
    });

    context.subscriptions.push(insertHTMLDisposable, insertBlogPageDisposable);
}

function deactivate() {}

module.exports = { activate, deactivate };