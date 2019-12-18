
const puppeteer = require('puppeteer-core')
const iPhone = puppeteer.devices['iPhone XR']

puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // executablePath: '/usr/bin/google-chrome',
  ignoreHTTPSErrors : true,
  args: [
    '--no-sandbox', 
    '--disable-setuid-sandbox',
    '--user-data-dir=/tmp/puppeteer_dev_profile-yaolu-crawler',
  ],
  headless: false
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://live.kuaishou.com/u/3xqmfv5aw2mjaqk/3x736x4i579wf3u?did=web_4d3876d971e34af7926929ae0156fa00', {
    waitUntil: ['networkidle2'],
    timeout: 50000
  });
  const content = await page.content()
  console.log('content', content)
  // await browser.close();
})

