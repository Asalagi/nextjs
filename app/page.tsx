
export default function Home() {
  const time = new Date().getHours();
  let greeting;
  if (time < 11) {
    greeting = 'Good Morning!';
  } else if (time < 18 && time > 11) {
    greeting = 'Good Day!';
  } else {
    greeting = 'Good Evening!';
  };

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

  return (
    <main>
      <div>
        <div className="main-container">
        <div className="main-header">
          link or something like that will go here.
        </div>
        <div className="inner-content">
        <p>{dayDate} <br/> {dayTime}</p>
        <h1 className="center">{greeting}</h1>
        </div>
        <div className="main-footer">
          here is a simple footer
        </div>
        </div>
      </div>
    </main>
  )
}
