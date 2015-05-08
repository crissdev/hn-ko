System.config({
  "baseURL": "/hn-ko",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:core-js@0.9.7/library/modules/$.fw",
      "npm:core-js@0.9.7/library/modules/$.def",
      "github:components/jquery@2.1.4/jquery",
      "github:knockout/knockout@3.3.0/dist/knockout.debug",
      "npm:signals@1.0.0/dist/signals",
      "npm:crossroads@0.12.0/dist/crossroads",
      "npm:core-js@0.9.7/library/modules/$",
      "github:components/jquery@2.1.4",
      "github:knockout/knockout@3.3.0",
      "npm:signals@1.0.0",
      "npm:crossroads@0.12.0",
      "npm:core-js@0.9.7/library/modules/es6.object.statics-accept-primitives",
      "npm:hasher@1.2.0/dist/js/hasher",
      "npm:core-js@0.9.7/library/fn/object/keys",
      "npm:hasher@1.2.0",
      "npm:babel-runtime@5.2.17/core-js/object/keys",
      "app/shared/router",
      "npm:core-js@0.9.7/library/modules/$.uid",
      "npm:core-js@0.9.7/library/modules/$.string-at",
      "npm:core-js@0.9.7/library/modules/$.assert",
      "npm:core-js@0.9.7/library/modules/$.unscope",
      "npm:core-js@0.9.7/library/modules/$.ctx",
      "npm:core-js@0.9.7/library/modules/$.iter-call",
      "npm:core-js@0.9.7/library/modules/$.set-proto",
      "npm:core-js@0.9.7/library/modules/$.species",
      "npm:core-js@0.9.7/library/modules/$.invoke",
      "npm:core-js@0.9.7/library/modules/$.dom-create",
      "npm:process@0.10.1/browser",
      "npm:core-js@0.9.7/library/modules/$.iter-detect",
      "npm:core-js@0.9.7/library/modules/$.wks",
      "npm:core-js@0.9.7/library/modules/$.iter",
      "npm:core-js@0.9.7/library/modules/$.iter-define",
      "npm:core-js@0.9.7/library/modules/es6.array.iterator",
      "npm:core-js@0.9.7/library/modules/$.for-of",
      "npm:process@0.10.1",
      "npm:core-js@0.9.7/library/modules/$.cof",
      "npm:core-js@0.9.7/library/modules/es6.string.iterator",
      "npm:core-js@0.9.7/library/modules/web.dom.iterable",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@0.9.7/library/modules/es6.object.to-string",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.7/library/modules/$.task",
      "npm:core-js@0.9.7/library/modules/es6.promise",
      "npm:core-js@0.9.7/library/fn/promise",
      "npm:babel-runtime@5.2.17/core-js/promise",
      "app/shared/component-loader",
      "npm:babel-runtime@5.2.17/helpers/class-call-check",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.5/index",
      "npm:is-array@1.0.1/index",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.5",
      "npm:is-array@1.0.1",
      "npm:core-js@0.9.7/library/fn/object/define-property",
      "npm:buffer@3.2.2/index",
      "npm:babel-runtime@5.2.17/core-js/object/define-property",
      "npm:buffer@3.2.2",
      "npm:babel-runtime@5.2.17/helpers/create-class",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:firebase@2.2.4/lib/firebase-web",
      "npm:firebase@2.2.4",
      "app/services/hnapi",
      "npm:entities@1.0.0/maps/decode.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.0.0/maps/entities.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.0.0/maps/legacy.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.0.0/maps/xml.json!github:systemjs/plugin-json@0.1.0",
      "npm:util@0.10.3/support/isBufferBrowser",
      "npm:inherits@2.0.1/inherits_browser",
      "npm:events-browserify@0.0.1/events",
      "npm:domelementtype@1.1.3/index",
      "npm:domhandler@2.3.0/lib/node",
      "npm:domhandler@2.3.0/lib/element",
      "npm:htmlparser2@3.8.2/lib/FeedHandler",
      "npm:isarray@0.0.1/index",
      "npm:core-util-is@1.0.1/lib/util",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:string_decoder@0.10.31/index",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:readable-stream@1.1.13/transform",
      "npm:readable-stream@1.1.13/passthrough",
      "npm:htmlparser2@3.8.2/lib/ProxyHandler",
      "npm:entities@1.1.1/maps/xml.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/legacy.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/decode.json!github:systemjs/plugin-json@0.1.0",
      "npm:domutils@1.5.1/lib/traversal",
      "npm:domutils@1.5.1/lib/manipulation",
      "npm:domutils@1.5.1/lib/querying",
      "npm:domutils@1.5.1/lib/legacy",
      "npm:domutils@1.5.1/lib/helpers",
      "npm:htmlparser2@3.8.2/lib/CollectingHandler",
      "npm:lodash@2.4.2/dist/lodash",
      "npm:regexp-quote@0.0.0/regexp-quote",
      "npm:entities@1.0.0/lib/decode_codepoint",
      "npm:inherits@2.0.1",
      "npm:events-browserify@0.0.1",
      "npm:domelementtype@1.1.3",
      "npm:isarray@0.0.1",
      "npm:core-util-is@1.0.1",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:string_decoder@0.10.31",
      "npm:entities@1.1.1/lib/encode",
      "npm:entities@1.1.1/lib/decode_codepoint",
      "npm:lodash@2.4.2",
      "npm:regexp-quote@0.0.0",
      "npm:htmlparser2@3.8.2/lib/Tokenizer",
      "npm:util@0.10.3/util",
      "github:jspm/nodelibs-events@0.1.0/index",
      "npm:domhandler@2.3.0/index",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:entities@1.1.1/lib/decode",
      "npm:util@0.10.3",
      "github:jspm/nodelibs-events@0.1.0",
      "npm:domhandler@2.3.0",
      "npm:readable-stream@1.1.13/readable",
      "npm:entities@1.1.1/index",
      "github:jspm/nodelibs-util@0.1.0/index",
      "npm:stream-browserify@1.0.0/index",
      "npm:entities@1.1.1",
      "github:jspm/nodelibs-util@0.1.0",
      "npm:stream-browserify@1.0.0",
      "npm:dom-serializer@0.1.0/index",
      "npm:htmlparser2@3.8.2/lib/Parser",
      "github:jspm/nodelibs-stream@0.1.0/index",
      "npm:dom-serializer@0.1.0",
      "github:jspm/nodelibs-stream@0.1.0",
      "npm:domutils@1.5.1/lib/stringify",
      "npm:htmlparser2@3.8.2/lib/WritableStream",
      "npm:domutils@1.5.1/index",
      "npm:htmlparser2@3.8.2/lib/Stream",
      "npm:domutils@1.5.1",
      "npm:htmlparser2@3.8.2/lib/index",
      "npm:htmlparser2@3.8.2",
      "npm:sanitize-html@1.6.1/index",
      "npm:sanitize-html@1.6.1",
      "app/pages/user/index",
      "app/pages/user/index.html!github:systemjs/plugin-text@0.0.2",
      "npm:core-js@0.9.7/library/modules/es6.array.from",
      "npm:core-js@0.9.7/library/fn/array/from",
      "npm:babel-runtime@5.2.17/core-js/array/from",
      "npm:babel-runtime@5.2.17/helpers/to-consumable-array",
      "app/pages/threads/index",
      "app/pages/threads/index.html!github:systemjs/plugin-text@0.0.2",
      "app/pages/submissions/index",
      "app/pages/submissions/index.html!github:systemjs/plugin-text@0.0.2",
      "app/pages/home/index",
      "app/pages/home/index.html!github:systemjs/plugin-text@0.0.2",
      "npm:core-js@0.9.7/library/modules/core.iter-helpers",
      "npm:core-js@0.9.7/library/fn/get-iterator",
      "npm:babel-runtime@5.2.17/core-js/get-iterator",
      "app/components/index",
      "app/components/window-title/index",
      "app/components/window-title/index.html!github:systemjs/plugin-text@0.0.2",
      "app/components/view-switch/index",
      "app/components/view-switch/index.html!github:systemjs/plugin-text@0.0.2",
      "app/components/navbar/index",
      "app/components/navbar/index.html!github:systemjs/plugin-text@0.0.2",
      "app/components/hn-item/index",
      "app/components/hn-item/index.html!github:systemjs/plugin-text@0.0.2",
      "app/components/fork-me-ribbon/index",
      "app/components/fork-me-ribbon/index.html!github:systemjs/plugin-text@0.0.2",
      "app/routes",
      "github:mbest/knockout.punches@0.5.1/knockout.punches.min",
      "github:mbest/knockout-switch-case@2.1.0/knockout-switch-case",
      "npm:underscore.string@3.0.3/helper/makeString",
      "npm:underscore.string@3.0.3/stripTags",
      "npm:underscore.string@3.0.3/capitalize",
      "npm:underscore.string@3.0.3/decapitalize",
      "npm:underscore.string@3.0.3/chop",
      "npm:underscore.string@3.0.3/helper/escapeRegExp",
      "npm:underscore.string@3.0.3/clean",
      "npm:underscore.string@3.0.3/count",
      "npm:underscore.string@3.0.3/chars",
      "npm:underscore.string@3.0.3/swapCase",
      "npm:underscore.string@3.0.3/helper/escapeChars",
      "npm:underscore.string@3.0.3/unescapeHTML",
      "npm:underscore.string@3.0.3/splice",
      "npm:underscore.string@3.0.3/insert",
      "npm:underscore.string@3.0.3/replaceAll",
      "npm:underscore.string@3.0.3/include",
      "npm:underscore.string@3.0.3/join",
      "npm:underscore.string@3.0.3/lines",
      "npm:underscore.string@3.0.3/dedent",
      "npm:underscore.string@3.0.3/reverse",
      "npm:underscore.string@3.0.3/helper/toPositive",
      "npm:underscore.string@3.0.3/endsWith",
      "npm:underscore.string@3.0.3/helper/adjacent",
      "npm:underscore.string@3.0.3/succ",
      "npm:underscore.string@3.0.3/titleize",
      "npm:underscore.string@3.0.3/camelize",
      "npm:underscore.string@3.0.3/underscored",
      "npm:underscore.string@3.0.3/dasherize",
      "npm:underscore.string@3.0.3/classify",
      "npm:underscore.string@3.0.3/humanize",
      "npm:underscore.string@3.0.3/ltrim",
      "npm:underscore.string@3.0.3/rtrim",
      "npm:underscore.string@3.0.3/truncate",
      "npm:underscore.string@3.0.3/prune",
      "npm:underscore.string@3.0.3/words",
      "npm:underscore.string@3.0.3/helper/strRepeat",
      "npm:underscore.string@3.0.3/lpad",
      "npm:underscore.string@3.0.3/rpad",
      "npm:underscore.string@3.0.3/lrpad",
      "npm:underscore.string@3.0.3/sprintf",
      "npm:underscore.string@3.0.3/vsprintf",
      "npm:underscore.string@3.0.3/toNumber",
      "npm:underscore.string@3.0.3/numberFormat",
      "npm:underscore.string@3.0.3/strRight",
      "npm:underscore.string@3.0.3/strRightBack",
      "npm:underscore.string@3.0.3/strLeft",
      "npm:underscore.string@3.0.3/strLeftBack",
      "npm:underscore.string@3.0.3/toSentence",
      "npm:underscore.string@3.0.3/toSentenceSerial",
      "npm:underscore.string@3.0.3/slugify",
      "npm:underscore.string@3.0.3/surround",
      "npm:underscore.string@3.0.3/quote",
      "npm:underscore.string@3.0.3/unquote",
      "npm:underscore.string@3.0.3/repeat",
      "npm:underscore.string@3.0.3/naturalCmp",
      "npm:underscore.string@3.0.3/levenshtein",
      "npm:underscore.string@3.0.3/toBoolean",
      "npm:underscore.string@3.0.3/exports",
      "npm:moment@2.10.2/moment",
      "github:mbest/knockout.punches@0.5.1",
      "github:mbest/knockout-switch-case@2.1.0",
      "npm:underscore.string@3.0.3/isBlank",
      "npm:underscore.string@3.0.3/helper/defaultToWhiteSpace",
      "npm:underscore.string@3.0.3/escapeHTML",
      "npm:underscore.string@3.0.3/startsWith",
      "npm:underscore.string@3.0.3/pred",
      "npm:underscore.string@3.0.3/pad",
      "npm:moment@2.10.2",
      "npm:underscore.string@3.0.3/trim",
      "npm:underscore.string@3.0.3/index",
      "npm:underscore.string@3.0.3",
      "app/index"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.17",
    "babel-runtime": "npm:babel-runtime@5.2.17",
    "core-js": "npm:core-js@0.9.7",
    "crossroads": "npm:crossroads@0.12.0",
    "firebase": "npm:firebase@2.2.4",
    "hasher": "npm:hasher@1.2.0",
    "jquery": "github:components/jquery@2.1.4",
    "knockout": "github:knockout/knockout@3.3.0",
    "knockout-switch-case": "github:mbest/knockout-switch-case@2.1.0",
    "knockout.punches": "github:mbest/knockout.punches@0.5.1",
    "mbest/knockout-switch-case": "github:mbest/knockout-switch-case@2.1.0",
    "moment": "npm:moment@2.10.2",
    "sanitize-html": "npm:sanitize-html@1.6.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "underscore.string": "npm:underscore.string@3.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:asn1.js@1.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.7": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crossroads@0.12.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "signals": "npm:signals@1.0.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.1",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domhandler@2.3.0": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:faye-websocket@0.9.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-driver": "npm:websocket-driver@0.5.4"
    },
    "npm:firebase@2.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "faye-websocket": "npm:faye-websocket@0.9.4",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hasher@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "signals": "npm:signals@1.0.0"
    },
    "npm:htmlparser2@3.8.2": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "domhandler": "npm:domhandler@2.3.0",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:moment@2.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.4",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sanitize-html@1.6.1": {
      "htmlparser2": "npm:htmlparser2@3.8.2",
      "lodash": "npm:lodash@2.4.2",
      "regexp-quote": "npm:regexp-quote@0.0.0"
    },
    "npm:sha.js@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.0": {
      "process": "npm:process@0.10.1"
    },
    "npm:underscore.string@3.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:websocket-driver@0.5.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-extensions": "npm:websocket-extensions@0.1.1"
    },
    "npm:websocket-extensions@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

