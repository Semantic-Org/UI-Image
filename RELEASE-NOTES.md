### Version 2.0.6 - July 22, 2015

- **List**- Fixed issue where using an image variation like `ui image label` as a direct child of an `item` would remove right padding [#2691](https://github.com/Semantic-Org/Semantic-UI/issues/2691)

### Version 2.0.1 - July 6, 2015

- **Image** - Fixed `mini image` having wrong pixel size in docs [#2521](https://github.com/Semantic-Org/Semantic-UI/issues/2521)
- **Image** - Added docs for missing `fluid image` variation

### Version 2.0.0 - June 30, 2015

- **Modal** - If you are using a modal with image content, you will need to use `image content` on the parent element. This is because `flex` rules require parent styling that the previous `table-row` rules did not.
- **Card** - Cards now support multiple custom `content` blocks. Content blocks and images can now appear in any order.
- **Image** - Images now include a `spaced` variation for adding whitespace around images when used inline with text.
- **Label** - Label now sets an `img` height even when not using an `image label`
- **Menu** - Horizontal menus now set a default image size for images / logos
- **Modal** - Modal content now uses flex, image content now requires `image content` class on parent to allow for flex stylings.
- **Visibility/Sticky** - Visibility and sticky now refresh automatically after page content loading to deal with changes in position from images loading
- **Visibility** - Visibility `image` will now wait to lazy load images that are *above* the current screen position, not just below.
- **Image** - `rounded image` and `circular image` now apply border radius to all child elements, fixing dimmers, and other content rounding
- **Image** - `avatar image` size has been slightly decreased
- **Image** - `mini image` default width has been increased to `35px`

### Version 1.12.0 - April 13, 2015

- **Visibility** - Adds updated visibility module from `2.x` channel. Visibility will automatically refresh by default after images load on page refresh. Fixes issues with element positions after image loading.
- **Visibility** - Fixed issue where `precache` behavior was missing from visibility causing `image` lazy loading to fail

### Version 1.11.0 - March 3, 2015

- **Visibiliity** - Attach callbacks to elements visibility conditions like `top visible` `bottom visible`, `passing`. Useful for things like: image lazy loading, infinite scroll content, and recording tracking metrics.

### Version 1.10.0 - February 23, 2015

- **Image* - Added `hidden image` state

### Version 1.9.2 - February 19, 2015

- **Modal** - Fixes typo causing `middle aligned` image not to work correctly.

### UI Changes

- **Headers** - Headers can now contain images alongside text, added examples to docs
- **Label** - `ribbon label` can now be used inside `ui image` and `ui card` correctly
- **Card** - `image` inside `content` no longer has a fixed size **Thanks @romuloctba**

### Version 1.5.0 - December 30, 2014

- **Table** - Table now has coupling with image to make sure size is preserved correctly with table sizing when used inside a table cell.

### Version 1.3.0 - December 17, 2014

- **Image** - UI image now works with SVG

### Version 1.1.0 - December 02, 2014

- **Transition** - Transition now correctly detects missing animations, errors do not cause future image transitions to break

### Version 1.0.1 - November 28, 2014

- **Menu** - Removes missing image loader variable **Thanks ryan-mahoney**

### Version 1.0.0 - November 24, 2014

- **Modal** - Modal ``left`` and ``right`` sections are now replaced with ``image`` and ``description``
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Image** - New ``bordered image`` variation
- **List** - List images can now specify vertical alignment

### Version 0.7.0 - Oct 22, 2013

- **Dropdown** - Dropdown cannot display inside item image

### Version 0.1.0 - Sep 25, 2013