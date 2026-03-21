const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'aasw-pro');
const files = fs.readdirSync(dir);

let replaceCount = 0;

for (const file of files) {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/ADMIN PANEL/g, 'ADMIN LOGIN')
                                .replace(/Admin panel/g, 'Admin Login')
                                .replace(/Admin Panel/g, 'Admin Login');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            replaceCount++;
            console.log(`Updated ${file}`);
        }
    }
}

// Update main.js
const mainJsPath = path.join(dir, 'js', 'main.js');
if (fs.existsSync(mainJsPath)) {
    let mainJs = fs.readFileSync(mainJsPath, 'utf8');
    let newMainJs = mainJs.replace(/'ADMIN PANEL'/g, "'ADMIN LOGIN'")
                          .replace(/'एडमिन पैनल'/g, "'एडमिन लॉगिन'");
    if (mainJs !== newMainJs) {
        fs.writeFileSync(mainJsPath, newMainJs, 'utf8');
        replaceCount++;
        console.log(`Updated main.js`);
    }
}

console.log(`Done. Updated ${replaceCount} files.`);
