"""Place the final desktop capture beside the authoritative concept mockup."""
from PIL import Image, ImageDraw
from pathlib import Path
root=Path(__file__).resolve().parents[1]
for name,reference in {'home':'homepage','about':'about us','services':'services','team':'our team','clients':'our client','contact':'contact us'}.items():
 images=[]
 for path in [root/'artifacts/fidelity'/f'{name}-1440.png',root/'design-reference/concept-mockups'/f'{reference}.png']:
  im=Image.open(path).convert('RGB');im=im.resize((720,round(im.height*720/im.width)),Image.Resampling.LANCZOS);images.append(im)
 canvas=Image.new('RGB',(1460,max(im.height for im in images)+50),'#e9edf3');d=ImageDraw.Draw(canvas)
 for i,(label,im) in enumerate(zip(['IMPLEMENTATION / 1440 PX','SUPPLIED CONCEPT / LAYOUT REFERENCE'],images)):
  x=i*740;d.text((x+12,18),label,fill='#1b2a66');canvas.paste(im,(x,50))
 canvas.save(root/'artifacts/fidelity'/f'{name}-comparison.png')
