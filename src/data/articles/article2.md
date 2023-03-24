Stay tuned. Something amazing is coming soon my titke!

The minimal example for relative markdown links: [My Article](../data/about.md) Template: /layouts/\_default/\_markup/render-link.html <a href="{{ (.Page.GetPage .Destination).RelPermalink | safeURL }}">{{ .Text | safeHTML }}</a>
