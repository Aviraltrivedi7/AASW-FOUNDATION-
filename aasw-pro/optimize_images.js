const fs = require('fs');
const { execSync } = require('child_process');

try {
    require.resolve('sharp');
} catch (e) {
    execSync('npm install sharp', { stdio: 'inherit' });
}
const sharp = require('sharp');

async function processImages() {
    const images = fs.readdirSync('images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    for (let file of images) {
        const isFavicon = file === 'favicon.png';
        const name = file.substring(0, file.lastIndexOf('.'));
        const inputPath = 'images/' + file;

        if (isFavicon) {
            // Resize and compress favicon
            await sharp(inputPath)
                .resize(32, 32)
                .png({ quality: 80, compressionLevel: 9 })
                .toFile('images/favicon-temp.png');
            fs.unlinkSync(inputPath);
            fs.renameSync('images/favicon-temp.png', inputPath);
            console.log('Processed favicon.png');
        } else {
            // Convert to webp
            const outPath = 'images/' + name + '.webp';
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outPath);
            fs.unlinkSync(inputPath);
            console.log('Converted', file, 'to webp');
        }
    }
}

processImages().catch(console.error);
