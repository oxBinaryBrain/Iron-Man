import urllib.request
import re
import os
import urllib.parse

queries = {
    'PP-01': 'Pepper Potts MCU',
    'JR-02': 'War Machine MCU',
    'HH-03': 'Happy Hogan Jon Favreau',
    'PP-04': 'Spider-Man MCU',
    'SR-05': 'Captain America MCU'
}

os.makedirs('public/allies', exist_ok=True)

for k, v in queries.items():
    try:
        url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(v)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        match = re.search(r'src=\"//external-content\.duckduckgo\.com/iu/\?u=([^\"&]+)', html)
        if match:
            img_url = urllib.parse.unquote(match.group(1))
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(img_req) as res, open(f'public/allies/{k}.jpg', 'wb') as out:
                out.write(res.read())
            print(f"Downloaded {k}")
        else:
            print(f"No image found for {k}")
    except Exception as e:
        print(f"Failed {k}: {e}")
