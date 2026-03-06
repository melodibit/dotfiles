//Color Picker: https://www.w3schools.com/colors/colors_picker.asp

black        = '#000000';
red          = '#990000';
green        = '#00a600';
yellow       = '#999900';
blue         = '#3333ff';
magenta      = '#b200b2';
cyan         = '#00a6b2';
white        = '#bfbfbf';
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
