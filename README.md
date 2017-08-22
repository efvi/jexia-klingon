# Jexia Klingon

Translate a name written in English to Klingon and find out its species.

## Requirements

* [**Node.js**](https://nodejs.org) >= v6.11.2 (ES6 support)
* [**npm**](https://www.npmjs.com) Package Manager
* [**Git**](https://git-scm.com) Source Control

## Setup

On a terminal

```bash
$ git clone https://github.com/efvi/jexia-klingon.git
$ cd jexia-klingon
$ npm install
$ chmod +x jexia-klingon
```

## Usage

On a terminal

```bash
$ ./jexia-klingon <Name in English to be translated>
```

Where the first parameter is the name of any Star Treck character (it can have spaces between words). As output, his name will be translated to Klingon and his species will be printed as well.

## Tests

All the tests were written using **mocha** and **chai**. If you want to run them, install mocha

```bash
$ sudo npm install mocha -g
```

Then run

```bashs
$ mocha tests --recursive
```
