from PIL import Image
import os

for file in os.listdir():
    if 'work' in file:
        im = Image.open(file)
        width, height = im.size
        out = im.resize((int(width/6), int(height/6)))
        out = out.convert("RGB")
        out.save(file.replace('.png', '') + '_thumbnail' +'.png')