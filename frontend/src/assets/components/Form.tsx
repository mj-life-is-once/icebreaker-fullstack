/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState, useCallback } from "react";
import Modal from "./Modal";
import Result from "./Result";
import { IceBreakReponse } from "../../type/type";

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

const Form = () => {
  const [name, setName] = useState("");
  const [members, setMembers] = useState(MEMBERS);
  const [result, setResult] = useState<IceBreakReponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(name);
    await axios
      .post("http://localhost:8000/icebreaker", { short_name: name })
      .then((res) => {
        //console.log(res);
        setResult(res.data);
      });

    setIsLoading(false);
  };

  const shuffle = useCallback(() => {
    const shuffled = MEMBERS.sort(() => Math.random() - 0.5);
    const picked_name = shuffled.pop();
    setMembers(shuffled);
    if (picked_name != null) setName(picked_name);
  }, []);

  return (
    <div className="pt-20 w-full">
      <div className="max-w-md m-auto">
        <h1 className="text-6xl text-center">🦜⛓️</h1>
        <h1 className="p-5 font-extrabold text-6xl bg-gradient-to-r from-rose-100 to-teal-100 inline-block text-transparent bg-clip-text mb-10 text-center ">
          Langchain Icebreaker
        </h1>
        {/* <Members></Members> */}
        <div
          className={`flex flex-row flex-wrap items-center gap-3 mt-10 mb-20 h-40 ${
            !isLoading && "animate-bounce"
          }`}
        >
          {members.map((member: string) => (
            <div key={member}>
              <img
                src={`/images/${member}.jpeg`}
                className={`rounded-full w-20 h-20 mx-auto shadow `}
              />
            </div>
          ))}
        </div>

        <form className="flex flex-col gap-3 px-20" onSubmit={onSubmit}>
          <label className="text-xl">
            Name
            <input
              type="test"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded p-2 w-full shadow text-black"
            />
          </label>
          <div className="flex flex-row gap-2 justify-end">
            <button
              type="button"
              onClick={shuffle}
              className="p-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow font-2xl font-bold"
            >
              Pick a person
            </button>
            <input
              type="submit"
              value="Generate"
              className="p-3 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white rounded shadow font-2xl font-bold"
            />
          </div>
        </form>
      </div>

      {result !== null && <Result result={result} />}
      <Modal isOpen={isLoading} />
    </div>
  );
};

export default Form;
