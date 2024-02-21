export function printArtists(artists: string[] | undefined) {
  // Verify is there are artist to print
  if (typeof artists === 'undefined' || artists.length === 0) {
    console.log("Not artists to print");
    return;
  }

  // Internalization
  const locale = 'es-ES';
  const formatter = new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' });

  // Print list of artists
  const formatedArtists = formatter.format(artists);
  return formatedArtists;
}
