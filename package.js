var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-image',
  summary : 'Semantic UI - Image (official): Single component release of image',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Image.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
