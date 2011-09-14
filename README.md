# RailsCamp Hamburg 2011 Website

## Installation

Just run bundle install. You need Ruby 1.9.2.


## Changing the content

The content is in the `texts` subfolder, in markdown format.


## Changing the layout

Adjust the `index.html.erb` file, then run rake to see the changes in
the generated `index.html` file.

If you don't want to run rake after every change, use the following:

    watchr watch_me

It will watch for file changes and re-generate the `index.html` file if
anything changed.
