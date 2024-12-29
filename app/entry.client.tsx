@@ -3,5 +3,5 @@ import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

startTransition(() => {
  hydrateRoot(document, <RemixBrowser />);
  hydrateRoot(document.getElementById('root')!, <RemixBrowser />);
});
