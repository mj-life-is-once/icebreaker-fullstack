/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";
import Result from "./Result";
import { IceBreakReponse } from "../../type/type";

const Form = () => {
  const [name, setName] = useState("");
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

  return (
    <div className="pt-20 max-w-md">
      <h1 className="text-6xl text-center">🦜⛓️</h1>
      <h1 className="p-5 font-extrabold text-6xl bg-gradient-to-r from-rose-100 to-teal-100 inline-block text-transparent bg-clip-text mb-10 text-center leading-10 ">
        Langchain Icebreaker
      </h1>
      {/* <Members></Members> */}

      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
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
        <input
          type="submit"
          value="Generate"
          className="p-3 bg-blue-800 text-white rounded shadow font-2xl font-bold"
        />
      </form>
      {result !== null && <Result result={result} />}
      <Modal isOpen={isLoading} />
    </div>
  );
};

export default Form;
