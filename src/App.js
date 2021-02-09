import "./App.css";
import Name from "./components/Name";
import Contact from "./components/Contact";
import Location from "./components/Location";

function App() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Contact</th>
      </tr>
      <tr>
        <td>
          <Name />
        </td>
        <td>
          <Location />
        </td>
        <td>
          <Contact />
        </td>
      </tr>
    </table>
  );
}

export default App;
