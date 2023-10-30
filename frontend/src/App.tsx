import Form from "./assets/components/Form";

// random picker
const MEMBERS = [
  "minjoo",
  "yoshi",
  "bahareh",
  "tim",
  "ken",
  "joe",
  "stephen",
  "albert",
];

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white w-screen h-full overflow-hidden">
      <Form />
    </div>
  );
}

export default App;
