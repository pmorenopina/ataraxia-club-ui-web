export default function supabaseLoader({ src, width, quality }) {
  const params = [
    'f_auto',
    'c_limit',
    'w_' + width,
    'q_' + (quality || 'auto'),
  ].join(',')
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params}/v1/ataraxia-club/${src}`
}
