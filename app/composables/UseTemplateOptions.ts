const defaults = {
  titleFont: "Caveat",
  descriptionFont: "Caveat",
  dateFont: "Caveat",
  locationFont: "Caveat",
  titleColor: "Gray",
  descriptionColor: "Gray",
  dateColor: "Gray",
  locationColor: "Gray",
};
const DefaultCardOptions: Array<Partial<EventCard>> = [
  {
    image: "/images/birthday-0.jpg",
    ...defaults,
  },

  {
    image: "/images/birthday-1.jpg",
    ...defaults,
  },
  {
    image: "/images/birthday-2.jpg",
    ...defaults,
  },
  {
    image: "/images/birthday-3.jpg",
    ...defaults,
  },
  {
    image: "/images/birthday-4.jpg",
    ...defaults,
  },
];
export const useTemplateOptions = (data: Partial<EventCard>) => {
  const templateOptions: Array<Partial<EventCard>> = [];
  DefaultCardOptions.forEach((option) => {
    let Card: Partial<EventCard> = { ...data, ...option };
    templateOptions.push(Card);
  });
  return templateOptions;
};
