if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const f=e=>s(e,r),d={module:{uri:r},exports:n,require:f};a[r]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Jd0YRTgybZTdssmL_QO3g/_buildManifest.js",revision:"8e4cc7dd11cd510dde4c1c9bdc890795"},{url:"/_next/static/Jd0YRTgybZTdssmL_QO3g/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Jd0YRTgybZTdssmL_QO3g/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1101-798ead13293df62b.js",revision:"798ead13293df62b"},{url:"/_next/static/chunks/1157.f01dd1e749efe102.js",revision:"f01dd1e749efe102"},{url:"/_next/static/chunks/1434.76fa065f5c1f438b.js",revision:"76fa065f5c1f438b"},{url:"/_next/static/chunks/1931-de2df6c8cda51382.js",revision:"de2df6c8cda51382"},{url:"/_next/static/chunks/1a48c3c1-6c27472aa8d2e7d3.js",revision:"6c27472aa8d2e7d3"},{url:"/_next/static/chunks/1bfc9850-5d99ac930c4dea0b.js",revision:"5d99ac930c4dea0b"},{url:"/_next/static/chunks/2004-00e301e2dbe03df8.js",revision:"00e301e2dbe03df8"},{url:"/_next/static/chunks/252f366e-d0f12748d7c475aa.js",revision:"d0f12748d7c475aa"},{url:"/_next/static/chunks/2927-3279390a07781526.js",revision:"3279390a07781526"},{url:"/_next/static/chunks/2fbf9dd2-e575dad72da54ec2.js",revision:"e575dad72da54ec2"},{url:"/_next/static/chunks/4304-49c51827bade7977.js",revision:"49c51827bade7977"},{url:"/_next/static/chunks/4688-c3fae773a39aa481.js",revision:"c3fae773a39aa481"},{url:"/_next/static/chunks/545f34e4-f69e8f5d703ff84d.js",revision:"f69e8f5d703ff84d"},{url:"/_next/static/chunks/6658-82b96c3a9a4a8824.js",revision:"82b96c3a9a4a8824"},{url:"/_next/static/chunks/6893-f9f5de08391f1aa1.js",revision:"f9f5de08391f1aa1"},{url:"/_next/static/chunks/6928.394f0fed44064426.js",revision:"394f0fed44064426"},{url:"/_next/static/chunks/6c44d60f.b25c3e8943fa385a.js",revision:"b25c3e8943fa385a"},{url:"/_next/static/chunks/7229.c2717ec8000f3d30.js",revision:"c2717ec8000f3d30"},{url:"/_next/static/chunks/7536-636d47fb97451862.js",revision:"636d47fb97451862"},{url:"/_next/static/chunks/75fc9c18-e9ae95234248f008.js",revision:"e9ae95234248f008"},{url:"/_next/static/chunks/7737-35efa5a1b7754f7a.js",revision:"35efa5a1b7754f7a"},{url:"/_next/static/chunks/7745-e8a432fc644e8746.js",revision:"e8a432fc644e8746"},{url:"/_next/static/chunks/78e521c3-7a233ad429577011.js",revision:"7a233ad429577011"},{url:"/_next/static/chunks/9276-6a0b760580ffd8e2.js",revision:"6a0b760580ffd8e2"},{url:"/_next/static/chunks/9712-ef2c549ec6b09c8a.js",revision:"ef2c549ec6b09c8a"},{url:"/_next/static/chunks/d0c16330-b2123a94e7d072ee.js",revision:"b2123a94e7d072ee"},{url:"/_next/static/chunks/d64684d8-0b83eb5cd92c25fe.js",revision:"0b83eb5cd92c25fe"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-13696be18266d115.js",revision:"13696be18266d115"},{url:"/_next/static/chunks/pages/_app-d0a62da2eac006ce.js",revision:"d0a62da2eac006ce"},{url:"/_next/static/chunks/pages/_error-7921b3c054354aa5.js",revision:"7921b3c054354aa5"},{url:"/_next/static/chunks/pages/articles/%5Bid%5D-d2b13df30022755b.js",revision:"d2b13df30022755b"},{url:"/_next/static/chunks/pages/articles/videos/%5Bid%5D-6c7e5c8b925e1e0b.js",revision:"6c7e5c8b925e1e0b"},{url:"/_next/static/chunks/pages/auth-cd88b3df8c01879d.js",revision:"cd88b3df8c01879d"},{url:"/_next/static/chunks/pages/auth/login-cbe1d9e950945284.js",revision:"cbe1d9e950945284"},{url:"/_next/static/chunks/pages/auth/register-2a145b829965d135.js",revision:"2a145b829965d135"},{url:"/_next/static/chunks/pages/dev-f788889f939a8bc5.js",revision:"f788889f939a8bc5"},{url:"/_next/static/chunks/pages/fantasy-sports-f864cb6d10130c91.js",revision:"f864cb6d10130c91"},{url:"/_next/static/chunks/pages/games-c0b9ca9541e13bcd.js",revision:"c0b9ca9541e13bcd"},{url:"/_next/static/chunks/pages/games/cricket-911f8b4ed1e30ae7.js",revision:"911f8b4ed1e30ae7"},{url:"/_next/static/chunks/pages/games/cricket/%5Bid%5D-703dd59e709e9d72.js",revision:"703dd59e709e9d72"},{url:"/_next/static/chunks/pages/games/cricket/%5Bid%5D/create-team-732cec9ff4f2cc72.js",revision:"732cec9ff4f2cc72"},{url:"/_next/static/chunks/pages/games/cricket/%5Bid%5D/edit-team/%5Bslug%5D-075fd400bbc63e2b.js",revision:"075fd400bbc63e2b"},{url:"/_next/static/chunks/pages/games/cricket/contest/%5Bid%5D-3f7cc3022e20dd89.js",revision:"3f7cc3022e20dd89"},{url:"/_next/static/chunks/pages/games/cricket/contest/%5Bid%5D/join-345acbff1516614b.js",revision:"345acbff1516614b"},{url:"/_next/static/chunks/pages/games/cricket/player-detail/%5Bslug%5D-99e5987754fa51ec.js",revision:"99e5987754fa51ec"},{url:"/_next/static/chunks/pages/games/cricket/player-info/%5BmatchSlug%5D/%5BplayerSlug%5D-740229c2c5f2048a.js",revision:"740229c2c5f2048a"},{url:"/_next/static/chunks/pages/games/cricket/winners/%5Bid%5D-68f0caa28faf4157.js",revision:"68f0caa28faf4157"},{url:"/_next/static/chunks/pages/games/my-contests-c6de037c68c6f95d.js",revision:"c6de037c68c6f95d"},{url:"/_next/static/chunks/pages/games/my-contests/%5Bid%5D-3888f3880aab4fdb.js",revision:"3888f3880aab4fdb"},{url:"/_next/static/chunks/pages/games/my-contests/%5Bid%5D/view/%5Bslug%5D-172539215891129c.js",revision:"172539215891129c"},{url:"/_next/static/chunks/pages/hellsbay-350027601c0b526a.js",revision:"350027601c0b526a"},{url:"/_next/static/chunks/pages/hellsbay/boxers/%5Bid%5D-f729676c027783ff.js",revision:"f729676c027783ff"},{url:"/_next/static/chunks/pages/hellsbay/events/%5Bevent%5D-4c71a143445e2af5.js",revision:"4c71a143445e2af5"},{url:"/_next/static/chunks/pages/index-61b203d88e7a2c3d.js",revision:"61b203d88e7a2c3d"},{url:"/_next/static/chunks/pages/marketplace-11b3d8e9f7115100.js",revision:"11b3d8e9f7115100"},{url:"/_next/static/chunks/pages/notifications-3edb569fc49bdbc6.js",revision:"3edb569fc49bdbc6"},{url:"/_next/static/chunks/pages/profile-78cd50f00ee2d9ab.js",revision:"78cd50f00ee2d9ab"},{url:"/_next/static/chunks/pages/profile/social/info/%5Bid%5D-35c670c533d89351.js",revision:"35c670c533d89351"},{url:"/_next/static/chunks/pages/profile/user/%5Bid%5D-c4f8dfd5c46626be.js",revision:"c4f8dfd5c46626be"},{url:"/_next/static/chunks/pages/profile/verification/mobile-89b9ca7debbe1953.js",revision:"89b9ca7debbe1953"},{url:"/_next/static/chunks/pages/recent-contests-f88386724513ef30.js",revision:"f88386724513ef30"},{url:"/_next/static/chunks/pages/referal-9c391fe5dcca8b8d.js",revision:"9c391fe5dcca8b8d"},{url:"/_next/static/chunks/pages/transaction/sucess-a3a22f53e132441e.js",revision:"a3a22f53e132441e"},{url:"/_next/static/chunks/pages/wallet-b8a6229102e952ea.js",revision:"b8a6229102e952ea"},{url:"/_next/static/chunks/pages/wallet/%5Bwalletid%5D/transactions-4979a528a1a9b5c7.js",revision:"4979a528a1a9b5c7"},{url:"/_next/static/chunks/pages/wallet/buy/crypto-eb9c245e1a326997.js",revision:"eb9c245e1a326997"},{url:"/_next/static/chunks/pages/wallet/create-73ec1f7e4ef48a9b.js",revision:"73ec1f7e4ef48a9b"},{url:"/_next/static/chunks/pages/wallet/deposit/crypto-78fc52984c3d06bb.js",revision:"78fc52984c3d06bb"},{url:"/_next/static/chunks/pages/wallet/deposit/crypto/%5Bid%5D-9886520a69148249.js",revision:"9886520a69148249"},{url:"/_next/static/chunks/pages/wallet/withdraw/crypto-481b5d57336caa18.js",revision:"481b5d57336caa18"},{url:"/_next/static/chunks/pages/wallet/withdraw/crypto/%5Bid%5D-9614c20e13dcf9a5.js",revision:"9614c20e13dcf9a5"},{url:"/_next/static/chunks/pages/wallet/withdraw/tiar/%5Bid%5D-5453b0da1a82faa0.js",revision:"5453b0da1a82faa0"},{url:"/_next/static/chunks/pages/wardroids-f6b09b2e1274033d.js",revision:"f6b09b2e1274033d"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/reactPlayerDailyMotion.9cd4b13b314233dc.js",revision:"9cd4b13b314233dc"},{url:"/_next/static/chunks/reactPlayerFacebook.b4b1f2a38ae7800b.js",revision:"b4b1f2a38ae7800b"},{url:"/_next/static/chunks/reactPlayerFilePlayer.15ff582118679795.js",revision:"15ff582118679795"},{url:"/_next/static/chunks/reactPlayerKaltura.d079fc5dfeb5196a.js",revision:"d079fc5dfeb5196a"},{url:"/_next/static/chunks/reactPlayerMixcloud.52a36f8fb16a19c9.js",revision:"52a36f8fb16a19c9"},{url:"/_next/static/chunks/reactPlayerPreview.a42736cb58c0c9b3.js",revision:"a42736cb58c0c9b3"},{url:"/_next/static/chunks/reactPlayerSoundCloud.213c3b64c415eebb.js",revision:"213c3b64c415eebb"},{url:"/_next/static/chunks/reactPlayerStreamable.9e6ce6c4b00a1de1.js",revision:"9e6ce6c4b00a1de1"},{url:"/_next/static/chunks/reactPlayerTwitch.6f886b698d07ab7b.js",revision:"6f886b698d07ab7b"},{url:"/_next/static/chunks/reactPlayerVidyard.3a08ff3e640fcbce.js",revision:"3a08ff3e640fcbce"},{url:"/_next/static/chunks/reactPlayerVimeo.20e74f65eba80c1d.js",revision:"20e74f65eba80c1d"},{url:"/_next/static/chunks/reactPlayerWistia.c89946e320b227e8.js",revision:"c89946e320b227e8"},{url:"/_next/static/chunks/reactPlayerYouTube.57005e3004d453a0.js",revision:"57005e3004d453a0"},{url:"/_next/static/chunks/webpack-2ad18035d8659d9d.js",revision:"2ad18035d8659d9d"},{url:"/_next/static/css/62967ec6ba5129e1.css",revision:"62967ec6ba5129e1"},{url:"/favicon.svg",revision:"944e6903fc99c78f8efb5bb1133982fa"},{url:"/files/android.apk",revision:"5da204d9c053fdca7075aa2395802916"},{url:"/icon-192x192.png",revision:"312a8043f5aa0cafb241b386ad7d9b80"},{url:"/icon-256x256.png",revision:"26cf83f89f03ec045b70478fc2e970cc"},{url:"/icon-384x384.png",revision:"3de1438ee75aadcfd5270d27059d719e"},{url:"/icon-512x512.png",revision:"8e42b55c48d6d8a45af3cde316517b3c"},{url:"/images/8ball_pool.png",revision:"1dfd82039b331cd540acaa9c822d81ef"},{url:"/images/No Offer.svg",revision:"d2e1cfc09448989b13e5e2ce4004ad12"},{url:"/images/No transaction.svg",revision:"306db2fc7ae6ac57d78b36ff44f8c7b7"},{url:"/images/Rectangle 256.png",revision:"d40ae501c73d29d12054506629eee521"},{url:"/images/badge_1.svg",revision:"73bd85567816a589f3682c66507f0108"},{url:"/images/badge_2.svg",revision:"5f5875812b8eedd01c63264ed2562b9f"},{url:"/images/badge_3.svg",revision:"bd04b1f8f41e5295bf5ae913c17c2435"},{url:"/images/ball and stumps 1.png",revision:"be23c80f21e4fbdea001cb723f6bf437"},{url:"/images/ball and stumps.svg",revision:"a023c71e6b584761a424c6cf04009747"},{url:"/images/banner_1.png",revision:"bf30c2c9f1fe407a7d9910781f55b4d5"},{url:"/images/banner_10.png",revision:"ade069c2eecb3eb295aa691cf971e519"},{url:"/images/banner_11.png",revision:"5fb26045575a4c40a9481ca9d26f1c13"},{url:"/images/banner_12.png",revision:"b4e9847cd236de62d6f3bbaa32f189fc"},{url:"/images/banner_13.png",revision:"29ad19ee9876b07c4282d4f3f680aec3"},{url:"/images/banner_14.png",revision:"5c8afaf3f5d3e58051914cb50a21c0f1"},{url:"/images/banner_15.png",revision:"67b9eac8b9b8e6a0caf7ab0a97cb5415"},{url:"/images/banner_16.png",revision:"6d0beaa542f2f6615004902a84cbcc17"},{url:"/images/banner_17.png",revision:"599933c4f64045eb23e42c81826bd2ac"},{url:"/images/banner_18.png",revision:"49fc15031a66d68ce8fc5f60ebeb5162"},{url:"/images/banner_19.png",revision:"4534f28fb0a59e1f678a3faf077ec4a1"},{url:"/images/banner_2.svg",revision:"75f09889acaaca74b93802f1eceefc94"},{url:"/images/banner_20.png",revision:"c58d79951b3483c4d425f5c8ec097877"},{url:"/images/banner_21.png",revision:"60552067ffa4d38cf4e318bc6d71cffc"},{url:"/images/banner_22.png",revision:"56308ee98cf6b12beac225d4c83e2a41"},{url:"/images/banner_23.png",revision:"29ad19ee9876b07c4282d4f3f680aec3"},{url:"/images/banner_24.jpeg",revision:"8505f0c8a7121bffb19854e5586c8730"},{url:"/images/banner_25.jpeg",revision:"52035cf0992be3d09230938ff17faf33"},{url:"/images/banner_26.jpeg",revision:"7b4bf2a904db1e76202cee846f65b2e4"},{url:"/images/banner_27.jpeg",revision:"9d03b13c1e3be68f91d1d6d8f0e8b8bc"},{url:"/images/banner_28.jpeg",revision:"0bebf9ac7ab37435b77b8104324bea81"},{url:"/images/banner_29.jpeg",revision:"0cc816a89f6d3ca26d5ddca0baa85fe3"},{url:"/images/banner_3.png",revision:"4ff91bfb558298db517970cf9d270282"},{url:"/images/banner_30.jpeg",revision:"88626a82d0d8822f5372958b485e7ba5"},{url:"/images/banner_31.jpeg",revision:"ab104a68ccfd6ff373d2aec8f2ab31d0"},{url:"/images/banner_32.png",revision:"865699f112beb6f2b94bdd8530c341bc"},{url:"/images/banner_33.png",revision:"fa3c91c2e0e4ec812278cb3d6357bb7c"},{url:"/images/banner_34.png",revision:"847136a3df077b04eca9bdb28343c4e6"},{url:"/images/banner_35.png",revision:"65afa9a98a443acd288680805789f323"},{url:"/images/banner_36.png",revision:"1c7507c3d3c41c31d4ea093b8409385f"},{url:"/images/banner_37.jpeg",revision:"fa2fc00a72af714cb595207a108e561f"},{url:"/images/banner_38.avif",revision:"e0b5efc2088f7a1a408a3dde46c40742"},{url:"/images/banner_38.png",revision:"935b33764c95646b40d67c6f01081927"},{url:"/images/banner_39.jpeg",revision:"9ad5bb518d4d13fab67733ff4c77f1b1"},{url:"/images/banner_4.png",revision:"0bbb6fd2ab818ee2620c3fb6a1be86ca"},{url:"/images/banner_40.jpeg",revision:"e5b7ebdc5e5ca2c3541f222fe5acabbe"},{url:"/images/banner_41.png",revision:"296e3574e73ffafc4880d8502688b0f3"},{url:"/images/banner_42.png",revision:"a458f8b4b41247b5a623fcb5cff5896c"},{url:"/images/banner_43.png",revision:"0b847feab6ee27bc16832da684c2bdd2"},{url:"/images/banner_44.jpg",revision:"44a6d26e5621780955c40068deed6441"},{url:"/images/banner_44.png",revision:"6e3fa7fa499eba02f061bf2b7b7f9d28"},{url:"/images/banner_5.png",revision:"c8211c36348ba33a262c59eaeb592863"},{url:"/images/banner_6.png",revision:"9ca489a01aa159ab1ebd706fca7c376c"},{url:"/images/banner_7.png",revision:"c001f4b7decc2714f9a312b26868ee32"},{url:"/images/banner_8.png",revision:"a6b5ca29f057a5251bde2a3a5d0e468f"},{url:"/images/banner_9.png",revision:"25f7e4383d0d42686c8831a370a176ae"},{url:"/images/bats man.svg",revision:"3596a274ebece710819f4efc5274971b"},{url:"/images/boxer_1.png",revision:"d09b4e7527d87d4e4889ae27bdb1f391"},{url:"/images/boxer_2.png",revision:"38b13c2e9bfab4ce6e66fd95f9295f2a"},{url:"/images/boxer_3.png",revision:"b7da8994dd28835c17e8e8957e7b8d18"},{url:"/images/boxer_full_1.png",revision:"f0b442ec9f2e62bb00e707d0ae0f67fd"},{url:"/images/boxing_1.png",revision:"4976c5d43e40378181746abbd35bb946"},{url:"/images/chess.png",revision:"843e4df156882eff1f1a74b0fc3a1867"},{url:"/images/chess.webp",revision:"a0611f8a0af6214c778a77966e891cfc"},{url:"/images/chess_1.svg",revision:"fabb0089d65126751cba7602f60b4853"},{url:"/images/chess_logo_1.svg",revision:"01079866e3ee2567db6220ca4771349d"},{url:"/images/chess_overview.svg",revision:"f365f4091995f52099f0e1e15efb5090"},{url:"/images/chess_piece_black.svg",revision:"63defaaaa800be3bccd0f1719f0b759e"},{url:"/images/chess_piece_white.svg",revision:"9528e0f5b1ed8d140d4dd6ba2fb24b13"},{url:"/images/create_team.png",revision:"0f57cd1e21f9d9f2e83c2ce30ba73c99"},{url:"/images/credit-card.svg",revision:"47905edec77eed1f71b823237faf359c"},{url:"/images/cricket_logo.png",revision:"289c641992274ca274474c7b883abe89"},{url:"/images/cricketer_img_1.png",revision:"4e52904b3509ee77e001ab3351add9e2"},{url:"/images/crypto_coin_logos/binance.svg",revision:"8705fd81e119294bc526887bc154e5c5"},{url:"/images/crypto_coin_logos/bitcoin.svg",revision:"f92890de8d6512e2597d378f00254e71"},{url:"/images/crypto_coin_logos/ethereum.svg",revision:"7c19954628081bf6fd772fa0d0819547"},{url:"/images/crypto_coin_logos/ethereum_2.svg",revision:"d036573be80b5539003084e45b8195be"},{url:"/images/crypto_coin_logos/polygon-matic.svg",revision:"1087d3d671ac2ca5eeea49c18e1175bf"},{url:"/images/crypto_coin_logos/solana.svg",revision:"4e6fecb2c83dd517ad34f5851b99ca82"},{url:"/images/crypto_coin_logos/solana_2.svg",revision:"e7236179ebacdddca661c3b296603a7d"},{url:"/images/crypto_coin_logos/tiar.svg",revision:"534ab2741457f0e1614472a7de5c7258"},{url:"/images/crypto_coin_logos/usdt.svg",revision:"43f688a0313c926433ef60c377c7cc51"},{url:"/images/desktop_banners/1.jpeg",revision:"0d3d63f98e9da561f71a49a8d0c7b55f"},{url:"/images/desktop_banners/2.jpeg",revision:"bcb7b4ca8d702542cf98b3ea5733af15"},{url:"/images/desktop_banners/3.jpeg",revision:"70b6a309a8b2b7b8c0dba466b9747612"},{url:"/images/desktop_banners/4.jpeg",revision:"1fff8207f42b6f486357b3a2a085f7d4"},{url:"/images/desktop_banners/5.jpeg",revision:"64f007604e4be3fd1ee7f03d2fa0b8ff"},{url:"/images/desktop_banners/6.jpeg",revision:"af1785518f6802de397bfd74c67b24fc"},{url:"/images/desktop_banners/7.jpeg",revision:"96ddb17b863b90a84a2604797f705989"},{url:"/images/desktop_banners/8.jpeg",revision:"a5c1ab665d33e962887bcabc2a7e3847"},{url:"/images/desktop_banners/9.jpeg",revision:"f445eb36c1c42c9880a4a0a338146b0f"},{url:"/images/discord.svg",revision:"e6ee57a0a9db9d13819414ca564653d0"},{url:"/images/fantasy_sports_icon_select.svg",revision:"53a605ed9046d6c116937b30f857fc8e"},{url:"/images/fantasy_sports_icon_unselect.svg",revision:"12ed0b4bd638474e0f19e3d7a480f8cd"},{url:"/images/fight1.png",revision:"25f7e4383d0d42686c8831a370a176ae"},{url:"/images/fight2.png",revision:"a6b5ca29f057a5251bde2a3a5d0e468f"},{url:"/images/fight3.png",revision:"ade069c2eecb3eb295aa691cf971e519"},{url:"/images/fight4.png",revision:"60552067ffa4d38cf4e318bc6d71cffc"},{url:"/images/fight5.png",revision:"56308ee98cf6b12beac225d4c83e2a41"},{url:"/images/frame_1.svg",revision:"9afe8c505d6c4029c8f8d5fcd0da28a7"},{url:"/images/frame_10.svg",revision:"f8d634e850d552a24cc0b40b5016be8f"},{url:"/images/frame_11.svg",revision:"139d83ed59d672343885ad9996a0a8b3"},{url:"/images/frame_12.svg",revision:"1e93f377da5e99727ac27dfbab17277b"},{url:"/images/frame_13.svg",revision:"f4e62ade9ea4bb64ab24a79d452df391"},{url:"/images/frame_14.svg",revision:"855361e6894c9d371ecfc88e2bcd35b5"},{url:"/images/frame_15.svg",revision:"a49b7640ee39f2c8212becc2b20f6c5f"},{url:"/images/frame_16.svg",revision:"9f7d2a06000ffbaef62b27137ef32bc9"},{url:"/images/frame_17.png",revision:"77e44ff21804d32f7e00bc30b2165bb2"},{url:"/images/frame_17.svg",revision:"bba739769f03541398f982b43e3f110f"},{url:"/images/frame_18.svg",revision:"a65074dad59bc111557e001984baec58"},{url:"/images/frame_19.svg",revision:"5543bf667348ec5ab480b2a38ffac229"},{url:"/images/frame_2.svg",revision:"cf817477ea8858e33ee8443e4a4f8576"},{url:"/images/frame_3.svg",revision:"ceee25ca7697f11f926931c28f68be8c"},{url:"/images/frame_4.svg",revision:"9822afa79c5591d333ef6473ff6f7697"},{url:"/images/frame_5.svg",revision:"6b3bdc30ad29cc0de78fa9f1bd9d649f"},{url:"/images/frame_6.svg",revision:"a3e64a1203204c847f90a5c61f37c87a"},{url:"/images/frame_7.svg",revision:"1b809fe92c8157835f95d3aae20f9752"},{url:"/images/frame_8.svg",revision:"090fa4ecc6de8fe507ba8cb3f58c7e8e"},{url:"/images/frame_9.svg",revision:"a7d10e767af6d8f8ca1ffe5a4edc809d"},{url:"/images/games_baseball.jpg",revision:"874378412762bc97d417dea7d12ac41a"},{url:"/images/games_baseball_1.webp",revision:"90886c7c77b0869cad6e1d1845ef7819"},{url:"/images/games_basketball.jpg",revision:"746d3c7f719c4aab91f6b90446142a94"},{url:"/images/games_boxing.jpg",revision:"91e8d6e67cf6cd7a299620ae9796cdfc"},{url:"/images/games_boxing_1.png",revision:"1c42a0ffb64d3b5a3d6a5accd945e94e"},{url:"/images/games_chess.jpg",revision:"90c04fa6f92833b825afe1daac173a60"},{url:"/images/games_chess_1.png",revision:"18c4531f7a9881f36485d3109e51bf28"},{url:"/images/games_cricket.jpg",revision:"f0dd1257b6675bc27e6c7c5c15152a10"},{url:"/images/games_cricket_1.png",revision:"4a50a0ee9fc14cf6f2251ba7aa2d33cf"},{url:"/images/games_football.jpg",revision:"394e9bec1496651aa041ccaee0c581f4"},{url:"/images/games_football_1.png",revision:"ec19f3ef9140e211388594570bf692ef"},{url:"/images/games_icon_select.svg",revision:"6eeb63e73da16525740afd8b4b1172dd"},{url:"/images/games_icon_unselect.svg",revision:"824d109fb237dbee19dd7270c3cbab44"},{url:"/images/games_mma.jpg",revision:"a93be76684909fc6b66406343acf3b55"},{url:"/images/games_war_of_wardroids.jpg",revision:"bd872bf9f20997ce7918c3aaad1cd114"},{url:"/images/games_wardroids.png",revision:"cdbd520c3affd16aa3b5fce07c116dcb"},{url:"/images/games_wardroids_2.png",revision:"dbd36a44266cb00af5462973d68f93e6"},{url:"/images/gift.svg",revision:"91b55850a186405281017b6e23b13fe7"},{url:"/images/hellsbay_icon_select.svg",revision:"e35fd4d3a2446e3968d3f7ffc7ee645d"},{url:"/images/hellsbay_icon_unselect.svg",revision:"66a0b557abe073df4ab754b8989a0a4c"},{url:"/images/hfl_logo_1.svg",revision:"dab679500d41dc20400bb7f5b0aac484"},{url:"/images/hfl_logo_2.svg",revision:"42197c2271ed4dfe4f64a49ce46b28ac"},{url:"/images/hfl_powered_by_wardroids.png",revision:"b35943fb2d4d330a1d1873848ad70b49"},{url:"/images/home_icon_select.svg",revision:"69b2275f9ca06252bada5868083f67f5"},{url:"/images/home_icon_unselect.svg",revision:"a43d58f61124685e172a275bffd1f07a"},{url:"/images/icon_boxing.svg",revision:"c75bf8ed47cf95892603991c4d376cea"},{url:"/images/icon_boxing_2.png",revision:"f9b2e34eeed80b8366080c0ea7eee7c4"},{url:"/images/icon_games.svg",revision:"bb9014a3d02c098ae7fe836e50391d87"},{url:"/images/icon_games_2.png",revision:"e3e00731c2787ed3a16b7ecdd820ee61"},{url:"/images/icon_home.svg",revision:"c311a1367d27ca246c492138ec50c622"},{url:"/images/icon_home_2.png",revision:"71aa1dbd232d62a05cba11ac50a14c58"},{url:"/images/icon_marketplace.svg",revision:"8443ca31e466cec4f9ac24fc7605db06"},{url:"/images/icon_marketplace_2.png",revision:"173e8e903ccfc063d1d43b7f666e36b4"},{url:"/images/icon_wallet.svg",revision:"0d56ea7e08c89682433d4ff8ba602ade"},{url:"/images/icon_wallet_2.png",revision:"ebf42746ae4345855cd4e041278d68f7"},{url:"/images/joinContest.png",revision:"c8162210d0d63d3f310c8ceb73ae6197"},{url:"/images/joinTeam.png",revision:"25592d51b2bff588fd03395a0980d75a"},{url:"/images/line_1.svg",revision:"d70d8f9231286fa2b20557cf9e1b4839"},{url:"/images/ludo.png",revision:"527bbdd2a3f666f9b3ae6d3c1ff8a98e"},{url:"/images/marketplace_icon_select.svg",revision:"42a5190d952fa77e68a97541cf3c001a"},{url:"/images/marketplace_icon_unselect.svg",revision:"96aa5af87927fdb699f7ed31649e52de"},{url:"/images/medal_1.svg",revision:"e676122dbbad1f8ff4d71f57631c21d4"},{url:"/images/medal_2.svg",revision:"c3d7be22c95977c60bf43d78ef3f387e"},{url:"/images/medal_3.svg",revision:"12ca00c52f5e3c64f15b2f9d3778f5a0"},{url:"/images/medal_4.svg",revision:"5c1b22491a547caf699c2795e8250257"},{url:"/images/medium.svg",revision:"550e542bb6f496f2fc3567174ea4a769"},{url:"/images/mini_golf.png",revision:"a638f0421cea2fd6f077b179dfe8b29c"},{url:"/images/mymatch.png",revision:"fcf6f36df94543d9e458e076a93aa518"},{url:"/images/nft_1.jpeg",revision:"1f4bafb88035b86e53d8011aa5c74320"},{url:"/images/nft_2.png",revision:"021b6b920e79f60f001d47c28cf6cdd6"},{url:"/images/nft_3.jpeg",revision:"d73a0c163b7217603dd584c8dc97c4a1"},{url:"/images/nft_4.png",revision:"255c7847ff866ad5c084578cddd43525"},{url:"/images/nft_5.jpeg",revision:"4d4531d44f7267a2de491f3911a5c2e2"},{url:"/images/nft_6.png",revision:"3dfc247bfb9a0a691ac44f03141be130"},{url:"/images/no game play.svg",revision:"b705fce80a8196cf60de3d1749978256"},{url:"/images/noFriends.png",revision:"ee77fe0d9b435bca5bf570648c973a50"},{url:"/images/payment_confirmation.svg",revision:"f07dc45a3de466f4556a7c7e80d31cbd"},{url:"/images/pitch.png",revision:"2745ffab752e34e556b6722b15bcfb27"},{url:"/images/pitch_2.png",revision:"38fa99aa4137dc77dff1681133ce334b"},{url:"/images/profile_default_1.svg",revision:"82f34663aade229d77ca177a63891425"},{url:"/images/profile_default_2.svg",revision:"d8c05fa77048df9b6d6ec1ff330e7d91"},{url:"/images/profile_default_3.svg",revision:"ff1fb88bb4c38fcdbafe36e1353c4da2"},{url:"/images/profile_default_4.svg",revision:"b47a857d09931c58dd6f810718e3e8e8"},{url:"/images/profile_default_5.svg",revision:"2d97914856de63608f630def58c06183"},{url:"/images/profile_default_6.svg",revision:"137a3fe3e7bfa0e18f214bcd038c5524"},{url:"/images/receive.svg",revision:"1289cfdc66e2900ffdaa802004716c7e"},{url:"/images/shugging.svg",revision:"1c7368164e34fc9469b55938d8e00062"},{url:"/images/six.svg",revision:"dd3377da92f3a54b24b138f9502e3022"},{url:"/images/stadium.jpeg",revision:"d9061c2f50c2f216a061534cce5e386d"},{url:"/images/team.svg",revision:"1c098982cdf116aab62055a17b805ab9"},{url:"/images/teams/banglore.svg",revision:"79b77a3830929c38108e4e0c2d93c494"},{url:"/images/teams/banglore_white.svg",revision:"5cc503062d1913483903f778ad78bad4"},{url:"/images/teams/chennai.svg",revision:"10668eef38a97c748a7526f0995ecf3f"},{url:"/images/teams/chennai_white.svg",revision:"c1d3ceeef5118c717189b2d3dd368eeb"},{url:"/images/teams/delhi.svg",revision:"3abc2d4f267784a57c6b3df2d461a933"},{url:"/images/teams/delhi_white.svg",revision:"07c7920386aa26c1900b09dfb5b5a29f"},{url:"/images/teams/hyderabad.svg",revision:"4623290912e2e4a43bc87c92030fd4d9"},{url:"/images/teams/hyderabad_white.svg",revision:"8b387e77d06410d1d598816fcd4078bd"},{url:"/images/teams/kolkata.svg",revision:"95da3358d2b5f4a892657bd4dec473c4"},{url:"/images/teams/kolkata_white.svg",revision:"827e0c935e734b3300637375edc35dbd"},{url:"/images/teams/mumbai.svg",revision:"5830adbf29d3283949d367e2f766004b"},{url:"/images/teams/mumbai_white.svg",revision:"3520e352bde9fd78a1c420b68a75ed70"},{url:"/images/tiar_logo_1.svg",revision:"dc20f4d4d76cb6ada61978637b82f9b7"},{url:"/images/tiar_logo_2.svg",revision:"d5e2e6a9e52f101f446b75b777a8f134"},{url:"/images/tiar_logo_3.svg",revision:"cc1b449e7f6ff38d01ee45ffeded5904"},{url:"/images/tiar_logo_4.svg",revision:"2505f2333b3a14ee25c3c1737ac450c3"},{url:"/images/twitter.svg",revision:"6e92cce2101dbe8b2164e979aaa8c164"},{url:"/images/wallet.svg",revision:"e31f3141865bdb8c1b921058ff534f35"},{url:"/images/wallet_icon_select.svg",revision:"2b4998261bd135bef747d9a932ba3e88"},{url:"/images/wallet_icon_unselect.svg",revision:"a2635bd3e16e12b0a8db0c753ed0e130"},{url:"/images/wardoids_frame_1.svg",revision:"262f1cf93343dcdbca58a7b550d3bb14"},{url:"/images/wardroids_1.png",revision:"f90a8ff76e8f56c477cc1b42dd93472e"},{url:"/images/wardroids_3.png",revision:"8da68ae2274e9913c738c7ee2d1f88a9"},{url:"/images/wardroids_4.png",revision:"703429ec295bb94a3f21f2e35089a932"},{url:"/images/wardroids_5.png",revision:"6a475757517542284b617e73ea593226"},{url:"/images/wardroids_frame_2.svg",revision:"aceca92dbda82e98b9b6609a5f5d32f4"},{url:"/images/wardroids_hidden.svg",revision:"ff6b522b064a3c279e8f2e81f8a7213b"},{url:"/images/wardroids_icon_select.svg",revision:"51e6046782f51479c96d60e908880dc3"},{url:"/images/wardroids_icon_unselect.svg",revision:"486c95eb6405029c50b253b129574df0"},{url:"/images/wardroids_symbol.svg",revision:"5e770d8757f16256cfa39f4ce3c3e110"},{url:"/images/whitelist_banner_1.png",revision:"618e22f0afcfc675c6a9a318d231af15"},{url:"/images/whitelist_banner_1.svg",revision:"f7afab0ada5c75d60c6f663a99572b01"},{url:"/images/whitelist_banner_2.svg",revision:"4106277b4a5cc622e4979cfe38d09652"},{url:"/manifest.json",revision:"366c756b2dad2c71748544810688a95a"},{url:"/videos/captain.mp4",revision:"8f968e1251aef3ff037057285b0cd246"},{url:"/videos/team.mp4",revision:"6c90d815c1adcbf45a298a470dbdc0f7"},{url:"/videos/video1.mp4",revision:"a9957b9420b788d12b153cbc23571e8d"},{url:"/videos/wardroids_teaser.mp4",revision:"4732a44c5f24c34687a303c47bf169fd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
