# Asset disposition — preservation maintenance

**Baseline:** `8c7fe67`, 11 September 2026. **Decision:** retain all public URLs and all raster bytes. No file was relocated or deleted. All 27 supplied Prinny designs, five storybook Ghosties required by preview validation, retained paintings, source masters and existing responsive candidates keep their contracts.

The baseline auditor found 129 review candidates totaling 1,076,962 bytes. A literal reference is not reachability proof; no match is not permission to remove an asset. Registering a file in this record can itself change a later heuristic audit category, without changing runtime behavior.

## Family decisions

| Family | Decision and evidence |
| --- | --- |
| 121 responsive candidates | Retain exact bytes/hashes, width ordering, crops and alpha. Runtime metadata is projected; source/integrity records remain intact. No codec/quality/candidate removal without browser DPR/network evidence. |
| Eight social JPEGs | Retain exact 1200×630 crops/bytes/URLs. The handoff’s lossy re-encoding experiment is not accepted artwork. Original generator inputs are external; browser/visual comparison was unavailable. Support still maps to the Haven preview. |
| 27 supplied Prinnies and retained paintings | Retain public locations. UI non-use does not repeal collection and direct-URL contracts. |
| Five storybook Ghosties | Retain public locations; `verify-preview.mjs` explicitly retrieves each. |
| Earlier Ghosties, emote variants and motifs | Retain pending explicit direct-URL/provenance disposition. Do not infer retirement from the scan alone. |
| 121 SVGs | Retain geometry and public URLs; 18 receive maintenance comments only, 103 remain imported asset-pack snapshots. See document 38. |
| Icons, identity and supplied model/portrait | Retain exact bytes; no new raster encoding or palette reduction. |
| Source/retired duplicates | Retain exact inventory paths/hashes. Checkout duplication is not evidence of duplicated packed Git history or browser transfer. |

Every candidate below remains at `public` + its URL; that is also its proposed/current location. SHA-256 is the **baseline** full hash. Raster hashes are unchanged. For vectors with new comments, geometry-equivalence evidence is recorded in document 37; hashes necessarily change even though artwork does not. Baseline bytes avoid confusing comment overhead with compression.

`Runtime` lists the auditor’s literal source consumers; none were found for these 129 candidates. `Contract/provenance` reports the actual matching owners. Other public assets are retained under the family decisions above; rerun `npm run audit:assets` for the complete 328-file live inventory.

