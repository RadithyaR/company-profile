interface INonSemenData {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
}

export const nonSemenData: INonSemenData[] = [
  {
    id: 1,
    name: "Sepablock",
    type: "sepablock",
    description:
      "Semen Padang Bata Interlock merupakan salah satu inovasi produk dari PT Semen Padang berupa bata yang saling mengunci (inter-lock / sistem lego). Dibuat tanpa proses pembakaran, mempertimbangkan kemudahan dan kecepatan serta kekuatan pada aplikasi dinding bangunan.",
    image: "/product/sepablock.webp",
  },
  {
    id: 2,
    name: "Porous Concrete",
    type: "concrete",
    description:
      "Salah satu produk inovatif PT Semen Padang berupa beton yang memiliki pori-pori atau rongga pada strukturnya sehingga memungkinkan cairan mengalir melalui rongga-rongga yang terdapat pada beton.",
    image: "/product/concrete.webp",
  },
];
