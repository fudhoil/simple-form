import Image from "next/image";

const Row = ({ name, i }: { name: string; i: number }) => {
  return (
    <tr>
      <td className="border px-2 py-2 whitespace-nowrap gap-2 w-full">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src="/favicon.ico" width={20} height={20} alt="gambar" />
          <input
            type="text"
            className="w-full"
            name={`nama-${i}`}
            value={name}
            readOnly={true}
          />
        </div>
      </td>
      <td className="border px-1 py-2">
        <input
          type="number"
          min="1"
          max="10"
          className="w-full border"
          name={`aspek1-${i}`}
          defaultValue={1}
        />
      </td>
      <td className="border px-1 py-2">
        <input
          type="number"
          min="1"
          max="10"
          className="w-full border"
          name={`aspek2-${i}`}
          defaultValue={1}
        />
      </td>
      <td className="border px-1 py-2">
        <input
          type="number"
          min="1"
          max="10"
          className="w-full border"
          name={`aspek3-${i}`}
          defaultValue={1}
        />
      </td>
      <td className="border px-1 py-2">
        <input
          type="number"
          min="1"
          max="10"
          className="w-full border"
          name={`aspek4-${i}`}
          defaultValue={1}
        />
      </td>
    </tr>
  );
};

export default Row;
