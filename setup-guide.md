# Shelves & Library Setup Guide

This guide will help you set up Google Sheets as a backend for your Shelves and Library pages, including automatic content pulling.

## Google Sheets Setup

### 1. Create Google Sheets

Create two separate Google Sheets:

**Sheet 1: Shelves** (for tool/service recommendations)
- Column A: Recommendation Title
- Column B: Category
- Column C: Description
- Column D: URL

**Sheet 2: Library** (for content recommendations)
- Column A: Title
- Column B: Description
- Column C: URL
- Column D: Type (Article, Video, Podcast, Book, etc.)
- Column E: Tags (comma-separated)
- Column F: Date (YYYY-MM-DD format)
- Column G: Thumbnail URL (optional - will auto-generate if empty)

### 2. Make Sheets Public

1. Open each Google Sheet
2. Click "Share" button
3. Change access to "Anyone with the link can view"
4. Copy the sheet ID from the URL (the long string between `/d/` and `/edit`)

### 3. Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create credentials (API key)
5. Restrict the API key to Google Sheets API only

### 4. Update the JavaScript Files

In both `shelves.html` and `library.html`, update these variables:

```javascript
const SHEET_ID = 'YOUR_ACTUAL_SHEET_ID_HERE';
const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
```

## Enhanced Content Pulling Setup

For better thumbnails and metadata extraction, you can integrate with these services:

### Option 1: Open Graph Meta Tags (Free)

The current implementation uses favicons for logos. For better thumbnails, you can use a service like:

- **Link Preview API**: https://www.linkpreview.net/
- **MicroLink**: https://microlink.io/
- **Unfurl**: https://unfurl.dev/

### Option 2: Custom Thumbnail Service

Create a serverless function (Netlify/Vercel) that:

1. Takes a URL as input
2. Fetches the page
3. Extracts Open Graph images, titles, descriptions
4. Returns structured metadata

Example using Netlify Functions:

```javascript
// netlify/functions/get-metadata.js
exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Extract Open Graph data
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1];
    const ogDesc = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];

    return {
      statusCode: 200,
      body: JSON.stringify({
        thumbnail: ogImage,
        title: ogTitle,
        description: ogDesc
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch metadata' })
    };
  }
};
```

### Option 3: Automated Sheet Updates

Create a Google Apps Script that automatically pulls metadata when you add new URLs:

1. Go to script.google.com
2. Create a new project
3. Add this code to automatically fetch metadata when you add URLs:

```javascript
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;

  // Check if URL column was edited
  if (range.getColumn() === 3) { // Assuming URL is column C
    const url = range.getValue();
    if (url && url.startsWith('http')) {
      fetchMetadata(url, range.getRow());
    }
  }
}

function fetchMetadata(url, row) {
  try {
    const response = UrlFetchApp.fetch(url);
    const html = response.getContentText();

    // Extract title and description
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta name="description" content="([^"]+)"/i);

    if (titleMatch && !SpreadsheetApp.getActiveSheet().getRange(row, 1).getValue()) {
      SpreadsheetApp.getActiveSheet().getRange(row, 1).setValue(titleMatch[1]);
    }

    if (descMatch && !SpreadsheetApp.getActiveSheet().getRange(row, 2).getValue()) {
      SpreadsheetApp.getActiveSheet().getRange(row, 2).setValue(descMatch[1]);
    }
  } catch (error) {
    console.log('Error fetching metadata:', error);
  }
}
```

## Sample Data Format

### Shelves Sheet Example:
```
Notion | Productivity | All-in-one workspace for notes, tasks, and databases | https://notion.so
Figma | Design | Collaborative interface design tool | https://figma.com
Linear | Project Management | Issue tracking built for modern software teams | https://linear.app
```

### Library Sheet Example:
```
The Art of Readable Code | Guide to writing cleaner, maintainable code | https://www.oreilly.com/library/view/the-art-of/9781449318482/ | Book | programming,clean-code | 2024-01-15 |
How to Build Anything Fast | Rapid prototyping mindset and techniques | https://learnhowtolearn.org/how-to-build-anything-extremely-quickly/ | Article | productivity,building | 2024-02-20 |
Tim Ferriss - Derek Sivers | Entrepreneurship and business insights | https://tim.blog/derek-sivers/ | Podcast | entrepreneurship,business | 2024-03-10 |
```

## Security Notes

1. **API Key Security**: For production, consider using environment variables or a backend proxy to hide your API key
2. **Rate Limiting**: Google Sheets API has rate limits - consider caching responses
3. **CORS**: Direct browser requests to Google Sheets API work, but for production consider a backend proxy

## Going Live

1. Update the JavaScript files with your actual Sheet IDs and API key
2. Test with a few sample entries
3. Deploy to your website
4. Start adding recommendations to your sheets!

The pages will automatically update as you add new entries to your Google Sheets.