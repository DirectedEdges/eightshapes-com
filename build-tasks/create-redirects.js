const fs = require('fs');
const path = require('path');

const redirects = {
  '/nathan-curtis.html': '/nathan-curtis/',
  '/dan-brown.html': '/dan-brown/',
  '/kevin-powell.html': '/kevin-powell/',
  '/james-melzer.html': '/james-melzer/',
  '/systems/assessment.html': '/systems/assessment/',
  '/systems/workshops.html': '/systems/workshops/',
  '/discovery/crafting-discovery.html': '/discovery/crafting-discovery/',
  '/design-discovery.html': '/design-discovery/',
  '/design-systems.html': '/design-systems/'
}

for (oldPage in redirects) {
  const newPage = redirects[oldPage];
  const redirectFilePath = path.join('_site', ...oldPage.split('/'));
  fs.writeFileSync(redirectFilePath, `<html>
<head>
<meta http-equiv="refresh" content="0;url=${newPage}" />
<title>Page Moved</title>
</head>
<body>
This page has moved to <a href="${newPage}">${newPage}</a>
</body>
</html>`);


}