

      let garden = {
          vegetable: 'zucchini',
          flower: 'sun flower',
          fruit: 'grape',
          water: true,
          sun: true,
          size: 10
      };

      console.log(garden.vegetable) /*--> gets zucchini */


      let x = 'vegetable';

      console.log(garden.x, garden[x])

      let baking = {}; /* empty object */
      baking['zucchini'] = 'better make some bread!';

      console.log(baking)

      console.log(baking[garden['vegetable']]);