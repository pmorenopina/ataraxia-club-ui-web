export default function cloudinaryLoader({ src, width, quality }) {
  const srcSplit = src.split('|')
  const params = [
    'f_auto',
    'c_limit',
    'w_' + width,
    'q_' + (quality || 'auto'),
    srcSplit[1] ? 'f_' + srcSplit[1] : '',
  ].join(',')
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${params}/v1/ataraxia-club/${srcSplit[0]}`
}
