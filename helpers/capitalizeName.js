export const capitalizeName = name => {
  return name
    .split(' ')
    .map(w => w[0].toUpperCase() + w.toLowerCase().slice(1))
    .join(' ')
}
