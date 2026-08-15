import json
import datetime

# Load seo-content.json
with open('data/seo-content.json', 'r') as f:
    data = json.load(f)

for blog in data['blogs']:
    if blog['slug'] == "military-to-civilian-resume-guide-2026":
        blog['title'] = "Military to Civilian Resume Guide 2026"
        blog['description'] = "Transitioning from the military to a civilian career requires translating your service experience into language corporate recruiters understand."

# Save the file
with open('data/seo-content.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed new article in data/seo-content.json")
