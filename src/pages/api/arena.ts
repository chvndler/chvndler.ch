import Arena from 'are.na';

const arena = new Arena();
const atelierChannel = [
  'atelier.',
];


export default function arenaChannel(req, res) {
  if (req.query.id) {
    arena.channel(atelierChannel).contents({ page: 1, per: 3 })
      .then(contents => {
        contents.map(content => {
          console.log(content.title);
        });
      });
    return;
  }
  setTimeout(() => {
    // res.json(atelierChannel);

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
    return res.status(200).json({ atelierChannel });
  }, 2000);
}
