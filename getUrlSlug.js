export default function getUrlSlug (url) {
  return url.replace(/\s+/g, '-').toLowerCase()
}
