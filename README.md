# RailsCamp Hamburg 2011 Website

## Installation

Just run bundle install. You need Ruby 1.9.2.


## Changing the content

The content is in the `texts` subfolder, in markdown format.


## Changing the layout

Adjust the `index.html.erb` file, then run rake to see the changes in
the generated `index.html` file.

If you don't want to run rake after every change, use the following:

    rake watchr

It will watch for file changes and re-generate the `index.html` file if
anything changed.


## Deployment

Install s3cmd via homebrew:

    brew install s3cmd

Make sure you have the right credentials in `s3/s3cfg`.
(If you are a member of the RailsCamp Hamburg team, the file can be found in the Dropbox.)

Then, for each deployment just run:

    rake deploy
