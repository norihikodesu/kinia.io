"""kinia.io internal link checker — run before git push"""
import re, os, sys, glob
from urllib.parse import urlparse

base = os.path.dirname(os.path.abspath(__file__))
skip_files = {"index_old.html", "index_v2.html"}
broken = []
checked = 0

# --- helper: collect id attributes from an HTML file ---
def get_ids(filepath):
    if not os.path.exists(filepath):
        return set()
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    return set(re.findall(r'id="([^"]+)"', content))

# Pre-load index.html IDs (used for /#xxx anchors)
index_ids = get_ids(os.path.join(base, "index.html"))

# --- helper: check one href (file existence + optional anchor) ---
def check_href(source_name, line_num, href):
    global checked
    parsed = urlparse(href)
    path = parsed.path
    fragment = parsed.fragment

    # Resolve path to filesystem target
    if path == "/" or path == "":
        # Root path — maps to index.html
        target_file = os.path.join(base, "index.html")
        ids = index_ids
    else:
        clean = path.lstrip("/")
        target_file = os.path.join(base, clean.replace("/", os.sep))
        ids = None  # load on demand

    checked += 1

    # File existence check
    if not os.path.exists(target_file):
        broken.append((source_name, line_num, href))
        return

    # Anchor check
    if fragment:
        if ids is None:
            ids = get_ids(target_file)
        if fragment not in ids:
            broken.append((source_name, line_num, href + "  [anchor not found]"))

# --- 1. Check HTML files ---
for filepath in sorted(glob.glob(os.path.join(base, "*.html"))):
    fname = os.path.basename(filepath)
    if fname in skip_files:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    for m in re.finditer(r'href="([^"]*)"', content):
        href = m.group(1)
        if not href or href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
            continue
        parsed = urlparse(href)
        path = parsed.path
        fragment = parsed.fragment
        # Pure same-page anchors (#xxx with no path) — skip
        if not path and fragment:
            continue
        line_num = content[:m.start()].count("\n") + 1
        check_href(fname, line_num, href)

# --- 2. Check nav.js ---
nav_path = os.path.join(base, "nav.js")
if os.path.exists(nav_path):
    with open(nav_path, "r", encoding="utf-8") as f:
        nav_content = f.read()
    for m in re.finditer(r'href="([^"]*)"', nav_content):
        href = m.group(1)
        if not href or href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
            continue
        parsed = urlparse(href)
        path = parsed.path
        fragment = parsed.fragment
        # Pure same-page anchors — skip
        if not path and fragment:
            continue
        line_num = nav_content[:m.start()].count("\n") + 1
        check_href("nav.js", line_num, href)

if broken:
    print(f"BROKEN LINKS FOUND ({len(broken)}):\n")
    for fname, line, href in broken:
        print(f"  {fname}:{line}  ->  {href}")
    sys.exit(1)
else:
    html_count = len([f for f in glob.glob(os.path.join(base, "*.html"))
                      if os.path.basename(f) not in skip_files])
    print(f"All clear. {checked} internal links checked across {html_count} HTML files + nav.js.")
    sys.exit(0)
