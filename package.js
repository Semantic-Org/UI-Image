
Package.describe({
  name    : 'semantic:ui-image',
  summary : 'Semantic UI - Image: Single component release',
  version : '1.11.0',
  git     : 'git://github.com/Semantic-Org/UI-Image.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'image.css'
  ], 'client');
});
