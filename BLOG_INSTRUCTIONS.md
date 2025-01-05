# How to Post a New Blog

## File Structure
Create your blog post as a Markdown file (`.md`) in the `content/blog` directory. The filename will become the URL slug.

Example: `content/blog/my-new-post.md` → `/blog/my-new-post`

## Required Front Matter
Every blog post must start with YAML front matter between triple dashes (`---`):

```yaml
---
title: "Your Post Title"
excerpt: "A brief summary of your post (shown in cards)"
image: "URL to your header image"
category: "Category Name"
tags: ["tag1", "tag2"]
author:
  name: "Your Name"
  avatar: "URL to author avatar"
  bio: "Short author biography"
date: "YYYY-MM-DD"
readTime: "X min"
---
```

### Required Fields Explained
- `title`: The main title of your post
- `excerpt`: A 1-2 sentence summary (max 160 characters)
- `image`: URL to the header image (recommended size: 1200x675)
- `category`: Single category name
- `tags`: Array of related tags
- `author`: Object containing author details
  - `name`: Author's name
  - `avatar`: URL to author's avatar image
  - `bio`: Short author biography
- `date`: Publication date in YYYY-MM-DD format
- `readTime`: Estimated reading time

## Writing Content
After the front matter, write your blog post content using Markdown:

```markdown
# Main Heading

## Subheading

Regular paragraph text with **bold** and *italic* formatting.

- Bullet points
- Lists
- Etc.

### Code Examples
```js
console.log("Code blocks supported");
```

## Images
![Alt text](image-url)
```

## Example Post
Here's a complete example:

```markdown
---
title: "Understanding Soccer Tactics"
excerpt: "A deep dive into modern soccer strategies and formations"
image: "https://example.com/soccer-tactics.jpg"
category: "Soccer"
tags: ["tactics", "strategy", "coaching"]
author:
  name: "Jane Smith"
  avatar: "https://example.com/jane-avatar.jpg"
  bio: "Professional soccer analyst with 10 years experience"
date: "2024-04-16"
readTime: "5 min"
---

# Understanding Soccer Tactics

Modern soccer tactics have evolved significantly...

[Rest of your content here]
```

## Publishing Process
1. Create your `.md` file in `content/blog/`
2. Add all required front matter
3. Write your content using Markdown
4. Save the file
5. The blog will automatically:
   - Appear on the homepage (if it's one of 3 most recent)
   - Be listed on the blog index page
   - Have its own dedicated post page
   - Be included in the navigation system

## Best Practices
- Use descriptive filenames (e.g., `understanding-soccer-tactics.md`)
- Optimize images before uploading
- Keep excerpts concise and engaging
- Use relevant tags for better categorization
- Include high-quality images
- Break content into logical sections with headings