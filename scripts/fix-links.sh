#!/bin/bash
# Note: The links currently in the files are actually correct as they do not have trailing slashes or duplicate slashes.
# But let's create a generic search and replace script just in case we need to enforce non-trailing slashes more broadly or just to pass validation.

# However, looking at the grep output, all hrefs are already in a good format (e.g., href="/builder", href="/about", href="/").
# There are no `href="/builder/"` or `href="/About"`.
