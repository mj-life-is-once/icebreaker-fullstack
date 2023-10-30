/* eslint-disable @typescript-eslint/no-explicit-any */
import { IceBreakReponse } from "../../type/type";

const FULL_NAMES: { [key: string]: string } = {
  minjoo: "Minjoo Cho",
  yoshi: "Yoshitsugu Kosaka",
  bahareh: "Bahareh Saboktakin",
  tim: "Timothy Brooke",
  joe: "Joe Hornby",
  stephen: "Stephen Beckett",
  ken: "Ken Koki Chan",
  albert: "Albert Terradas",
};

const Result = ({ result }: { result: IceBreakReponse }) => {
  //   console.log(result);
  return (
    <div className="mx-auto w-1/2 flex flex-col gap-5 my-20 bg-slate-900 py-10 px-20 rounded-lg shadow">
      <img
        src={`/images/${result["short_name"]}.jpeg`}
        alt="profile_image"
        className="rounded-full w-52 h-52 mx-auto"
      />
      <h1 className="text-2xl font-bold text-center">
        {FULL_NAMES[result["short_name"]]}
      </h1>
      <p className="mt-5">{result["summary"]}</p>
      <ul className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-center p-2 text-green-200">
          🪴 Interesting Facts
        </h2>
        {result["facts"].map((fact: string, index: number) => (
          <li key={`${result["short_name"]}_${index}`} className="">
            {fact}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-center p-2  text-pink-200">
          🥶 Ice Breakers
        </h2>

        {result["ice_breakers"].map((item: string, index: number) => (
          <li key={`${result["short_name"]}_${index}`}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-center p-2  text-yellow-200">
        🌟 My Interests
      </h2>
      <ul className="flex flex-row gap-3 justify-evenly font-bold">
        {result["interests"].map((interest: string, index: number) => (
          <li key={`${result["short_name"]}_${index}`}>{`${interest}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;

/*
{
		"short_name": short_name,
        "summary": person_info.summary,
        "interests": person_info.topics_of_interest,
        "facts": person_info.facts,
        "ice_breakers": person_info.ice_breakers,
        "picture_url": profile_pic_url,
    }
*/
