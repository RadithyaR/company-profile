interface ICultureData {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const cultureData: ICultureData[] = [
  {
    id: 0,
    name: "Amanah",
    description: "Memegang teguh kepercayaan yang diberikan",
    image: "/culture/amanah.svg",
  },
  {
    id: 1,
    name: "Kompeten",
    description: "Terus belajar dan mengembangkan kapabilitas",
    image: "/culture/kompeten.svg",
  },
  {
    id: 2,
    name: "Harmonis",
    description: "Saling peduli dan menghargai perbedaan",
    image: "/culture/harmonis.svg",
  },
  {
    id: 3,
    name: "Loyal",
    description: "Berdedikasi dan mengutamakan kepentingan bangsa dan negara",
    image: "/culture/loyal.svg",
  },
  {
    id: 4,
    name: "Adaptif",
    description:
      "Terus berinovasi & antusias dalam menggerakkan ataupun menghadapi perubahan",
    image: "/culture/adaptif.svg",
  },
  {
    id: 5,
    name: "Kolaboratif",
    description: "Membangun kerja sama yang sinergis",
    image: "/culture/kolaboratif.svg",
  },
];
