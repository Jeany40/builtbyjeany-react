import re
import os
import base64
import mimetypes

def main():
    os.makedirs('public/images', exist_ok=True)
    with open('template.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Regex to find src="data:image/xyz;base64,....."
    pattern = re.compile(r'(src|href)=["\']data:(image/[a-zA-Z0-9]+);base64,([^"\']+)["\']')
    
    count = 1
    def replacer(match):
        nonlocal count
        attr = match.group(1)
        mime = match.group(2)
        b64_data = match.group(3)
        
        ext = mimetypes.guess_extension(mime) or '.png'
        if ext == '.jpe': ext = '.jpg'
        
        filename = f"extracted_{count}{ext}"
        filepath = os.path.join('public', 'images', filename)
        
        with open(filepath, 'wb') as img_f:
            img_f.write(base64.b64decode(b64_data))
            
        print(f"Saved {filepath}")
        count += 1
        return f'{attr}="/images/{filename}"'

    new_html = pattern.sub(replacer, html)
    
    with open('template.html', 'w', encoding='utf-8') as f:
        f.write(new_html)

if __name__ == '__main__':
    main()
