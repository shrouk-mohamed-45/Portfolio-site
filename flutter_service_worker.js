'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "efab3fee8adee53626311179675d3d8e",
".git/config": "21670ecc69060ad7e8a3736e46f5f6e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3d636654e0fed8bbdf3f048f9038d80e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "851bf0e94f818e8b414275b2e2b52eb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d3cf4706c9155aae040d094d4127d09",
".git/logs/refs/heads/main": "24ad437f3409560563b077faba2acf00",
".git/logs/refs/remotes/origin/main": "2a5f6a2da3c351de89b75c1a01ef0bce",
".git/objects/02/8aae45503a64c2351d8fcfd42b30c90daa5a36": "33bb8f4da36a9819bc0010e1fa5acc7a",
".git/objects/02/ec670347b4c5846c4561414744f69dd56aaa3b": "770cbdefc4ca648103728fb5d773d2fa",
".git/objects/05/03dcf67a4cb68d66fb77296eec518b860b2324": "fa2a0971ae41346a50fd1b95a8b50cb8",
".git/objects/06/75c57745000c3ad07b482a31eae06e3644c4e2": "12729dd2ef2020fe9f7947b01c496e7b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/25430a32d8dc4eaf5c3f5166e95a04b6493832": "a9ddc13e1e3961354c57ef922e486dc7",
".git/objects/0b/ebfbc3727d55f5adbf2dd117ad28dcb40ad37d": "53273d6d5bfb7b417360a3b6f462e660",
".git/objects/0c/a91e407ed2952d2ebaeb94337996cad6b4d95b": "30f56138f201ecac735949c48aa644a7",
".git/objects/13/c93c1bf368293c822acc5ade86b6a05d2b0e7a": "888cd194ed01b7ecd168facbf8ebbc18",
".git/objects/15/b24d5011bd79793efba8ac18ed7dad2590d14b": "78549c24aa577501eb4d009a14b3edd3",
".git/objects/18/ecb3fa9565e42b10a7a7e8fea3ac1ae831325f": "9535ef1978164f67c3ce24e86a947971",
".git/objects/1c/927a458e6e2dba654baca9995b8297a4b56628": "51a4bf8b39665dbc93b28f136d2b8eae",
".git/objects/1c/c9cf56426e3d4439136a0c8a9f3eb14cab49b2": "ac02277682f2746050e803ba1b55af1b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/b779e5c1b2fe319b3ca5c539fbc943090a40cb": "08a45a648da68fe5f7f500a6a9713a47",
".git/objects/23/2950b7f8fecc65000d8c1d431281ea1882e13f": "fcc68ca3b47fe2e4afedc4b904cb9548",
".git/objects/23/df1cf4ddf960fb85ed3a6e5e5c7a6d4cddf921": "f4cc586ee0e30b54080d312ddfaa3d81",
".git/objects/24/e8e4f097d0ed2ccb01e4382892752d9859f5e5": "afba9c57eb322856f0a5ce6519b90813",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/3d559c24d6e89e5bef386579b34df5ce307f0a": "9c0bd57cb161f8f724c11c106b7d4eb8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/e2e8f31b04183f798c9dde60da7752ea7a5621": "40bdc355d71ae760155c0c71740b0dd6",
".git/objects/39/b8814aecf8ec43997e2093cfcb4cb739f8d705": "fb85de87c79af0fd83e29071fc246467",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/6e7b0a930f8984c1ce85b9befeef48e752a3a2": "313f3f85394093d25f1eb3707414abed",
".git/objects/3f/2731e027c27cac14e704e1bfb364d1c4dc9754": "e16fbe7824688cf6d810fe3c0cf567f5",
".git/objects/3f/ee14c5ada2eb5acc2efd7304aa508c96b62344": "adb0629c41ec955d609cfc304df5e16f",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/a51c9d9cdd0cda8c502efbccbc77837aae325e": "d0b7769bca0f20c19a13635682bd462d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/c1535476d8a3ced8c776c6b40e36c31a76f50c": "5cc0479a009118ee3b6e8fe5846201ed",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/5514291a30dda52fa6277fcc157812b0de6d0a": "d51858da0318140349f2c4297a570378",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/5f/a3522c50afc4c890b9c4059d4f4942a018f8f8": "6614d290fb570d0f96a49a3a1f77ea4e",
".git/objects/69/d5f20a0531bad3ed21651397921b12281874f9": "6030b7589e2fa16e1e3c13e5b54c47f1",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/8d32dbee4b7b490332b24bf20b5cb4a46fa842": "8d496c7c708b3dd8063c6db9a051501a",
".git/objects/75/f0028d2b070c9d225ec4836c602a4821b886b9": "fc64e4a98af60c93ffa58eb968243890",
".git/objects/76/04c679c76ecd890c68867b096ee082c9613cf8": "cb262af196b68e8528df6ce7aebeb57e",
".git/objects/7a/22853e58a762bf26ffd2a828fccb1bf4490c0c": "2318382b38acacb477268e45737aeeae",
".git/objects/7e/a6322928011fd9ff493aac3856eed13a046aeb": "0bb6a4c0cb2e4cf86425cf3abee57224",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/c765b21dbbc73ced63ebced841f643b5a3f948": "8cfc7c564cb565f93490149ea7362e64",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/573c0f1ecaea3db49bd266c206d4bbc7f19a53": "6217f3bb03a28069728a5b77ddacf5a5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/1f540b2c40bfafe7af660f72575d351c306a6d": "5a6c479f4779a0db7a10061dfa0846a1",
".git/objects/93/3425ce6d1f882533cf3796cd3735c2c412801c": "0b2c8d46112c604613c0fdfdc35395ba",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/844cf4f38a7f58bd0338410adc2487112b8682": "1a2d3dbbf22271b0529802fa28fbfc4c",
".git/objects/97/8c84f78260df7dcc06d5fb2ded9e52a5819be2": "fc0f60f577e4da641c0dfeda1f2ebcee",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/9422a002e497fbc41ad711ccc612fcd8f13fda": "420107619eb286a5245efc251f964811",
".git/objects/9c/2c1b888aa986b899d3d04411ec278232ec01df": "21b018a7674df35db0957bf6e8b67b28",
".git/objects/a2/9171148564a37d4452f93e6b5f62e8ed9b5bc6": "8caff27a6094d1de6ea79bd55ea1f999",
".git/objects/a4/5ff62e8b78ecbaf57619688f6f5622d5b59b13": "bbe3fe9381e26f6ba5c32418d1c17aea",
".git/objects/a9/c1eac468a49d4f98ba19a96349eeb63a3360b5": "88b6726755c5893a95116079ad2cbd9e",
".git/objects/ac/7d0ae928b6dd9655f0d6dcedabc525fa67b090": "d8dd404830a5087c38cb53098ed6ebfd",
".git/objects/b0/3a504697089daec212e95557e8e2583c55762b": "9875d596ad1192be990c3acd1b6c8571",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/d0f67c2d432f9a0b39583361371b38ccb7f991": "a68e284c64a7d00bb084a16d42e9c96a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/cd170e66b8668871df02d69aff29a9ba084465": "c5a49535b1af1991875a147646583928",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c0/efe076690474186ba7dba9a3dfa53349c2d6de": "c9dcd3ec11b5c1f5eb5e0436dd9e8233",
".git/objects/cd/44c1a138174f13a12a370d3ca252dc3aa1e4e7": "687439a33776fd6fd4b08154602a95aa",
".git/objects/ce/61c203993d98080abb8282a8c2e449278c7ff0": "565294ec66b25b559ea424cf72a58eb8",
".git/objects/cf/b6e6ad01c5c97f98f2760b231eb5a5ee7bce43": "6980a7b38e0646d0fa0f28a292b2b0ee",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/35f86d59d4bae7856e6955bed9865135d8fab0": "cd19a19818845179a3421383a8e2818c",
".git/objects/d7/b6162bfe022dc560baa4d8a466a7c4fcaad1a3": "ab5cc71835691b2d74a1908f1b195707",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/b7d2860ab6bca1a9ecb9f79dfc4752f73e8a36": "9696343b63933899dce69525abf985ed",
".git/objects/dd/8172d681f040a6af632b2f6f2c0a425938cae1": "9ea0e287b3e4c5e3e56575c527b6e73b",
".git/objects/dd/d05f9c7f51b29360d796092697a76122277b7d": "13f855f88cf3dfc354757bf4769cc4ba",
".git/objects/dd/e0aad6ce3966e0f8b4d468dea9f0214b6aaacd": "3f1c071eab92b8823d90ab390317ca81",
".git/objects/df/c07c1da1e2beeb9c2088a45f407129005441f9": "1b5dde649bb2287e82195a3d055f6d97",
".git/objects/e1/a0702b0531ec583e6f6f1987224e52c6edcd49": "1762cb2c21ef05983ab7da4106686ac7",
".git/objects/e1/d1796806b15ac7e8b909aa1a9933c1daa97f50": "90c4f1fd6acfcd00672801a984b2103f",
".git/objects/e1/e91d00900f885fc05b5f6a74d18e3510d89b79": "8551613d93bff40738cadf9b2c5d9df0",
".git/objects/e5/f2c454757df9d2e0908cdb13baed6f60a9ef01": "f40d2df98a8dfc276390f4192cfdf4b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc6b9dff29f64feec332fda1582f855301ba31": "b4c4bf6cb9297ae741d2e068a92f0621",
".git/objects/ed/505a626f0e33fff36c2ad989135376baa0de06": "df5bbc491f8a72aa6810b3b91890acdf",
".git/objects/f1/3332d4df22ea48f6b668b9d05e08a54a8c6444": "624ee8d635e590bbd8f300b022e1daf0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d5626a908778ec82bdb9578ddc6eea93cbded7": "08aa8260e0488cf8413bbc1722b182d0",
".git/objects/ff/9ebcd21c24f5a5eac8367b0522b30f9f7ec8ba": "1ad8d6594a96f25a6f953a44488b94b3",
".git/ORIG_HEAD": "62fea35fc733187e4f1a614603309356",
".git/refs/heads/main": "cfa3f25b3045db795a6522f447b25b2b",
".git/refs/remotes/origin/main": "cfa3f25b3045db795a6522f447b25b2b",
"assets/AssetManifest.bin": "ba0aa73671bc8d3d99275e5049a70638",
"assets/AssetManifest.bin.json": "f88de483b9dfcc9b29250f6c82ffebe6",
"assets/AssetManifest.json": "954f64e47d3c7a1d5a3e600169bbeecf",
"assets/assets/fonts/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/fonts/Playfair_9pt_SemiCondensed-Regular.ttf": "99064a01e2a2a6f45966db4f85c328f9",
"assets/assets/images/app2.png": "463f8e50f30d6e31db663daba8f7bc5d",
"assets/assets/images/app3.png": "eeeb0aa243d11921b57960ca669b5e6c",
"assets/assets/images/c++.png": "d6b013255ae1d98dccafa10332e87da4",
"assets/assets/images/cubit.png": "a03efcd7026be45326ee355f8f8fd6a1",
"assets/assets/images/dart.png": "fd9c029e2a430cc69daa6456cb077176",
"assets/assets/images/ex_app.png": "e9a7cbe2d1f3852cddc292b1b3f826ac",
"assets/assets/images/flutter.png": "2b57ef930a2a1c7ebd12d9c54d4dc65b",
"assets/assets/images/gitHub.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/logo.png": "e07f739b0c485941f3e41404f7c37ad3",
"assets/assets/images/me.png": "462ab2c71789e205a44f1286715300f9",
"assets/assets/images/phone.png": "a32f50942c5784ad8c26a7f528dfe723",
"assets/assets/images/quran_app.png": "34bef1ce51eb6d01e00be5e88a4ee67f",
"assets/assets/images/Screenshot.png": "309c6c8fcadcb27b07e410fdfae561d6",
"assets/assets/images/swagger.png": "9ff6aed5cbbd9bf32abdb99341fd6af1",
"assets/FontManifest.json": "4018deaac12507c25c93e1baae488cd7",
"assets/fonts/MaterialIcons-Regular.otf": "285cea77bbf6be8f061ccd96c51a5135",
"assets/NOTICES": "e88e94762c06082dd619e8aace362d5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e07f739b0c485941f3e41404f7c37ad3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b10906c921b2719bd44af180fac446d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "673c518f59ee45884e8aa0f6500be5c3",
"/": "673c518f59ee45884e8aa0f6500be5c3",
"main.dart.js": "1e7701a734a6112b6bea41d370a85bd4",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"README.md": "dcb50dd03f3d32d4fe90400aa8fb1a5d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
