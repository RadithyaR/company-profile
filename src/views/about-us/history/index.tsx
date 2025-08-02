import Image from "next/image";
import React from "react";

const HistoryView = () => {
  return (
    <div className="w-full h-fit my-12">
      <div className="px-50 mb-10">
        <h1 className="text-4xl font-bold font-mont leading-3">
          Sejarah PT Semen Padang
        </h1>
      </div>

      <div className="relative flex flex-row w-full h-fit items-center gap-6 ">
        <div className="z-0 absolute w-full inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,1)_32%)]" />
        <div className="relative -z-10 w-[500px] h-[300px] shrink-0">
          <Image
            src="/about/sejarah-1.webp"
            alt="1910"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col gap-3 justify-center z-10 px-10">
          <p className="text-black text-3xl font-bold font-mont">1910</p>
          <p className="text-black font-mont text-md font-medium">
            PT Semen Padang didirikan pada tanggal 18 Maret 1910 dengan nama NV
            Nederlandsch Indische Portland Cement Maatschappij (NV NIPCM) yang
            merupakan pabrik semen pertama di Indonesia.
          </p>
        </div>
      </div>

      <div className="relative flex flex-row w-full h-fit items-center gap-6 ">
        <div className="relative flex flex-col gap-3 justify-center z-10 px-10">
          <p className="text-white text-3xl font-bold font-mont">1958</p>
          <p className="text-white font-mont text-md font-medium">
            Kemudian pada tanggal 5 Juli 1958 Perusahaan dinasionalisasi oleh
            Pemerintah Republik Indonesia dari Pemerintah Belanda. Selama
            periode ini, Perusahaan mengalami proses kebangkitan kembali melalui
            rehabilitasi dan pengembangan kapasitas pabrik Indarung I menjadi
            330.000 ton/ tahun.
          </p>
        </div>
        <div className="z-0 absolute w-full inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0)_10%,rgba(0,0,0,1)_33%)]" />
        <div className="relative -z-10 w-[500px] h-[300px] shrink-0">
          <Image
            src="/about/sejarah-2.webp"
            alt="1910"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative flex flex-row w-full h-fit items-center gap-6 ">
        <div className="z-0 absolute w-full inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,1)_32%)]" />
        <div className="relative -z-10 w-[500px] h-[300px] shrink-0">
          <Image
            src="/about/sejarah-3.webp"
            alt="1910"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col gap-3 justify-center z-10 px-10">
          <p className="text-black text-3xl font-bold font-mont">1995</p>
          <p className="text-black font-mont text-md font-medium">
            Pemerintah melakukan konsolidasi tiga perusahaan semen pada 15
            September 1995 melalui Surat Menteri Keuangan Republik Indonesia
            No.5-326/MK.016/1995. Tiga perusahaan semen itu yakni, PT Semen
            Padang, PT Semen Gresik, Tbk, dan PT Semen Tonasa. Sebagai induk
            holding ditunjuk PT Semen Gresik, Tbk (Persero).
          </p>
        </div>
      </div>

      <div className="relative flex flex-row w-full h-fit items-center gap-6 ">
        <div className="relative flex flex-col gap-3 justify-center z-10 px-10">
          <p className="text-white text-3xl font-bold font-mont">2013</p>
          <p className="text-white font-mont text-md font-medium">
            Pada 7 Januari, PT Semen Gresik, (Persero), Tbk bertransformasi
            menjadi strategic holding PT Semen Indonesia (Persero) Tbk
          </p>
        </div>
        <div className="z-0 absolute w-full inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0)_10%,rgba(255,56,56,1)_40%)]" />
        <div className="relative -z-10 w-[600px] h-[300px] shrink-0 place-items-end">
          <Image
            src="/about/sejarah-4.webp"
            alt="1910"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative flex flex-row w-full h-fit items-center gap-6 ">
        <div className="z-0 absolute w-full inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,1)_32%)]" />
        <div className="relative -z-10 w-[500px] h-[300px] shrink-0">
          <Image
            src="/about/sejarah-5.webp"
            alt="1910"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col gap-3 justify-center z-10 px-10">
          <p className="text-black text-3xl font-bold font-mont">2020</p>
          <p className="text-black font-mont text-md font-medium">
            Pada 11 Februari 2020, PT Semen Indonesia (Persero), Tbk melakukan
            perubahan merek perusahaan menjadi SIG. Sejalan dengan visi
            perusahaan, SIG terus berupaya menjadi yang terdepan dalam
            menciptakan kehidupan berkelanjutan (sustainability), mendorong
            pemberdayaan (empowerment), serta mengadopsi teknologi digital
            (digitalization) untuk menyediakan produk dan jasa sesuai dengan
            kebutuhan konsumen. SIG Ingin menjadi yang terdepan dalam memberikan
            solusi bahan bangunan yang inovatif, terbaru dan bernilai tambah di
            kancah regional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryView;
