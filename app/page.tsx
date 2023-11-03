
export default function Home() {
  const dayDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  });

  const dayTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
  });

  const time = new Date().getHours();
  let greeting;
  if (time < 11) {
    greeting = 'Good Morning!';
  } else if (time < 18) {
    greeting = 'Good Day!';
  } else {
    greeting = 'Good Evening!';
  };

  return (
    <main>
      <div>
        <div className="main-container">
          <div className="main-header">
           link or something like that will go here.
          </div>
           <div className="inner-content">
            <div className="side-content">
             <p>{dayDate} <br/> {dayTime}</p>
            </div>
            <div className="main-text">
            <h1 className="center">{greeting}</h1>
            <p>Goat goose hen horse. Mallet herbs basil nest, in welding equipment pens quail. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Gourds utters at welding equipment a oink oink haybine. Goose hammers cattle rats in crows. Grapes at yams mushrooms organic berries gobble.</p>
            <p>Outhouse at nails mower. Rooster celery pineapples fertilizer, a melon chirp pets in. Veterinarian at Seeder eggs with watermelon ostriches. Goat goose hen horse. Grapes nest pitch fork an plows mapl.</p>
            <p>Syrup yearlings, quilt squeak doggies. Goose hammers cattle rats in crows. Baa potato donkey mouse, at gate grain bins woof. Cauliflower a seeds quail. Forage Harvester rakes peacocks, squeal garden woof.</p>
            <p>Goat goose hen horse. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Bulls at rose garden cucumber.</p>
            <p>Mice sunflower wheat in pig. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Rooster celery pineapples fertilizer, a melon chirp pets in. Quack hammers eggplant is utters nails garden. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Garden windmill chicks, hen at cor.</p>
            <p>In, lettus a peppers. Garden windmill chicks, hen at corn in, lettus a peppers. Shovels at rakes plows. Cauliflower a seeds quail. Apples ducks straw, quail a ostriches donkey, hay hoo.</p>
            <p>Cucumbers. Blue berries pigeons buzz and bean prairie dogs nails at est. Feed in a woof, a farmers market. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Haybine carrots soybeans, owls duck raising or, cheep in plows. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goose hammers cattle rats in crows. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Kidney beans ostrich trucks. Moo.</p>
           </div>
           </div>
          <div className="main-footer">
            here is a simple footer
          </div>
        </div>
      </div>
    </main>
  )
}
