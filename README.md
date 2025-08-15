# file-organizer
Organizing files automatically

# Clear the Clutter 🗂️

A simple Node.js script that automatically organizes files in a folder by their extension.  
It scans all files in a given directory, creates subfolders for each file type, and moves the files into their respective folders.  
Great for cleaning up messy download folders, desktop clutter, or project directories.

---

## NOTE
- Clone this code main.js in the same folder as the other files

## Features ✨
- Automatically detects file extensions.
- Creates folders for each file type (e.g., `.jpg`, `.pdf`, `.txt`).
- Handles files without extensions (places them in a `no_extension` folder).
- Moves files into the correct folder in just one run.
- Works entirely offline — no extra dependencies required.

## Example 📂

**Before running:**
```
files/
├── photo.jpg
├── resume.pdf
├── notes.txt
└── script.js
```

**After running:**
```
files/
├── jpg/
│ └── photo.jpg
├── pdf/
│ └── resume.pdf
├── txt/
│ └── notes.txt
└── js/
└── script.js
```
