import Arena from 'are.na';

const arena = new Arena();


arena.channel('atelier.').contents({ page: 1, per: 3 })
  .then(contents => {
    contents.map(content => {
      console.log(content.title);
    });
  })
  .catch(err => console.log(err));
