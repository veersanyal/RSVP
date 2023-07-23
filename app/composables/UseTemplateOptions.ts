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
    ...defaults,
  },

  {
    ...defaults,
  },
  {
    ...defaults,
  },
  {
    ...defaults,
  },
  {
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
