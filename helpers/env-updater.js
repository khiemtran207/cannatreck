const fs = require('fs');
const path = require('path');

function updateEnvFile(key, value) {
    const envPath = path.join(__dirname, '../.env');
    console.log(envPath);
    let envFile = fs.readFileSync(envPath, 'utf8');

    let lines = envFile.split('\n');
    const index = lines.findIndex(line => line.startsWith(key));

    if (index !== -1) {
        lines[index] = `${key}=${value}`;
        envFile = lines.join('\n');
        fs.writeFileSync(envPath, envFile);
    }
}

module.exports = updateEnvFile;
