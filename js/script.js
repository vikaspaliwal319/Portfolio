document.addEventListener('DOMContentLoaded', function() {
    function fetchAndRenderMarkdown(filePath, previewId) {
        var markdownPreview = document.getElementById(previewId);
        var converter = new showdown.Converter();

        function fetchMarkdownFile(filePath) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var markdownText = xhr.responseText;
                        var html = converter.makeHtml(markdownText);
                        markdownPreview.innerHTML = html;
                    } else {
                        markdownPreview.innerHTML = "Failed to fetch Markdown file.";
                    }
                }
            };
            xhr.open('GET', filePath, true);
            xhr.send();
        }

        // Fetch Markdown file dynamically
        fetchMarkdownFile(filePath);
    }

    // Example: Fetch and render Markdown file for Page 1
    fetchAndRenderMarkdown('../content/Project-1.md', 'Project-1');

    // Example: Fetch and render Markdown file for Page 2
    fetchAndRenderMarkdown('../content/Project-2.md', 'Project-2');

    // Add more calls as needed for additional pages
});
