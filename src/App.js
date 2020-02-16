// create your App component here
class App extends Component {
  constructor() {
    super()
    this.state {
      people: {}
    }

    component DidMount) {
      fetch ("http://api.open-notify.org/astros.json")
      .then (response => respons.json())
      .then(data => {
        this.setState ({
          people: data
        })
      })
    }
  }
}
