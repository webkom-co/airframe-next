const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withImages(withFonts(withSass(withCss())));
