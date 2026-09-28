"""Reproduce logo exports from client-supplied transparent artwork (Pillow)."""
from pathlib import Path
from PIL import Image
root = Path(__file__).resolve().parents[1] / 'public/images'
partners = {
 'cebu-pacific': (0,20,450,285), 'airasia': (465,20,840,285),
 'philippine-airlines': (850,20,1435,285), 'air-niugini': (1440,20,1694,285),
 'bbam': (0,305,400,510), 'carlyle': (402,305,915,510),
 'castlelake': (917,305,1315,510), 'eirtech': (1320,305,1694,510),
 'asbaa': (200,525,445,755), 'dviation': (495,525,980,755), 'nac': (1030,525,1510,755),
 'calc': (0,785,540,1055), 'jet-midwest': (550,785,980,1055),
 'dp': (1000,785,1230,1055), 'eccp': (1250,785,1694,1055),
 'aerobox': (0,1070,485,1285), 'canopy': (495,1070,1045,1285), 'cga': (1070,1070,1694,1285),
}
universities = {'holy-angel':(0,0,610,536),'naap':(630,0,1015,536),'perpetual':(1030,0,1850,536),'fdsa':(1870,0,2330,536),'patts':(2350,0,2856,536)}
for sheet, regions in [('partners-sheet.png',partners),('universities-sheet.png',universities)]:
 image = Image.open(root/'source'/sheet).convert('RGBA')
 for name, box in regions.items():
  crop=image.crop(box)
  # Ignore nearly transparent sheet noise when finding the visible artwork.
  bounds=crop.getchannel('A').point(lambda alpha: 255 if alpha > 8 else 0).getbbox()
  if bounds: crop=crop.crop(bounds)
  crop.thumbnail((1000,500),Image.Resampling.LANCZOS)
  # Replace atomically so a running preview never reads a partial WebP.
  temporary=root/f'{name}.tmp.webp'
  crop.save(temporary,quality=95,method=6)
  temporary.replace(root/f'{name}.webp')
