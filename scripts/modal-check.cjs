const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_PATH});
 const page=await browser.newPage({reducedMotion:'reduce'});
 const results=[];
 for(const [width,height] of [[1440,900],[1440,700],[768,1024],[390,844]]){
  await page.setViewportSize({width,height});await page.goto('http://localhost:5173/our-team');await page.evaluate(()=>document.fonts.ready);
  for(const member of ['sosa','condino','ursulum','liquido']){
   const trigger=page.getByRole('button',{name:new RegExp('View profile.*'+member,'i')});await trigger.click();
   await page.locator('dialog img').evaluate(i=>i.decode());
   const inspect=()=>page.evaluate(()=>{
    const d=document.querySelector('dialog'),c=d.querySelector('.modal-close'),s=d.querySelector('.profile-modal-content'),p=d.querySelector('.profile-portrait'),b=d.querySelector('.profile-biography');
    const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}};
    return {dialog:rect(d),close:rect(c),portrait:rect(p),bio:rect(b),scroll:s.scrollHeight>s.clientHeight,overflow:s.scrollWidth>s.clientWidth||document.documentElement.scrollWidth>innerWidth,bodyLocked:document.body.style.overflow==='hidden'};
   });
   const top=await inspect();const d=top.dialog;
   if(d.x<-.5||d.y<-.5||d.right>width+.5||d.bottom>height+.5||top.overflow||!top.bodyLocked)throw Error(JSON.stringify({member,width,height,top}));
   if(width>480&&(Math.abs(d.x+d.width/2-width/2)>1||Math.abs(d.y+d.height/2-height/2)>1))throw Error('Not centered');
   if(width>=900&&top.bio.x<top.portrait.right)throw Error('Text under portrait');
   const suffix=height===700?'1440-700':String(width);
   await page.screenshot({path:`artifacts/fidelity/modal-${member}-${suffix}.png`});
   await page.locator('.profile-modal-content').evaluate(e=>e.scrollTop=e.scrollHeight);
   const bottom=await inspect();if(bottom.close.y<0||bottom.close.bottom>height||JSON.stringify(bottom.close)!==JSON.stringify(top.close))throw Error('Close button moved');
   await page.screenshot({path:`artifacts/fidelity/modal-${member}-${suffix}-scrolled.png`});
   await page.keyboard.press('Escape');if(await page.locator('dialog').count())throw Error('Escape failed');
   if(!await trigger.evaluate(e=>document.activeElement===e&&document.body.style.overflow!=='hidden'))throw Error('Focus/scroll restore failed');
   await trigger.click();await page.getByRole('button',{name:'Close profile',exact:true}).click();
   if(width>480){await trigger.click();await page.mouse.click(4,4);if(await page.locator('dialog').count())throw Error('Backdrop failed')}
   results.push({member,width,height,top,bottom});
  }
  console.log(`PASS all members at ${width}x${height}`);
 }
 fs.writeFileSync('artifacts/fidelity/modal-validation.json',JSON.stringify({results,checks:'Viewport containment, desktop centering, overflow, scroll-stable close button, focus restoration, body scroll lock, Escape, close button and backdrop dismissal passed'},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
