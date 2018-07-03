const persons = [
  { name: 'Jonas', age: 99 },
  { name: 'Petras', age: 98 },
  { name: 'Stasys', age: 97 },
]
const appRouter = app => {
  app.get('/', (req, res) => {
    res.status(200).send("Welcome to our restful API");
  });
  app.get('/api/persons', (req, res) => {
    res.status(200).send(persons);
  });

  app.post('api/persons', bodyParser.json(), (req, res) => {
    const person = {
      name: req.body.name,
      age: req.body.age,
    };
    persons.push(person);
    res.send(person);
  });

  app.get('/api/persons/:name', (req, res) => {
    const person =  persons.find(c => c.name === req.params.name);
    if (!person) res.status(400).send('The person with the given name was nort found');
    res.status(200).send(person);
  });
}

module.exports = appRouter;
