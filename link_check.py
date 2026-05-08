"""kinia.io internal link checker — run before git push"""
import re, os, sys, glob
from urllib.parse import urlparse

base = os.path.dirname(os.path.abspath(__file__))
skip_files = {"index_old.html", "index_v2.html"}
broken = []
checked = 0

for filepath in sorted(glob.glob(os.path.join(base, "*.html"))):
    fname = os.path.basename(filepath)
    if fname in skip_files:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    for m in re.finditer(r'href="([^"]*)"', content):
        href = m.group(1)
        if not href or href.startswith(("#", "http://", "https://", "mailto:", "tel:", "javascript:")):
            continue
        parsed = urlparse(href)
        path = parsed.path.lstrip("/")
        if not path:
            continue
        target = os.path.join(base, path.replace("/", os.sep))
        checked += 1
        if not os.path.exists(target):
            line_num = content[:m.start()].count("\n") + 1
            broken.append((fname, line_num, href))

if broken:
    print(f"BROKEN LINKS FOUND ({len(broken)}):\n")
    for fname, line, href in broken:
        print(f"  {fname}:{line}  ->  {href}")
    sys.exit(1)
else:
    print(f"All clear. {checked} internal links checked across {len(glob.glob(os.path.join(base, '*.html')))} files.")
    sys.exit(0)
