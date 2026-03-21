const fs = require('fs');
const { execSync } = require('child_process');

try {
    require.resolve('html-minifier-terser');
} catch (e) {
    execSync('npm install html-minifier-terser clean-css terser', { stdio: 'inherit' });
}

const { minify: minifyHtml } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const { minify: minifyJs } = require('terser');

async function processFiles() {
    // Update HTML with webp images and minified resources
    let html = fs.readFileSync('index.html', 'utf8');
    html = html.replace(/\.jpg/g, '.webp');
    // Combine CSS files
    let css1 = fs.readFileSync('css/style.css', 'utf8');
    css1 = css1.replace(/\.jpg/g, '.webp');
    let css2 = fs.existsSync('css/premium.css') ? fs.readFileSync('css/premium.css', 'utf8') : '';
    css2 = css2.replace(/\.jpg/g, '.webp');

    // Update HTML file references
    html = html.replace(/<link rel="stylesheet" href="css\/style\.css" \/>\s*<link rel="stylesheet" href="css\/premium\.css" \/>/, '<link rel="stylesheet" href="css/style.min.css" />');
    html = html.replace(/<script src="js\/main\.js"><\/script>/, '<script src="js/main.min.js"></script>');

    // Minify CSS
    const minifiedCss = new CleanCSS({}).minify(css1 + '\n' + css2).styles;
    fs.writeFileSync('css/style.min.css', minifiedCss);

    // Minify JS
    let js = fs.readFileSync('js/main.js', 'utf8');
    const minifiedJs = await minifyJs(js);
    fs.writeFileSync('js/main.min.js', minifiedJs.code);

    // Minify HTML
    const resultHtml = await minifyHtml(html, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
    });
    fs.writeFileSync('index.html', resultHtml);

    console.log('Minification and combination complete.');
}

processFiles().catch(console.error);
