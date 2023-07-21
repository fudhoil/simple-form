import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  console.log("Hanya sekali render, di server :)");
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* title */}
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 mx-auto text-center gap-6">
          <h1 className="text-2xl font-semibold">
            Aplikasi Penilaian Mahasiswa
          </h1>
          {/* data */}
          {/* grid table */}
          <Form />
        </div>
      </div>
    </>
  );
}
