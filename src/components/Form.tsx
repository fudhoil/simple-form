"use client";
import { FormEvent } from "react";
import Row from "./Row";

const Form = () => {
  console.log("Hanya sekali render, di client :)");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const dataObj: any = Object.fromEntries(data.entries());

    const outputData: any = {};

    for (const key in dataObj) {
      if (key.startsWith("nama-")) {
        // Extract the student number
        const studentNum = key.replace("nama-", "");

        for (let aspect = 1; aspect <= 4; aspect++) {
          const aspectKey = `aspek_penilaian_${aspect}`;

          if (!outputData[aspectKey]) {
            outputData[aspectKey] = {};
          }

          const scoreKey = `aspek${aspect}-${studentNum}`;
          const studentName = dataObj[key]
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "_");
          const score: any = parseInt(dataObj[scoreKey]);

          outputData[aspectKey][studentName] = score;
        }
      }
    }

    console.log(JSON.stringify(outputData, null, 2));
  };
  return (
    <form
      className="flex flex-col items-center justify-center max-w-2xl px-4 mx-auto text-center gap-3 overflow-hidden"
      onSubmit={handleSubmit}>
      <table
        className="grid grid-cols-1"
        style={{
          gridTemplateColumns: "repeat(1, minmax(36rem, 1fr))",
        }}>
        <tr className="grid grid-cols-6 gap-2 text-center border w-full">
          <th className="px-2 py-2 col-span-2"></th>
          <th className="py-2 font-normal">Aspek penilaian 1</th>
          <th className="py-2 font-normal">Aspek penilaian 2</th>
          <th className="py-2 font-normal">Aspek penilaian 3</th>
          <th className="py-2 font-normal">Aspek penilaian 4</th>
        </tr>
        {Array.from({ length: 10 }).map((_, index) => (
          <Row key={index} name={`Mahasiswa ${index + 1}`} i={index + 1} />
        ))}
      </table>

      {/* button */}
      <button
        type="submit"
        className="px-4 py-1 text-white bg-black ml-auto mt-8">
        Simpan
      </button>
    </form>
  );
};

export default Form;
