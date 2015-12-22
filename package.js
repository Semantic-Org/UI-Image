
Package.describe({
  name    : 'semantic:ui-image',
  summary : 'Semantic UI - Image: Single component release',
  version : '2.1.7',
  git     : 'git://github.com/Semantic-Org/UI-Image.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'image.css'
  ], 'client');
});
