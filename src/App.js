import { Button } from "@material-tailwind/react";
function App() {
  return (
    <div className="flex gap-4 w-max">
      <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
    </div>
  );
}

export default App;
