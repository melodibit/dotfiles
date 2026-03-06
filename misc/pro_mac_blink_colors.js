//Hosted: https://raw.githubusercontent.com/melodibit/dotfiles/refs/heads/master/misc/pro_custom_blink_colors.js

//Color Picker: https://www.w3schools.com/colors/colors_picker.asp
//Colors By Name: https://www.w3schools.com/colors/colors_names.asp
black        = '#000000';
red          = '#b4432c';
green        = '#49a32e';
yellow       = '#e6e54b';
blue         = '#4e31d8';
magenta      = '#c448cd';
cyan         = '#00a6b2';
white        = '#f4f4f5';
lightBlack   = '#666666';
lightRed     = '#e50000';
lightGreen   = '#00d900';
lightYellow  = '#b3b300';
lightBlue    = '#66ccff';
lightMagenta = '#e500e5';
lightCyan    = '#00e5e5';
lightWhite   = '#e5e5e5';

lime         = '#00ff00';

t.prefs_.set('color-palette-overrides',
                 [ black , red     , green  , yellow,
                  blue     , magenta , cyan   , white,
                  lightBlack   , lightRed  , lightGreen , lightYellow,
                  lightBlue    , lightMagenta  , lightCyan  , lightWhite ]);

t.prefs_.set('cursor-color', lime);
t.prefs_.set('foreground-color', lightWhite);
t.prefs_.set('background-color', black);
