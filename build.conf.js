'use strict';

module.exports = {
  paths: {
    packagejson: [
      'ClientApp/**/**/package.json'
    ],
    deployed: 'deploy/platform/',
    styles: [
      '!ClientApp/theme.scss',
      '!ClientApp/styles.scss',
      'ClientApp/**/**.scss',
      '!ClientApp/app/**/**.scss',
      'ClientApp/**/**.css',
      '!ClientApp/app/**/**.css'
    ],
    requiredfiles: [
      'ClientApp/**/codepoints',
      'ClientApp/**/MaterialIcons-Regular.eot',
      'ClientApp/**/MaterialIcons-Regular.ijmap',
      'ClientApp/**/MaterialIcons-Regular.ttf',
      'ClientApp/**/MaterialIcons-Regular.woff',
      'ClientApp/**/MaterialIcons-Regular.woff2',
      '!ClientApp/theme.scss',
      '!ClientApp/styles.scss',
      'ClientApp/**/**.scss',
      '!ClientApp/app/**/**.scss',
      'ClientApp/**/**.html',
      'ClientApp/**/**.md',
      'ClientApp/**/**.js',
      'ClientApp/**/**.ts',
      '!ClientApp/**/**.spec.ts',
      'ClientApp/**/**/package.json',
      'ClientApp/**/tsconfig-aot.json',
      '!ClientApp/tests/**/**.ts',
      '!ClientApp/app/**/**.html',
      '!ClientApp/app/**/**.js',
      '!ClientApp/app/**/**.ts',
      '!ClientApp/environments/**/**.ts',
      '!ClientApp/polyfills.ts',
      '!ClientApp/main.ts',
      '!ClientApp/test.ts',
      'ClientApp/typings.d.ts',
      '!ClientApp/index.html'
    ]
  }
};