| URL | Baseline bytes | Baseline SHA-256 | Runtime | Contract/provenance | Decision |
| --- | ---: | --- | --- | --- | --- |
| `/media/emotes/nari-shy-nb.webp` | 16788 | `2b38a592e59a62b12a2e61fda2e661a57fc1e8eeb3ae39d8e53268ecdf8a4834` | None found | No literal match | Retain public URL |
| `/media/emotes/nari-uwu-nb.webp` | 12284 | `edca4823c4f2def70a77a446ce2e66b278d4a4726d8443d7b7447500c0e3729f` | None found | No literal match | Retain public URL |
| `/media/environments/haven-common-room.svg` | 3872 | `14f0b15259c383aa8350b3ee24c907ba7db7c218611448c928d3f8cca88d136c` | None found | No literal match | Retain public URL |
| `/media/environments/haven-room-daylight.svg` | 4276 | `84fbc5d82bfa281f2457e10f3cdcc6ba7645fbe7e22240e05bcd96be71af85e8` | None found | No literal match | Retain public URL |
| `/media/environments/haven-room-night.svg` | 4342 | `e4e88ebb46787a259b00daa1b90636c49c7220870142a5ddc92cca311cf89817` | None found | No literal match | Retain public URL |
| `/media/environments/haven-room-sunset.svg` | 7412 | `302eabd5e462caa892e80c9f569b45caf9e2622649fda69200387a35b9dd3d53` | None found | No literal match | Retain public URL |
| `/media/environments/streams-room.svg` | 4051 | `84f8f9a4f2b7ec7d857741694b774f0e033847e93a82612372dbd38131e5d41b` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-chaotic.webp` | 32246 | `cb2a896784ff15831191d26edfe77a337fd619e5bd558fd056a277aa6b83ffd4` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-cozy.webp` | 32746 | `f5202ae2f73bfd9faf6148965b833bd32bff8b4d156f60e72bb9e1c4474912f3` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-derpy.webp` | 19668 | `8a2f1d3ddd7bab2d48c0dacc64a8b1a6d206e90bb7f60e62cf665aeaaca9a01c` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-floating.webp` | 35612 | `11b5d2dd928695f2667736d65ecbabc76deb233cb3b88de14074abf5fca57a12` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-friendly.webp` | 25524 | `8c1924ac02ea09d007dd1f0e3bcae9d57d90cdaad7829fa40eba4281f8f7e1ac` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-heart.webp` | 38264 | `861744237b78a877a5670875a5a39f3134e63a5b36beb96774bd0bbfbb654945` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-nails.webp` | 36378 | `b06ba72a69b26c5cfca73b181293c17dfb05a2d01b26f05cd38ae9a1ac352a4f` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-peeking-left.webp` | 18130 | `88c1d7fba6f376e40a9c26cc1ff588946bdf89207063c13666cb1088cff73dce` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-peeking-right.webp` | 21156 | `50b2f43158c358653ba2ff5d78e275d649ac4ca742d82806dd61a407336b9c57` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-peeking.webp` | 25366 | `19cbad38a313d9c353ac74a966e14b2584d0752189121172bdad33a58a7812de` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-protective.webp` | 37050 | `03b66a763cc62f403ce7937bc29ed1433e2b7947a7f01820ef68a2b20758bb66` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-shy.webp` | 37490 | `23c1066c9e6c85caeca1f0fe75b1f95ff4ee9327f5c4d33ee1a3eaaf10a8255d` | None found | No literal match | Retain public URL |
| `/media/ghosties/ghostie-waving.webp` | 27338 | `aa059f74552a77a09f655f55222b718982f36c88d4ce464afbd496262d5894ec` | None found | No literal match | Retain public URL |
| `/media/motifs/ghostie-wisps.webp` | 150778 | `4b94e4ad053679720e2eee1176d4dbb21e0703dbffe5fba74296d93ce6140c3b` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-autumn-leaf.svg` | 1120 | `02d5969e0e0fb0e73d8d2c769d13ce15e5b44e539e94912eaf9bca1bc454a25f` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-charm-trinket.svg` | 1461 | `c57c2dbfdf4982142474c27ae3eaf507a3557aae07a7c878ee3dff2189c5acd3` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-cute-warning.svg` | 1183 | `f2ef2acffbf647981aea21045ed873bb4ea99609555263a4e6da200f4e885249` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-emerald-eye-spark.svg` | 1270 | `5edcb9d89c0fc916ec63f44d0ce496f5e28d097c728e5e7372ce1c0efaa66665` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-fabric-stitch.svg` | 1274 | `fe4df21162ac332f842ef7a4bb8430078213fcdf25495056c442ae670f9503c7` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-ghost-wisp.svg` | 1409 | `f7e89121054a4e0053090311d2e8644813e9beb747c421eeffed76e4ac7df5c3` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-heart-spark.svg` | 1149 | `9e7c91b567c068d85e1ac76183e0eef1e25355da05bd9891f0bfa02ccb5d3543` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-lavender-sprig-1.svg` | 2186 | `474581c7801f1d944eba2ee9d84eb7c9d668cacb737eae540c39722bfb17c447` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-lavender-sprig-2.svg` | 2270 | `f2ed06efcf28e00b25948100180186d83ba00b4db232aa760cc001fc1701ee08` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-nail-polish-swipe.svg` | 1225 | `d07d2d10e2b6e2d6f806f75d2c751faa8fd8530435a5bacdfeebf77e410a03c2` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-ribbon-accent.svg` | 1270 | `9a64315b6bb968828d30352446d728414826d1877fef269d860be931c2818977` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-sickle-silhouette.svg` | 1266 | `0f15654dd9ea5bbbf45f83e2a4ddc9627bc5241763f14645b9d6c2ec8e241267` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-soft-star.svg` | 1175 | `befe9a6acc3e08ba2ad36d1f4ce8717a307ade2190a55ef5e18eb02e976cd822` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-soul-flame.svg` | 1291 | `71238ddc83b83cabbfb0f9eee864e778402c18bc89bd1dcc50fd117ed1ccf58a` | None found | No literal match | Retain public URL |
| `/media/motifs/motif-sun-moon-celestial.svg` | 1391 | `4f4efc896a945b7e2650a33882a165c843c50b6ab92364a91a90c107a22a3388` | None found | No literal match | Retain public URL |
| `/media/nails/nails-brushstroke-divider-01.svg` | 1853 | `700d12ae165ead423c7a48fb080e68b7e005398f5ee1c3d5a1b4530946417b6b` | None found | No literal match | Retain public URL |
| `/media/nails/nails-brushstroke-divider-02.svg` | 1879 | `6f074f32d7cad1b8d045304c16a953930bc8ff6eeac5bf41f7d2854e033a1315` | None found | No literal match | Retain public URL |
| `/media/nails/nails-brushstroke-divider-03.svg` | 1841 | `8bf14d26714d1bf2e477bb94efe82a8167daaf192f030c2fc7a41bbace04d6bc` | None found | No literal match | Retain public URL |
| `/media/nails/nails-environment-support.svg` | 6717 | `5a3da5ed27dbdd7db0ca7caa0ee41f0a8b42e02bef694ed7f27391363d51d7e1` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-01.svg` | 1621 | `8498419d6fe5ffc896c74124e4cfb70672397ff8b9a693313d20e81a44cc9cf3` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-02.svg` | 2600 | `f5dc90b16dea4710b5e25b39dd8393047c2fa4ef97b08e60561c5d5b42f10998` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-03.svg` | 1683 | `c1cb4f6d5ea9bea893436bc75773d0f7b170796155546aca11f6c7d762cea938` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-04.svg` | 3803 | `76c26ee95b291570bfdcb24e2299c61bc55377f7624d711a39800889935f1f3d` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-05.svg` | 1563 | `7fa767484b4732afbac74c3152781bcfec7f6d80534d06684fde4d66677c1f77` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-06.svg` | 2255 | `ec0f2a577e7c2ff3764f40c5c4bfe157b4d09cd911e33fed875c2d881e5955fc` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-07.svg` | 1834 | `782156beea302a7c87676ab8ebb7860b23f25b07a9577c5324329e06bb5c84a2` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-08.svg` | 4563 | `11581d87efd28a818502232f613c94ab2e1ea043e336fa6aa336d40f1638e708` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-09.svg` | 1892 | `13039eefbd59a01448eab383d86f1e31db3c80da8110f2d45daed29488b614f7` | None found | No literal match | Retain public URL |
| `/media/nails/nails-glitter-accent-10.svg` | 2192 | `c5105c05d87f4137b97645e9b9ad5248fd23c942ddf2bdc1d791d2467c370e42` | None found | No literal match | Retain public URL |
| `/media/nails/nails-manicure-station-vignette.svg` | 7340 | `9a6b5abc41a1f8b561b819d1a5f79f14bc039a40445518b4e10b63f34cc8e0d6` | None found | No literal match | Retain public URL |
| `/media/nails/nails-polish-bottle-illustration.svg` | 2533 | `ea26e89c1ac89ea93ab2a30a9b7dc2002aadbb8f1cc1dbe4c21a9b71be364af3` | None found | No literal match | Retain public URL |
| `/media/nails/nails-polish-ghostie.svg` | 3108 | `b79479acea655ccc72332c29d55d6b2597518b0947b6048afc90423be1ade53c` | None found | No literal match | Retain public URL |
| `/media/resources/resources-divider-celestial.svg` | 698 | `00136943265e17a8a2e7be854fa2d7b79b1b40dd45f6f3047b6391f960187787` | None found | No literal match | Retain public URL |
| `/media/resources/resources-divider-lavender.svg` | 984 | `5c842f5b049c93d77f5e430262e73a1dbcb39776b23f1e1a9bcbf456fc5b6cff` | None found | No literal match | Retain public URL |
| `/media/resources/resources-divider-wisp.svg` | 624 | `2c0015f456b60532fb6854094524c0f1336a6ce2871be0bbd088f9493a025e56` | None found | No literal match | Retain public URL |
| `/media/resources/resources-environment-support.svg` | 7432 | `c9422f6ecd2aa2580c5c78b7a7de0f1d54031c6003fc422079e1cb2d4a3da36c` | None found | No literal match | Retain public URL |
| `/media/resources/resources-helper-ghostie.svg` | 5636 | `382ac5758599b1ac4f887964bc97c0d3a5f20d24b18af084afe5b02c82f95813` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-community.svg` | 489 | `aebfe7cd6eb2210422467f4900deb9b17eb3fb29a16e7484c176d00cfb2b1104` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-creator.svg` | 452 | `bdfa5b0f5aac73c1f0a571c8f27f697f6e13775a3438b4fd6e98b42bc0a74d46` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-external-link.svg` | 426 | `3665fc6a403c0a6f0aa208a235a3168d8e0b77f051156f7d43db295af8d52020` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-important.svg` | 414 | `14c3dc6dcf65d634083d624078ae7d0a97897381db8ab75a878f6a00efac46fc` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-nails.svg` | 461 | `bd321419a85e45cacb6a7daa4cfa30e1eac3744c0d16204705314da656f5182e` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-safety.svg` | 408 | `da73c43acedd0ceedf16e70e6b73a363388894ed0a02d2887c636e09243a1069` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-streaming.svg` | 498 | `a64312c4b81a5830e2293cd442f147f316c088c8f12c7688e54da9a41adeddce` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-technical.svg` | 473 | `933c43b7b3e8b3ca2eb2b376a09b13bf4f18b2877a45d9a3a4695b8dc44f26f6` | None found | No literal match | Retain public URL |
| `/media/resources/resources-section-icon-wellness.svg` | 441 | `a43492b2e570bbaf1ba944ab9bbef44ec62dc2ed9a6db255d87136b3f5878e86` | None found | No literal match | Retain public URL |
| `/media/states/state-404-lost-ghostie.svg` | 3245 | `a2e94fc0d77f4d0adca0c9b4a109ae017831fe3e2c74d4c2e1ded700d84e81ac` | None found | No literal match | Retain public URL |
| `/media/states/state-500-chaos-ghostie.svg` | 3342 | `5f5eb0db4ec426583290e48e2211d17300f7c8deed8c3accf773ebe703d41e4b` | None found | No literal match | Retain public URL |
| `/media/states/state-coming-soon.svg` | 3356 | `1935890d736ffd955b8cc558c63aaa21c62559913e584d4536c29fc6e1fc0d91` | None found | No literal match | Retain public URL |
| `/media/states/state-contact-sent.svg` | 3207 | `183377629917b5aaab46daf973335c8ac5df3a33872cd315afa2b8f72361718e` | None found | No literal match | Retain public URL |
| `/media/states/state-empty-gallery.svg` | 3338 | `6fd5ec87ac68b9b0d7031eec131f16d25fdf1f51cf1682d014618baa75ee05ca` | None found | No literal match | Retain public URL |
| `/media/states/state-empty-streams.svg` | 3459 | `66d556c310e598baa9f6afad1679c01841315e73ec807787fb1bfedf70050afd` | None found | No literal match | Retain public URL |
| `/media/states/state-loading.svg` | 3179 | `98547a0b50f8ff16012808e8f0e45d4b846b62028e1aad6b2f48d8510dd5802c` | None found | No literal match | Retain public URL |
| `/media/states/state-no-results.svg` | 3229 | `c04a7243b99b8d842d9422843db9926fa6f3d812b9ac485ae0fdee34cab4a055` | None found | No literal match | Retain public URL |
| `/media/states/state-restricted.svg` | 3151 | `de17a19c85d4bfb0d856c0732e5e85615aa37ba79d7afe290d8e4a9e89cd6565` | None found | No literal match | Retain public URL |
| `/media/states/state-success.svg` | 3071 | `d5ec6f20e9ecdc17bd24138b84db659d3758b8c8efd4eebbe979c73ca64a87ea` | None found | No literal match | Retain public URL |
| `/media/storybook/ghosties/ghostie-chaos.webp` | 64828 | `a9d2625bbdeba3f140e7741f4124776a23df65a98035571bda98a43073ff9b08` | None found | `scripts/verify-preview.mjs` | Retain public URL |
| `/media/storybook/ghosties/ghostie-cozy.webp` | 69764 | `14157ccab551a1f301c12994d18ce656d84eb73e119c5668fb041a0a5f0af434` | None found | `scripts/verify-preview.mjs` | Retain public URL |
| `/media/storybook/ghosties/ghostie-heart.webp` | 59290 | `a3128812cc12db0c4c0563e11795db51ff935d000694dfd2fc4bc3389e44ac18` | None found | `scripts/verify-preview.mjs` | Retain public URL |
| `/media/storybook/ghosties/ghostie-nails.webp` | 66382 | `a12df6257c1b9f16069f31ab52256a2f5cb1f409a4aa3875da72321b1980f703` | None found | `scripts/verify-preview.mjs` | Retain public URL |
| `/media/storybook/ghosties/ghostie-shy.webp` | 41552 | `b092fca463c1d665388e02c0381b105c3eb45d30e766c71ad068fcb1457df3f3` | None found | `scripts/verify-preview.mjs` | Retain public URL |
| `/media/streams/streams-card-clips.svg` | 6895 | `7fceef4d5a922ba1081c72aa5fa9b5e7e16ebdce5d8963f5a172e3801d3672cd` | None found | No literal match | Retain public URL |
| `/media/streams/streams-card-highlights.svg` | 7154 | `b97cc4cb703d11343a541ff301d37536999b6d0d7636a4e0cbff192900ae17dd` | None found | No literal match | Retain public URL |
| `/media/streams/streams-card-vods.svg` | 6580 | `e5bc307c8e75fed00b40c353cf73f299c6ac84d72669f9d1da58a90504f6418c` | None found | No literal match | Retain public URL |
| `/media/streams/streams-loading-state.svg` | 4913 | `e7041bbaf0656a1a892fb313c7cc7b06ed40796df83bac5e53e350b7ab4ec359` | None found | No literal match | Retain public URL |
| `/media/streams/streams-no-videos-state.svg` | 6238 | `a693ca0d10a70eeac8689da9eee6cac5655130b8a0a2635cb140060e4edb032c` | None found | No literal match | Retain public URL |
| `/media/streams/streams-offline-state.svg` | 3932 | `9d1e641a880999f63faa06015b156360d87cb27d23ce63579ed2fd530feef9f1` | None found | No literal match | Retain public URL |
| `/media/streams/streams-platform-tiktok.svg` | 758 | `8182c8096302f93e2d717236d1822f68008a4dd5e93d5ad8942a48938e60b5a5` | None found | No literal match | Retain public URL |
| `/media/streams/streams-platform-twitch.svg` | 394 | `c5de89bf3c96825f259bb7b08e2fa444dfed2dab8aeac98a95ce3b7da31fdd4f` | None found | No literal match | Retain public URL |
| `/media/streams/streams-platform-youtube.svg` | 510 | `e64497681a3f6fd198dbcf4c11a6c42dda2e2d94639399a2c7398bc50ff3b5b8` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-chaotic.svg` | 291 | `e273f16df9b5d54b3136efe1bbd65813d04ec41a964657e69ccf3a7747119833` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-community.svg` | 415 | `53b3584bc282599cb189cf6211c8b5cbe75385834729b6948d468c0e98f419d1` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-cozy.svg` | 367 | `47540e58341b316908a218c8f79212bb45bcca846b24f440186b177794aa1ccc` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-ghostie-approved.svg` | 493 | `d1ec3dc8f41ff16432f15bbe90c038d189468ce791a11115967c0b5ff581b124` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-live.svg` | 363 | `3ea6e37b9b8233246a3bc80e1aac7fe484aca562bcc796c84e9a297f8387a64e` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-nails.svg` | 418 | `d07c7fb39d8308993c70c961cc10d7650e5e82e5b8b36fa6db0e4e99007174d9` | None found | No literal match | Retain public URL |
| `/media/ui/badges/badge-work.svg` | 406 | `534c434b241743d5593b5b8007fe111042ce524afac31f196c7201da4ef20b90` | None found | No literal match | Retain public URL |
| `/media/ui/decorations/button-decoration-set.svg` | 423 | `5429f61edbcc24bf47728bcd29cfd0b885c1d5d6816c9d9845620da0790d60b1` | None found | No literal match | Retain public URL |
| `/media/ui/decorations/form-field-decoration-set.svg` | 349 | `49dcd0fa5fdc41ec7f90da28425bd27697c9b95503944b34ab58cd316665eae4` | None found | No literal match | Retain public URL |
| `/media/ui/decorations/social-link-button-style-set.svg` | 346 | `9d44159c7b91ce7602dde14b31d2e7b04aaacc95627f650462b443f663e643c8` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-haven-icon.svg` | 389 | `0cfb64192363e1407fb7fc0cc7f086a8eeee448f0fab58e9f71712b1f348f23c` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-home-icon.svg` | 386 | `c58f022de840ab75f025e277527574d7fa59c0918b330f3ab34bc0e634df2a15` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-meetnari-icon.svg` | 378 | `066cde2bb406bb14b3eb6f75e4bedd3837e6ba3d86f0ed2e9b3b6794324679b0` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-nails-icon.svg` | 421 | `71ab8b9e7f8522b938758a8bd73d4ab0ceca52cee14cd5c9baa647b71ea795cd` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-prinnycult-icon.svg` | 639 | `622d860f9e2374b0ee13113e31b9ae1e950c83d7f3d8ddac3e008421757ac9cd` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-resources-icon.svg` | 413 | `8f5550ead7091af50d8251c2b45f867470641b70de510af35172dccebd51fd64` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-streams-icon.svg` | 353 | `a7acd16ca4cf273900e19ea008490a9ce509a85b430c7d7e1dd83784b39679f2` | None found | No literal match | Retain public URL |
| `/media/ui/nav/nav-work-icon.svg` | 409 | `1e1322bf8d4f7e1e4a42cb41f1d5aec9e341613ad2fc40374e48077beacd4770` | None found | No literal match | Retain public URL |
| `/media/ui/theme/toggle-theme-icon-dark.svg` | 310 | `723077de328904de96c554bd40c42203c1aaac434e0b690dc21a3bb7c8f023ca` | None found | No literal match | Retain public URL |
| `/media/ui/theme/toggle-theme-icon-light.svg` | 366 | `01130423dd5c9d5d2d244f5cdc2fd188b439bd1b0478d2c390b78ad665cb149b` | None found | No literal match | Retain public URL |
| `/media/ui/theme/toggle-theme-icon-nari.svg` | 423 | `258ffc15e5f3918e90a3a5c10c6343f1b21f5d3b7ee3a31b8ed77a1b137cecf4` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-arrow-left.svg` | 234 | `1d736955d560fb90aa4f408f08d2731802339dfcae23de22e16fcc4def0a35bd` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-arrow-right.svg` | 234 | `6da7d7050258cdd8068ac33748f1e9a6885522e0afb21958843e91d99985c82d` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-check.svg` | 227 | `aed1f171ff63af54a9d01a8101fb35fe0433693835ddc7bf7dd2d0ff225a3e31` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-chevron-down.svg` | 226 | `1f0780b0558cd1f5d6218d82947532c9223515742c1186900c93605946295a51` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-close.svg` | 227 | `a9391b90c6e77b0ef2527d1244217e691dd0a1c56810521eae63a53021a85634` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-copy.svg` | 336 | `254e3b6bea6b1ec92a18eb6aa56c1f231b425352428bff436da33fd9118e93ed` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-expand.svg` | 302 | `2d129cc43a03dcb6137cf45097f9aca5a45192c338c72a881e0e1949971d699f` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-external-link.svg` | 330 | `acb70a5e71cf51a2b38c9715d66fe7d2768be3be581d01ce1c9976dd32d128ad` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-info.svg` | 259 | `b9bfa5a11a66304d93037d87bc6d053ccf2fa35aeaa6785ba14f96a43bfb3290` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-menu.svg` | 229 | `1761dab26f93a69ca10ed92022ff330074c8429581424ca2e55194ce80c9d2c1` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-volume-muted.svg` | 271 | `53989f3060a9edb3a628791c6a0821f6b3990ca08a6b6561ad8869629c51cf85` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-volume.svg` | 329 | `583cfa2443fea0fb1a21cce51abd5aec22004d495500ebec861e8c1cf3609df9` | None found | No literal match | Retain public URL |
| `/media/ui/utility/ui-icon-warning.svg` | 334 | `3754907ea8a73bea561db6d4927779d5d8dafc506ae88f58b72cc3567dc4370b` | None found | No literal match | Retain public URL |
| `/media/work/work-business-card-graphic.svg` | 2463 | `cad04320177952f1f4fbc91b23e301dd06cb1585fdb1f1dffddd82ad1f7f206d` | None found | No literal match | Retain public URL |
| `/media/work/work-contact-vignette.svg` | 3496 | `f8b2623158b343f52b81487a9044ced6017ecb4a56b52992f3664144faf98e89` | None found | No literal match | Retain public URL |
| `/media/work/work-environment-support.svg` | 3942 | `d508d9c26a50fbc82adb64f0db15313555e233f10b15af61d9111c44249ab8b2` | None found | No literal match | Retain public URL |
| `/media/work/work-inquiry-ghostie.svg` | 2974 | `43891806b0f489710522c4b7f0c7f9b9cfbdecf03ebec914c60c7516a76325c4` | None found | No literal match | Retain public URL |
