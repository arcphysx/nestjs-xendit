<table align="center">
    <tr>
        <td>
            <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
        </td>
        <td>
            <a href="https://www.xendit.co/" target="blank"><img src="https://www.xendit.co/wp-content/uploads/2020/11/xendit-logo-white.svg" height="90" alt="Xendit Logo" /></a>
        </td>
    </tr>
</table>

<p align="center">
    <a href="https://www.npmjs.com/package/nestjs-xendit"><img alt="Package Version" src="https://img.shields.io/npm/v/nestjs-xendit"></a>
    <a href="https://www.npmjs.com/package/nestjs-xendit"><img alt="Package License" src="https://img.shields.io/npm/l/nestjs-xendit"></a>
    <a><img alt="npm" src="https://img.shields.io/npm/dm/nestjs-xendit"></a>
    <a href="https://github.com/arcphysx/nestjs-xendit"><img src="https://github.com/arcphysx/nestjs-xendit/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Project"/></a>
    <a href="https://codecov.io/gh/arcphysx/nestjs-xendit"><img src="https://codecov.io/gh/arcphysx/nestjs-xendit/graph/badge.svg?token=9XWUI5O4NI" alt="Coverage"/></a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Farcphysx%2Fnestjs-xendit?ref=badge_shield&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Farcphysx%2Fnestjs-xendit.svg?type=shield&issueType=license"/></a>
</p>

<br/>

# NestJS Xendit

A [Xendit Node SDK](https://www.xendit.co/) wrapper for [NestJS framework](http://nestjs.com/)

**THIS IS NOT AN OFFICIAL PACKAGE FROM XENDIT OR NESTJS**

## Installation
NPM:
```bash
npm i --save nestjs-xendit
```

Yarn:
```bash
yarn add nestjs-xendit
```

## Usage/Examples
Sync:
```js
XenditModule.register({
    secretKey: "XENDIT_KEY"
})
```

Async:
```js
XenditModule.registerAsync({
    useFactory: (configService: ConfigService) =>{
        return {
            secretKey: configService.get('XENDIT_KEY')
        }
    },
    inject: [ConfigService]
})
```

## Contributing

Contributions are always welcome!

Feel free to patch / edit / optimize / add features. PR are Welcome.