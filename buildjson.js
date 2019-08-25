const fs = require('fs').promises;
(async () => {
  try {
    const data = await fs.readFile('./wordlist-lv.txt', 'utf8');
    const result = JSON.stringify(data.split('\n'));
    await fs.writeFile('./wordlist-lv.json', result, 'utf8');
  } catch (err) {
    console.error(err);
  }
})();
