interface ISemenData {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
}

export const semenData: ISemenData[] = [
  {
    id: 1,
    type: "semen curah",
    name: "EZPRO",
    description:
      "Mudah dikerjakan dan memiliki daya rekat tinggi, hal ini dapat mempermudah proses pengerjaan sebuah konstruksi dan hasil akhir beton yang kuat serta permukaan lebih halus. Cocok untuk kebutuhan konstruksi beton umum (jalan, drainase), tanggul, stabilisasi tanah",
    image: "/product/ezpro.webp",
  },
  {
    id: 2,
    type: "semen curah",
    name: "DUPRO+ (HSR-MSR)",
    description:
      "Menghasilkan beton dengan panas hidrasi rendah dan ketahanan optimal terhadap sulfat serta klorida. Cocok digunakan untuk pekerjaan konstruksi beton dengan volumetrik besar atau yang terpapar dengan lingkungan ekstrim dan terendam air",
    image: "/product/dupro.webp",
  },
  {
    id: 3,
    type: "semen curah",
    name: "ULTRAPRO",
    description:
      "Memadukan kemudahan pengerjaan dan hasil akhir dengan kekuatan maksimal sehingga cocok untuk konstruksi kokoh yang membutuhkan kuat tekan awal dan akhir yang tinggi",
    image: "/product/ultrapro.webp",
  },
  {
    id: 4,
    type: "semen kantong",
    name: "Semen PCC (Portland Composite Cement)",
    description:
      "cocok untuk bahan pengikat dan direkomendasikan untuk penggunaan keperluan konstruksi umum dan bahan bangunan.",
    image: "/product/semen-pcc.webp",
  },
];
