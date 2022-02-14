=== Toggles ===
Contributors: mamaduka
Tags: accordion, faq, details, block, blocks
Requires at least: 5.8
Tested up to: 5.9
Stable tag: 1.0.0
Requires PHP: 5.6
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

An easy way to hide and reveal content.

== Description ==

You can use this block to hide and reveal content as needed. Create FAQ pages, hide spoilers in posts, or create simple accordion elements.

The block uses `<details>` and `<summary>` HTML elements and doesn't require any additional JavaScript or CSS on the theme side.

== Frequently Asked Questions ==

= Want to change default styles? =

You can add some basic styling with just a few lines of CSS. Example:

`
.wp-block-toggles {
    background: #fafafa;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    margin: 1.5rem 0;
    padding: 0.5rem 1rem;
}

.wp-block-toggles summary {
    cursor: pointer;
}
`

= Want to report a bug? =

Create an issue at the [Mamaduka/toggles](https://github.com/Mamaduka/toggles) repo.

== Screenshots ==

1. The block with no styles.
2. The block with custom styling.
3. Block Editor.

== Changelog ==

= 1.0.0 - 2021-02-05 =
* Initial release.
