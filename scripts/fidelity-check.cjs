/* Run with PLAYWRIGHT_MODULE pointing to an installed Playwright module. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');
const base=process.env.FIDELITY_URL || 'http://localhost:4001';
const primary={home:'/',about:'/about',services:'/services',team:'/our-team',clients:'/our-clients',contact:'/contact'};
const routes=[...Object.values(primary),'technical-advisory-consultancy','technical-training-canopy','aircraft-check-management','fleet-technical-management-camo','aircraft-records-review-buildup','aircraft-inspections-audit','aircraft-delivery-redelivery'].map(r=>r.startsWith('/')?r:'/services/'+r);
(async()=>{
 fs.mkdirSync('artifacts/fidelity',{recursive:true});
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({reducedMotion:'reduce'});const errors=[];const results=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const route of routes){
   await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
   await page.evaluate(async()=>{for(const i of document.images){i.loading='eager';await i.decode().catch(()=>{})}});
   await page.waitForTimeout(100);
   const result=await page.evaluate(()=>({heading:document.querySelector('h1')?.textContent,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src)}));
   results.push({width,route,...result});if(!result.heading||result.overflow||result.broken.length)throw Error(JSON.stringify(results.at(-1)));
   const name=Object.keys(primary).find(n=>primary[n]===route)||route.split('/').at(-1);
   await page.screenshot({path:`artifacts/fidelity/${name}-${width}.png`,fullPage:true});
  }
  console.log('PASS 13 routes at '+width);
 }
 await page.goto(base+'/our-team');
 for(const name of ['DARMILO','ENRICO','SHEALTIEL','BILLY']){
  await page.getByRole('button',{name:new RegExp('View profile of ENGR. '+name)}).click();
  if(!await page.getByRole('dialog').isVisible())throw Error('No dialog for '+name);
  if(!await page.locator('dialog .profile-portrait').evaluate(i=>i.naturalWidth>0))throw Error('Missing modal portrait');
  if((await page.locator('dialog').innerText()).length<300)throw Error('Missing biography');
  await page.keyboard.press('Escape');
 }
 await page.goto(base+'/contact');await page.getByRole('button',{name:'PREPARE MESSAGE'}).click();
 if(await page.locator('[name=fullName]').getAttribute('aria-invalid')!=='true')throw Error('Missing form validation');
 for(const [name,value] of Object.entries({fullName:'QA Reviewer',company:'QA Company',email:'qa@example.com',message:'Test inquiry'}))await page.locator(`[name=${name}]`).fill(value);
 await page.locator('[name=service]').selectOption('General Inquiry');await page.getByRole('button',{name:'PREPARE MESSAGE'}).click();
 if(!await page.getByText('YOUR INQUIRY IS READY').isVisible())throw Error('No honest draft state');
 await page.setViewportSize({width:390,height:844});await page.goto(base+'/');await page.getByRole('button',{name:'Open navigation'}).click();await page.keyboard.press('Escape');if(await page.locator('#mobile-menu').count())throw Error('Menu not dismissed');
 if(errors.length)throw Error(JSON.stringify(errors));
 fs.writeFileSync('artifacts/fidelity/validation.json',JSON.stringify({base,results,consoleErrors:errors,interactions:'Four biographies and portraits, Escape dismissal, mobile menu, required fields, email draft: passed'},null,2));
 await browser.close();console.log('PASS interactions and zero console errors');
})().catch(e=>{console.error(e);process.exit(1)});
