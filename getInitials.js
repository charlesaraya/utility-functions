export default function getInitials (name) {
  return name.split(' ').map( w => w.charAt(0)).join('').toUpperCase()
}
