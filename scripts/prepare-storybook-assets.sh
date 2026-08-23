#!/usr/bin/env bash
set -euo pipefail

master_root="${1:?Usage: scripts/prepare-storybook-assets.sh STORYBOOK_MASTER_DIRECTORY}"
media_root="${2:-public/media}"

if ! command -v convert >/dev/null 2>&1; then
  printf '%s\n' 'ImageMagick is required to prepare the illustrated Nari artwork.' >&2
  exit 1
fi

mkdir -p "$media_root/storybook"/{characters,scenes,ghosties,postcards,share}

convert_checked() {
  local destination="${@: -1}"

  convert "$@"
  if [[ ! -s "$destination" ]] || ! identify "$destination" >/dev/null 2>&1; then
    convert "$@"
  fi

  if [[ ! -s "$destination" ]] || ! identify "$destination" >/dev/null 2>&1; then
    printf '%s\n' "Illustrated asset is empty or invalid: $destination" >&2
    exit 1
  fi
}

convert_transparent_character() {
  local source="$1"
  local destination="$2"
  local maximum_size="$3"
  local source_width
  local source_height

  source_width=$(identify -format '%w' "$source")
  source_height=$(identify -format '%h' "$source")

  # The image generator sometimes visualizes transparency with an opaque
  # off-white checkerboard. Remove only background pixels connected to the
  # outside edges; do not key out white eyes, ear tufts, clothes, or Ghosties.
  convert_checked "$source" \
    -alpha set -fuzz 9% -fill none \
    -draw 'matte 0,0 floodfill' \
    -draw "matte $((source_width - 1)),0 floodfill" \
    -draw "matte 0,$((source_height - 1)) floodfill" \
    -draw "matte $((source_width - 1)),$((source_height - 1)) floodfill" \
    -trim +repage -resize "$maximum_size>" -strip -quality 88 "$destination"
}

for required in nari-storybook-fullbody haven-sunset-master haven-common-room-master streams-atelier-master nails-atelier-master resources-library-master work-correspondence-master stories-lantern-master; do
  if [[ ! -f "$master_root/$required.png" ]]; then
    printf '%s\n' "Missing storybook master: $master_root/$required.png" >&2
    exit 1
  fi
done

convert_transparent_character \
  "$master_root/nari-storybook-fullbody.png" \
  "$media_root/storybook/characters/nari-painted-welcome.webp" \
  '1000x1850'

convert_checked "$media_root/storybook/characters/nari-painted-welcome.webp" \
  -gravity North -crop '100%x58%+0+0' +repage \
  -resize '820x1080>' -strip -quality 88 \
  "$media_root/storybook/characters/nari-painted-portrait.webp"

convert_checked "$media_root/storybook/characters/nari-painted-welcome.webp" \
  -gravity North -crop '75%x28%+0+0' +repage \
  -resize '512x512^' -background none -gravity Center -extent 512x512 \
  -strip -quality 88 \
  "$media_root/storybook/characters/nari-painted-avatar.webp"

# Replace every installed app icon with the same owner-authorized portrait;
# composite against the ink-dark room so small launch icons remain legible.
for icon in 'favicon.png:96' 'apple-touch-icon.png:180' 'icon-192.png:192' 'icon-512.png:512'; do
  icon_name="${icon%%:*}"
  icon_size="${icon##*:}"
  convert_checked "$media_root/storybook/characters/nari-painted-avatar.webp" \
    -background '#291923' -alpha remove -alpha off \
    -resize "${icon_size}x${icon_size}" -strip \
    "$(dirname "$media_root")/$icon_name"
done

declare -A scenes=(
  [haven-sunset]='haven-sunset-master'
  [haven-community]='haven-common-room-master'
  [streams-atelier]='streams-atelier-master'
  [nails-atelier]='nails-atelier-master'
  [resources-library]='resources-library-master'
  [work-correspondence]='work-correspondence-master'
  [stories-lantern]='stories-lantern-master'
)

for slug in "${!scenes[@]}"; do
  convert_checked "$master_root/${scenes[$slug]}.png" \
    -resize '1680x1000>' -strip -quality 82 \
    "$media_root/storybook/scenes/$slug.webp"

  convert_checked "$master_root/${scenes[$slug]}.png" \
    -resize '880x520>' -strip -quality 78 \
    "$media_root/storybook/postcards/$slug.webp"
done

# Preserve the physical room composition across all themes; only the clock,
# light temperature, and atmosphere change.
convert_checked "$master_root/haven-sunset-master.png" \
  -modulate 73,82,104 -fill '#34204a' -colorize 13 \
  -resize '1680x1000>' -strip -quality 82 \
  "$media_root/storybook/scenes/haven-midnight.webp"

convert_checked "$master_root/haven-sunset-master.png" \
  -modulate 116,88,99 -fill '#ffe3c1' -colorize 12 \
  -resize '1680x1000>' -strip -quality 82 \
  "$media_root/storybook/scenes/haven-daybreak.webp"

for emotion in shy chaos cozy nails heart; do
  character="$master_root/ghostie-$emotion-storybook.png"
  if [[ -f "$character" ]]; then
    convert_transparent_character \
      "$character" \
      "$media_root/storybook/ghosties/ghostie-$emotion.webp" \
      '620x620'
  fi
done

# Regenerate every social-sharing composition directly from the new visual
# world. Keep text in HTML instead of baking fragile lettering into imagery.
for share in home streams nails haven resources work stories; do
  case "$share" in
    home) source='haven-sunset-master' ;;
    streams) source='streams-atelier-master' ;;
    nails) source='nails-atelier-master' ;;
    haven) source='haven-common-room-master' ;;
    resources) source='resources-library-master' ;;
    work) source='work-correspondence-master' ;;
    stories) source='stories-lantern-master' ;;
  esac

  convert_checked "$master_root/$source.png" \
    -resize '1200x630^' -gravity Center -extent 1200x630 \
    -strip -quality 84 \
    "$media_root/storybook/share/nari-$share-social.webp"

  convert_checked "$master_root/$source.png" \
    -resize '1200x630^' -gravity Center -extent 1200x630 \
    -strip -interlace Plane -quality 86 \
    "$media_root/storybook/share/nari-$share-social.jpg"
done

printf 'Prepared %s new illustrated storybook assets across character, scene, Ghostie, postcard, and sharing families.\n' \
  "$(find "$media_root/storybook" -type f | wc -l | tr -d ' ')"
