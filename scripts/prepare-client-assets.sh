#!/usr/bin/env bash
set -euo pipefail

source_root="${1:?Usage: scripts/prepare-client-assets.sh SOURCE_MATERIAL_DIRECTORY}"
media_root="${2:-public/media}"
client_root="$source_root/originals/Nari"
generated_root="$source_root/generated"
image_root="$source_root/Kiva"

if ! command -v convert >/dev/null 2>&1; then
  printf '%s\n' 'ImageMagick is required to prepare the client artwork.' >&2
  exit 1
fi

if [[ ! -f "$client_root/Model_File.png" ]]; then
  printf '%s\n' "Missing the supplied Nari model: $client_root/Model_File.png" >&2
  exit 1
fi

mkdir -p "$media_root"/{nari,ghosties,emotes,prinny-cult/roster,identity,streams,nails,resources,work,motifs,states,share,ui/{nav,badges,decorations,theme,utility}}

# The supplied model is an opaque PNG. Flood-fill only the connected white
# canvas so white details inside Nari's eyes, clothes, and accessories survive.
model_width=$(identify -format '%w' "$client_root/Model_File.png")
model_height=$(identify -format '%h' "$client_root/Model_File.png")
model_right=$((model_width - 1))
model_bottom=$((model_height - 1))

convert "$client_root/Model_File.png" \
  -alpha set -fuzz 4% -fill none \
  -draw 'matte 0,0 floodfill' \
  -draw "matte $model_right,0 floodfill" \
  -draw "matte 0,$model_bottom floodfill" \
  -draw "matte $model_right,$model_bottom floodfill" \
  -trim +repage -resize '1120x2400>' \
  -draw 'matte 441,1842 floodfill' \
  -draw 'matte 633,1483 floodfill' \
  -draw 'matte 303,784 floodfill' \
  -draw 'matte 595,784 floodfill' \
  -draw 'matte 202,457 floodfill' \
  -draw 'matte 697,457 floodfill' \
  -draw 'matte 259,349 floodfill' \
  -draw 'matte 640,349 floodfill' \
  -strip -quality 88 \
  "$media_root/nari/nari-model-fullbody.webp"

convert "$media_root/nari/nari-model-fullbody.webp" \
  -gravity North -crop '100%x57%+0+0' +repage \
  -resize '960x1360>' -strip -quality 88 \
  "$media_root/nari/nari-model-portrait.webp"

convert "$client_root/Assets/comfy.png" \
  -resize '820x820>' -strip -quality 88 \
  "$media_root/nari/nari-comfy-original.webp"

while IFS= read -r -d '' emote; do
  slug=$(basename "$emote" .png | sed -E 's/^Nari[[:space:]]*-[[:space:]]*//; s/[[:space:]]+/-/g' | tr '[:upper:]' '[:lower:]')
  convert "$emote" -resize '360x360>' -strip -quality 86 "$media_root/emotes/nari-$slug.webp"
done < <(find "$client_root/emotes/Static Versions" -maxdepth 1 -type f -name '*.png' -print0 | sort -z)

while IFS= read -r -d '' prinny; do
  slug=$(basename "$prinny" .png | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g; s/[^[:alnum:]]+/-/g' | tr '[:upper:]' '[:lower:]')
  # This is a lossless-looking size/format derivative only; the supplied
  # canonical illustration is neither redrawn, cropped, nor recomposed.
  convert "$prinny" -resize '560x560>' -strip -quality 90 "$media_root/prinny-cult/roster/$slug.webp"
done < <(find "$client_root/Assets/PrinnysForThrow" -maxdepth 1 -type f -name '*.png' -print0 | sort -z)

declare -A ghosties=(
  [ghostie-shy]='image-gen-1(20260823-035631).png'
  [ghostie-floating]='image-gen-1(20260823-035920).png'
  [ghostie-waving]='image-gen-10.png'
  [ghostie-chaotic]='image-gen-2(10).png'
  [ghostie-peeking]='image-gen-2(20260823-035921).png'
  [ghostie-cozy]='image-gen-3(4).png'
  [ghostie-heart]='image-gen-3(6).png'
  [ghostie-protective]='image-gen-4(3).png'
  [ghostie-nails]='image-gen-5(3).png'
  [ghostie-derpy]='image-gen-6(2).png'
  [ghostie-friendly]='image-gen-7(1).png'
  [ghostie-peeking-left]='image-gen-8(1).png'
  [ghostie-peeking-right]='image-gen-9.png'
)

for slug in "${!ghosties[@]}"; do
  convert "$image_root/${ghosties[$slug]}" -resize '620x620>' -strip -quality 86 "$media_root/ghosties/$slug.webp"
done

declare -A details=(
  [lavender-sprig]='image-gen-4(4).png'
  [autumn-leaves]='image-gen-5(4).png'
  [ghostie-wisps]='image-gen-6(3).png'
  [lavender-ribbon]='image-gen-7(2).png'
  [heart-sparkles]='image-gen-8(2).png'
)

for slug in "${!details[@]}"; do
  convert "$image_root/${details[$slug]}" -resize '760x760>' -strip -quality 84 "$media_root/motifs/$slug.webp"
done

identity_root="$generated_root/Nari_Identity_4_Full_Resolution/Nari_Identity_4_Full_Resolution"
convert "$identity_root/identity-wordmark-primary.png" -resize '980x450>' -strip -quality 88 "$media_root/identity/nari-wordmark.webp"
convert "$identity_root/identity-icon-mark.png" -resize '512x512>' -strip -quality 88 "$media_root/identity/nari-icon.webp"

cp "$generated_root/streams-assets/streams-assets/"*.svg "$media_root/streams/"
cp "$generated_root/nari-nails-assets-final/"*.svg "$media_root/nails/"
cp "$generated_root/nari-resources-assets/"*.svg "$media_root/resources/"
cp "$generated_root/nari-work-page-assets/"*.svg "$media_root/work/"
cp "$generated_root/nari-decorative-motif-system/"*.svg "$media_root/motifs/"
cp "$generated_root/nari-system-state-assets/"*.svg "$media_root/states/"
cp "$generated_root/nari-social-meta-assets/production-png/"*.png "$media_root/share/"

ui_root="$generated_root/nari-section-17-ui-assets/nari-section-17-ui-assets"
for category in nav badges decorations theme utility; do
  cp "$ui_root/$category/"*.svg "$media_root/ui/$category/"
done

public_root=$(dirname "$media_root")
convert "$identity_root/identity-site-favicon.png" -resize '64x64' -strip "$public_root/favicon.png"
convert "$identity_root/identity-site-favicon.png" -resize '180x180' -strip "$public_root/apple-touch-icon.png"
convert "$identity_root/identity-site-favicon.png" -resize '192x192' -strip "$public_root/icon-192.png"
convert "$identity_root/identity-site-favicon.png" -resize '512x512' -strip "$public_root/icon-512.png"

printf 'Prepared %s web-ready artwork assets, including the supplied Nari model and %s original Prinny designs.\n' \
  "$(find "$media_root" -type f | wc -l | tr -d ' ')" \
  "$(find "$media_root/prinny-cult/roster" -maxdepth 1 -type f | wc -l | tr -d ' ')"
