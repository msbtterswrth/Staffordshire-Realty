CKEditor Div Manager
--------------------

INTRODUCTION
------------

This module integrates the Div Container Manager CKEditor plugin for Drupal 8.

The plugin adds the ability to group content blocks under a div element as a
container, with styles and attributes optionally specified in a dialog.


REQUIREMENTS
------------

This module requires the following modules:

 * CKEditor (Core)


INSTALLATION
------------

1. Download the Div Container Manager CKEditor plugin. [1]

2. Copy the plugin to the libraries directory. If libraries doesn't exist
   in the site root, create it. The plugin should be in /libraries/div.

3. Download and install the CKEditor Div Manager module as per usual. [2]


CONFIGURATION
-------------

1. Go to 'Text formats and editors' (admin/config/content/formats).

2. Click 'Configure' for any text format using CKEditor as the text editor.

3. Configure your CKEditor toolbar to include the Div Container Manager button.

4. If 'Limit allowed HTML tags and correct faulty HTML' is enabled, the Allowed
   HTML tags need to be configured. At a minimum, the <div> tag needs to be
   allowed. Some fields in the plugin dialog require additional attributes to be
   allowed or they will be hidden. The full set is <div class id title>. Inline
   styles will not be allowed with this filter enabled.

5. Any classes or sets of classes defined in the editor's Styles dropdown for
   the div element will carry over to the Style dropdown in the plugin dialog.


LINK REFERENCES
---------------

1: http://ckeditor.com/addon/div
2: http://drupal.org/documentation/install/modules-themes/modules-8
